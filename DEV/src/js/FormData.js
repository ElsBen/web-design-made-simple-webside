"use strict"

import { 
    form, 
    headlineInputSend, 
    userInputSend, 
    userInputSendContent, 
    saveEntr, 
    userEntries, 
    savedInquiry, 
    savedPerformanceSelection, 
    validEmail, 
    paragraphInputSend,
    colorSuccess,
    colorAlert,
    userInputSendBtn,
    userInputCancelBtn,
    removePerfEntries,
    getEntries,
    validateSelection
} from "./Variables.js";

export default class FormData {
    
    constructor() {
        this.form = form;
        this.userInputSend = userInputSend;
        this.validEmail = validEmail;
        this.userInputSendContent = userInputSendContent;
        
        this.saveEntr = saveEntr;
        this.userEntries = userEntries;

        this.savedInquiry = savedInquiry;
        this.savedPerformanceSelection = savedPerformanceSelection;
        this.removePerfEntries = removePerfEntries;
        
        /**
         * Stellt sicher, dass das Formular vorhanden ist und hält die 
         * Werte für das Fenster beim erfolglosen oder erfolgreichen Abschicken des Formulars.
        */
       if (this.form){
           this.headlineInputSend = headlineInputSend();
           this.paragraphInputSend = paragraphInputSend();
           this.colorSuccess = colorSuccess;
           this.colorAlert = colorAlert;
           this.userInputSendBtn = userInputSendBtn;
           this.userInputCancelBtn = userInputCancelBtn;
        } else {console.log('Form does not exist!')}
       
    }

    /**
     * Holt sich die vorhandenen Werte aus dem Localstorage.
     * Prüft, ob Form vorhanden ist.
     * Der Eventlistener wird gesetzt und beim Absenden des Formulars, 
     * werden die Werte der einzelnen Inputs geholt und in einem Objekt gehalten.
     */
    start() {
        if (this.savedInquiry && this.savedInquiry.length >= 0) {
            this.userEntries = this.savedInquiry;
            this.removePerfEntries;
        }

        if (this.form) {
            this.getUserInfoBtn();
            this.getInputValuesAndBuildObject();
        }
    }

    /**
     * Öffnet durch Button-Klick, Eingaben richtig Fenster, Eingabe falsch Fenster oder Eingabe erfolgreich Fenster.
     */
    getUserInfoBtn(){
        this.userInputSendContent.addEventListener('click', (e) => {
            
            const clickeContent = e.target.innerHTML;

            if (clickeContent.match('Ja')){
                setTimeout(()=>{
                    this.userInputCancelBtn.style.display = 'none';
                    this.saveUserEntries(this.saveEntr);
                }, 1000)
            } else if (clickeContent.match('Nein')){
                this.userInputCancelBtn.style.display = 'none';
                this.validatAndBuildSendStateWindow(false);
            } else if (clickeContent.match('Schließen')){
                this.userInputSend.style.display = 'none';
            }
        });
    }

