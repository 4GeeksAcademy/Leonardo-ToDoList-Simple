import React from "react";

const Campo = (props) => {
    return (
        <div className="row">
            <div className="col-9 mt-3 mx-auto">
            <div className="form-check">                
                <input id="Check" className="form-check-input" type="checkbox"/>
                <label className="form-check-label">
                    {props.tarea}
                </label>
            </div>
            </div>
        </div>
    );
};

export default Campo;