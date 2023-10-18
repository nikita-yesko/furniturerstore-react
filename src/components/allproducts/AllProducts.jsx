import "./allproducts.css";

import { useParams } from "react-router-dom";
import { productList } from "./../../helpers/productList";
import ProductCard from "../productCard/ProductCard";
import  Btn from '../btn/Btn';

const AllProducts = () => {
  const { id } = useParams();
  const product = productList[id];
  return (
    <>
      <div className="allproducts">
        <div className="allproducts-header">
          <div className="container">
            <h2 className="allproducts-title">All products</h2>
          </div>
        </div>
        <div className="allproducts-main">
          <div className="container">
            <div className="allproducts-content">
              <div className="allproducts-sidebar">
                <form action="#">
                  <p>Product type</p>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="furniture"
                        name="furniture"
                        value="#"
                      />
                      <label htmlFor="furniture">Furniture</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="Homeware"
                        name="Homeware"
                        value="#"
                      />
                      <label htmlFor="Homeware">Homeware</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="Sofas"
                        name="Sofas"
                        value="#"
                      />
                      <label htmlFor="Sofas">Sofas</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="Light-fittings"
                        name="Light-fittings"
                        value="#"
                      />
                      <label htmlFor="Light-fittings">Light fittings</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="Accessories"
                        name="Accessories"
                        value="#"
                      />
                      <label htmlFor="Accessories">Accessories</label>
                    </li>
                  </ul>
                  <p>Price</p>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="0"
                        name="0"
                        value="#"
                      />
                      <label htmlFor="0">0 - 100</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="101"
                        name="101"
                        value="#"
                      />
                      <label htmlFor="101">101 - 250</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="250"
                        name="250"
                        value="#"
                      />
                      <label htmlFor="250">250 +</label>
                    </li>
                    </ul>
                  <p>Designer</p>
                  <ul>
                    <li>
                      <input
                        type="checkbox"
                        id="Smith"
                        name="Smith"
                        value="#"
                      />
                      <label htmlFor="Smith">Robert Smith</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="Gallagher"
                        name="Gallagher"
                        value="#"
                      />
                      <label htmlFor="Gallagher">Liam Gallagher</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="Smalls"
                        name="Smalls"
                        value="#"
                      />
                      <label htmlFor="Smalls">Biggie Smalls</label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="Yorke"
                        name="Yorke"
                        value="#"
                      />
                      <label htmlFor="Yorke">Thom Yorke</label>
                    </li>
                  </ul>
                </form>
              </div>


<div className="allproducts-content__row-wrap">
              <div className="allproducts-content__row">
                {productList.map((product, index) => {
                  return (
                    <ProductCard
                      key={index}
                      title={product.title}
                      price={product.price}
                      img={product.img}
                      index={index}
                    />
                  );
                })}
              </div>
              <Btn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
