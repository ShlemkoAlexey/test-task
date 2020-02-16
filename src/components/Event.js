import * as React from "react";
import GuestsList from "./GuestsList";
import {dummyData} from "../js/dummyData";
import {randomDelay} from "../js/helpers";
import Preloader from "./Preloader";

export default class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            eventInfo: null,
        };
    }

    render() {
        if (!this.state.eventInfo) {
            return <Preloader/>;
        }
        else {
            return (
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-12">
                            <h3>{this.state.eventInfo ? this.state.eventInfo.eventName : null}</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4>Guests List:</h4>
                        </div>
                    </div>
                    <div className="list-group">
                        <GuestsList
                            eventGuests={this.state.eventInfo ? this.state.eventInfo.guests : null}
                        />
                    </div>
                </div>
            )
        }
    }

    loadEventData() {
        return new Promise((resolve, reject) => {
            resolve(dummyData);
        });
    }

    componentDidMount() {
        this.loadEventData().then(response =>
            setTimeout(() => {
                this.setState({eventInfo: response})
            }, randomDelay(2, 5) * 1000)
        )
    }
}