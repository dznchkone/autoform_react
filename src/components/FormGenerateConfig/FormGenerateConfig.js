import React from "react";
import {fetchConfig} from "../../utils";

const FormGenerateConfig = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // fetchConfig()
    }
    return (
        <form id="generate-config" onSubmit={e => handleSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="hostname">Hostname</label>
                <input type="text" name="HOSTNAME" className="form-control" id="hostname"/>
            </div>
            <div className="mb-3">
                <label htmlFor="vlans">Vlan's (перечисляем все, можно через '-'):</label>
                <input type="text" name="VLANS" className="form-control" id="vlans"/>
            </div>
            <div className="mb-3">
                <label htmlFor="client-vlan">Client vlan:</label>
                <input type="text" name="CLIENT_VLAN" className="form-control" id="client-vlan"/>
            </div>
            <div className="mb-3">
                <label htmlFor="management-vlan">Management vlan:</label>
                <input type="text" name="MANAGEMENT_VLAN" className="form-control" id="management-vlan"/>
            </div>
            <div className="mb-3">
                <label htmlFor="management-ip">Management IP:</label>
                <input type="text" name="MANAGEMENT_IP" className="form-control" id="management-ip"/>
            </div>
            <div className="mb-3">
                <label htmlFor="mask">MASK:</label>
                <input type="text" name="MASK" className="form-control" id="mask"/>
            </div>
            <div className="mb-3">
                <label htmlFor="ip-gateway">IP gateway:</label>
                <input type="text" name="IP_GATEWAY" className="form-control" id="ip-gateway"/>
            </div>
            <div className="mb-3">
                <label htmlFor="client-ports">Client ports (перечислять через запятую):</label>
                <input type="text" name="CLIENT_PORTS" className="form-control" id="client-ports"/>
            </div>
            <button className="btn btn-primary" type="submit">Сгенерировать</button>
        </form>
    )
}

export default FormGenerateConfig;