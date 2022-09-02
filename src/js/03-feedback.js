import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

const formData = {};

populateText();

function onFormInput(evt) {
    evt.preventDefault();
    formData[evt.target.name] = evt.target.value;
    // console.log(evt.target.name);
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
}

function populateText() {
    const savedInputData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    // console.log(savedInputData.email);
    // console.log(refs.form.email.value);

    if (savedInputData) {
        refs.form.email.value = savedInputData.email;
        refs.form.message.value = savedInputData.message;
    }
}