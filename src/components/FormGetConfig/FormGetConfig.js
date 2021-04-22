import React from "react";

const FormGetConfig = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form id="get-config" onSubmit={e => handleSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="get-management-ip">Management IP:</label>
                <input type="text" name="MANAGEMENT_IP" id="get-management-ip" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="login">Login</label>
                <input type="text" name="LOGIN" id="login" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input type="text" name="PASSWORD" id="password" className="form-control"/>
            </div>
            <button className="btn btn-primary">Op</button>
        </form>
    )
}

export default FormGetConfig;