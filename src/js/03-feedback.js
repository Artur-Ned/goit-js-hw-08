


const STORAGE_KEY = 'feedback-form-state';

const ref = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.submit')
}

ref.form.addEventListener('input', onText);
ref.form.addEventListener('submit', onFormSubmit);

const formData = {};
function onText(event) {
   
    
    formData[event.target.name] = event.target.value;

    console.log(formData);
    localStorage.setItem("STORAGE_KEY", JSON.stringify(formData));  
    
    //   // console.log(e.target.value);
 
    // let formElenet = event.currentTarget.elements;
    // let email = formElenet.email.value;
    // let message = formElenet.message.value;
      
 
    // console.log("hello");
}  
  
/**функция для формы */
function onFormSubmit(event) {
    event.preventDefault();
     
   
    // localStorage.removeItem("STORAGE_KEY");
    console.log(formData);
    event.target.reset();
}




    // let formData = {
    //     email,
    //     message
    // }
    
    // 

// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });








/** let formElements = event.currentTarget.elements;
    let email = formElements.email.value;
    let password = formElements.password.value;
    
    let formData = {
        email,
        password
    }
    if (email === '' || password === '') {
        alert('все поля должны быть заполнены')
    } else console.log(formData);
    
     event.currentTarget.reset();
     
     eretet@ukr.net

     
     */