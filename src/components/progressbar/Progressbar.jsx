import React, { useState } from "react";
import "../progressbar/progressbar.scss"

export default function Progress({done}) {
    const [style, setStyle] = useState();

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 1000);

    return (
        <div className="progress">
            <div className="progress-done" style={style}></div>
        </div>
    )
}
