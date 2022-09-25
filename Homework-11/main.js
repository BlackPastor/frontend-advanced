async function getRandomChinese(length) {
    let result = "";
    while (length) {
      let string = new Promise((res) => {
        setTimeout(() => {
          res(String.fromCharCode(Date.now().toString().slice(-5)));
        }, 50);
      });
      result += await string;
      length--;
    }
    console.log(result);
  }
  
  getRandomChinese(4);
  