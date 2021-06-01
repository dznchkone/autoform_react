import React from "react";
import {downloadFile, fetchConfig} from "../../utils";

const FormGetConfig = (props) => {


    const handleSubmit = async (event) => {
        event.preventDefault();
        const getConfig = document.querySelector('#get-config');
        /*
        В блоке try с помощью функции fetchConfig отправляем данные формы на бэкенд, если функция вернула сообщение с ошибкой кидаем Error.
        В блоке catch поднимаем Error в компонент App с помощью прокинутой через пропсы функции onError.
        */
        try {
            const res = await fetchConfig('/cgi-bin/auth.py', getConfig);
            if (!res.error) {
                downloadFile(res.msg);
            }else {
                throw new Error(res.msg);
            }
        } catch (e) {
            props.onError(e.toString());
        }
    }



    return (
        <form id="get-config" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="get-management-ip">Management IP:</label>
                <input type="text" name="MANAGEMENT_IP" id="get-management-ip" className="form-control" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label htmlFor="login">Login</label>
                <input type="text" name="LOGIN" id="login" className="form-control" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" name="PASSWORD" id="password" className="form-control" autoComplete="off"/>
            </div>
            <button className="btn btn-primary">Op</button>
        </form>
    )
}

export default FormGetConfig;
