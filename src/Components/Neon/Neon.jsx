import React from "react";
import { v1 } from "uuid";
import "./neon.scss";

const Neon = (props) => {
    const {
        input,
        fontFamily,
        color,
        fontSize,
        rotate,
        border,
        animation,
    } = props;

    const inputCharsArray = [...input];

    const anim = border === "none" && "none";
    const padding = border === "none" && 0;
    return (
        <>
            <div
                className="neon"
                style={{
                    transform: `rotate(${rotate}deg)`,
                    border: border,
                    animation: anim,
                    padding: padding,
                }}
            >
                <p style={{ color: color, fontSize: fontSize }}>
                    {inputCharsArray.map((char) => {
                        return (
                            <span style={{ fontFamily: fontFamily }} key={v1()}>
                                {char}
                            </span>
                        );
                    })}
                </p>
            </div>
        </>
    );
};

export default Neon;
