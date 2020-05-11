import blanketURL from '../assets/Blankets.png';
import decorationURL from '../assets/Decoration.svg';
import React, { Component, useState, useEffect } from 'react';
import facebookURL from '../assets/Facebook.png';
import instagramURL from '../assets/Instagram.png';

const HomeContact = () => {

    const [inputs, setInputs] = useState({name: "", email: ""})
    const [inputsArea, setInputsArea] = useState({textarea: ""})
    const [welcome, setWelcome] = useState("");
    const [errors, setErrors] = useState({name:false, email:false, message:false})

    const handleInputs = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})
        setInputsArea({...inputsArea, [e.target.name]: e.target.value})
    }
    const handleInputsArea = (e) => {
        setInputsArea({...inputsArea, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = [];
    

        if(inputs.name.length === 0) {
            errors.name="Pole imię nie może być puste"
        }

        if(inputs.name.includes(" ")) {
            errors.name="Pole imię nie może zawierać spacji"
        }

        if(inputsArea.textarea.length < 120) {
            errors.message="Wiadomość musi mieć co najmniej 120 znaków"
        }


        if(!(/[^@]+@[^\.]+\..+/.test(inputs.email))) {
            if(inputs.email.length === 0) {
                errors.email = "Pole email nie może być puste"
            } else { errors.email = "Pole email musi zawierać @, kropkę i domenę"}
        }

        console.log(errors)

        if(Object.values(errors).length) {
            setErrors(errors)
            return;
        }
        
        fetch("https://fer-api.coderslab.pl/v1/portfolio/contact",{
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                email: inputs.email,
                name: inputs.name,
                message: inputsArea.textarea,
            })
        })
        .then ((res) => res.json())
        .then((res) => {
            console.warn(res)
            if(res.status==="success"){
            setWelcome(`Wiadomość została wysłana! Wkrótce się skontaktujemy.`)
            setErrors('none')
            setInputsArea({textarea: ""})
            setInputs({name: "", email: ""})
        }
            if(res.status==="error"){
                setWelcome(`Wiadomość została wysłana! Wkrótce się skontaktujemy.`)
                }
        })
        .catch(err => setWelcome(err))

    }
   
    return (
        <section id="page__contact" className="page__contact">
            <div className="page__contact__container">
            <div className="page__contact__container__title">
                <h1>Skontaktuj się z nami</h1>
                <img src={decorationURL} />
                <div className="page__contact__container__form">
                     <form onSubmit={handleSubmit} noValidate>
                         <p>{welcome}</p>  
                         <div className="page__contact__container__form__name__email">
                         <div className="page__contact__container__form__detailed">
                         <label>Wpisz swoje imię<input onChange={handleInputs} value={inputs.name} name="name" placeholder="Krzysztof" type="text"/></label>
                         <p>{errors.name}</p>
                         </div>
                         <div className="page__contact__container__form__detailed">                         <label>Wpisz swój email<input onChange={handleInputs} value={inputs.email} name="email" placeholder="abc@xyz.pl" type="email"/></label>
                         <p>{errors.email}</p>
                         </div>
                         </div>
                         <div className="page__contact__container__form__textarea">
                         <label>Wpisz swoją wiadomość
                             <textarea onChange={handleInputsArea} style={{resize: "none", overflow: "hidden"}}value={inputsArea.textarea}  rows="4" name="textarea" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." type="textarea"></textarea>
                             </label>
                             <p>{errors.message}</p> 
                             <br/>
                        </div>
                        <button type="submit" value="Submit">Wyślij</button>
                    </form>   
                    </div>
                    <footer className="page__contact__footer__social">
                    <a><img src={facebookURL} /></a>
                    <a><img src={instagramURL} /></a>
                    </footer>
                    </div>
            </div>
            
        </section>
    )
}

export default HomeContact;