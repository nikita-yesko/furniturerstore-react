import './ceramics.css';



import { useParams } from "react-router-dom";
import { productList } from './../../helpers/productList';
import ProductCard from '../productCard/ProductCard';
import  Btn from '../btn/Btn';


const Ceramics = () => {

    const {id} = useParams();
    const product = productList[id];

    return ( 
        <section className="ceramics">
            <div className="container">
                <h3 className="ceramics__title">New ceramics</h3>
                <div className="ceramics-content">
                {
                productList.slice(0, 4).map((product, index) => {
                    return <ProductCard key = {index} title = {product.title} price={product.price} img = {product.img}  index ={index}/>;
                }
                )
            }
                </div>
                <Btn/>
                
            </div>
        </section>
     );
}
 
export default Ceramics;