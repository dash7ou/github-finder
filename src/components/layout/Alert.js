import React from "react";


const Alert = ({alert:{msg , type}})=>{
    return(
        <div className={`alert alert-${type}`}>
            <i className="fas fa-info-circle"></i>  {msg}
        </div>
    )
}


export {Alert as default}