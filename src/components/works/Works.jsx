import "./works.scss"
import {useState} from "react"

export default function Works() {

    const [currentSlide, setCurrentSlider] = useState(0)

    const data = [
        {
            id: "1",
            icon: "./assets/portfolio.png", //placeholder
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text for the printing and typesetting industry.",
            img: "./assets/portfolio.png" //placeholder
        },
        {
            id: "2",
            icon: "./assets/portfolio.png", //placeholder
            title: "Social Media",
            desc:
                "Lorem Ipsum is simply dummy text for the printing and typesetting industry.",
            img: "./assets/portfolio.png" //placeholder
        },
        {
            id: "3",
            icon: "./assets/portfolio.png", //placeholder
            title: "Content",
            desc:
                "Lorem Ipsum is simply dummy text for the printing and typesetting industry.",
            img: "./assets/portfolio.png" //placeholder
        },
    ];

    const handleClick = (way) =>{
        way === "left" ? 
        setCurrentSlider( currentSlide > 0 ? currentSlide-1 : 2) : 
        setCurrentSlider(currentSlide < data.length -1 ? currentSlide + 1 : 0)
    };

    return (
        <div className="works" id="works">
            <div className="slider" style = {{transform: `translateX(-${currentSlide * 100}vw)` }}>
               {data.map((d) => (<div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="placeholder" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>
                                        {d.desc}
                                    </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src="assets/portfolio.png" alt="placeholder" />
                            </div>
                        </div>
                    </div>))}
            </div>
            <img src="assets/down.png" className="arrow left" alt="" onClick = {() => handleClick("left")}/>
            <img src="assets/down.png" className="arrow right" alt="" onClick = {() => handleClick("right")}/>
        </div>
    )
}
