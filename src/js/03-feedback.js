


const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const formRef = document.querySelector('.feedback-form');
const textareaRef = document.querySelector('.feedback-form textarea');
const emailRef = document.querySelector('.feedback-form input');


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
  if (saveMassages) { 
    emailRef.value = saveMassages.email;
    textareaRef.value = saveMassages.message;
    }

   }   
    


function onFormSubmit(event) {
    event.preventDefault();
    
    if (emailRef.value === "" || textareaRef.value === "") {
        alert("Нужно заполнить все формы")
        return
    }
    
    event.target.reset(); 
   
    localStorage.removeItem("feedback-form-state");
    console.log(`E-mail: ${formData.email}, Message: ${formData.message}`);
   
}



