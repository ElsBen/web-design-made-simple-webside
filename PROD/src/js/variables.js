"use strict";export const newsForm=document.querySelector("#nb-form");export const buttons=document.querySelectorAll(".leistung-auswählen-btn");export const form=document.querySelector("#kontakt-formular");export const userInputSend=document.querySelector(".sended-user-input-container");export const userInputSendContent=document.querySelector(".sended-user-input");export const userInputSendBtn=document.querySelector(".user-input-sended-btn");export const userInputCancelBtn=document.querySelector(".hide-no-btn");export const headlineInputSend=()=>userInputSendContent.querySelector("h2");export const paragraphInputSend=()=>userInputSendContent.querySelector("p");export const colorAlert="#97970e";export const colorSuccess="#ffffff";export const validEmail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;export const validateSelection=()=>{const e=savedPerformanceSelection;return e.split(/^([^]+)-([^-]+)/).map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ").trimLeft().trimEnd()};export const saveEntr=[];export const userEntries=[];export const getEntries=()=>{const e=document.querySelector("#vorname").value,t=document.querySelector("#nachname").value,o=document.querySelector("#email").value,r=document.querySelector("#nachricht").value,n={name:e,lastName:t,email:o,message:r};return n};export const savedInquiry=JSON.parse(localStorage.getItem("saveInquiry"))||[];export const savedPerformanceSelection=JSON.parse(localStorage.getItem("savePerformanceSelection"))||[];export const removePerfEntries=localStorage.removeItem("savePerformanceSelection");