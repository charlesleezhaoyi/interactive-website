import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import {
    internPortfolio,
    hackPortfolio,
    awardPortfolio,
    sportPortfolio
} from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([]); //Initial state = featured


    /*Array destructuring for mapping of items to each "card"*/
    const list = [
        {
            id: "intern",
            title: "Internships",
        },
        {
            id: "hack",
            title: "Hackathon & Case Competition Projects",
        },
        {
            id: "award",
            title: "Academic Award",
        },
        {
            id: "sport",
            title: "Sporting Achievements",
        },
    ]

    useEffect(() => {

        switch (selected) {
            case "intern":
                setData(internPortfolio);
                break;
            case "hack":
                setData(hackPortfolio);
                break;
            case "award":
                setData(awardPortfolio);
                break;
            case "sport":
                setData(sportPortfolio);
                break;
            default:
                setData(internPortfolio)

        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Past Experiences</h1>
            <ul>
                {list.map((item) => ( //Array Destructuring Function//
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" id = {d.id}>
                    <img
                        src = {d.img}
                        alt="Placeholder"
                    />
                    </div>
                ))}
            </div>
        </div>
    );
}
