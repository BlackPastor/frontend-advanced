function* createIdGenerator() {
  let count = 1;
  while (true) {
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

function* newFontGenerator(font) {
  let changeFont = yield;
  while (true) {
    changeFont === "increase" ? font += 2 : font -= 2;
    changeFont = yield font;
  };
};

const fontGenerator = newFontGenerator(16);

fontGenerator.next();


increase.addEventListener("click", () => {
  document.body.style.fontSize = `${fontGenerator.next("increase").value}px`;
});

reduce.addEventListener("click", () => {
  document.body.style.fontSize = `${fontGenerator.next("reduce").value}px`;
});
