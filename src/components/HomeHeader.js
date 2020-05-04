import React from 'react';
import { Link } from 'react-router-dom'
import decorationURL from '../assets/Decoration.svg'
import bannerURL from '../assets/Hero Image.png'

const HomeHeader = () => {
    return (
        <header className="page__header">
            <div className="page__header__picture">
            <img src={bannerURL} />
            </div>
            <div className="page__header__container">
            <ul className="page__header__login">
                <li><Link to="/login">Zaloguj</Link></li>
                <li><Link to="/register">Załóż konto</Link></li>
            </ul>
            <nav className="page__header__menu">
                <ul className="page__menu__list">
                    <li><Link to="/">Start</Link></li>
                    <li><Link to="/info">O co chodzi?</Link></li>
                    <li><Link to="/about">O nas</Link></li>
                    <li><Link to="/charity">Fundacja i organizacje</Link></li>
                    <li><Link to="/contact">Kontakt</Link></li>
                </ul>
            </nav>
            <section className="page__header__info">
                <div className="page__header__info__container">
                <h1>Zacznij pomagać!</h1>
                <br/>
                <h1>Oddaj niechciane rzeczy w zufane ręce</h1>
                <img src={decorationURL} />
                </div>
                <section className="page__header__buttons">
                    <button><Link to="/give-away">Oddaj<br/>rzeczy</Link></button>
                    <button><Link to="/organize">Zorganizuj zbiórkę</Link></button>
                </section>
            </section>
            </div>
        </header>
    )
}

export default HomeHeader;
