let N;
let M;

while (!Number.isInteger(N) || Number(N) == "") {
  N = +prompt("Введіть число від якого будемо складати");
  if (!Number.isInteger(N)) {
    alert("Це має бути ціле число");
    continue;
  } else if (Number(N) == "") {
    alert("Потрібно ввести числове значення");
    continue;
  }
}
while (!Number.isInteger(M) || Number(M) == "") {
  M = +prompt("Введіть число до якого будемо складати(включно)");
  if (!Number.isInteger(M)) {
    alert("Це має бути ціле число");
    continue;
  } else if (Number(M) == "") {
    alert("Потрібно ввести числове значення");
    continue;
  }
}
while (N >= M) {
  alert("Друге число має бути більше від першого");
  M = +prompt("Введіть число до якого будемо складати");
  continue;
}

const checkOdd = confirm("Чи потрібно пропускати парні числа?");

let result = 0;

for (i = N; i <= M; i++) {
  if (checkOdd) {
    if (i % 2) {
      result;
    } else {
      result += i;
    }
  } else {
    result += i;
  }
}

document.writeln(`Результат складання від ${N} до ${M} дорівнює ${result}.`);