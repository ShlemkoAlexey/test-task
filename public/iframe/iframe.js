const STATUS = Object.freeze({
    ACCEPT: {
        ID: 1,
        NAME: 'Accept',
    },
    DECLINE: {
        ID: 0,
        NAME: 'Decline',
    }
});

function parseStatus(status) {
    for (let i in STATUS) {
        if (STATUS[i].ID === status) return STATUS[i].NAME;
    }
}

window.onload = function () {
    const params = new URLSearchParams(window.location.search);

    let fieldList = [
        'id', 'name', 'email', 'status'
    ];

    for (let i in fieldList) {
        let node = document.getElementById(fieldList[i]);
        if (fieldList[i] === 'status') {
            node.innerHTML = parseStatus(+params.get(fieldList[i]));
        } else {
            node.innerHTML = params.get(fieldList[i]);
        }
    }

    function setStatus(id, status) {
        let data = {
            type: 'updateStatus',
            id,
            status
        };
        parent.postMessage(data, '*');
    }

    document.getElementById('accept-button').onclick = (e) => {
        setStatus(params.get('id'), STATUS.ACCEPT.ID)
    };
    document.getElementById('decline-button').onclick = (e) => {
        setStatus(params.get('id'), STATUS.DECLINE.ID)
    };
};

