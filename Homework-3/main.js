// first function

function getMaxDigit(n) {
  let a = n.toString().split("");
  let max = a[0];

  for (i = 0; i < a.length; i++) {
    if (a[i] > max) max = a[i];
  }

  return max;
}

// second function

function powOfNumber(num, exponent) {
  let result = 1;
  for (i = 0; i < exponent; i++) {
    result *= num;
  }
  return result;
}

// third function

function fixedName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

// fourth function

function sumSallary(sall, bill) {
  return sall - (sall / 100) * bill;
}

// fifth function

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * max) + min;
}

// sixth function

const countLetter = function (letter, string) {
  let counter = 0;

  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) == letter) {
      counter += 1;
    }
  }
  return counter;
};

// seventh function

function convertCurrency(value) {
  let result;
  value = value.toUpperCase();

  if (value.includes("UAH")) {
    result = (+value.slice(0, value.indexOf("UAH")) / 35).toFixed(2) + "$";
  } else if (value.includes("$")) {
    result = +value.slice(0, value.indexOf("$")) * 35 + "UAH";
  } else {
    return "Введіть суму в $ або в UAH";
  }
  return result;
}

// eigth function

function getRandomPassword(size = 8) {
  let result = '';

  for (let i = 0; i < size; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }

  return result;
}

// ninth function

function deleteLetters(symbol, text) {
  let result = "";

  for (i = 0; i < text.length; i++) {
    if (text[i] == symbol) {
      result;
    } else {
      result += text[i];
    }
  }
  return result;
}

// tenth function

function isPalindrom(str) {
  let lowRegStr = str.replace(/ /g, "").toLowerCase();
  let reverseStr = lowRegStr.split("").reverse().join("");

  return reverseStr === lowRegStr;
}

// eleventh function

function deleteDuplicateLetter(string) {
  let result = "";
  string = string.toLowerCase();
  for (i = 0; i < string.length; i++) {
    if (string.lastIndexOf(string[i]) === string.indexOf(string[i])) {
      result += string[i];
    } else {
      result;
    }
    //  console.log(string.lastIndexOf(string[i]));
    console.log(string.indexOf(string[i]));
  }
  return result;
}


/**************************************/


document.writeln(
  "1. Найбільшою цифрою з ряду 59473852 буде  " +
    getMaxDigit(59473852) +
    "." +
    "<br/>"
);
document.writeln(
  "2. Число 8 у 4 степені дорівнює " + powOfNumber(8, 4) + "." + "<br/>"
);
document.writeln(
  `3. Форматуємо ім'я  "сЕрГіЙ"  у ` + fixedName("сЕрГіЙ") + "." + "<br/>"
);
document.writeln(
  "4. Забираємо від суми 15000 податок 19.5% і отримуємо зарплату " +
    sumSallary(15000, 19.5) +
    "." +
    "<br/>"
);
document.writeln(
  "5. Випадкове ціле число в діапазоні від 1 до 20 буде " +
    getRandomIntInclusive(1, 20) +
    "." +
    "<br/>"
);
document.writeln(
  `6. Буква "f" у слові "adfadgfgdfgfghdfsd" повторюється ` +
    countLetter("f", "adfadgfgdfgfghdfsd") +
    " разів." +
    "<br/>"
);
document.writeln(
  "7. Сума конвертації 23$ дорівнює " + convertCurrency("23$") + "." + "<br/>"
);
document.writeln(
  " Сума конвертації 12000UAH дорівнює " +
    convertCurrency("1200UAH") +
    "." +
    "<br/>"
);
document.writeln(
  "8. Випадковий пароль з 8 символів буде " +
    getRandomPassword() +
    "." +
    "<br/>"
);
document.writeln(
  '9. Видаляємо букву "a" зі стрічки "adadsdkadadakda" і отримуємо ' +
    deleteLetters("a", '"adadsdkadadakda"') +
    "." +
    "<br/>"
);
document.writeln(
  '10. Чи є текст "Кіт утік" паліндромом? ' +
    isPalindrom("Кіт утік") +
    "." +
    "<br/>"
);
document.writeln(
  'Чи є текст "Атланта" паліндромом? ' + isPalindrom("Атланта") + "." + "<br/>"
);
document.writeln(
  '11. З виразу "Бісквіт був дуже ніжним" видаляємо повторювані літери і отримуємо: ' +
    deleteDuplicateLetter("Бісквіт був дуже ніжним") +
    "."
);
