import {Link} from "react-router-dom";
import Header from "../../header/Header.jsx";

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero__wrapper">
                    <Header />
                    <div className="hero_content">
                        <div className="hero_content_wrapper">
                            <h1 className="hero-text first">Zacznij pomagać!</h1>
                            <h1 className="hero-text second">Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <img src="src/assets/images/hero-decoration.png" alt="" className="hero-img"/>
                            <div className="hero-btn">
                                <Link to='/logowanie' className="hero-links">Oddaj rzeczy</Link>
                                <Link to='/logowanie' className="hero-links">Zorganizuj zbiórkę</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;