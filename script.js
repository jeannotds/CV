
const showOthersInfoPersonelle = document.querySelector('.show-others-info-personelle');
const containerForm = document.querySelector('.container-form');
const form = document.querySelector('form');

const quitter = document.querySelector('.quitter');


showOthersInfoPersonelle.addEventListener('click', ()=>{
    containerForm.style.display ="block";
    containerForm.style.transition ="all 3s ease";
    containerForm.classList.add("container-form");
    showOthersInfoPersonelle.style.display = "none";
    quitter.style.display = "block";

})
quitter.addEventListener('click', ()=>{
    console.log("salut!")
    quitter.style.display = "none";
    containerForm.style.display="none";
    showOthersInfoPersonelle.style.display = "block";

})

