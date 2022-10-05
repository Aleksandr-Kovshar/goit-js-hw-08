import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(form);
  formData.forEach((name, value) => console.log(name, value));

  evt.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('input', throttle(onTextareaInput, 500));

function onTextareaInput(evt) {
  let savedInput = localStorage.getItem(STORAGE_KEY);
  savedInput = savedInput ? JSON.parse(savedInput) : {};
  savedInput[evt.target.name] = evt.target.value;

  console.log(savedInput);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedInput));
}

function initForm() {
  let savedInput = localStorage.getItem(STORAGE_KEY);

  if (savedInput) {
    let savedInputq = JSON.parse(savedInput);
    console.log(savedInputq);

    Object.entries(savedInputq).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
initForm();



// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// let formData = {};

// const refs = {
//     form: document.querySelector ('.feedback-form'),
//     formEmail: document.querySelector ('[type="email"]'),
//     formMessage: document.querySelector ('.feedback-form textarea'),
// }

// refs.form.addEventListener('input', throttle(onTextareaInput, 500));

// function onTextareaInput(evt){
//     formData[evt.target.name]=evt.target.value;
//     console.log(formData);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

//  }

// function popularTextarea() {
//     const savedformData = localStorage.getItem(STORAGE_KEY);
//     const parseData = JSON.parse(savedformData);

//         if(parseData)
//         {
//             console.log(parseData);
//             refs.formEmail.value = parseData.email;
//             refs.formMessage.value = parseData.message;
//         }
//     }
//     popularTextarea()

// refs.form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(evt){
//     evt.preventDefault();
//     console.log(formData);
//     evt.target.reset()
//     localStorage.removeItem(STORAGE_KEY)
// }
