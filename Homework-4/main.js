// making arrays *******************************************//

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];

const marks = [4, 5, 5, 3, 4, 5];

// making pairs ********************************************/
function getPairs(students) {

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

  for (let i = 0; i < boys.length; i++) {
    pairs.push([boys[i], girls[i]]);
  }
  return pairs;
}

const pairs = getPairs(students);

console.log(pairs);

// pairs and themes ***************************************************//

function pairsAndThemes(pairs, themes) {

  const pairsAndThemes = [];

  for (let i = 0; i < pairs.length; i++) {
    pairsAndThemes.push([pairs[i].join(" і "), themes[i]]);
  }
  return pairsAndThemes;
}

const themesPairs = pairsAndThemes(pairs, themes);

console.log(themesPairs);

// personal marks *****************************************//

function getPersonalMarks(students) {

  const getPersonalMarks = [];

  for (let i = 0; i < students.length; i++) {
    getPersonalMarks.push([students[i], marks[i]]);
  }
  return getPersonalMarks;
}

const studentsMarks = getPersonalMarks(students);

console.log(studentsMarks);

// marks of themes **************************************/

function marksOfThemes(themesPairs) {

  const marksOfThemes = [];
  const min = 0,
    max = 5;
  const randomMarks = Math.floor(Math.random() * (max - min + min) + 1);

  for (let i = 0; i < pairs.length; i++) {
    marksOfThemes.push([themesPairs[i] + " , " + randomMarks]);
  }
  return marksOfThemes;
}

const themesMarks = marksOfThemes(themesPairs);

console.log(themesMarks);

//***************************************/

document.writeln("1. " + pairs.join(" @ ") + "." + "<br>");
document.writeln("2. " + themesPairs.join(" @ ") + "." + "<br>");
document.writeln("3. " + studentsMarks.join(" @ ") + "." + "<br>");
document.writeln("4. " + themesMarks.join(" @ ") + "." + "<br>");
