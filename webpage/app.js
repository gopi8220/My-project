const form=document.querySelector('#form');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const cpassword=document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})

function validateInputs(){
    const usernameVal=username.value.trim()
    const usernameVal=email.value.trim();
    const usernameVal=password.value.trim();
    const usernameVal=cpassword.value.trim();

    if(username===''){
    setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }
if(emailVal===''){
    setError(email,'email is required')
}
else if(!ValidateEmail(emailVal)){
setError(email,'please enter valid email')
}
else{
    setSuccess(Email)
}
if(password===''){
    setError(password,'password is ruquired')
}
else if(passwordVal.length<8){
    setError(password,'password must be 8 charcter required')
}
else{
    setSuccess(password)
}
if(cpasswordVal===''){
    setError(cpassword,'confirm password required')
}
else if(cpasswordVal!==passwordVal){
    setError(cpassword,'[Password not match')
}
else{
    setSuccess(cpassword)
}
}


function setError(element,message){
    const inputGroup=element.parantElements;
    const errorElements=inputGroup.querySelector('.error');

    errorElements.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup=element.parantElements;
    const errorElements=inputGroup.querySelector('.error');

    errorElements.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const ValidateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    );
};