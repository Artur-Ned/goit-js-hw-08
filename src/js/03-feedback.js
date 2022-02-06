


const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form message');
const emailRef = document.queryCommandIndeterm('.feedback-form input');

console.log(typeof(emailRef));
console.log(typeof(textareaRef));

formRef.addEventListener('input', onText);
formRef.addEventListener('submit', onFormSubmit);
 
checkFormValue()   

function onText(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));  
}  
  

function checkFormValue() {
    const formtext = localStorage.getItem('feedback-form-state');
    const saveMassages = JSON.parse(formtext);
    console.log(saveMassages.message);
    console.log(saveMassages.email);
    emailRef.value = saveMassages.email;
    textareaRef.value = saveMassages.message;
    
}   
    


function onFormSubmit(event) {
    event.preventDefault();
    // event.target.reset(); 
   
    // localStorage.removeItem("STORAGE_KEY");
    console.log("formData");
   
}

