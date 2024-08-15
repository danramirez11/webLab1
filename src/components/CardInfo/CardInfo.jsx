/* eslint-disable react/prop-types */
import "./CardInfo.css";

function CardInfo ({data}){
    return (
        <>
        <div className="card" id="cardInfo">
            <h2>
                {data.tittle}
            </h2>
        </div>
        </>
    )
}

export default CardInfo;