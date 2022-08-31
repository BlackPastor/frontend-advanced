// making arrays *******************************************//

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];

const marks = [4, 5, 5, 3, 4, 5];

// making pairs ********************************************/
const pairs = [],
  girls = [],
  boys = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].slice(-1) === "а") {
    girls.push(students[i]);
  } else {
    boys.push(students[i]);
  }
}



for (let i = 0; i < students.length / 2; i++) {
  pairs.push([boys[i], girls[i]]);
}

console.log(pairs);

// themes ***************************************************//

const pairsAndThemes = [];

for (let i = 0; i < students.length / 2; i++) {
  pairsAndThemes.push([girls[i] + " і " + boys[i], themes[i]]);
}

console.log(pairsAndThemes);

// personal marks *****************************************//

const getPersonalMarks = [];

for (let i = 0; i < students.length; i++) {
  getPersonalMarks.push([students[i], marks[i]]);
}

console.log(getPersonalMarks);

// marks of themes **************************************************//

const marksOfThemes = [];
const min = 0,
      max = 5;
const randomMarks = Math.floor(Math.random() * (max - min + min) + 1);

for (let i = 0; i < pairs.length; i++) {
  marksOfThemes.push([pairsAndThemes[i] + ' , ' + randomMarks]);
}

console.log(marksOfThemes);

//***************************************/

document.writeln("1. " + pairs.join(" @ ") + "." + "<br>");
document.writeln("2. " + pairsAndThemes.join(" @ ") + "." + "<br>");
document.writeln("3. " + getPersonalMarks.join(" @ ") + "." + "<br>");
document.writeln("4. " + marksOfThemes.join(" @ ") + "." + "<br>");
