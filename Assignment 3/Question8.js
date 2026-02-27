function singleDigitSum(num) {
  while (num >= 10) {
    num = num
      .toString()
      .split("")
      .reduce((sum, d) => sum + Number(d), 0);
  }
  return num;
}

console.log(singleDigitSum(456)); // 6