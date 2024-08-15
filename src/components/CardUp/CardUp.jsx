/* eslint-disable react/prop-types */
import "./CardUp.css";


function CardUp ({data, random}){
    return (
        <>
        <div style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)),url(${data.image})`, 
            width: random ? "35%" : "15%"}} className="card cardUp">
            <div style={{ backgroundColor: data.tag === 'Product' ? "#4fd0d3" : "#5e9bff"}} className="tag">
                <p>{data.tag}</p>
            </div>
            <p>{data.desc}</p>
        </div>
        </>
    )
}

export default CardUp;