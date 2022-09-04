// first function ******************//

// function getRandomArray(len, min, max) {
//   let result = [];
//   for (let i = 0; i < len; i++) {
//     result.push(Math.floor(Math.random() * (max - min) + 1));
//   }
//   return result;
// }

function getRandomArray(len, min, max) {
  return Array.from(Array(len)).map((x) =>
    Math.floor(Math.random() * (max - min) + min)
  );
}

console.log(getRandomArray(15, 1, 100));
document.writeln(
  `1. Масив з п'ятнадцяти випадкових чисел(від 1 до 100): ${getRandomArray(
    15,
    1,
    100
  )}. <br>`
);

// second function *****************//

function getMode(...numbers) {
  const obj = {};

  numbers.forEach((num) => {
    if (!obj[num] && Number.isInteger(num)) {
      obj[num] = 1;
    } else {
      obj[num] += 1;
    }
  });

  let maxValue = 0;
  let maxKey = "";

  for (let key in obj) {
    const value = obj[key];
    if (value >= maxValue && Number(key)) {
      maxValue = value;
      maxKey = key;
    }
  }

  return maxKey;
}

console.log(
  getMode(
    26,
    4.5,
    34,
    73,
    93,
    50,
    4.5,
    15,
    4.5,
    93,
    7,
    97,
    4.5,
    95,
    34,
    34,
    93,
    67
  )
);
document.writeln(
  `2. Мода з аргументів (26, 4.5, 34, 73, 50, 15, 4.5, 93, 7, 97, 4.5, 95, 34, 93, 67) становить: ${getMode(
    26,
    4.5,
    34,
    73,
    50,
    15,
    4.5,
    93,
    7,
    97,
    4.5,
    95,
    34,
    93,
    67
  )}. <br>`
);

// third function *******************//

function getAverage(...nums) {
  let result = 0;
  const filteredNums = nums.filter((a) => Number.isInteger(a));
  filteredNums.reduce((acc, item) => {
    return (result = acc + item);
  });
  return result / filteredNums.length;
}

console.log(
  getAverage(6, 4.5, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);
document.writeln(
  `3. Середнє арифметичне аргументів (6, 4.5, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) становить: ${getAverage(
    6,
    4.5,
    2,
    55,
    11,
    78,
    2,
    55,
    77,
    57,
    87,
    23,
    2,
    56,
    3,
    2
  )}. <br>`
);

// fourth function ******************//

function getMedian(...numbers) {
  const median = numbers.filter((a) => Number.isInteger(a));
  median.sort((a, b) => {
    return a - b;
  });
  const medMin = Math.floor(median.length / 2);

  if (median.length % 2) {
    return median[medMin];
  } else {
    return (median[medMin - 1] + median[medMin]) / 2;
  }
}

console.log(getMedian(1, 2, 3, 4.5, 4, 5, 5.5, 9.4, 9, 10));
document.writeln(
  `4. Медіана з аргументів  (1, 2, 3, 4.5, 4, 5, 5.5, 9.4, 9, 10) становить: ${getMedian(
    1,
    2,
    3,
    4.5,
    4,
    5,
    5.5,
    9.4,
    9,
    10
  )}. <br>`
);

// +fifth function *******************//

filterEvenNumbers = (...numbers) => {
  return numbers.filter((num) => {
    if (num % 2) return num;
  });
};

console.log(filterEvenNumbers(1, 2, 3, 4, 5));
document.writeln(
  `5. Відфільтровуємо з аргументів (1,2,3,4,5) парні числа і отримуємо: ${filterEvenNumbers(
    1,
    2,
    3,
    4,
    5
  )}. <br>`
);

// sixth function *******************//

countPositiveNumbers = (...numbers) => {
  let counter = 0;
  numbers.filter((num) => {
    if (num > 0) return (counter += 1);
  });
  return counter;
};

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));
document.writeln(
  `6. З аргументів (1, -2, 3, -4, -5, 6) рахуємо кількість чисел більше нуля: ${countPositiveNumbers(
    1,
    -2,
    3,
    -4,
    -5,
    6
  )}. <br>`
);

// seventh function *****************//

getDivideByFive = (...numbers) => {
  return numbers.filter((num) => {
    if (!(num % 5)) return num;
  });
};

console.log(getDivideByFive(6, 2, 55, 11, 78, 55, 57, 87, 105, 23, 56, 20, 3));
document.writeln(
  `7. З ряду (6, 2, 55, 11, 78, 55, 57, 87, 105, 23, 56, 20, 3) вираховуємо ті, які націло діляться на 5: ${getDivideByFive(
    6,
    2,
    55,
    11,
    78,
    55,
    57,
    87,
    105,
    23,
    56,
    20,
    3
  )}. <br>`
);

// eighth function *****************//

replaceBadWords = (str) => {
  let badWords = /shit|fuck/gi;
  let cleanedString = str.replace(badWords, "****");
  return cleanedString;
};

console.log(replaceBadWords("Are you fucking kidding? It's bullshit!"));
document.writeln(
  `8. Цензуруємо текст ("Are you fucking kidding? It's bullshit!") і отримуємо: ${replaceBadWords(
    "Are you fucking kidding? It's bullshit!"
  )}. <br>`
);

// ninth function ******************//

divideByThree = (word) => {
  let result = [];
  let arr = word.toLowerCase().replaceAll(" ", "");

  if (arr.length > 3) {
    for (let i = 0; i < arr.length; i += 3) {
      result.push(arr.slice(i, i + 3));
    }
    return result;
  }
  return arr;
};

console.log(divideByThree("Co mmande r"));
document.writeln(
  `9. Розбиваємо рядок("Commander") на склади по три букви: ${divideByThree(
    "Commander"
  )}. <br>`
);

// tenth function ******************//

// тут зробив що зміг..
generateCombinations = (word) => {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < word.length; j++) {
      for (let k = 0; k < word.length; k++) {
        if (i !== j && i !== k && j !== k && word.length === 3) {
          result.push(word[i], word[j], word[k]);
        }
      }
    }
  }

  let words = [];

  for (let i = 0; i < result.length; i += 3) {
    words.push(result.slice(i, i + 3));
  }

  return words;
};

console.log(generateCombinations("man"));
