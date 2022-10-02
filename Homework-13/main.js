function* createIdGenerator() {
    let count = 1;
    while(true) {
      yield count++;
    }
  }
  const idGenerator = createIdGenerator();
  
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);

/*******************************/

const increase = document.querySelector(".increase");
const reduce = document.querySelector(".reduce");
const text = document.querySelector(".text");

function* newFontGenerator(font) {
    let changeFont = yield;
    while(true) {
        changeFont === "increase" ? font +=2 : font -= 2;
        changeFont = yield font;
    }
}

const fontGenerator = newFontGenerator(14);

fontGenerator.next();

increase.addEventListener("click", () => {
    text.style.fontSize = `${fontGenerator.next("increase").value}px`
})
reduce.addEventListener("click", () => {
    text.style.fontSize = `${fontGenerator.next("reduce").value}px`
})
