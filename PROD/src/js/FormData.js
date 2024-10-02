"use strict";import{form,headlineInputSend,userInputSend,userInputSendContent,saveEntr,userEntries,savedInquiry,savedPerformanceSelection,validEmail,paragraphInputSend,colorSuccess,colorAlert,userInputSendBtn,userInputCancelBtn,removePerfEntries,getEntries,validateSelection}from"../../../DEV/src/js/Variables.js";export default class FormData{constructor(){this.form=form,this.userInputSend=userInputSend,this.validEmail=validEmail,this.userInputSendContent=userInputSendContent,this.saveEntr=saveEntr,this.userEntries=userEntries,this.savedInquiry=savedInquiry,this.savedPerformanceSelection=savedPerformanceSelection,this.removePerfEntries=removePerfEntries,this.form?(this.headlineInputSend=headlineInputSend(),this.paragraphInputSend=paragraphInputSend(),this.colorSuccess=colorSuccess,this.colorAlert=colorAlert,this.userInputSendBtn=userInputSendBtn,this.userInputCancelBtn=userInputCancelBtn):console.log("Form does not exist!")}start(){this.savedInquiry&&this.savedInquiry.length>=0&&(this.userEntries=this.savedInquiry,this.removePerfEntries),this.form&&(this.getUserInfoBtn(),this.getInputValuesAndBuildObject())}getUserInfoBtn(){this.userInputSendContent.addEventListener("click",e=>{const t=e.target.innerHTML;t.match("Ja")?setTimeout(()=>{this.userInputCancelBtn.style.display="none",this.saveUserEntries(this.saveEntr)},1e3):t.match("Nein")?(this.userInputCancelBtn.style.display="none",this.validatAndBuildSendStateWindow(!1)):t.match("Schließen")&&(this.userInputSend.style.display="none")})}getInputValuesAndBuildObject(){this.form.addEventListener("submit",e=>{e.preventDefault(),this.userInputCancelBtn.style.display="inline-block",this.checkEntriesValid(getEntries())})}checkEntriesValid(e){e.email.match(this.validEmail)&&this.form?this.areTheEntriesCorrectWindow(e):(this.userInputCancelBtn.style.display="none",this.validatAndBuildSendStateWindow("mail-unvalid"))}areTheEntriesCorrectWindow(e){const t=`Name:  ${e.name}`,n=`Nachname:  ${e.lastName}`,s=`Email:  ${e.email}`,i=`Nachricht:${e.message}`,r=validateSelection(),a=`Auswahl:${r}`,l=[t,n,s,i,a];this.validatAndBuildSendStateWindow(l,e)}saveUserEntries(e){this.userEntries.push(e),localStorage.setItem("saveInquiry",JSON.stringify(e)),this.userEntries=[],this.userEntries.push(this.savedInquiry),localStorage.removeItem("saveInquiry"),this.form.reset(),this.getSavedPerformanceSelection()}getSavedPerformanceSelection(){let e={selection:this.savedPerformanceSelection};this.userEntries[0].push(e),this.validatAndBuildSendStateWindow(!0)}validatAndBuildSendStateWindow(e,t){let n,s,i,r,a;switch(Array.isArray(e)&&(a=e,e="Array"),e){case!0:n="Erfolgreich abgesendet!",s="Vielen Dank für Ihr Vertrauen. Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich darum kümmern.",i="Schließen",r=this.colorSuccess,this.buildUserInformationWindow(n,s,i,r);break;case"mail-unvalid":n="Upps, da ist etwas schiefgelaufen. Versuchen Sie es noch einmal!",s="Die von Ihnen eingegebene Email Adresse entspricht nicht dem gängigen Format für Email Adressen",i="Schließen",r=this.colorAlert,this.buildUserInformationWindow(n,s,i,r);break;case"Array":n="Sind Ihre Angaben richtig?";let l=0;s=JSON.stringify(a).replace(/,/g,e=>(l++,l<=4?"\n":e)),s=s.replace(/["\\\[\]]/g,""),s=s.replace(/Auswahl:/g,"\nAuswahl:\n"),s=s.replace(/Nachricht:/g,"\nNachricht:\n"),i="Ja",r=this.colorSuccess,this.saveEntr=t,this.buildUserInformationWindow(n,s,i,r);break;case!1:n="Upps, da ist was schief gelaufen. Versuchen sie es noch einmal!",s="Klicken Sie auf Schließen und korrigieren Sie den falschen Eintrag (Die Einträge in den Eingabefeldern bleiben erhalten).",i="Schließen",r=this.colorAlert,this.buildUserInformationWindow(n,s,i,r)}}buildUserInformationWindow(e,t,n,s){this.headlineInputSend.textContent=e,this.paragraphInputSend.textContent=t,this.userInputSendBtn.textContent=n,this.userInputSendBtn.style.color=s,this.headlineInputSend.style.color=s,this.paragraphInputSend.style.color=s,this.openUserInputSendWindow()}openUserInputSendWindow(){this.userInputSend.style.display="flex"}}