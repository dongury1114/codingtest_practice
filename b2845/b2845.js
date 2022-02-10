const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
let input2 = fs.readFileSync(filePath).toString().split("\n");

// console.log(input);

input = input[0];
input = input.split(" ").map((item) => +item);
// console.log(input);

input2 = input2[1];
input2 = input2.split(" ").map((item) => +item);
// console.log(input2);

let people = input[0];
let area = input[1];

solution(people, area);
// A = parseInt(input[0], 10);
// B = parseInt(input[1], 10);

function solution(people, area) {
  let answer = input2.map((i) => i - people * area);
  console.log(...answer);
}
