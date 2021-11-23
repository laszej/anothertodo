const lista = document.getElementById ("lista");
const dodaj = document.getElementById ("dodaj");
const usuń = document.getElementById ("usuń");
let input = document.getElementById ("input");
 
 
dodaj.addEventListener('click', ()=>{
	let dodaneZadanie = document.createElement("div");
	let button = dodaneZadanie.createElement("button");
	var div = dodaneZadanie.createElement("div");
	div.innerHTML = input.value;
	lista.appendChild(dodaneZadanie);
	input.value = "";
	button.addEventListener("click", ()=>{lista.removeChild(dodaneZadanie)})
})
 
usuń.addEventListener("click", ()=>{lista.innerHTML=""})
 
