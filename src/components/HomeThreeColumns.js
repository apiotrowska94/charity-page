import React from 'react';
import { Link } from 'react-router-dom'

const HomeThreeColumns = () => {
    return (
        <section className="page__section__numbers">
            <div className="page__section__numbers__container">
                <article className="page__section__numbers__article">
                    <h1>10</h1>
                    <h3>Oddanych worków</h3>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing Pellentesque vel enim elit viverra elementuma. Aliquam erat volutpat.</h6>
                </article>
                <article className="page__section__numbers__article">
                    <h1>5</h1>
                    <h3>Wspartych organizacji</h3>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing Pellentesque vel enim elit viverra elementuma. Aliquam erat volutpat.</h6>
                </article>
                <article className="page__section__numbers__article">
                    <h1>7</h1>
                    <h3>zorganizowanych zbiórek</h3>
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing Pellentesque vel enim elit viverra elementuma. Aliquam erat volutpat.</h6>
                </article>

            </div>
        </section>
    )
}

export default HomeThreeColumns;