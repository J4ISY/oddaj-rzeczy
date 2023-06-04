function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-wrapper">
                    <div className="contact">
                        <h3 className="contact-title">Skontaktuj się z nami</h3>
                        <img src="src/assets/images/hero-decoration.png" alt="decoration" className="contact-img"/>
                        <form action="" className="contact-form">
                            <div className="contact-top">
                                <div className="contact-top-single">
                                    <label htmlFor="name" className='contact-name-label'>Wpisz swoje imię</label>
                                    <input type="text" className='contact-text' name='name' placeholder='Krzysztof'/>
                                </div>
                                <div className="contact-top-single">
                                    <label htmlFor="email" className='contact-name-label'>Wpisz swój email</label>
                                    <input type="email" className='contact-text' name='email' placeholder='abc@xyz.pl'/>
                                </div>
                            </div>
                            <label htmlFor="text-area" className='contact-text text-area-contact'>Wpisz swoją wiadomość</label>
                            <textarea name="text-area" className='contact-text-area'
                                      placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'></textarea>
                            <input type="submit" value="Wyślij" className='contact-submit'/>
                        </form>
                    </div>
                </div>
            </footer>
            <div className="footer-bot">
                <h6 className="copyright">Copyright by Coders Lab</h6>
                <div className="social-icons">
                    <a href="/" className="social-icon">
                        <img src="src/assets/images/facebook.png" alt="facebook icon"/>
                    </a>
                    <a href="/" className="social-icon">
                        <img src="src/assets/images/instagram.png" alt="instagram icon"/>
                    </a>
                </div>
            </div>
        </>
    )
        ;
}

export default Footer;