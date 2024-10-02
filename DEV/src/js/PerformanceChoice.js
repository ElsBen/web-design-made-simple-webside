"use strict"

import { buttons } from "./Variables.js";

export default class PerformanceChoice{
    start(){
        if(buttons){
            this.iterateBtns();
        }
    }
    
    iterateBtns(){
        buttons.forEach((btn)=>{
            this.setClickEvent(btn);
        })
    }

    setClickEvent(btn){
        btn.addEventListener('click', ()=>{
            localStorage.setItem(`savePerformanceSelection`, JSON.stringify(btn.id));
            window.location.href = "./kontakt.html";
        })
    }
}