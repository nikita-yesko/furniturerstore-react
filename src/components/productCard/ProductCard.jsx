import './productCard.css';

const ProductCard = ({title, price, img}) => {
    return ( 
        <div className="product-card">
            <div className="product-card__image">
                <img src={img} alt="item" />
            </div>
            <div className="product-card__text">{title}</div>
            <div className="product-card__price">{price}</div>
        </div>
     );
}
 
export default ProductCard;