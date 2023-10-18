import './prefooter.css';

import prefooterImg from './../../img/prefooter.png';

const Prefooter = () => {
    return ( 
        <section className="prefooter">
            <div className="container">
                <div className="prefooter-content">
                    <div className="prefooter-text">
                        <div className="prefooter-text__top">
                            <h3 className="prefooter-text__title">From a studio in London to a global brand with
                            over 400 outlets</h3>
                            <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                            <br/>
                            <br/>
                            Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                        </div>
                        <div className="prefooter-text__btn">
                            <a href="#!" className="btn">Get in touch</a>
                        </div>
                    </div>
                    <div className="prefooter-img">
                        <img src={prefooterImg} alt="prefooter" />
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Prefooter;