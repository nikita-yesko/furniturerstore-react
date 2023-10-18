import "./promo.css";
import promoImg from "./../../img/item/promo.png";

const Promo = () => {
    return ( 
        <section className="promo">
            <div className="container">
                <div className="promo-content">
                    <div className="promo-text">
                        <div className="promo-text__top">
                            <h2>The furniture brand for the future, with timeless designs</h2>
                            <a href="#!" className="btn">View collection</a>
                        </div>
                        <div className="promo-text__bottom">
                            <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand
                            with nice fonts, tasteful colors and a beautiful way to display things digitally 
                            using modern web technologies.</p>
                        </div>
                    </div>
                    <div className="promo-img">
                        <img src={promoImg} alt="promo" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Promo;