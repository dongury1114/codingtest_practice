const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
// input = input[0];
// input = input.split(" ").map((item) => +item);

let A = parseInt(input[0], 10);
let B = parseInt(input[1], 10);

solution(A, B);

function solution(A, B) {
  let BB = 2 * B - A;

  console.log(BB);
}
