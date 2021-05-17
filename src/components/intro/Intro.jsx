import "./intro.scss";
import { init } from "ityped"; //Read ityped documentation//
import { useEffect, useRef } from "react";

export default function Intro() {

    const textRef = useRef();

    useEffect(()=>{
        init(textRef.current, {
            backDelay: 1500,
            backSpeed: 60,
            showCursor: true,
            strings: ["Product Management", "Product Marketing", "Business Development"],
        });
    }, []);
    return (
        <div className = "intro" id = "intro">
            <div className = "left">
                <div className = "imgContainer">
                    <img src = 'https://charles-website-media.s3-ap-southeast-1.amazonaws.com/IMG_4488-removebg-preview.png' alt = "Hello there!"/>
                </div>
            </div>
            <div className = "right">
                <div className = "wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Charles Lee,</h1>
                    <h3>Software Engineer</h3>
                    <h3>with past experiences in <span ref = {textRef}></span></h3>
                    <button className = "resume">Detailed Resume</button>
                </div>
                <a href = "#portfolio">
                    <img src = "assets/down.png" alt= "Down arrow"/>
                </a>
            </div>
        </div>
    )
}
