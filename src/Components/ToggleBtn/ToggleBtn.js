import React from "react";
import "./toggle-btn.css";

function ToggleBtn({ id, on, off, onClick }) {
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
