
import modal from './modules/modal';
import menu from './modules/hamburgerMenu';
import countries from './modules/countries';
import accordion from './modules/accordion';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modal('#btn-app', 'modal', '.modal-content', 'modal_open', '.modal-header-close');
    modal('#btn-countries', 'popup-form', '.popup-form-content', 'popup-form_open', '.popup-form-close');
    menu();
    countries();
    accordion();
});