"use strict"

import { buttons } from "./Variables.js";

export default class PerformanceChoice{
    start(){
        this.iterateBtns();
    }
    
    iterateBtns(){
        buttons.forEach((btn)=>{
            this.setClickEvent(btn);
        })
    }

    setClickEvent(btn){
        btn.addEventListener('click', ()=>{
            // Hier wird noch eine Logik für die übermittlung zum FormData Benötigt!
            console.log("Der Button:" + btn.id + "wurde geklickt!");
        })
    }
}