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
        const isClickTabs = countries[items[i].dataset.countrie].style.opacity === '1' 
        && items[i].style.backgroundColor === '#FFF';
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
export default countries;