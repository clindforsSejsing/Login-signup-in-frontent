let card = document.getElementById("card");
let regCta = document.getElementById("registrerCta");
let submitCta = document.getElementById("submitCta");
let regAndSignin = document.getElementById("regAndSigninCta");


//clear all html and add new by using function registrerInfo.
regCta.addEventListener("click", function () {
    card.innerHTML = "";
    registrerInfo();
});

submitCta.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location = "success.html";
});

//create form
function registrerInfo() {

    const regForm = document.createElement("form");
    regForm.setAttribute("class", "container-sm");
    regForm.setAttribute("id", "regForm");
    regForm.setAttribute("action", "./Bootstrap/success.html");
    card.append(regForm);

    const styleToInput = document.createElement("div");
    styleToInput.setAttribute("class", "form-group");
    regForm.append(styleToInput);

    const pageId = document.createElement("h1");
    pageId.innerText = "Registrer:";
    styleToInput.append(pageId);

    //create and validate form-input
    const regNameLabel = document.createElement("label");
    const regName = document.createElement("input");
    regNameLabel.setAttribute("for", "First Name");
    regName.setAttribute("id", "First Name");
    regName.setAttribute("type", "text");
    regName.setAttribute("required", "");
    regName.setAttribute("placeholder", "Enter First Name");
    regName.setAttribute("autocomplete", "username");
    regName.setAttribute("class", "form-control col mb-3 mt-3");
    regName.appendChild(regNameLabel);
    styleToInput.append(regName);

    const regNameLastLabel = document.createElement("label");
    const regLastName = document.createElement("input");
    regLastName.setAttribute("id", "Last name");
    regLastName.setAttribute("type", "text");
    regLastName.setAttribute("class", " form-control col mb-3 mt-3");
    regLastName.setAttribute("placeholder", "Enter Last Name");
    regNameLastLabel.setAttribute("for", "Last Name");
    regLastName.setAttribute("required", "");
    regLastName.appendChild(regNameLastLabel);
    styleToInput.append(regLastName);

    const regEmailLabel = document.createElement("label");
    const regEmail = document.createElement("input");
    regEmail.setAttribute("type", "email");
    regEmail.setAttribute("placeholder", "my_email@example.test");
    regEmail.setAttribute("autocomplete", "username");
    regEmail.setAttribute("class", "form-control col mb-3 mt-3");
    regEmail.setAttribute("required", "");
    regEmailLabel.setAttribute("for", "Email");
    regEmail.appendChild(regEmailLabel);
    styleToInput.append(regEmail);

    const passLabel = document.createElement("label");
    passLabel.setAttribute("for", "Password");
    const infoText = document.createElement("p");
    infoText.setAttribute("class", "small");
    infoText.innerHTML = "Password must contain: 8 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter";
    const passW = document.createElement("input");
    passW.setAttribute("type", "password");
    passW.setAttribute("autocomplete", "new-password");
    passW.setAttribute("class", "form-control col mb-6 mt-6");
    passW.setAttribute("placeholder", " Enter Password");
    passW.setAttribute("value", "");
    passW.setAttribute("id", "passW");
    passW.setAttribute("required", "");
    styleToInput.append(infoText);
    styleToInput.append(passW);

    const passConfLabel = document.createElement("label");
    const passWConfirm = document.createElement("input");
    passWConfirm.setAttribute("type", "password");
    passWConfirm.setAttribute("class", "form-control col mb-3 mt-3");
    passWConfirm.setAttribute("id", "passWConfirm");
    passWConfirm.setAttribute("placeholder", "Repeat Password");
    passWConfirm.setAttribute("autocomplete", "new-password");
    passWConfirm.setAttribute("required", "");
    passConfLabel.setAttribute("for", "Password");
    passWConfirm.appendChild(passConfLabel);
    styleToInput.append(passWConfirm);


    const CtaLogin = document.createElement("button");
    CtaLogin.setAttribute("type", "submit");
    CtaLogin.setAttribute("class", "btn btn-primary shadow-sm");
    CtaLogin.setAttribute("id", "CtaLogin");
    CtaLogin.innerHTML = "Save & login";
    styleToInput.append(CtaLogin);

    let errorMessage = document.createElement("p");
    errorMessage.setAttribute("id", "errorM");
    errorMessage.innerHTML = "☒ Use same password";
    errorMessage.style.visibility = "hidden";
    styleToInput.append(errorMessage);

    let secondErrorMessage = document.createElement("p");
    secondErrorMessage.setAttribute("id", "secErrorMessage");
    secondErrorMessage.innerHTML = "☒ Not safe enough. Try again";
    secondErrorMessage.style.visibility = "hidden";
    styleToInput.append(secondErrorMessage);

    //control to see if passwords matches and is safe enough
    CtaLogin.addEventListener("click", function (event) {
        if (validateForm()) {
            if (!controllPassword()) {
                event.preventDefault();

            }
            if (!validate_password()) {
                event.preventDefault();

            }
        }
    });

    function validateForm() {
        let validateFirstName = regName.reportValidity();
        let validateLastName = regLastName.reportValidity();
        let validateEmail = regEmail.reportValidity();
        if (validateFirstName && validateLastName && validateEmail) {
            return true;
        }
    } return false;



    function validate_password() {
        let passValue = document.getElementById("passW").value;
        let passConValue = document.getElementById("passWConfirm").value;
        let wrongPass = document.querySelector("#errorM");

        if (passValue != passConValue) {
            wrongPass.style.visibility = "visible";
            return false;
        } else {
            wrongPass.style.visibility = "hidden";
            return true;
        }
    }

    function controllPassword() {
        let passValue = document.getElementById("passW").value;


        let wrongPass = document.querySelector("#secErrorMessage");
        let passWord = /^[A-Za-z]\w{8,15}$/;
        if (!passValue.match(passWord)) {
            wrongPass.style.visibility = "visible";
            return false;
        } else {
            wrongPass.style.visibility = "hidden";
            return true;
        }


    }


}

