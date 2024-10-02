"use strict"

// Newsletter references
export const newsForm = document.querySelector('#nb-form');

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

// Definitions
export const colorAlert = '#97970e';
export const colorSuccess = '#ffffff';

// Validations
export const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const validateSelection = ()=>{
    const selection = savedPerformanceSelection;
    return selection
    .split(/^([^]+)-([^-]+)/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    .trimLeft()
    .trimEnd();
}

// Objects
export const saveEntr = [];
export const userEntries = []; 
export const getEntries = ()=>{
    const formName = document.querySelector('#vorname').value;
    const formLastName = document.querySelector('#nachname').value;
    const formEMail = document.querySelector('#email').value;
    const formMessage = document.querySelector('#nachricht').value;

    const saveEntries = {
        name: formName,
        lastName: formLastName,
        email: formEMail,
        message: formMessage,
    };
    return saveEntries;
};

// Storage

// Entries
export const savedInquiry = JSON.parse(localStorage.getItem('saveInquiry')) || [];

// Selection
export const savedPerformanceSelection = JSON.parse(
    localStorage.getItem('savePerformanceSelection')
) || [];

// Remove
export const removePerfEntries = localStorage.removeItem('savePerformanceSelection');