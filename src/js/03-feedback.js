import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector ('.feedback-form'),
    textarea: document.querySelector ('.feedback-form textarea'),
}


refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(evt){
   const message = evt.target.value;
   console.log(message);
   localStorage.setItem(STORAGE_KEY, message);
}


function popularTextarea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
        if(savedMessage)
        { 
            console.log(savedMessage);
            refs.textarea.value = savedMessage;
        }
    }
    popularTextarea()

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt){
    evt.preventDefault();
    console.log('Отправляем форму');
    evt.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY)
}





// JSON.stringify(value)
// JSON.parse(value)