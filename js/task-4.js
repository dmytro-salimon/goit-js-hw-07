const loginForm = document.querySelector(".login-form");

const onFormSubmit = event => {
    event.preventDefault();
    
    const emailValue = loginForm.elements.email.value.trim();
    const passwordValue = loginForm.elements.password.value.trim();

    const formData = {
      [loginForm.elements.email.name]: loginForm.elements.email.value,
      [loginForm.elements.password.name]: loginForm.elements.password.value,
    };
    
    if (!emailValue || !passwordValue) {
        alert("All form fields must be filled in");
        return;
    };
    
    console.log(formData);
    
    loginForm.reset();
}

loginForm.addEventListener("submit", onFormSubmit);
