const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);

let A = input[0];
let B = input[1];
let V = input[2];

// console.log(B);
// console.log(A);
// console.log(V);

solution(input[0], input[1], input[2]);

function solution(A, B, V) {
  const n = Math.ceil((V - B) / (A - B));
  console.log(n);
}
