
const showOthersInfoPersonelle = document.querySelector('.show-others-info-personelle');
const containerForm = document.querySelector('.container-form');
const form = document.querySelector('form');
const quitter = document.querySelector('.quitter');
const prenomInput = document.querySelector('#prenom');
const nomInput = document.querySelector('#nom');
const emailInput = document.querySelector('#email');
const profilInput = document.querySelector('#profil');
const contactInput = document.querySelector('#contact');
const adresseInput = document.querySelector('#adresse');
///////////////////////////////////////////////////////////////////
const userNames = document.querySelector('.user-names');
const userFirstName = document.querySelector('.user-firstName');
const userLastName = document.querySelector('.user-lastName');
const userProfil = document.querySelector('.user-profil');
const userInfoEmail = document.querySelector('.user-info-email');
const userInfoContact = document.querySelector('.user-info-contact');
const userInfoAdress = document.querySelector('.user-info-adress');
////////////////////////////////////////////////////////////////////
const codePostal = document.querySelector('#code-postal');
const ville = document.querySelector('#ville');
const dateNais = document.querySelector('#date-nais');
const lieuNais = document.querySelector('#lieu-nais');
const nationalite = document.querySelector('#nationalite');
const etatCivil = document.querySelector('#etat-civil');
const titre = document.querySelector('#titre');


showOthersInfoPersonelle.addEventListener('click', ()=>{
    myShowOthersInfoPersonelle()
})
quitter.addEventListener('click', ()=>{
    myQuitter();
})

prenom.addEventListener('toggle', (e)=>{
    prenom.textContent = prenom.value;
    console.log(prenom.textContent)
})

function myQuitter(){
    console.log("salut!")
    quitter.style.display = "none";
    containerForm.style.display="none";
    showOthersInfoPersonelle.style.display = "block";
}

function myShowOthersInfoPersonelle(){
    containerForm.style.display ="block";
    containerForm.style.transition ="all 3s ease";
    containerForm.classList.add("container-formjs");
    showOthersInfoPersonelle.style.display = "none";
    quitter.style.display = "block";
}


prenomInput.addEventListener('input', (e)=>{
    userNames.textContent = prenomInput.value;
})
nomInput.addEventListener('input', (e)=>{
    userFirstName.textContent = nomInput.value;
})
emailInput.addEventListener('input', (e)=>{
    userInfoEmail.textContent = emailInput.value;
})
profilInput.addEventListener('input', (e)=>{
    userProfil.textContent = profilInput.value;
})
contactInput.addEventListener('input', (e)=>{
    userInfoContact.textContent = contactInput.value;
})
adresse.addEventListener('input', (e)=>{
    userInfoAdress.textContent = adresse.value;
})