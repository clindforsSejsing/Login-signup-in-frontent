let RegCta = document.getElementById("regCta");

let submitCta = document.getElementById("sCta");

let card = document.getElementById("card");

RegCta.addEventListener("click", function () {
    // window.alert("hello");

    card.innerHTML = "";
    registrerInfo();
});

submitCta.addEventListener("submit", function (event) {
    event.preventDefault();

    //kör kontroller här så sidan inte byts förrän alla req gått igenom.
});

function registrerInfo() {

    const regForm = document.createElement("form");
    regForm.setAttribute("class", "container-sm");
    regForm.setAttribute("action", "./Bootstrap/success.html");
    card.append(regForm);

    const styleToInput = document.createElement("div");
    styleToInput.setAttribute("class", "d-grid");
    regForm.append(styleToInput);

    const pageId = document.createElement("h1");
    pageId.innerText = "Registrer:";
    styleToInput.append(pageId);

    const regName = document.createElement("input");
    regName.setAttribute("id", "name");
    regName.setAttribute("type", "text");
    regName.setAttribute("placeholder", "First Name");
    regName.setAttribute("class", "form-control col mb-3 mt-3");
    styleToInput.append(regName);

    const regLastName = document.createElement("input");
    regLastName.setAttribute("id", "firstname");
    regLastName.setAttribute("type", "text");
    regLastName.setAttribute("class", " form-control col mb-3 mt-3");
    regLastName.setAttribute("placeholder", "Last Name");
    styleToInput.append(regLastName);

    const regEmail = document.createElement("input");
    regEmail.setAttribute("type", "email");
    regEmail.setAttribute("class", "form-control col mb-3 mt-3");
    regEmail.setAttribute("placeholder", "Email");
    styleToInput.append(regEmail);

    const passW = document.createElement("input");
    passW.setAttribute("type", "password");
    passW.setAttribute("class", "form-control col mb-3 mt-3");
    passW.setAttribute("placeholder", "Password");
    styleToInput.append(passW);

    const CtaLogin = document.createElement("button");
    CtaLogin.setAttribute("type", "submit");
    CtaLogin.setAttribute("class", "btn btn-primary shadow-sm btn-block");
    CtaLogin.setAttribute("id", "CtaLogin");
    CtaLogin.innerHTML = "Save & login";
    styleToInput.append(CtaLogin);

    CtaLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        //kör kontroller här så sidan inte byts förrän alla req gått igenom, och då skicka tillbaka till greetingssidan. 
    });

}