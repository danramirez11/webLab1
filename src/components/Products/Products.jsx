import "./Products.css";
import data from "../../data/data";
import CardPro from "../CardPro/CardPro";

function Products () {
    return(
        <>
        <div className="section-back">
        <section className="section">
            <h1>Our Products</h1>
            <div className=".card-container">
                {data.products.map((item) => (
                    <CardPro
                    key = {item.id}
                    data = {item}
                    />
                ))}
            </div>
        </section>
        </div>
        </>
    )
}

export default Products;