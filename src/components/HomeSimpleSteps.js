import React from 'react';
import { Link } from 'react-router-dom';
import decorationURL from '../assets/Decoration.svg';
import tshitrURL from '../assets/tshirt.png';
import bagURL from '../assets/bag.png';
import loopURL from '../assets/loop.png';
import arrowsURL from '../assets/arrows.png';

const HomeSimpleSteps = () => {
    return (
        <section id="page__simple__steps" className="page__simple__steps">
            <div className="page__simple__steps__title__container">
                <h1>Wystarczą 4 proste kroki</h1>
                <img src={decorationURL} />
            </div>
            <div className="page__simple__steps__info__icons__container">
                <div className="page__simple__steps__info__icons__container__detailed">
            <article className="page__simple__steps__info__icons__article">
                    <img src={tshitrURL}/>
                    <h3>Wybierz rzeczy</h3>
                    <hr></hr>
                    <h6>ubrania, zabawki, sprzęt i inne</h6>
            </article>
            <article className="page__simple__steps__info__icons__article">
                    <img src={bagURL}/>
                    <h3>Spakuj je</h3>
                    <hr></hr>
                    <h6>skorzystaj z worków na śmieci</h6>
            </article>
            <article className="page__simple__steps__info__icons__article">
                    <img src={loopURL}/>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <hr></hr>
                    <h6>wybierz zaufane miejsce</h6>
            </article>
            <article className="page__simple__steps__info__icons__article">
                    <img src={arrowsURL}/>
                    <h3>Zamów kuriera</h3>
                    <hr></hr>
                    <h6>kurier przyjedzie w dogodnym terminie</h6>
            </article>
            </div>
            </div>
            <div className="page__simple__steps__button">
            <button><Link to="/login">Oddaj rzeczy</Link></button>
            </div>
        </section>
    )
}

export default HomeSimpleSteps;