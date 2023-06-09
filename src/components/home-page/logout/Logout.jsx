import Header from "../../header/Header.jsx";
import {Link} from "react-router-dom";

function Logout() {
    return (
        <>
            <Header />
            <div className="logout-container">
                <h2 className="logout-title">Wylogowanie nastąpiło pomyślnie!</h2>
                <img src="src/assets/images/hero-decoration.png" alt="decoration" className="logout-img"/>
                <Link className='logout-page-btn' to='/'>Strona główna</Link>
            </div>
        </>
    );
}

export default Logout;