    getInputValuesAndBuildObject(){
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            this.userInputCancelBtn.style.display = 'inline-block';
            this.checkEntriesValid(getEntries());
        });
    }

    /**
     * E-mail wird validiert und Form auf Existenz geprüft.
     * Das Objekt wird in userEntries-Array gepusht und das 
     * Formular zurückgesetzt.
     * @param {object} checkEntries enthält die Einträge aus den Input's
     * @param {array} checkInquiry Werte aus dem localstorage die im Array gehalten werden
     */
    checkEntriesValid(checkEntries) {

        if (checkEntries.email.match(this.validEmail) && this.form) {
            this.areTheEntriesCorrectWindow(checkEntries);          
        } else {
            this.userInputCancelBtn.style.display = 'none';
            this.validatAndBuildSendStateWindow('mail-unvalid');
        }
    }

    areTheEntriesCorrectWindow(entries){
        
        const name = `Name:  ${entries.name}`;
        const lastName = `Nachname:  ${entries.lastName}`;
        const email = `Email:  ${entries.email}`;
        const message = `Nachricht:${entries.message}`;
        const validateSelect = validateSelection();
        const performanceSelection = `Auswahl:${validateSelect}`;
        const formattedEntries = [name, lastName, email, message, performanceSelection];
     
        this.validatAndBuildSendStateWindow(formattedEntries, entries);
    }

    /**
     * Die Nutzereinträge werden im Localstorage gehalten.
     * Das userEntries-Array wird gelöscht 
     * und mit den neuen Werten aus dem Storage überschrieben.
     * Localstorage für die Einträge wird gelöscht.
     * @param {object} saveEntries enthält die Einträge aus den Input's
     * @param {array} inquiry Werte aus dem localstorage die im Array gehalten werden
     */
    saveUserEntries(saveEntries) {
        this.userEntries.push(saveEntries);
        localStorage.setItem('saveInquiry', JSON.stringify(saveEntries));
        this.userEntries = [];
        this.userEntries.push(this.savedInquiry);
        localStorage.removeItem('saveInquiry');
        this.form.reset();
        this.getSavedPerformanceSelection()
    }
    
    /**
     * Ein neues Objekt für die Performance-Selection wird erstellt 
     * und auf die übergebene Selection wird iteriert.
     * Hier werden die Werte und der Index als Parameter gehalten, 
     * als Schlüssel-Werte Paare im erstellten Objekt eingefügt
     * und im Einträge-Array hinzugefügt.
     */
    getSavedPerformanceSelection(){
        let performanceSelection  = {
            selection: this.savedPerformanceSelection
        };
        
        this.userEntries[0].push(performanceSelection);
        this.validatAndBuildSendStateWindow(true);
    }

    /**
     * Bei erfolgreichem Absenden (oder nicht erfolgreich) 
     * wird hier der entsprechende Text und die Farbe gesetzt.
     * @param {boolean, array, string} state Wird zum Prüfen des Status verwendet.
     * @param {object} entries Speichert die Einträge im aktuellen Durchlauf global.
     */
    validatAndBuildSendStateWindow(state, entries){
        let headline;
        let content;
        let btnContent;
        let color;
        let arrChecked;

        if (Array.isArray(state)){
            arrChecked = state;
            state = 'Array';
        }
        
        switch(state){
            
            case true:
                headline = 'Erfolgreich abgesendet!';
                content = 'Vielen Dank für Ihr Vertrauen. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich darum kümmern.';
                btnContent = 'Schließen';
                color = this.colorSuccess;
                this.buildUserInformationWindow(headline, content, btnContent, color);
                break;

            case 'mail-unvalid':
                headline = 'Upps, da ist etwas schiefgelaufen. Versuchen Sie es noch einmal!';
                content = 'Die von Ihnen eingegebene Email Adresse entspricht nicht dem gängigen Format für Email Adressen';
                btnContent = 'Schließen';
                color = this.colorAlert;
                this.buildUserInformationWindow(headline, content, btnContent, color); 
                break;

            case 'Array':
                headline = 'Sind Ihre Angaben richtig?';
                let counter = 0;

                
                content = JSON.stringify(arrChecked).replace(/,/g, match =>{
                    counter++
                    return (counter <= 4) ? '\n' : match;
                });
                
                content = content.replace(/["\\\[\]]/g, '');
                content = content.replace(/Auswahl:/g, '\nAuswahl:\n');
                content = content.replace(/Nachricht:/g, '\nNachricht:\n');
                btnContent = 'Ja';
                color = this.colorSuccess;
                this.saveEntr = entries;
                this.buildUserInformationWindow(headline, content, btnContent, color);
                break; 

            case false:
                headline = 'Upps, da ist was schief gelaufen. Versuchen sie es noch einmal!';
                content = 'Klicken Sie auf Schließen und korrigieren Sie den falschen Eintrag (Die Einträge in den Eingabefeldern bleiben erhalten).';
                btnContent = 'Schließen';
                color = this.colorAlert;
                this.buildUserInformationWindow(headline, content, btnContent, color); 
                break;
        }
    }

    /**
     * Inhalt und Styling werden für das Informationsfenster gesetzt.
     * So kann der Code für alle Info-Fenster genutzt werden.
     * @param {string} headline 
     * @param {string} content 
     * @param {string} btnContent 
     * @param {string} color 
     */
    buildUserInformationWindow(headline, content, btnContent, color){
        this.headlineInputSend.textContent = headline;
        this.paragraphInputSend.textContent = content;
        this.userInputSendBtn.textContent = btnContent;
        this.userInputSendBtn.style.color = color;
        this.headlineInputSend.style.color = color;
        this.paragraphInputSend.style.color = color;
        
        this.openUserInputSendWindow();
    }

    /**
     * Fenster für die User-Info des Formulars wird sichtbar gemacht.
     */
    openUserInputSendWindow() {
        this.userInputSend.style.display = 'flex';
    }
}
