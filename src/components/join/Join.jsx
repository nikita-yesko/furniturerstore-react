import './join.css';

const Join = () => {
    return ( 
        <section className="join">
            <div className="container">
                <div className="join-content">
                    <div className="join__title">
                    Join the club and get the benefits
                    </div>
                    <div className="join__text">Sign up for our newsletter and receive exclusive offers on new
                     ranges, sales, pop up stores and more</div>
                     <form className="join__input">
                        <input className="input__text" placeholder='your@email.com'/>
                        <input  className="input__btn btn" type="submit" value="Send" />
                     </form>
                     
                </div>
            </div>
        </section>
     );
}
 
export default Join;