const modal = (btnSelector, modalSelector, contentModalSelector, open, close) => {
    const btns = document.querySelectorAll(btnSelector),
          modal = document.getElementById(modalSelector),
          scroll = fixScroll();

    function openModal()  {
        setTimeout(() => {
            modal.classList.add(open);

        },200);
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
        },200);

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
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        return scrollWidth;
    }

    btns.forEach(btn => btn.addEventListener('click', openModal));
};
export default modal;