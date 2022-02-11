const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);
// console.log(input);
solution(input[0], input[1], input[2]);

function solution(A, B, C) {
  let n = A / (B ** 2 + C ** 2) ** 0.5;
  let E = n * B;
  let F = n * C;
  console.log(Math.floor(E) + " " + Math.floor(F));
}
