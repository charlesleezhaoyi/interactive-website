import React from 'react'
import "./skills.scss"
import Progress from "../progressbar/Progressbar"

const techlist = [
    {
        id: "1",
        skill: "HTML",
        mastery: "20"
    },
    {
        id: "2",
        skill: "CSS",
        mastery: "80"
    },
    {
        id: "3",
        skill: "JavaScript",
        mastery: "80"
    },
    {
        id: "4",
        skill: "Product Management",
        mastery: "70"
    },
    {
        id: "5",
        skill: "Product Marketing",
        mastery: "75"
    },
    {
        id: "6",
        skill: "Business Development",
        mastery: "75"
    },
];

const nontechlist = [
    {
        id: "1",
        skill: "Scrum and Agile Methodologies",
        mastery: "70"
    },
    {
        id: "2",
        skill: "Project Management",
        mastery: "70"
    },
    {
        id: "3",
        skill: "Intercultural Communication",
        mastery: "75"
    },
    {
        id: "4",
        skill: "Project Management",
        mastery: "80"
    },
    {
        id: "5",
        skill: "Teamwork",
        mastery: "85"
    },
    {
        id: "6",
        skill: "Leadership",
        mastery: "85"
    },
];

export default function skills() {

    return (

        <table className="skills" id="skills">
            <tr>
                <th>Technical Skills</th>
                <th>Non-technical Skills</th>
            </tr>
            <tr>
                <td>{techlist.map(d => (
                    <div className="technical">
                        <div className="skillscontainer">
                            <tr className="info">
                                <td className="skill">{d.skill}</td>
                                <Progress done={d.mastery}></Progress>
                            </tr>
                        </div>
                    </div>
                ))}
                </td>
                <td>{nontechlist.map(d => (
                    <div className="nontechnical">
                        <div className="skillscontainer">
                            <tr className="info">
                                <td className="skill">{d.skill}</td>
                                <Progress done={d.mastery}></Progress>
                            </tr>
                        </div>
                    </div>
                ))}
                </td>
            </tr>
        </table>
    )
}


