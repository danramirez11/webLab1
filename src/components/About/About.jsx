import CardInfo from "../CardInfo/CardInfo";
import data from "../../data/data";
import "./About.css";

function About() {
    return (
        <>
        <section className="about section">
            {data.about.map(item => 
                <CardInfo key={item.id} data={item} />
            )}
        </section>
        </>
    )
}

export default About;