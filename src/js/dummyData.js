import {STATUS} from "./constants";

export const dummyData = {
    eventName: 'event1',
    guests: [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            invitationStatus: STATUS.ACCEPT.ID,
        },
        {
            id: 2,
            name: 'John Doe 2',
            email: 'john.doe2@gmail.com',
            invitationStatus: STATUS.DECLINE.ID,
        },
        {
            id: 3,
            name: 'John Doe 3',
            email: 'john.doe3@gmail.com',
            invitationStatus: STATUS.ACCEPT.ID,
        }
    ]
};