/* eslint-disable react/prop-types */
import "./CardPro.css";

function CardPro ({data}){

    return (
        <>
        <div className="card cardPro">
            <img className="image" src={data.image}></img>
            <div className="cardPro-info">
                <img className="icon" src={data.icon}></img>
                <div>
                    <h4>{data.tittle}</h4>
                    <p>{data.desc}</p>
                </div>
                <button className="cardPro-btn">More</button>
            </div>
        </div>
        </>
    )
}

export default CardPro;