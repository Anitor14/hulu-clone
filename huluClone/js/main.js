// Caching the dom
const modal = document.querySelector('.modal');
const registerModal = document.querySelector('.register-modal');
const registrationCloseBtn = registerModal.querySelector('.close');
const loginBtn= document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');
const registerBtn = document.querySelector('.register-btn')
const userName = registerModal.querySelector('#username');
const email = registerModal.querySelector('#email');
const passWord = registerModal.querySelector('#password');
const passWordCheck = registerModal.querySelector('#password-check');



// adding event listener 
registerBtn.addEventListener('click', openRegisterModal);
loginBtn.addEventListener('click', openModal);
registrationCloseBtn.addEventListener('click', closeRegistrationModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openRegisterModal(){
    registerModal.style.display='block';
}

function openModal(){
    modal.style.display = 'block';
}
function closeRegistrationModal(){
    registerModal.style.display= 'none';
}

function closeModal(){
    modal.style.display ='none'
}

function outsideClick(e){
    if(e.target == modal){
        closeModal();
    }else if(e.target == registerModal){
        closeRegistrationModal();
    }
}

registerModal.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const passWordValue = passWord.value.trim();
    const passWordCheckValue = passWordCheck.value.trim();
    
    // console.log(userNameValue, emailValue, passWordValue,passWordCheckValue);
    if(userNameValue == ""){
        // show error
        // add error class
        setErrorFor(userName, 'Username cannot be block');
    }else {
        //add success class
        setSuccesssClass(userName);
    }

    if(emailValue == ''){
        setErrorFor(email, 'Email cannot be blank');
    }else {
        setSuccesssClass(email);
    }

    
    if(passWordValue == ''){
        setErrorFor(passWord, 'Password cannot be blank');
    }else {
        setSuccesssClass(passWord);
    }

    
    if(passWordCheckValue == '' ||  passWordCheckValue != passWordValue){
        setErrorFor(passWordCheck, 'password does not match');
    }else {
        setSuccesssClass(passWordCheck); 
    }
}

function setErrorFor(input , message){
    const formControl = input.parentElement;
    formControl.classList.remove('success');
    let small = formControl.querySelector('small');
    small.style.display = 'block';
    // add message inside small
    small.innerText = message;
    small.style.color = 'red';
    // small.style.fontSize='px'
    formControl.classList.add('error')
}

function setSuccesssClass(input){
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    let small = formControl.querySelector('small');
    small.style.display = 'none';
    formControl.classList.add('success');
}