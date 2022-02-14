const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// input = input[0];
// input = input.split(" ").map((item) => +item);

let A = parseInt(input[0], 10);
let B = parseInt(input[1], 10);
let C = parseInt(input[2], 10);
let D = parseInt(input[3], 10);
let E = parseInt(input[4], 10);

solution(A, B, C, D, E);

function solution(A, B, C, D, E) {
  const n = A + B + C + D + E;
  console.log(n);
}
