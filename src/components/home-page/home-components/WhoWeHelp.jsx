import {Link} from "react-router-dom";

function WhoWeHelp() {
    return (
        <>
            <div className="wwh">
                <div className="wwh-top">
                    <h3 className="wwh-top-h3">Komu pomagamy?</h3>
                    <img src="src/assets/images/hero-decoration.png" alt="" className="wwh-top-img"/>
                    <div className="wwh-top-btns">
                        <Link to='/' className="wwh-top-btn wwh-selected">Fundacjom</Link>
                        <Link to='/' className="wwh-top-btn">Organizacjom pozarządowym</Link>
                        <Link to='/' className="wwh-top-btn">Lokalnym zbiórkom</Link>
                    </div>
                    {/* Fundacje */}
                    <p className="wwh-top-text fundation">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z
                        którymi
                        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>

                    {/*  Organicaje pozarządowe  */}
                    {/*<p className="wwh-top-text organization">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
                    {/*    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis*/}
                    {/*    nostrud exercitation.</p>*/}

                    {/*  Lokalne zbiórki  */}
                    {/*<p className="wwh-top-text local">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed*/}
                    {/*    do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis*/}
                    {/*    nostrud exercitation.</p>*/}

                </div>
                {/* Fundacje */}
                <div className="wwh-bot fundation">
                    <div className="wwh-bot-content">
                        <h4 className="wwh-bot-h4">Fundacja “Dbam o Zdrowie”</h4>
                        <p className="wwh-bot-abs">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                        <p className="wwh-bot-text">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
                            życiowej.</p>
                    </div>
                    <div className="wwh-bot-content">
                        <h4 className="wwh-bot-h4">Fundacja “Dla dzieci”</h4>
                        <p className="wwh-bot-abs">ubrania, meble, zabawki</p>
                        <p className="wwh-bot-text">Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
                    </div>
                    <div className="wwh-bot-content">
                        <h4 className="wwh-bot-h4">Fundacja “Bez domu”</h4>
                        <p className="wwh-bot-abs">ubrania, jedzenie, ciepłe koce</p>
                        <p className="wwh-bot-text">Cel i misja: Pomoc dla osób nie posiadających miejsca
                            zamieszkania.</p>
                    </div>
                </div>
                <div className="wwh-btns fundation">
                    <Link to='/' className="wwh-btn-single wwh-btn-single-selected">1</Link>
                    <Link to='/' className="wwh-btn-single">2</Link>
                    <Link to='/' className="wwh-btn-single">3</Link>
                </div>
            </div>
        </>
    );
}

export default WhoWeHelp;