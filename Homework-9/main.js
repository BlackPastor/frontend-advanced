


function generateBlocks() {
    let container = document.querySelector(".container");
  
    for (let i = 0; i < 25; i++) {
      let box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundColor = getRandomBgColor();
      container.appendChild(box);
    }
  }
  
  function getRandomBgColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
  }
  
  generateBlocks();
  
  let container2 = document.querySelector(".container2");
  let title = document.createElement("h1");
  document.body.after(title, container2);
  title.innerHTML = "Advanced";
  
  function generateBlocksTwo() {
    let container2 = document.querySelector(".container2");
  
    for (let i = 0; i < 25; i++) {
      let box = document.createElement("div");
      box.classList.add("box");
      setInterval(() => {
        box.style.backgroundColor = getRandomBgColor();
      }, 1500);
  
      console.log(box);
      container2.appendChild(box);
    }
  }
  
  generateBlocksTwo();
  
  
  