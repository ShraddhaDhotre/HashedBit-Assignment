let text = "JavaScript is a powerful language";
let vowels = 0;
let consonants = 0;

for (let ch of text.toLowerCase()) {
  if (/[a-z]/.test(ch)) {
    if ("aeiou".includes(ch)) vowels++;
    else consonants++;
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);