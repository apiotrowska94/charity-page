import React from 'react';
import { Link } from 'react-router-dom'
import decorationURL from '../assets/Decoration.svg'
import bannerURL from '../assets/Hero Image.png'
import {Link as ScrollLink} from 'react-scroll'

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
                    <li><ScrollLink duration={1000} smooth={true} to="page__simple__steps">O co chodzi?</ScrollLink></li>
                    <li><ScrollLink duration={1000} smooth={true} to="page__about__us">O nas</ScrollLink></li>
                    <li><Link to="/charity">Fundacja i organizacje</Link></li>
                    <li><ScrollLink duration={1000} smooth={true} to="page__contact">Kontakt</ScrollLink></li>
                </ul>
            </nav>
            <section className="page__header__info">
                <div className="page__header__info__container">
                <h1>Zacznij pomagać!</h1>
                <br/>
                <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                <img src={decorationURL} />
                </div>
                <section className="page__header__buttons">
                    <button><Link to="/login">Oddaj<br/>rzeczy</Link></button>
                    <button><Link to="/organize">Zorganizuj zbiórkę</Link></button>
                </section>
            </section>
            </div>
        </header>
    )
}

export default HomeHeader;
