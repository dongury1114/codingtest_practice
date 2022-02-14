const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// input = input[0];
// input = input.split(" ").map((item) => +item);

let A = parseInt(input[0], 10);
let B = parseInt(input[1], 10);
let C = parseInt(input[2], 10);
let D = parseInt(input[3], 10);

solution(A, B, C, D);

function solution(A, B, C, D) {
  let sum = A + B + C + D;
  min = parseInt(sum / 60);
  sec = parseInt(sum % 60);
  console.log(min);
  console.log(sec);
}
