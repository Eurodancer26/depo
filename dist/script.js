/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/customSelect.js":
/*!*******************************************!*\
  !*** ./src/js/components/customSelect.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const customSelect = () => {
  const selectCust = document.querySelector('.popup-form__select-custom'),
    selectText = document.querySelector('.popup-form__select-custom p'),
    selectItem = document.querySelectorAll('.popup-form__select-item');
  let timerId;
  function openSelectCustom(e) {
    selectItem.forEach(item => {
      item.style.display = 'flex';
    });
    timerId = setTimeout(() => {
      selectItem.forEach(item => {
        item.style.opacity = '1';
      });
      document.querySelector('.popup-form__select-items').style.opacity = '1';
    }, 300);
    document.querySelector('.popup-form__caret-down img').style.transform = 'rotate(0.5turn)';
    attachSelectEvent();
  }
  function closeSelectCustom() {
    clearTimeout(timerId);
    selectItem.forEach(item => {
      item.style.opacity = '0';
    });
    document.querySelector('.popup-form__select-items').style.opacity = '0';
    document.querySelector('.popup-form__caret-down img').style.transform = 'rotate(0)';
    setTimeout(() => {
      selectItem.forEach(item => {
        item.style.display = 'none';
      });
    }, 300);
    detachSelectEvent();
  }
  function handleOutside(e) {
    const isClickOutside = !!e.target.closest('.popup-form__select-item');
    if (isClickOutside) {
      selectText.style.opacity = '1';
      selectText.textContent = e.target.textContent;
      document.querySelector('option').value = selectText.textContent;
      console.log(document.querySelector('option').value);
      closeSelectCustom();
    }
  }
  function attachSelectEvent(e) {
    selectCust.addEventListener('click', closeSelectCustom);
    selectItem.forEach(option => {
      option.addEventListener('click', e => {
        console.log(e.target);
        handleOutside(e);
      });
    });
  }
  function detachSelectEvent() {
    selectText.style.opacity = '1';
    selectCust.removeEventListener('click', closeSelectCustom);
    selectItem.forEach(option => {
      option.removeEventListener('click', handleOutside);
    });
  }
  selectCust.addEventListener('click', e => {
    openSelectCustom();
  });
};
/* harmony default export */ __webpack_exports__["default"] = (customSelect);

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function accordion() {
  const btns = document.querySelectorAll('.faq__accordion');
  let i;
  function openPanel(panel) {
    panel.style.maxHeight = `${panel.scrollHeight + 48}px`;
    panel.style.paddingTop = `${24}px`;
    panel.previousElementSibling.classList.add('faq__accordion_active');
  }
  function closePanel(panel) {
    panel.style.maxHeight = null;
    panel.style.paddingTop = null;
    panel.previousElementSibling.classList.remove('faq__accordion_active');
  }
  openPanel(btns[i = 0].nextElementSibling);
  const handleBtn = panel => !panel.style.maxHeight ? openPanel(panel) : closePanel(panel);
  function isClickNextBtn(panel) {
    if (panel.previousElementSibling.classList.contains('faq__accordion_active')) {
      btns.forEach(btn => {
        closePanel(btn.nextElementSibling);
      });
      openPanel(panel);
    }
  }
  btns.forEach(btn => {
    const panel = btn.nextElementSibling;
    btn.addEventListener('click', () => {
      handleBtn(panel);
      isClickNextBtn(panel);
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/countries.js":
/*!*************************************!*\
  !*** ./src/js/modules/countries.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const countries = () => {
  const countries = [...document.querySelectorAll('.countries__map svg path')].filter(countrie => countrie.attributes.fill.value === '#6FD6BD'),
    items = document.querySelectorAll('.countries__item');
  let i = 0;
  function showTabs(i) {
    countries[items[i].dataset.countrie].style.opacity = '1';
    countries[items[i].dataset.countrie].style.transition = "all 0.4s";
    items[i].style.backgroundColor = '#FFF';
    handleTabs();
  }
  function hideTabs() {
    countries.forEach(countrie => countrie.style.opacity = "0.5");
    items.forEach(item => item.style.backgroundColor = "");
  }
  function handleTabs() {
    const isClickTabs = countries[items[i].dataset.countrie].style.opacity === '1' && items[i].style.backgroundColor === '#FFF';
    if (isClickTabs) {
      hideTabs();
    }
  }
  hideTabs();
  showTabs(i);
  items.forEach((item, i) => {
    item.addEventListener('click', () => {
      hideTabs();
      showTabs(i);
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (countries);

/***/ }),

/***/ "./src/js/modules/hamburgerMenu.js":
/*!*****************************************!*\
  !*** ./src/js/modules/hamburgerMenu.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const menu = () => {
  const burger = document.querySelector('.header__hamburger'),
    scroll = fixScroll();
  function openMenu() {
    document.querySelector('.header__menu-wrap').classList.add('header__menu-wrap_open');
    document.querySelector('.header__overlay').classList.add('header__overlay_active');
    burger.classList.add('hamburger_active');
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll}px`;
    attachMenuEvents();
  }
  function closeMenu() {
    document.querySelector('.header__menu-wrap').classList.remove('header__menu-wrap_open');
    document.querySelector('.header__overlay').classList.remove('header__overlay_active');
    burger.classList.remove('hamburger_active');
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
    detachMenuEvents();
  }
  function attachMenuEvents() {
    burger.addEventListener('click', closeMenu);
    document.querySelector('.header__overlay').addEventListener('click', handleOutside);
    document.querySelectorAll('.header__v-menu--item a').forEach(item => item.addEventListener('click', handleItemMenu));
  }
  function handleItemMenu(e) {
    const isClickItem = !!e.target.closest('.header__v-menu--item a'); //!! даёт true
    if (isClickItem) {
      closeMenu();
    }
  }
  function handleOutside(e) {
    const isClickOutside = !!e.target.closest('.header__overlay'); //!! даёт true
    if (isClickOutside) {
      closeMenu();
    }
  }
  function detachMenuEvents() {
    burger.removeEventListener('click', closeMenu);
    document.querySelector('.header__overlay').removeEventListener('click', handleOutside);
  }
  function fixScroll() {
    let div = document.createElement('div');
    div.classList.add('fixScroll');
    div.style.width = '50px';
    div.style.height = '0px';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    return scrollWidth;
  }
  burger.addEventListener('click', openMenu);
};
/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modal = (btnSelector, modalSelector, contentModalSelector, open, close) => {
  const btns = document.querySelectorAll(btnSelector),
    modal = document.getElementById(modalSelector),
    scroll = fixScroll();
  function openModal() {
    setTimeout(() => {
      modal.classList.add(open);
      document.querySelector('.pageup').style.display = 'none';
    }, 200);
    document.body.style.marginRight = `${scroll}px`;
    document.body.style.overflow = 'hidden';
    modal.style.display = 'block';
    attachModalEvents();
  }
  function closeModal() {
    modal.classList.remove(open);
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      document.body.style.marginRight = `0px`;
      document.querySelectorAll('.fixScroll').forEach(item => item.style.height = '0px');
      document.querySelector('.pageup').style.display = '';
    }, 200);
    detachModalEvents();
  }
  function attachModalEvents() {
    modal.querySelector(close).addEventListener('click', closeModal);
    document.addEventListener('keydown', handleEscape);
    modal.addEventListener('click', handleOutside);
  }
  const handleEscape = e => e.key === 'Escape' ? closeModal() : null;
  function handleOutside(e) {
    const isClickOutside = !!e.target.closest(contentModalSelector);
    if (!isClickOutside) {
      closeModal();
    }
  }
  function detachModalEvents() {
    modal.querySelector(close).removeEventListener('click', closeModal);
    document.removeEventListener('keydown', handleEscape);
    modal.removeEventListener('click', handleOutside);
  }
  function fixScroll() {
    let div = document.createElement('div');
    div.classList.add('fixScroll');
    div.style.width = '50px';
    div.style.height = '0';
    div.style.overflow = 'scroll';
    div.style.visibility = 'hidden';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    return scrollWidth;
  }
  btns.forEach(btn => btn.addEventListener('click', openModal));
};
/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 851) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });

  //scrolling with raf (прокрутка с requestAnimationFrame())

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.2;
  links.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  //Pure js scrolling(Чистая js прокрутка)
  // const element = document.documentElement,
  //       body = document.body;

  // const calcScroll = () => {
  //     upElem.addEventListener('click', function(event) {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //         if(this.hash != '') {
  //             event.preventDefault();
  //             let hashElement = document.querySelector(this.hash), //getElementById(this.hash.substring(1)) можно и так
  //                 hashElementTop = 0;

  //             while(hashElementTop.offsetParent) {
  //                 hashElementTop += hashElement.offsetTop;
  //                 hashElement = hashElement.offsetParent;
  //             }

  //             hashElementTop= Math.round(hashElementTop);
  //             smoothScroll(scrollTop, hashElementTop, this.hash);
  //         }
  //     });
  // };

  // const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1,
  //         prevScrollTop,
  //         speed;

  //     if (to > from) {
  //         speed = 30;
  //     } else {
  //         speed = -30;
  //     }

  //     let move = setInterval(function(){
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //         if (
  //             prevScrollTop === scrollTop || 
  //             (to > from && scrollTop >= to) || 
  //             (to < from && scrollTop <= to)
  //         ) {
  //             clearInterval(move);
  //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
  //         } else {
  //             body.scrollTop += speed;
  //             element.scrollTop += speed;
  //             prevScrollTop = scrollTop;
  //         }
  //     },timeInterval);
  // };

  // calcScroll();
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_hamburgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburgerMenu */ "./src/js/modules/hamburgerMenu.js");
/* harmony import */ var _modules_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/countries */ "./src/js/modules/countries.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _components_customSelect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customSelect.js */ "./src/js/components/customSelect.js");
/* harmony import */ var _modules_scrolling_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scrolling.js */ "./src/js/modules/scrolling.js");






window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('#btn-app', 'modal', '.modal-content', 'modal_open', '.modal-header-close');
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])('#btn-countries', 'popup-form', '.popup-form-content', 'popup-form_open', '.popup-form-close');
  Object(_modules_hamburgerMenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_countries__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_components_customSelect_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_scrolling_js__WEBPACK_IMPORTED_MODULE_5__["default"])('.pageup');
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map