"use strict"

import { paragraphInputSend, newsForm, userInputSend, userInputSendBtn, validEmail } from "./Variables.js";

export default class NewsLetter {

    constructor(){
        this.form = newsForm;
        this.validMail = validEmail;
    }

    start(){
        this.onSubmit();
    }

    onSubmit(){
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault();

            const value = this.form.email.value
            this.validateEmail(value);
        })
    }

    validateEmail(email){
        if (email.match(this.validMail)){
            console.log("email valide");
            this.openSuccessWindow(email);
        } else {
            console.log("email ist nicht valide");
        }
    }

    openSuccessWindow(email){
        console.log("Hier wird ein Fenster geöffnet");
        
        paragraphInputSend().innerHTML = `Der Newsletter wurde erfolgreich auf folgende E-Mailadresse ${email} gebucht!`;
        userInputSendBtn.innerHTML = 'Schließen';
        userInputSend.style.display = 'flex';
    }

}