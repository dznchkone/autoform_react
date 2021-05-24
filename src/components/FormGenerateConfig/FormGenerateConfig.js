import React from "react";
import {downloadFile, fetchConfig} from "../../utils";

const FormGenerateConfig = (props) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const generate = document.querySelector('#generate');
        /*
        В блоке try с помощью функции fetchConfig отправляем данные формы на бэкенд, если функция вернула сообщение с ошибкой кидаем Error.
        В блоке catch поднимаем Error в компонент App с помощью прокинутой через пропсы функции onError.
        */
        try {
            const res = await fetchConfig('/cgi-bin/form.py', generate);
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
        <form id="generate" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="hostname">Hostname</label>
                <input type="text" name="HOSTNAME" className="form-control" id="hostname" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label htmlFor="vlans">Vlan's (перечисляем все, можно через '-'):</label>
                <input type="text" name="VLANS" className="form-control" id="vlans" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label htmlFor="client-vlan">Client vlan:</label>
                <input type="text" name="CLIENT_VLAN" className="form-control" id="client-vlan" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label htmlFor="management-vlan">Management vlan:</label>
                <input type="text" name="MANAGEMENT_VLAN" className="form-control" id="management-vlan" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label htmlFor="management-ip">Management IP:</label>
                <input type="text" name="MANAGEMENT_IP" className="form-control" id="management-ip" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label htmlFor="mask">MASK:</label>
                <input type="text" name="MASK" className="form-control" id="mask" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label htmlFor="ip-gateway">IP gateway:</label>
                <input type="text" name="IP_GATEWAY" className="form-control" id="ip-gateway" autoComplete="off"/>
            </div>
            <div className="mb-3">
                <label htmlFor="client-ports">Client ports (перечислять через запятую):</label>
                <input type="text" name="CLIENT_PORTS" className="form-control" id="client-ports" autoComplete="off"/>
            </div>
            <button className="btn btn-primary" type="submit">Сгенерировать</button>
        </form>
    )
}

export default FormGenerateConfig;
