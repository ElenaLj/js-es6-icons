const icone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//Milestone 1

//ciclo for per inserire dinamicamente le icone con template literal
// let elements = "";

// for (let i = 0; i < icone.length; i++) {
// 	elements += `
// 	<div class="box">
//         <i class="${icone[i].family} ${icone[i].prefix}${icone[i].name}"></i>
//         <span>${icone[i].name}</span>
//     </div>
// 	`
// }
// console.log(elements);

// //inserisco gli elementi creati nel container
// const itemsContainer = document.getElementById("container");

// // output HTML
// itemsContainer.innerHTML = elements;


//Milestone 1 con metodo forEach + Milestone 2 + Milestone 3

//variabile del pulsante run
const runButton = document.getElementById("run");

runButton.addEventListener("click", function(){

	//variabile per prendere il valore delle icone
	const selectIcon = document.getElementById("icone").value;
	// console.log(selectIcon);

	//switch per la selezione delle icone
	switch (selectIcon) {
		case "animal":
			// console.log("Ha scelto animal");
		break;

		case "vegetable":
			// console.log("Ha scelto veggie");
		break;

		case "user":
			// console.log("Ha scelto user");
		break;

		case "all":
			// console.log("Ha scelto all");
		break;
	}
});

let elements = "";

icone.forEach((icon) => {
	elements += `
	<div class="box">
        <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.color}"></i>
        <span>${icon.name}</span>
    </div>
	`

	// strada troppo complicata e non sono in grado!

	// if(icon.color == "orange") {
	// 	console.log("Orange");
	// 	elements.classList.add("orange");
	// } 
	// else if (icon.color == "green") {
	// 	console.log("Green");
	// 	elements.classList.add("green");
	// } else {
	// 	console.log("Blue");
	// 	elements.classList.add("blue");
	// }
});

console.log(elements);

//inserisco gli elementi creati nel container
const itemsContainer = document.getElementById("container");

// output HTML
itemsContainer.innerHTML = elements;