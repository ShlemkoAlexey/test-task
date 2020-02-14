import * as React from "react";
import GuestsList from "./GuestsList";
import {dummyData} from "../js/dummyData";
import {emulateLoadingDelay} from "../js/helpers";

export default class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventInfo: null,
        };

        // this.loadEventData = emulateLoadingDelay(this.loadEventData);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12">{this.state.eventInfo ? this.state.eventInfo.eventName : null}</div>
                </div>
                <div className="row">
                    <div className="col-12">Guests List:</div>
                </div>
                <GuestsList
                    eventGuests={this.state.eventInfo ? this.state.eventInfo.guests : null}
                />
            </div>
        )
    }

    loadEventData() {
        return new Promise((resolve, reject) => {
            resolve(dummyData);
        });

    }

    componentDidMount() {
        this.loadEventData()
            .then(response => this.setState({eventInfo: response}))
    }
}