//declare variables from index.html to be able to render the login to become registrer-form. And the action-buttons.  

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
    styleToInput.setAttribute("class", "d-grid");
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
    regName.setAttribute("class", "form-control col mb-3 mt-3");
    regName.append(regNameLabel);
    styleToInput.append(regName);

    const regNameLastLabel = document.createElement("label");
    const regLastName = document.createElement("input");
    regLastName.setAttribute("id", "Last name");
    regLastName.setAttribute("type", "text");
    regLastName.setAttribute("class", " form-control col mb-3 mt-3");
    regLastName.setAttribute("placeholder", "Enter Last Name");
    regNameLastLabel.setAttribute("for", "Last Name");
    regLastName.setAttribute("required", "");
    regLastName.append(regNameLastLabel);
    styleToInput.append(regLastName);

    const regEmailLabel = document.createElement("label");
    const regEmail = document.createElement("input");
    regEmail.setAttribute("type", "email");
    regEmail.setAttribute("class", "form-control col mb-3 mt-3");
    regEmail.setAttribute("placeholder", "Enter Email");
    regEmail.setAttribute("required", "");
    regEmailLabel.setAttribute("for", "Email");
    regEmail.append(regEmailLabel);
    styleToInput.append(regEmail);

    const passLabel = document.createElement("label");
    const passW = document.createElement("input");
    passW.setAttribute("type", "password");
    passW.setAttribute("class", "form-control col mb-3 mt-3");
    passW.setAttribute("placeholder", " Enter Password");
    passW.setAttribute("id", "passW");
    passLabel.setAttribute("for", "Password");
    passW.setAttribute("required", "");
    styleToInput.append(passW);

    const passConfLabel = document.createElement("label");
    const passWConfirm = document.createElement("input");
    passWConfirm.setAttribute("type", "password");
    passWConfirm.setAttribute("class", "form-control col mb-3 mt-3");
    passWConfirm.setAttribute("id", "passWConfirm");
    passWConfirm.setAttribute("placeholder", "Repeat Password");
    passWConfirm.setAttribute("required", "");
    passConfLabel.setAttribute("for", "Password");
    styleToInput.append(passWConfirm);


    const CtaLogin = document.createElement("button");
    CtaLogin.setAttribute("type", "submit");
    CtaLogin.setAttribute("class", "btn btn-primary shadow-sm btn-block");
    CtaLogin.setAttribute("id", "CtaLogin");
    CtaLogin.innerHTML = "Save & login";
    styleToInput.append(CtaLogin);

    //control to se if passwords matches
    CtaLogin.addEventListener("click", function (event) {
        if (!passwordsMatch()) {
            event.preventDefault();
            return false;
        }
    }, false);

    function passwordsMatch() {
        let passValue = document.getElementById("passW").value;
        let passConValue = document.getElementById("passWConfirm").value;

        if (passValue != passConValue) {
            let wrongPass = document.createElement("p");
            wrongPass.setAttribute("style", "red");
            wrongPass.innerText = "Passwords dont match! Try again."
            styleToInput.append(wrongPass);
            return false;
        }
        return true;
    }
}



