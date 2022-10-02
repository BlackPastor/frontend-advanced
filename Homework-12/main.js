async function getInfo() {
  try {
    let characters = await fetch("https://swapi.dev/api/people/");
    let arrayOfCharacters = await characters.json();
    arrayOfCharacters = arrayOfCharacters.results;
    let person;
    let list = document.querySelector(".characters");
    for (person in arrayOfCharacters) {
      list.innerHTML += `
        <li class="person">
            <h3>${arrayOfCharacters[person].name}</h3>
            <span>${arrayOfCharacters[person].birth_year}</span>
            <a href="">${arrayOfCharacters[person].gender}</a>
        </li>
         `;
    }
  } catch {
    alert(err);
  }
}

let heroes = document.querySelector(".heroes");
heroes.onclick = getInfo;

async function getPlanets() {

  let planets = await fetch("https://swapi.dev/api/planets/");
  let planetsSW = await planets.json();
  planetsSW = planetsSW.results;
  console.log(planetsSW);
  let planet;
  let list = document.querySelector(".planets");
  for(planet in planetsSW) {
    list.innerHTML += `
    <li class="planets">
        <h3>${planetsSW[planet].name}</h3>
    </li>
     `;
  }
}

let planets = document.querySelector(".stars");
planets.onclick = getPlanets;