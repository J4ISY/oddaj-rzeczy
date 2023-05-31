import {Link} from "react-router-dom";

function Hero() {
    return (
        <>
            <div className="hero">
                <div className="logReg">
                    <Link to='/' className="logIn">Zaloguj</Link>
                    <Link to='/' className="regIn">Załóż konto</Link>
                </div>
                <nav className="hero_nav">
                    <Link to='/' className="nav-links">Start</Link>
                    <Link to='/' className="nav-links">O co chodzi?</Link>
                    <Link to='/' className="nav-links">O nas</Link>
                    <Link to='/' className="nav-links">Fundacja i organizacje</Link>
                    <Link to='/' className="nav-links">Kontakt</Link>
                </nav>
                <div className="hero_content">
                    <h1 className="hero-text">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <img src="https://via.placeholder.com/400x30" alt="" className="hero-img"/>
                    <div className="hero-btn">
                        <Link to='/' className="hero-links">Oddaj rzeczy</Link>
                        <Link to='/' className="hero-links">Zorganizuj zbiórkę</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;