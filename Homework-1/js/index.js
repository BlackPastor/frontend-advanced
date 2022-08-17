// varibles

let a = 15.678,
  b = 123.965,
  c = 90.2345;

// max and min numbers

document.writeln("Maximum price : " + Math.max(a, b, c) + "." + "<br/>");

document.writeln("Minimum price : " + Math.min(a, b, c) + "." + "<br/>");

// total price of goods

let sumaOfAllGoods = a + b + c;
document.writeln("Suma for goods : " + sumaOfAllGoods + "." + "<br/>");

let sumaWithoutChange = Math.floor(a) + Math.floor(b) + Math.floor(c);

document.writeln("Suma without change : " + sumaWithoutChange + "." + "<br/>");

let roundedSuma = Math.round(sumaWithoutChange / 100) * 100;

document.writeln("Rounded to hundred suma : " + roundedSuma + "." + "<br/>");

if (roundedSuma % 2 == 0) {
  document.writeln("Boolean value of suma : Even." + "<br/>");
}
if (roundedSuma % 2 != 0) {
  document.writeln("Boolean value of suma : 'Odd'." + "<br/>");
}

// change

let change = 500 - sumaOfAllGoods;

document.writeln("Change of 500 : " + change + "." + "<br/>");

// middle price

let middlePriceValue = (a + b + c) / 3;

document.writeln(
  "Middle price : " + middlePriceValue.toFixed(1) + "." + "<br/>"
);

// discount

const randomDiscount = Math.random() * 15;

document.writeln("Discount : " + randomDiscount.toFixed(0) + "%." + '<br/>');

if (x = a){
    let sumaWithDiscount = x - (x/100) * randomDiscount;
    document.writeln("To pay for chiper : " + sumaWithDiscount.toFixed(2) + '.' + '<br/>');
};
if (x = b){
    let sumaWithDiscount = x - (x/100) * randomDiscount;
    document.writeln("To pay for most expensive : " + sumaWithDiscount.toFixed(2) + '.' + '<br/>');
};
if (x = c){
    let sumaWithDiscount = x - (x/100) * randomDiscount;
    document.writeln("To pay for middle : " + sumaWithDiscount.toFixed(2) + '.' + '<br/>');
};

// profit

let profitA = (a - (a / 100) * randomDiscount) - (a / 2);
let profitB= (b - (b / 100) * randomDiscount) - (b / 2);
let profitC = (c - (c / 100) * randomDiscount) - (c / 2);

let totalProfit = profitA + profitB + profitC;

document.writeln("Total profit of all goods : "  + totalProfit.toFixed(2) + '.' + '<br/>');