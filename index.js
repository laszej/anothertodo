const lista = document.getElementById ("lista");
const dodaj = document.getElementById ("dodaj");
const usuń = document.getElementById ("usuń");
let input = document.getElementById ("input");


dodaj.addEventListener('click', ()=>{
let dodaneZadanie = document.createElement("div");
dodaneZadanie.innerHTML = `<button id="usuwacz"> usuń zadanie </button> ${input.value}<br> `;
lista.appendChild(dodaneZadanie);
input.value = "";
dodaneZadanie.addEventListener("click", ()=>{lista.removeChild(dodaneZadanie)})})

usuń.addEventListener("click", ()=>{lista.innerHTML=""})









