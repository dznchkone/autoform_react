import React from "react";
import {Toast} from "react-bootstrap";

const ToastsContainer = ({messages, clearError}) => {

    const toasts = messages.map((item, i) => {
        return (
            <ToastWrapper onClear={clearError} key={i} id={item.id} item={item.msg}/>
        )

    })

    return (
        <div className="toast-container">
            {toasts}
        </div>
    )
}

function ToastWrapper(props) {
    const handleClose= ()=>{
        props.onClear(props.id);
    }

    return (
        <Toast  onClose={handleClose} delay={3000} autohide>
            <Toast.Header>
                <strong className="mr-auto">Error!</strong>
                <small>{props.id}</small>
            </Toast.Header>
            <Toast.Body>{props.item}</Toast.Body>
        </Toast>
    )
}

export default ToastsContainer;