
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  // first function

getSubjects = student => {

  let subjes =  Object.keys(student.subjects);
  let subjectsArray = [];
  for (let i = 0; i < subjes.length; i++) {
       subjectsArray.push((subjes[i].slice(0,1).toUpperCase() + subjes[i].slice(1)).replaceAll('_',' '));
    }
     return subjectsArray;
}
  
console.log(getSubjects(students[0]));

// second function

getAverageMark = student => {
  
  let arraysMarks = [];
   Object.values(student.subjects).forEach(subj => subj.forEach(mark => arraysMarks.push(mark)));
   let result = 0;
   let marks = arraysMarks.reduce((acc, curr,i, arr) => {
    result += curr
     return result/arr.length;
   },0)
  return marks.toFixed(2);
}

console.log(getAverageMark(students[0]));

// third function

getStudentInfo = student => {

  let info = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  }
  return info;
}

console.log(getStudentInfo(students[0]));

// fourth function

getStudentsNames = (students) => {
   let names = [];
   students.map(({name}) => {
      names.push(name);
   });
   return names.sort();
}

console.log(getStudentsNames(students));

// fifth function 

getBestStudent = students => {

  let highestMark = [];
  students.map((student) => {
    highestMark.push(getAverageMark(student))
  } )
  const max = highestMark.reduce((a,b) => Math.max(a,b));
  let best = students.map((student) => getStudentInfo(student)).find(stud => stud.averageMark == max);
  return best.name;
  
}

console.log(getBestStudent(students));

// sixth function

calculateWordLetters = ([...string]) => {
  let obj = {};
  string.forEach((letter) => {
    obj[letter] = (obj[letter] || 0) + 1;
  })
 return obj;
}

console.log(calculateWordLetters('test'));

