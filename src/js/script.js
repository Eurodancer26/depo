
import modal from './modules/modal';
import menu from './modules/hamburgerMenu';
import countries from './modules/countries';
import accordion from './modules/accordion';
import customSelect from './components/customSelect';
import scrolling from './modules/scrolling';
import forms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modal('#btn-app', 'modal', '.modal-content', 'modal_open', '#close');
    modal('#btn-countries', 'popup-form', '.popup-form-content', 'popup-form_open', '#close');
    menu();
    countries();
    accordion();
    customSelect();
    scrolling('.pageup');
    forms();
});