// prices
let bicycle = 15.678;
let car = 123.965;
let motorcycle = 90.2345;
// suma
let suma = bicycle + car + motorcycle;
// rounded suma
let sumaWithoutChange =
  Math.floor(bicycle) + Math.floor(car) + Math.floor(motorcycle);
let roundedSuma = Math.round(sumaWithoutChange / 100) * 100;
// odd or even
let booleanValue;
if (Math.floor(suma % 2 == 0)) {
  booleanValue = "парне число";
} else {
  booleanValue = "непарне число";
}
// change
let change = 500 - suma;
// middle price
let middlePriceValue = (suma / 3).toFixed(2);
// discount
let discount = (Math.random() * 50).toFixed(0);
// price with discount
let sumaWithDiscount = (suma - (suma / 100) * discount).toFixed(2);
// profit
let clearProfit = (suma / 2 - discount).toFixed(2);

// console list
let list = `
Максимальне число : ${Math.max(bicycle, car, motorcycle)};
Мінімальне число : ${Math.min(bicycle, car, motorcycle)};
Вартість всіх товарів : ${suma};
Округлена вартість всіх товарів : ${sumaWithoutChange};
Сума товарів округлена до сотень : ${roundedSuma};
Сума товарів : ${booleanValue};
Сума решти : ${change};
Середнє значення цін : ${middlePriceValue};
Випадкова знижка : ${discount}%;
Сума зі знижкою : ${sumaWithDiscount};
Чистий прибуток : ${clearProfit}.
`;

console.log(list);
