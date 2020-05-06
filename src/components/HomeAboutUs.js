import React from 'react';
import peopleURL from '../assets/People.png';
import decorationURL from '../assets/Decoration.svg';
import signURL from '../assets/Signature.svg';


const HomeAboutUs = () => {
    return (
        <section id="page__about__us" className="page__about__us">
            <div className="page__about__us__container">
                <h1>O nas</h1>
                <img src={decorationURL} />
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="signature" src={signURL}/>
            </div>
            <img src={peopleURL} />
        </section>
    )
}

export default HomeAboutUs;