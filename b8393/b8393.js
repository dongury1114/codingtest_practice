const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);

// console.log(input);
solution(input[0]);

function solution(A) {
  let ans = (A * (A + 1)) / 2;

  console.log(ans);
}
