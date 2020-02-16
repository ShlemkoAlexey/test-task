export const STATUS = Object.freeze({
    ACCEPT: {
        ID: 1,
        NAME: 'Accept',
    },
    DECLINE: {
        ID: 0,
        NAME: 'Decline',
    }
});

export function parseStatus(status) {
    for (let i in STATUS) {
        if (STATUS[i].ID === status) return STATUS[i].NAME;
    }
}