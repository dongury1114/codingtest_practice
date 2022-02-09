const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
input = input[0];
input = input.split(" ").map((item) => +item);

solution(input[0], input[1], input[2], input[3], input[4]);

function solution(A, B, C, D, E) {
  sum = A * A + B * B + C * C + D * D + E * E;
  answer = sum % 10;
  console.log(answer);
}
