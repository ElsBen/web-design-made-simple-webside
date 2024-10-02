"use strict"

import { 
    paragraphInputSend, 
    newsForm, 
    userInputSend, 
    userInputSendBtn, 
    validEmail 
} from "./Variables.js";

export default class NewsLetter {

    constructor(){
        this.form = newsForm;
        this.validMail = validEmail;
        this.closeBtn = userInputSendBtn;
    }

    start(){
        if(this.form){
            this.onSubmit();
        }
    }

    onSubmit(){
        this.form.addEventListener('submit', (e)=>{
            e.preventDefault();
            const value = this.form.email.value;
            this.validateEmail(value);
        })
    }

    validateEmail(email){
        let message = "";
        if (email.match(this.validMail)){
            message = `Der Newsletter wurde erfolgreich auf folgende E-Mail Adresse ${email} gebucht!`;
            this.form.reset();
        } else {
            message = `Ihre Eingabe ${email} entspricht nicht dem Format für E-Mail-Adressen!`;
        }
        this.openWindow(email, message);
    }

    openWindow(email, message){
        paragraphInputSend().innerHTML = message;
        userInputSendBtn.innerHTML = 'Schließen';
        userInputSend.style.display = 'flex';
        this.closeWindow();
    }

    closeWindow(){
        this.closeBtn.addEventListener('click', ()=>{
            userInputSend.style.display = 'none';
        })
    }
}