import React from "react";
import {Alert} from "antd";

const Alerts = ({message, description, type}) => {
    return(
        <div style={{position:"fixed", top:'3%', left:'80%',  transform: "translate(-50%, -10%);", zIndex: 1000, boxShadow:" 0px 4px 8px rgba(0, 0, 0, 0.1)", width:400, height: 40 }}>
            <Alert
                message={message}
                description={description}
                type={type}
                showIcon
                closable
            />
        </div>
    )
}

export default Alerts;
