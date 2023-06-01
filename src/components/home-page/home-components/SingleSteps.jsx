import {Link} from "react-router-dom";

function SingleSteps() {
    return (
        <>
            <div className="ss">
                <div className="ss-top">
                    <h2 className="ss-top-h2">Wystarczą 4 proste kroki</h2>
                    <img src="src/assets/images/hero-decoration.png" alt="" className="ss-top-img"/>
                </div>
                <div className="ss-mid">
                    <div className="ss-mid-single">
                        <img src="src/assets/images/shirt.png" alt="koszulka" className="ss-mid-img"/>
                        <h4 className="ss-mid-h4">Wybierz rzeczy</h4>
                        <span className="ss-mid-line"></span>
                        <p className="ss-mid-text">ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className="ss-mid-single">
                        <img src="src/assets/images/pack.png" alt="torba ze strzałką w dół" className="ss-mid-img"/>
                        <h4 className="ss-mid-h4">Spakuj je</h4>
                        <span className="ss-mid-line"></span>
                        <p className="ss-mid-text">skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="ss-mid-single">
                        <img src="src/assets/images/search.png" alt="lupa" className="ss-mid-img"/>
                        <h4 className="ss-mid-h4">Zdecyduj komu chcesz pomóc</h4>
                        <span className="ss-mid-line"></span>
                        <p className="ss-mid-text">wybierz zaufane miejsce</p>
                    </div>
                    <div className="ss-mid-single">
                        <img src="src/assets/images/reload.png" alt="przeładowanie" className="ss-mid-img"/>
                        <h4 className="ss-mid-h4">Zamów kuriera</h4>
                        <span className="ss-mid-line"></span>
                        <p className="ss-mid-text">kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </div>
                <div className="ss-bot">
                    <Link to='/' className="ss-bot-btn">Oddaj rzeczy</Link>
                </div>
            </div>
        </>
    );
}

export default SingleSteps;