const menu = () => {
    const burger = document.querySelector('.header__hamburger'),
    scroll = fixScroll();


    function openMenu()  {
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
        const isClickItem = !!e.target.closest('.header__v-menu--item a');//!! даёт true
        if (isClickItem) {
            closeMenu();
        }
    }

    function handleOutside(e) {
        const isClickOutside = !!e.target.closest('.header__overlay');//!! даёт true
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
export default menu;