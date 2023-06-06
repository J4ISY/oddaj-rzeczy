import {Link} from "react-router-dom";

function Header() {
    return (
        <>
            <div className="logReg-wrap">
                <Link to='/zaloguj-sie' className="logReg-btn">Zaloguj</Link>
                <Link to='/' className="logReg-btn btn-sc active-hero">Załóż konto</Link>
            </div>
            <nav className="hero_nav">
                <Link to='/' className="nav-links active-nav-hero">Start</Link>
                <Link to='/' className="nav-links">O co chodzi?</Link>
                <Link to='/' className="nav-links">O nas</Link>
                <Link to='/' className="nav-links">Fundacja i organizacje</Link>
                <Link to='/' className="nav-links">Kontakt</Link>
            </nav>
        </>
    );
}

export default Header;