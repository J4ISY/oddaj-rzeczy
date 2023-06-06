import Header from "../../header/Header.jsx";
import {Link} from "react-router-dom";

function LogIn() {
    return (
        <>
            <Header/>
            <div className="log-in-wrapper">
                <div className="log-in-content">
                    <h2 className="log-in-title">Zaloguj się</h2>
                    <img src="src/assets/images/hero-decoration.png" alt="decoration" className="log-in-img"/>
                    <form action="" className="log-in-form">
                        <div className="li-form">
                            <div className="li-form-wrap">
                                <label htmlFor="email-log-in" className='li-form-label'>Email</label>
                                <input type="email" name='email-log-in' id='email-log-in' className='li-form-input'
                                       required/>
                            </div>
                            <div className="li-form-wrap">
                                <label htmlFor="passwd-log-in" className='li-form-label'>Hasło</label>
                                <input type="password" name='passwd-log-in' id='passwd-log-in' className='li-form-input'
                                       required/>
                            </div>
                        </div>
                        <div className="log-in-bottom-btns">
                            <Link to='/' className="log-in-btn">Załóż konto</Link>
                            <button type='submit' className="log-in-btn log-in-btn-border">Zaloguj się</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LogIn;