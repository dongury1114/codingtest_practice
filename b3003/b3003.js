const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);

// console.log(input);

solution(input[0], input[1], input[2], input[3], input[4], input[5]);

function solution(a, b, c, d, e, f) {
  const A = 1 - a;
  const B = 1 - b;
  const C = 2 - c;
  const D = 2 - d;
  const E = 2 - e;
  const F = 8 - f;

  let answer = A + " " + B + " " + C + " " + D + " " + E + " " + F;
  console.log(answer);
}
