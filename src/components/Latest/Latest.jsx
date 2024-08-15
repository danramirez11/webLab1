import data from "../../data/data";
import CardUp from "../CardUp/CardUp";
import "./Latest.css";

function Latest (){
    let number = Math.floor(Math.random() * data.updates.length) + 1;
    number === 4 ? number = 3 : number;

    return(
        <>
        <div className="section-back">
        <section>
            <h1>Latest Updates</h1>
            <div>
                {data.updates.map((item) => (<CardUp key={item.id} data={item} random= {item.id === number ? true : false} ></CardUp>))}
            </div>
        </section>
        </div>
        </>
    )
}

export default Latest;