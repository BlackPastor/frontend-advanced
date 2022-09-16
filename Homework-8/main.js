class Student {
  constructor(fullName, university, course, marks) {
    this.fullName = fullName;
    this.university = university;
    this.course = course;
    this.marks = marks;
    this.isDismissed = false;
  }
  getInfo() {
    return `${this.fullName} - студент ${this.course} курсу в університеті ${this.university}.`;
  }
  get studentMarks() {
    if (this.isDismissed == false) {
      return this.marks.split(",").map((str) => {
        if (Number(str)) {
          return Number(str);
        }
      });
    } else return null;
  }
  set studentMarks(value) {
    if (this.isDismissed == false) {
      return (this.marks += "," + value);
    } else return null;
  }
  getAverageMark() {
    if (this.isDismissed == false) {
      let marksAverage = 0;
      return this.studentMarks.reduce((curr, item) => {
        return ((marksAverage += item) / this.studentMarks.length).toFixed(1);
      }, 0);
    } else return null;
  }
  dismiss() {
    return (this.isDismissed = true);
  }
  recover() {
    return (this.isDismissed = false);
  }
}

const student = new Student(
  "Артем Лоїк",
  "ПНТУ ім.Кондратюка",
  "3",
  "5, 4, 4, 5"
);

student.studentMarks = "5";
student.dismiss();
student.recover();

console.log(`${student.getInfo()}`);
console.log(`Оцінки: ${student.studentMarks}`);
console.log(`Середній бал: ${student.getAverageMark()}`);

class budgetStudent extends Student {
  constructor(fullName, university, course, marks) {
    super(fullName, university, course, marks);
    setInterval(() => this.getScholapship(), 30000);
  }
  getScholapship() {
    if (this.getAverageMark() >= 4) {
      console.log("Ви отримали 1400грн. стипендії.");
    } else console.log("Ваш середній бал недостатній для отримання стипендії");
  }
}

const Serhii = new budgetStudent(
  "Сергій Іпполітов",
  "ПНТУ ім.Кондратюка",
  "5",
  "5, 4, 4, 5, 3, 4"
);


