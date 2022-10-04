import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';
let formData = {};



const refs = {
    form: document.querySelector ('.feedback-form'),
    formEmail: document.querySelector ('[type="email"]'),
    formMessage: document.querySelector ('.feedback-form textarea'),
}


refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(evt){
    formData[evt.target.name]=evt.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
 }


function popularTextarea() {
    const savedformData = JSON.parse (localStorage.getItem(STORAGE_KEY));
        if(savedformData)
        { 
            console.log(savedformData);
            refs.formEmail.value = savedformData.email;
            refs.formMessage.value = savedformData.message;
        }
    }
    popularTextarea()

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt){
    evt.preventDefault();
    console.log(formData);
    evt.target.reset()
    localStorage.removeItem(STORAGE_KEY)
}



