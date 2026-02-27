function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

console.log(correctfn("I love Javascrpt", "Javascrpt", "JavaScript"));