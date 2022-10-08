const urlFilms = "https://swapi.dev/api/films";
let urlPlanets = "https://swapi.dev/api/planets/";
const buttonGetInfo = document.querySelector(".heroes");
const buttonGetPlanets = document.querySelector(".stars");
const inputGetFilm = document.querySelector(".film");

async function getInfo() {
  document.querySelector(
    ".content"
  ).innerHTML = `<p class="loading">Loading...</p>`;
  try {
    let request = await fetch(`${urlFilms}/${inputGetFilm.value}`, {
      method: "GET",
    });
    let response = await request.json();
    let heroesRequest = [];
    let heroesResponse = [];
    for (let i = 0; i < response.characters.length; i++) {
      heroesRequest[i] = await fetch(response.characters[i]);
      heroesResponse[i] = await heroesRequest[i].json();
    }
    showInfo(heroesResponse);
  } catch (error) {
    alert("Будь ласка виберіть фільм.");
  }
}

async function getPlanets() {
  document.querySelector(".content").innerHTML = "";
  try {
    let request = await fetch(urlPlanets, {
      method: "GET",
    });
    let response = await request.json();
    showPlanets(response.results);
    let buttonPrev = createButton("planetsButtons", "< prev");
    let buttonNext = createButton("planetsButtons", "next >");
    
    if(!response.previous == 0) {
      buttonPrev.addEventListener("click", function() {
        urlPlanets = response.previous;
        getPlanets();
      });
    };
    if(!response.next == 0) {
      buttonNext.addEventListener("click", function() {
        urlPlanets = response.next;
        getPlanets();
      })
    }
  } catch(error) {
    alert(error);
  }
}
function showInfo(array) {
  document.querySelector(".content").innerHTML = "";
  array.forEach((element) => {
    createList("info").innerHTML =
    `${element.name}  <img class="img" src = ./img/${getGender(element.gender)} width ="20px"> ${element.birth_year}
    `
  });
}

function showPlanets(array) {
  document.querySelector(".content").innerHTML = "";
  array.forEach(element => {
    createList("planets").innerHTML = element.name;
  })
}

function getGender(gender) {
  if(gender === "male") {
    return "male.svg"
  } else if(gender === "female") {
    return "female.svg"
  } else {
    return "robot.svg"
  }
}

function createList(className) {
  let div = document.createElement("div");
  document.querySelector(".content").append(div);
  div.classList.add(className);
  return div;
}

function createButton(className, html) {
  let button = document.createElement("button");
  document.querySelector(".content").append(button);
  button.classList.add(className);
  button.innerHTML = html;
  return button;
}

buttonGetInfo.onclick = getInfo;
buttonGetPlanets.onclick = getPlanets;
