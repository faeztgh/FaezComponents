import React from "react";
import { useState } from "react";
import "./double-btn.scss";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
const DoubleBtn = () => {
    const [light, setLight] = useState(false);

    return (
        <>
            <div className="db-bulb-icon">
                {light ? (
                    <EmojiObjectsIcon className="db-bulb-on" fontSize="large" />
                ) : (
                    <EmojiObjectsIcon color="disabled" fontSize="large" />
                )}
            </div>
            <div className="db-link">
                <span
                    onClick={() => setLight(false)}
                    onMouseEnter={(e) => {
                        e.currentTarget.innerText = "OFF";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.innerText = "lights";
                    }}
                >
                    lights
                </span>
                <span
                    onClick={() => setLight(true)}
                    onMouseEnter={(e) => {
                        e.currentTarget.innerText = "ON";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.innerText = "lights";
                    }}
                >
                    lights
                </span>
            </div>
        </>
    );
};

export default DoubleBtn;
