const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);

// console.log(input);

solution(input[0], input[1], input[2], input[3]);

function solution(A, B, C, D) {
  let ans = A * B + C * D;

  console.log(ans);
}