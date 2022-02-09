const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

A = parseInt(input[0], 10);
B = parseInt(input[1], 10);

solution(A, B);

function solution(A, B) {
  let answer = A + B;
  console.log(answer);
}
