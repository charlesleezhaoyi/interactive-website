import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Colin Lee",
            title: "Director of Software Engineering at Ryan",
            desc: "Over the years, I have mentored many young minds. While most of them have very vague dreams, Charles has goals. Albeit, goals are general, not a lot of people that age have set goals. In addition, when assignments were given to him, Charles had always completed them ahead of time. Even with his internship, school curriculum, and his hobbies, Charles always completed his assignments with glee and enthusiasm. He has displayed a willingness to learn, and ability to quickly acquire skills with little supervision. It is truly a joy for me to help this fine young man on his way to becoming a great leader. I have no doubt in my mind that Charles will be a great addition to any organization he chooses to join.",
            img: "https://charles-website-media.s3-ap-southeast-1.amazonaws.com/Colin.jpg",
            featured: true,
            url: "https://www.linkedin.com/in/colinlee/",
        },
        {
            id: 2,
            name: "Daniel Liang",
            title: "Chief Executive Officer at UseGet",
            desc: "Charles is a massive contribution to any team. Creativity, energy and smarts!",
            img: "https://charles-website-media.s3-ap-southeast-1.amazonaws.com/Daniel.jpg",
            featured: true,
            url: "https://www.linkedin.com/in/daniel-liang-get/",
        },
        {
            id: 3,
            name: "John Patrick Agustin",
            title: "Software Engineer at NinjaVan",
            desc: `I have known Charles for over four months, during which time he worked as a Business Developer in our office. In a short period, he became a valued member of our team. He contributed more than what was expected of him.\n

        As a Business Developer Intern, Charles had a number of responsibilities. He helped with implementing the sales and marketing strategies of our products. His attention to detail brought a new perspective on the product's usability and user experience.\n

        He also made excellent suggestions to improve the product's sales presentation and landing page. Despite numerous tasks, I was impressed with how he manages his time to meet all the deadlines. He has a passion for learning, and he makes sure to improve his skills and knowledge continuously.`,
            img: "https://charles-website-media.s3-ap-southeast-1.amazonaws.com/John.jpg",
            featured: true,
            url: "https://www.linkedin.com/in/agustinjohnpatrick/"
        },
    ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d =>
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <div>
                                <img src='https://charles-website-media.s3-ap-southeast-1.amazonaws.com/right-arrow.png' className="left" alt="" />
                                <img
                                    src={d.img} //replace with proper image via data
                                    className="user"
                                    alt="" />
                                <a href={d.url}>
                                    <img
                                        src='https://charles-website-media.s3-ap-southeast-1.amazonaws.com/linkedin.svg'
                                        className="linkedin"
                                        alt=""
                                    />
                                </a>
                                <div className="identity">
                                    <h3 style={{textAlign: "center"}}>{d.name}</h3>
                                    <h4>{d.title}</h4>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="testimony">
                            {d.desc}
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}
