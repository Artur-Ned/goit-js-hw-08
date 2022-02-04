


const STORAGE_KEY = 'feedback-form-state';

const ref = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.submit')
}

ref.form.addEventListener('input', foo1);
ref.form.addEventListener('submit', foo2);




function foo1(event) {
    console.log(event.target.value);

 let formElenet = event.currentTarget.elements;
    // let email = formElenet.email.value;
    // let message = formElenet.message.value;
      
    
    
    console.log("hello");
    
    
    
    // let formData = {
    //     email,
    //     message
    // }
    
    // localStorage.setItem("STORAGE_KEY", JSON.stringify(formData));



}




/**функция для формы */
function foo2(event) {
    event.preventDefault();
     
   
    localStorage.removeItem("STORAGE_KEY");
    console.log(formData);
    event.target.reset();
}

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