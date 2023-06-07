import Header from "../../header/Header.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

function LogIn() {

    const [messagePwd, setMessagePwd] = useState('');
    const [password, setPassword] = useState('');

    const [messageMail, setMessageMail] = useState('');
    const [email, setEmail] = useState('');

    function handlePass(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    function handleMail(e) {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const validateFields = (e) => {
        e.preventDefault();

        const passwordRegExp = /^[a-zA-Z0-9]{6,}$/;
        const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // let passwordValid = true;
        // let emailValid = true;

        if (password.trim() === '') {
            setMessagePwd('Wpisz hasło');
            // passwordValid = false;
        } else if (!passwordRegExp.test(password)) {
            setMessagePwd('Hasło powinno być dłuższe (co najmniej 6 znaków)');
            // passwordValid = false;
        } else {
            setMessagePwd('Hasło poprawne');
        }

        if (email.trim() === '') {
            setMessageMail('Wpisz adres e-mail');
            // emailValid = false;
        } else if (!emailRegExp.test(email)) {
            setMessageMail('Nieprawidłowy adres e-mail');
            // emailValid = false;
        } else {
            setMessageMail('Adres e-mail poprawny');
        }

        // if (passwordValid && emailValid) {
        //     // Tutaj możesz wykonać dodatkowe działania, gdy oba pola są poprawne
        // }
    };
    return (
        <>
            <Header/>
            <div className="log-in-wrapper">
                <div className="log-in-content">
                    <h2 className="log-in-title">Zaloguj się</h2>
                    <img src="src/assets/images/hero-decoration.png" alt="decoration" className="log-in-img"/>
                    <form action="" onSubmit={validateFields} className="log-in-form">
                        <div className="li-form">
                            <div className="li-form-wrap">
                                <label htmlFor="email-log-in" className='li-form-label'>Email</label>
                                <input type="email" onChange={handleMail} name='email-log-in' id='email-log-in'
                                       className={`li-form-input ${messageMail === 'Hasło poprawne' ? 'inpAccept' : 'inpError'}`}
                                />
                                <p className={messagePwd === 'Hasło poprawne' ? 'pwdAccept' : 'pwdError'}>{messageMail}</p>
                            </div>
                            <div className="li-form-wrap">
                                <label htmlFor="passwd-log-in" className='li-form-label'>Hasło</label>
                                <input type="password" onChange={handlePass} name='passwd-log-in' id='passwd-log-in'
                                       className={`li-form-input ${messagePwd === 'Hasło poprawne' ? 'inpAccept' : 'inpError'}`}
                                />
                                <p className={messagePwd === 'Hasło poprawne' ? 'pwdAccept' : 'pwdError'}>{messagePwd}</p>
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