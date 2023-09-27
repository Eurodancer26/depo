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
        },300);
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
        },300);
        detachSelectEvent();
    }

    function handleOutside(e) {
        const isClickOutside = !!e.target.closest('.popup-form__select-item');
        if (isClickOutside) {
            selectText.style.opacity = '1';
            selectText.textContent = e.target.textContent;
            document.querySelector('option').value = selectText.textContent;
            closeSelectCustom();
        }
    }

    function attachSelectEvent(e) {
        selectCust.addEventListener('click', closeSelectCustom);
        selectItem.forEach(option => {
            option.addEventListener('click', (e) => {
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

    selectCust.addEventListener('click', (e) => {
        
        openSelectCustom();
    } );

    
};

export default customSelect; 