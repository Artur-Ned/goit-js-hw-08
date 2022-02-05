


const STORAGE_KEY = 'feedback-form-state';

const ref = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.submit')
}

ref.form.addEventListener('input', onText);
ref.form.addEventListener('submit', onFormSubmit);

const formData = {};
checkLocalStor()
function onText(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("STORAGE_KEY", JSON.stringify(formData));  
}  
        
function checkLocalStor() { 

    const formtext = localStorage.getItem('feedback-form-state');
   
    for (const elem in formtext) {
        console.log(elem)
    }
    
//     const saveMassages = JSON.parse(formtext);
//     // console.log(saveMassages);
// for (const key of formtext) { 
// console.log(Object.keys(formtext)); 
// console.log(Object.values(formtext));   
//     }
}   

// console.log(formData);
/**функция для формы */


function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset(); 
   
    // localStorage.removeItem("STORAGE_KEY");
    console.log(formData);
   
}

const formtext = localStorage.getItem('STORAGE_KEY');
const saveMassages = JSON.parse(formtext);
console.log(saveMassages.email);
console.log(saveMassages.message);

// let virtMassages = {
//     email: "tes@ueue1",
//     message: "qwqeqeeq",
// }







console.log(saveMassages);
let message = '';
let email = '';
for (elem in saveMassages) {
    message = saveMassages[elem];
    // email = saveMassages[elem]; 
    // console.log(message);
    console.log(message);


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