import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

let formData = {
    // email: '',
    // message:''
};
// let savedInputData = '';

populateText();

function onFormInput(evt) {
    // evt.preventDefault();

    if (evt.target.value) {
        formData[evt.target.name] = evt.target.value;
    }
    formData[evt.target.name] = evt.target.value;
    // console.log(evt.target.name);
    // console.log('formData: ', formData);
    // console.log(evt.target.value);

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    // console.log(localStorage);
};

function onFormSubmit(evt) {
    evt.preventDefault();

    const formElements = evt.target.elements;
    if (formElements.email.value === '' || formElements.message.value === '') {
        return alert('Please check all field!')
    };
    evt.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    formData = {};
}

function populateText() {
    const savedInputData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(savedInputData.email);
    // console.log(refs.form.email.value);

    if (savedInputData) {
        // refs.form.email.value = savedInputData.email || '';
        // refs.form.message.value = savedInputData.message || '';
        refs.input.value = !!savedInputData.email ? savedInputData.email : '';
        refs.textarea.value = !!savedInputData.message ? savedInputData.message : '';
        formData = savedInputData;

    };

}



/**
 * function writeInput() {
  const formData = {};
  formData[findInput.name] = findInput.value;
  formData[findText.name] = findText.value;
  localStorage.setItem(SAVE_KEY, JSON.stringify(formData));
}
 */