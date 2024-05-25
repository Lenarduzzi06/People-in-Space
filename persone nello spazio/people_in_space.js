
async function populate() {


	const requestURL = "https://lenarduzzi06.github.io/my-repository/superheroes.json";

	const request = new Request(requestURL); 

	const response = await fetch(request);  

	const people = await response.json();

	populateHeader(people);

	populatePeople(people);

}


function populateHeader(obj){

	const header = document.querySelector('header');

	const myH1 = document.createElement('h1');

	myH1.textContent = obj.title;

	header.appendChild(myH1);

}

function populatePeople(obj){

	const section = document.querySelector('section');

	const person = obj.people;

	for (const people of person) {

		const myArticle = document.createElement('article');

		const myH3 = document.createElement('h3');

		const myP1 = document.createElement('p');

		const myP2 = document.createElement('p');

		const myP3 = document.createElement('p');

		myP1.textContent = people.name;

		myP2.textContent = `Craft: ${people.craft}`;

		myP3.textContent = `Numero di persone nello spazio sono: ${obj.number}`;


		
		myArticle.appendChild(myH3);
		myArticle.appendChild(myP1);
		myArticle.appendChild(myP2);
		myArticle.appendChild(myP3);

		section.appendChild(myArticle);



		}



}

populate();