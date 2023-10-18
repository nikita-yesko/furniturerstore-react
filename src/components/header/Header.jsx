import searchImg from "./../../img/icon/search.svg";
import shoppingImg from "./../../img/icon/shopping-cart.svg";
import avatarImg from "./../../img/icon/user-avatar.svg";

import "./header.css";


const Header = () => {
    return (  
        <>
        <header className="header">
            <div className="container">
                <div className="header-top">
                    <div className="header-top__search"><a href="#!"><img src={searchImg} alt="search" /></a></div>
                    <div className="header-top__logo"><a href="/">Avion</a></div>
                    <div className="header-top__menu">
                        <a href="#!"><img src={shoppingImg} alt="shopping-cart" /></a>
                        <a href="#!"><img src={avatarImg} alt="user avatar" /></a>
                    </div>
                </div>
                <nav className="header-nav">
                    <ul className="header-nav__list">
                        <li className="header-nav__item">
                            <a href="/" className="header-nav__link">Home</a>
                        </li>
                        <li className="header-nav__item">
                            <a href="/allproducts" className="header-nav__link">All products</a>
                        </li>
                        <li className="header-nav__item">
                            <a href="/product" className="header-nav__link">Product</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    );
}
 
export default Header;