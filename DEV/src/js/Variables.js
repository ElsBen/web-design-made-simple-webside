"use strict"

// Performance references
export const buttons = document.querySelectorAll('.leistung-auswählen-btn');

// Form references
export const form = document.querySelector('#kontakt-formular');


export const userInputSend = document.querySelector(
    '.sended-user-input-container',
);
export const userInputSendContent = document.querySelector('.sended-user-input');
export const userInputSendBtn = document.querySelector(
    '.user-input-sended-btn'
);
export const userInputCancelBtn = document.querySelector('.hide-no-btn');

// Userinfomation Window
export const headlineInputSend = ()=>{
    return userInputSendContent.querySelector('h2');
}

export const paragraphInputSend = ()=>{
    return userInputSendContent.querySelector('p');
}
// export const headlineInputSend = userInputSendContent.querySelector('h2');
// export const paragraphInputSend = userInputSendContent.querySelector('p') || "Element nicht vorhanden";

// Definitions
export const colorAlert = '#97970e';
export const colorSuccess = '#ffffff';

// Validations
export const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Objects
export const saveEntr = [];
export const userEntries = [];

// Storage
export const savedInquiry = JSON.parse(localStorage.getItem('saveInquiry')) || [];
export const savedPerformanceSelection = JSON.parse(
    localStorage.getItem('savePerformanceSelection')
) || [];

