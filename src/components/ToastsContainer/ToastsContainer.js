import React from "react";
import {Toast} from "react-bootstrap";

import './ToastContainer.css';

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

    const getDateAndTime = (timestamp) => {
        return new Date(timestamp).toLocaleString();
    }

    return (
        <Toast  onClose={handleClose}>
            <Toast.Header>
                <strong className="mr-auto text-danger">Error!</strong>
                <small>{getDateAndTime(props.id)}</small>
            </Toast.Header>
            <Toast.Body className='bg-secondary text-white'>{props.item}</Toast.Body>
        </Toast>
    )
}

export default ToastsContainer;