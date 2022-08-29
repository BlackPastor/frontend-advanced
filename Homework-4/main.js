// making arrays *******************************************//

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];

const marks = [4, 5, 5, 3, 4, 5];

// making pairs ********************************************//

function getPairs(students) {
  const pairs = [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]],
  ];

  return pairs;
}

const pairs = getPairs(students);

// themes ***************************************************//

function getThemes(students) {
  const pairs = [
    [students[0] + " і " + students[2], themes[0]],
    [students[1] + " і " + students[3], themes[1]],
    [students[4] + " і " + students[5], themes[2]],
  ];
  return pairs;
}

const pairsAndThemes = getThemes(students);

// personal marks *****************************************//

function getPersonalMarks(students) {
  const Marks = [
    [students[0], marks[0]],
    [students[1], marks[1]],
    [students[2], marks[2]],
    [students[3], marks[3]],
    [students[4], marks[4]],
    [students[5], marks[5]],
  ];

  return Marks;
}

const personalMarks = getPersonalMarks(students);

// marks **************************************************//

function getMarks(students) {
  const pairs = [
    [
      students[0] + " і " + students[2],
      themes[0],
      Math.floor(Math.random() * 5 + 1),
    ],
    [
      students[1] + " і " + students[3],
      themes[1],
      Math.floor(Math.random() * 5 + 1),
    ],
    [
      students[4] + " і " + students[5],
      themes[2],
      Math.floor(Math.random() * 5 + 1),
    ],
  ];
  return pairs;
}

const marksForStudy = getMarks(students);

document.writeln("1. " + pairs.join(" @ ") + "." + "<br>");
document.writeln("2. " + pairsAndThemes.join(" @ ") + "." + "<br>");
document.writeln("3. " + personalMarks.join(" @ ") + "." + "<br>");
document.writeln("4. " + marksForStudy.join(" @ ") + "." + "<br>");

console.log(pairs);
console.log(pairsAndThemes);
console.log(personalMarks);
console.log(marksForStudy);
