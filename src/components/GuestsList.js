import * as React from "react";

/**
 * @return {null}
 */
export default function GuestsList(props) {
    return props.eventGuests ? props.eventGuests.map(item => {
        return (
            <div className="row my-2" key={item.id}>
                <div className="col">{item.name}</div>
                <div className="col">{item.email}</div>
                <div className="col">{item.invitationStatus}</div>
                <div className="col">
                    <button className='btn btn-block btn-info text-uppercase'>manage</button>
                </div>
            </div>
        )
    }) : null;
}