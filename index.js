const lista = document.getElementById ("lista");
const dodaj = document.getElementById ("dodaj");
const usuń = document.getElementById ("usuń");
let input = document.getElementById ("input");
 
 
dodaj.addEventListener('click', ()=>{
	let dodaneZadanie = document.createElement("div");
	let button = document.createElement("button");
    button.classList.add("delete-btn")
    button.innerHTML="Usuń zadanie"
	let div = document.createElement("div");
	div.innerHTML = input.value   
	lista.appendChild(dodaneZadanie);
    dodaneZadanie.appendChild(div)
    div.appendChild(button)
	input.value = "";
	button.addEventListener("click", ()=>{lista.removeChild(dodaneZadanie)})
})
 
usuń.addEventListener("click", ()=>{lista.innerHTML=""})






