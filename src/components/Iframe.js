import React from 'react';

export default function Iframe(props) {

    window.onmessage = function (e) {
        let data = e.data;

        if (data && data.type === 'updateStatus') {
            props.closeModal(data);
        }
    };

    return (
        <iframe id='iframe' title='iframe'
            src={`/iframe?email=${props.user.email}&name=${props.user.name}&status=${props.user.invitationStatus}&id=${props.user.id}`}
        >
        </iframe>
    )
}