function sumOfProducts(n1, n2) {
  let sum = 0;

  while (n1 > 0 || n2 > 0) {
    let d1 = n1 % 10;
    let d2 = n2 % 10;

    sum += d1 * d2;

    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }

  return sum;
}

// Test
console.log(sumOfProducts(6, 34));    
console.log(sumOfProducts(123, 45));  