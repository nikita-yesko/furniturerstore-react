import './footer.css';
import linkedin from './../../img/socials/linkedin.svg';
import facebook from './../../img/socials/facebook.svg';
import instagram from './../../img/socials/instagram.svg';
import pinterest from './../../img/socials/pinterest.svg';
import skype from './../../img/socials/skype.svg';
import twitter from './../../img/socials/twitter.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-info">
                        <div className="footer-info__logo">
                        <a href="/">Avion</a>
                        </div>
                        <div className="footer-nav">
                            <p className="footer-item">21 New York Street</p>
                            <p className="footer-item">New York City</p>
                            <p className="footer-item">United States of America</p>
                            <p className="footer-item">432 34</p>
                        </div>
                    </div>
                    <div className="footer-socials">
                        <div className="socials__title">
                        Social links
                        </div>
                        <ul className="socials__list">
                            <li className="socials__item">
                                <a href="#!"><img src={linkedin} alt="linkedin" /></a>
                            </li>
                            <li className="socials__item">
                                <a href="#!"><img src={facebook} alt="facebook" /></a>
                            </li>
                            <li className="socials__item">
                                <a href="#!"><img src={instagram} alt="instagram" /></a>
                            </li>
                            <li className="socials__item">
                                <a href="#!"><img src={pinterest} alt="pinterest" /></a>
                            </li>
                            <li className="socials__item">
                                <a href="#!"><img src={skype} alt="skype" /></a>
                            </li>
                            <li className="socials__item">
                                <a href="#!"><img src={twitter} alt="twitter" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-menu">
                        <div className="footer-nav">
                            <p className="footer-item footer-item__title">Menu</p>
                            <a href="#!" className="footer-item">New arrivals</a>
                            <a href="#!" className="footer-item">Best sellers</a>
                            <a href="#!" className="footer-item">Recently viewed</a>
                            <a href="#!" className="footer-item">Popular this week</a>
                            <a href="#!" className="footer-item">All products</a>
                        </div>

                    </div>
                    <div className="footer-categories">
                    <div className="footer-nav">
                            <p className="footer-item footer-item__title">Categories</p>
                            <a href="#!" className="footer-item">Crockery</a>
                            <a href="#!" className="footer-item">Furniture</a>
                            <a href="#!" className="footer-item">Homeware</a>
                            <a href="#!" className="footer-item">Plant pots</a>
                            <a href="#!" className="footer-item">Chairs</a>
                            <a href="#!" className="footer-item">Crockery</a>
                        </div>
                    </div>
                    <div className="footer-company">
                    <div className="footer-nav">
                            <p className="footer-item footer-item__title">Our company</p>
                            <a href="#!" className="footer-item">About us</a>
                            <a href="#!" className="footer-item">Vacancies</a>
                            <a href="#!" className="footer-item">Contact us</a>
                            <a href="#!" className="footer-item">Privacy</a>
                            <a href="#!" className="footer-item">Returns policy</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                Copyright 2022 Avion LTD
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;