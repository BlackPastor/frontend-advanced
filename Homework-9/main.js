function generateBlocks() {
  const container = document.createElement("div");
  document.body.append(container);
  container.className = "container";
  container.classList.add("upper");
  for (let i = 0; i < 25; i++) {
    const box = document.createElement("div");
    box.className = "box";
    container.appendChild(box);
    box.style.background = "#" + Math.random().toString(16).slice(-6);
  }
}

generateBlocks();

const text = document.createElement("h1");
text.innerHTML = "Advanced";
document.body.append(text);

function generateBlocksInterval() {
  const containerAdvanced = document.createElement("div");
  document.body.append(containerAdvanced);
  containerAdvanced.classList.add("container");
  for (let i = 0; i < 25; i++) {
    const box = document.createElement("div");
    box.className = "box";
    containerAdvanced.appendChild(box);
    box.style.background = "#" + Math.random().toString(16).slice(-6);
    setInterval(() => {
      box.style.background = "#" + Math.random().toString(16).slice(-6);
    }, 1000);
  }
}

generateBlocksInterval();
  
  