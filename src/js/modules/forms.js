import { postData } from "../services/requests";

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          option = document.querySelector('option');


    const message = {
        loading: 'Загрузка...',
        success: `
            <div class="finally-body">
                <div class="finally__circle-big">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z" stroke="#6FD6BD" stroke-width="3.33333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M25 16.6667L18.3333 23.3334L15 20.0001" stroke="#6FD6BD" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="finally__text-content">
                    <h2 class="title title_fz32">Заявка отправлена</h2>
                    <p>Мы отправим уведомление, когда обменные операции станут доступны в вашей стране</p>
                </div>
            </div>
        `,
        
        failure: 'Что-то пощло не так',
        optionREdText: 'Выберите страну для дальнейшего подключение!!!',
        spinner: 'img/gg.gif',
        ok: '',
        fail: 'img/fail.gif'
    };

    const path = {
        question: 'question.php',
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = '';
        });
    };


    form.forEach(item => {
        item .addEventListener('submit', (e) => {
            e.preventDefault();
            if (option.value === '') {
                document.querySelector('.popup-form__select-custom').style.borderColor = 'red';
                document.querySelector('.popup-form__select-custom').insertAdjacentHTML('afterend', `
                    <p class="redText" style="color: red; font-size: 16px">${message.optionREdText}</p>
                `);
                
                e.preventDefault();
            } else {
                
                

                let statusMessage = document.createElement('div');
                statusMessage.classList.add('popup-form__status');
                item.parentNode.append(statusMessage);
    
                item.classList.add('animated', 'fadeOutUp');
                setTimeout(() => {
                    item.style.display = 'none';
                },400);
    
                let statusImg = document.createElement('img');
                statusImg.setAttribute('src', message.spinner);
                statusImg.classList.add('animated', 'fadeInUp');
                statusMessage.append(statusImg);
    
                let textMessage = document.createElement('div');
                
                statusMessage.appendChild(textMessage);
    
                const formData = new FormData(item);
    
                const api = 'https://test-4abc2-default-rtdb.firebaseio.com/goods';
    
                postData(api, formData)
                    .then(res => {
                        statusImg.remove();
                        document.querySelector('.popup-form-body h2').textContent = '';
                        statusMessage.insertAdjacentHTML('beforeend', message.success); 
                    })
    
                    .catch( (err) => {
                        statusImg.setAttribute('src', message.fail);
                        textMessage.textContent = message.failure;
                    })
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            const redText = !!document.querySelector('.redText');

                            document.querySelector('.popup-form-body h2').textContent = 'Подключить мою страну';
                            statusMessage.remove();
                            item.style.display = 'block';
                            item.classList.remove('fadeOutUp');
                            item.classList.add('fadeinUp');
                            document.querySelector('.popup-form__select-custom p').textContent = '';
                            document.querySelector('.popup-form__select-custom p').textContent = 'Выберите страну';
                            option.value = '';
                            document.querySelector('.popup-form__select-custom').style.borderColor = '';
                            if (redText) {
                                document.querySelector('.redText').remove();
                            }
                            
                        }, 5000);
                    });
            }
                
        });
    });
}

export default forms;