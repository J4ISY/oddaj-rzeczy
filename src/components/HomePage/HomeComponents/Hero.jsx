import {Link} from "react-router-dom";

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero__wrapper">
                    <div className="logReg-wrap">
                        <Link to='/' className="logReg-btn">Zaloguj</Link>
                        <Link to='/' className="logReg-btn btn-sc active-hero">Załóż konto</Link>
                    </div>
                    <nav className="hero_nav">
                        <Link to='/' className="nav-links active-nav-hero">Start</Link>
                        <Link to='/' className="nav-links">O co chodzi?</Link>
                        <Link to='/' className="nav-links">O nas</Link>
                        <Link to='/' className="nav-links">Fundacja i organizacje</Link>
                        <Link to='/' className="nav-links">Kontakt</Link>
                    </nav>
                    <div className="hero_content">
                        <div className="hero_content_wrapper">
                            <h1 className="hero-text first">Zacznij pomagać!</h1>
                            <h1 className="hero-text second">Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <img src="src/assets/images/hero-decoration.png" alt="" className="hero-img"/>
                            <div className="hero-btn">
                                <Link to='/' className="hero-links">Oddaj rzeczy</Link>
                                <Link to='/' className="hero-links">Zorganizuj zbiórkę</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;