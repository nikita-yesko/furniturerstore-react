import './products.css';

import img1 from './../../img/ceramics/01.png';
import img5 from './../../img/ceramics/05.png';
import img6big from './../../img/ceramics/06big.png';


const Products = () => {
    return ( 
        <section className="products">
            <div className="container">
                <h3 className="products__title">Our popular products</h3>
                <div className="products-content">
                    <div className="products-item">
                        <div className="products-item__image">
                            <img src={img6big} alt="item" />
                        </div>
                        <div className="products-item__text">The Poplar suede sofa</div>
                        <div className="products-item__price">£980</div>
                    </div>
                    <div className="products-item">
                        <div className="products-item__image">
                            <img src={img1} alt="item" />
                        </div>
                        <div className="products-item__text">The Dandy chair</div>
                        <div className="products-item__price">£250</div>
                    </div>
                    <div className="products-item">
                        <div className="products-item__image">
                            <img src={img5} alt="item" />
                        </div>
                        <div className="products-item__text">The Dandy chair</div>
                        <div className="products-item__price">£250</div>
                    </div>
                   
                </div>
                <div className="products-btn">
                    <a href="#!" className="btn">View collection</a>
                </div>
                
            </div>
        </section>
     );
}
 
export default Products;