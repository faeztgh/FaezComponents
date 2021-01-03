import React, { useEffect, useRef } from "react";
import "./float-card.css";

function PresentCard(props) {
    const { image, title, desc } = props;
    useEffect(() => {
        const card = document.querySelector(".pc-card");
        const container = document.querySelector(".pc-container");

        //Items

        const title = document.querySelector(".pc-title");
        const pic = document.querySelector(".pc-pic img");
        const description = document.querySelector(".pc-info h3");
        const circle = document.querySelector(".pc-bg-circle");
        const btn = document.querySelector(".pc-btn-container");
        container.addEventListener("mousemove", (e) => {
            let xAxis = (window.innerWidth / 2 - e.pageX) / -30;
            let yAxis = (window.innerWidth / 4 - e.pageY) / 15;

            card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
        });

        // Animate In
        container.addEventListener("mouseenter", (e) => {
            card.style.transition = "none";
            //Popout
            circle.style.transform = "translateZ(50px)";
            title.style.transform = "translateZ(60px)";
            // pic.style.transform = "translateZ(150px) ";
            description.style.transform = "translateZ(30px)";
            // btn.style.transform = "translateZ(30px)";
        });

        // Animate Out
        container.addEventListener("mouseleave", (e) => {
            card.style.transition = "all 0.5s ease";
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;

            //Popback
            title.style.transform = "translateZ(0px)";
            // pic.style.transform = "translateZ(0px) rotateZ(0deg)";
            description.style.transform = "translateZ(0px)";
            // circle.style.transform = "translateZ(0px)";
            // btn.style.transform = "translateZ(0px)";
        });
    }, []);

    return (
        <>
            <div className="pc-container">
                <div className="pc-card">
                    <div className="pc-pic">
                        <div className="pc-bg-circle"></div>
                        <div className="img">{image}</div>
                    </div>
                    <div className="pc-info">
                        <h1 className="pc-title">{title}</h1>
                        <h3 className="pc-desc">{desc}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PresentCard;
