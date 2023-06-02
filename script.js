

let form = document.querySelector("#form")
let formInput = document.querySelector(".form__input")
let inputValidation = document.querySelector(".form__error")
formInput.value =""

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    console.log("submitted",e);
    onValidated()
})


formInput.addEventListener("input",(e)=>{
   
    showValidation()
})


const showValidation=()=>{
    const validityState = formInput.validity;
    if(validityState.patternMismatch){
        formInput.setCustomValidity("Example: email@company.com")
        inputValidation.style.display = "inline"
    }else{
        inputValidation.style.display = "none"
        formInput.setCustomValidity("")
    }

    formInput.reportValidity();
}


const onValidated=()=> {
    let email = formInput.value;
    let queryString= `?email=${encodeURIComponent(email)}`;
    window.location = 'success.html'+ queryString;
   

}

