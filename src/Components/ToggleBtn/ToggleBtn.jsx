import React from "react";
import "./toggle-btn.css";

function ToggleBtn(props) {
    const { id, on, off, onClick } = props;
   
    return (
        <>
            <div className="switch">
                <input
                    id={id}
                    className="check-toggle check-toggle-round-flat"
                    type="checkbox"
                />
                <label onClick={onClick} htmlFor={id}></label>

                <span className="on">{on}</span>
                <span className="off">{off}</span>
            </div>
        </>
    );
}

export default ToggleBtn;
