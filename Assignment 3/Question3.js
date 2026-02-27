let string = "INDIA";
let arr = string.split("");

arr.splice(3, 0, "O", "N", "E", "S", "I");

let outputQ3 = arr.join("");
console.log(outputQ3); // INDONESIA