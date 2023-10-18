import './different.css';

import deliveryImg from './../../img/item/delivery.svg';
import checkImg from './../../img/item/checkmark.svg';
import purchaseImg from './../../img/item/purchase.svg';
import sproutImg from './../../img/item/sprout.svg';


const Different = () => {
    return ( 
        <section className="different">
            <div className="container">
                <h3 className="different__title">What makes our brand different</h3>
                <div className="different__content">
                    <div className="different-item">
                        <div className="different-item__image">
                            <img src={deliveryImg} alt="delivery" />
                        </div>
                        <div className="different-item__title">Next day as standard</div>
                        <div className="different-item__text">Order before 3pm and get your order
                        the next day as standard</div>
                    </div>
                    <div className="different-item">
                        <div className="different-item__image">
                            <img src={checkImg} alt="check" />
                        </div>
                        <div className="different-item__title">Made by true artisans</div>
                        <div className="different-item__text">Handmade crafted goods made with
                        real passion and craftmanship</div>
                    </div>
                    <div className="different-item">
                        <div className="different-item__image">
                            <img src={purchaseImg} alt="purchase" />
                        </div>
                        <div className="different-item__title">Unbeatable prices</div>
                        <div className="different-item__text">For our materials and quality you won’t find better prices anywhere</div>
                    </div>
                    <div className="different-item">
                        <div className="different-item__image">
                            <img src={sproutImg} alt="sprout" />
                        </div>
                        <div className="different-item__title">Recycled packaging</div>
                        <div className="different-item__text">We use 100% recycled packaging to ensure our footprint is manageable</div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Different;