import Header from "../../header/Header.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";

function Register() {

    const [messagePwd, setMessagePwd] = useState('');
    const [password, setPassword] = useState('');

    const [messagePwdNd, setMessagePwdNd] = useState('');
    const [passwordNd, setPasswordNd] = useState('');

    const [messageMail, setMessageMail] = useState('');
    const [email, setEmail] = useState('');

    function handlePass(e) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    function handlePassNd(e) {
        e.preventDefault();
        setPasswordNd(e.target.value);
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

        // Password validation
        if (password.trim() === '') {
            setMessagePwd('Wpisz hasło');
            // passwordValid = false;
        } else if (!passwordRegExp.test(password)) {
            setMessagePwd('Hasło powinno być dłuższe (co najmniej 6 znaków)');
            // passwordValid = false;
        } else {
            setMessagePwd('Hasło jest poprawne');
        }

        // Password Second validation
        if (passwordNd.trim() === '') {
            setMessagePwdNd('Wpisz hasło');
            // passwordValid = false;
        }
         else if (password !== passwordNd) {
            setMessagePwdNd('Hasła różnią się od siebie')
        } else {
            setMessagePwdNd('Hasła są identyczne');
        }

        // Mail validation
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
                        <div className="li-form reg-form">
                            <div className="li-form-wrap">
                                <label htmlFor="email-log-in" className='li-form-label'>Email</label>
                                <input type="email" onChange={handleMail} name='email-log-in' id='email-log-in'
                                       className={`li-form-input ${messageMail === 'Adres e-mail poprawny' ? 'inpAccept' : 'inpError'}`}
                                />
                                <p className={messageMail === 'Adres e-mail poprawny' ? 'pwdAccept' : 'pwdError'}>{messageMail}</p>
                            </div>
                            <div className="li-form-wrap">
                                <label htmlFor="passwd-log-in" className='li-form-label'>Hasło</label>
                                <input type="password" onChange={handlePass} name='passwd-log-in' id='passwd-log-in'
                                       className={`li-form-input ${messagePwd === 'Hasło jest poprawne' ? 'inpAccept' : 'inpError'}`}
                                />
                                <p className={messagePwd === 'Hasło jest poprawne' ? 'pwdAccept' : 'pwdError'}>{messagePwd}</p>
                            </div>
                            <div className="li-form-wrap">
                                <label htmlFor="passwd-log-in" className='li-form-label'>Powtórz hasło</label>
                                <input type="password" onChange={handlePassNd} name='passwd-log-in' id='passwd-log-in'
                                       className={`li-form-input ${messagePwdNd === 'Hasła są identyczne' ? 'inpAccept' : 'inpError'}`}
                                />
                                <p className={messagePwdNd === 'Hasła są identyczne' ? 'pwdAccept' : 'pwdError'}>{messagePwdNd}</p>
                            </div>
                        </div>
                        <div className="log-in-bottom-btns reg-in-bottom-btns">
                            <Link to='/logowanie' className="log-in-btn">Zaloguj się</Link>
                            <button type='submit' className="log-in-btn log-in-btn-border">Załóż konto</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;