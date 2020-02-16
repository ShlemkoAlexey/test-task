import React, {useState} from 'react';
import Iframe from "./Iframe";
import {parseStatus, STATUS} from "../js/constants";

/**
 * @return {null}
 */
export default function GuestsList(props) {
    const [modalData, setModalData] = useState(null);

    if (modalData) {
        return (
            <div className='iframe-modal-wrapper'>
                <List eventGuests={props.eventGuests}/>
                <Modal/>
            </div>
        )
    } else {
        return <List eventGuests={props.eventGuests}/>
    }

    function List(props) {
        return props.eventGuests ?
            props.eventGuests.map(item => {
                return (
                    <div className="list-group-item" key={item.id}>
                        <div className="row">
                            <div className="col">{item.name}</div>
                            <div className="col">{item.email}</div>
                            <div className={"col " + (item.invitationStatus === STATUS.ACCEPT.ID ? "text-success" : "text-danger")}>{parseStatus(item.invitationStatus)}</div>
                            <div className="col">
                                <button className='btn btn-block btn-info text-uppercase'
                                        onClick={openModal.bind(this, item)}>
                                    manage
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }) : null;
    }

    function Modal() {
        return (
            <div className="modal iframe-modal" tabIndex="-1" role="dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <Iframe user={modalData} closeModal={closeModal}/>
                    </div>
                </div>
            </div>
        )
    }

    function openModal(item) {
        setModalData(item);
    }

    function closeModal(data) {
        updateStatus(data.id, data.status);
        setModalData(null);
    }

    function updateStatus(id, status) {
        let guest = props.eventGuests.find(item => {
            return +item.id === +id;
        });
        guest.invitationStatus = status;
    }
}