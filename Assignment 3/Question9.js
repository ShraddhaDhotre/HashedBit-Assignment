function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

console.log(countWords("JavaScript is a very powerful language"));