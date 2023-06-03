import {Link} from "react-router-dom";
import {objectList} from "./WhoWeHelpListObject.js";
import {useEffect, useState} from "react";

function WhoWeHelp() {
    const [list, setList] = useState(objectList[1]);
    const [activeTab, setActiveTab] = useState(1);

    const [isActive, setIsActive] = useState(false);
    const [active, setActive] = useState('')

    const handleTab = (tab) => {
        setActiveTab(tab);
        setIsActive(prevState => !prevState);
        setActive(prev => prev ? '' : 'wwh-selected')
    }

    useEffect(() => {
        setList(objectList[activeTab]);
    }, [activeTab])

    return (
        <>
            <div className="wwh">
                <div className="wwh-top">
                    <h3 className="wwh-top-h3">Komu pomagamy?</h3>
                    <img src="src/assets/images/hero-decoration.png" alt="" className="wwh-top-img"/>
                    <div className="wwh-top-btns">
                        <button
                            onClick={() => handleTab(1)}
                            className={`wwh-top-btn ${isActive ? 'wwh-selected' : ''}`}
                            style={{}}
                        >Fundacjom</button>
                        <button
                            onClick={() => handleTab(2)}
                            className={`wwh-top-btn ${isActive ? 'wwh-selected' : ''}`}
                        >Organizacjom pozarządowym</button>
                        <button
                            onClick={() => handleTab(3)}
                            className={`wwh-top-btn ${isActive ? 'wwh-selected' : ''}`}
                        >Lokalnym zbiórkom</button>
                    </div>
                    <p className="wwh-top-text">{activeTab.text}</p>

                </div>
                <div className="wwh-bot">
                    {
                        list.map(el =>
                            <div key={el.id} className="wwh-bot-content">
                                <h4 className="wwh-bot-h4">{el.title}</h4>
                                <p className="wwh-bot-abs">{el.subTitle}</p>
                                <p className="wwh-bot-text">{el.altText}</p>
                            </div>
                        )
                    }
                    <div className="wwh-btns">
                        <Link to='/' className="wwh-btn-single wwh-btn-single-selected">1</Link>
                        <Link to='/' className="wwh-btn-single">2</Link>
                        <Link to='/' className="wwh-btn-single">3</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
    export default WhoWeHelp;