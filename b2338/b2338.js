const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

A = BigInt(input[0]);
B = BigInt(input[1]);

solution(A, B);

function solution(A, B) {
  let answer = A + B + "\n";
  answer += A - B + "\n";
  answer += A * B;
  console.log(answer);
}
