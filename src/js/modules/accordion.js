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
        if(panel.previousElementSibling.classList.contains('faq__accordion_active')) {
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

export default accordion;

