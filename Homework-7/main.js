const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// first function

function getMyTaxes(number) {
  return (number * this.tax).toFixed(0);
}

console.log(
  `При зарплаті 1500$ в Україні я заплачу ${getMyTaxes.call(
    ukraine,
    1500
  )}$ податку.`
);
console.log(
  `При зарплаті 1500$ в Латвії я заплачу ${getMyTaxes.call(
    latvia,
    1500
  )}$ податку.`
);
console.log(
  `При зарплаті 1500$ в Литві я заплачу ${getMyTaxes.call(
    litva,
    1500
  )}$ податку.`
);

// second function

function getMiddleTaxes() {
  return (this.middleSalary * this.tax).toFixed(0);
}

console.log(
  `Середній податок в Україні становить ${getMiddleTaxes.call(ukraine)}$.`
);
console.log(
  `Середній податок в Латвії становить ${getMiddleTaxes.call(latvia)}$.`
);
console.log(
  `Середній податок в Литві становить ${getMiddleTaxes.call(litva)}$.`
);

// third function

function getTotalTaxes() {
  return (this.tax * this.middleSalary * this.vacancies).toFixed(0);
}
console.log(
  `Всього в Україні платять ${getTotalTaxes.call(ukraine)}$ податків.`
);
console.log(`Всього в Латвії платять ${getTotalTaxes.call(latvia)}$ податків.`);
console.log(`Всього в Литві платять ${getTotalTaxes.call(litva)}$ податків.`);

// fourth function

function getMySalary() {
  let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
  let taxes = Math.floor(salary * this.tax);
  let profit = salary - taxes;
  let mySalary = {
    salary,
    taxes,
    profit,
  };
  return mySalary;
}

let timerId = setInterval(() => console.log(getMySalary.call(ukraine)), 10000);
setTimeout(() => {
  if (confirm("Do you want to stop counting?")) {
    clearInterval(timerId);
  }
}, 20000);
