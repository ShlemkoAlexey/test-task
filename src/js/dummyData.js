import {STATUS} from "./constants";

export const dummyData = {
    eventName: 'Random event',
    guests: [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            invitationStatus: STATUS.ACCEPT.ID,
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane.doe@gmail.com',
            invitationStatus: STATUS.DECLINE.ID,
        },
    ]
};