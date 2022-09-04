"use strict";
//SEE: https://javascript.info/strict-mode

console.log("Hej Med Dig!");

console.log("Looping triangle");

let a = "";
for (let i = 0; i < 7; i++) {
  a = a + "#";
  console.log(a);
}

console.log("FizzBuzz");

for (let i = 1; i < 101; i++) {
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i);
}

console.log("FizzBuzz");

for (let i = 1; i < 101; i++)
  console.log((i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);

console.log("ChessBoard");

a = "";
let b = 8; //b can be any number over 0
for (let i = 0; i < b; i++) {
  for (let j = 0; j < b; j++) {
    if ((i + j) % 2 == 0) a += " ";
    if ((i + j) % 2 == 1) a += "#";
  }
  a += "\n";
}
console.log(a);

console.log("render a page");

console.log(renderPage("Simpel IWP Demo", "IWP demo", "JS Script er kørt"));

function renderPage(title, heading, demoString) {
  return (
    '<!DOCTYPE html>\n<html lang="da">\n<head>\n<meta charset="utf-8">\n<title>' +
    title +
    "</title>\n</head>\n<body>\n<!-- page content -->\n<h1>" +
    heading +
    '</h1>\n<script>\nconsole.log("' +
    demoString +
    '");\n</script>\n</body>\n</html>'
  );
}

console.log("avrage string length");

let strings = ["Hejsa", "med", "dig!"];
console.log(avrageLengthOfStringsInStringArray(strings));

function avrageLengthOfStringsInStringArray(strings) {
  let count = 0;
  strings.forEach((element) => {
    count += element.length;
  });
  return count / strings.length;
}
