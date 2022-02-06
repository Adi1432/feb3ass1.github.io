let Abcd = (operator, num1, num2, ...num) => {
  if (operator == "+") {
    let sum = num1 + num2;
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    return sum;
  } else if (operator == "*") {
    let product = num1 * num2;
    for (let i = 0; i < num.length; i++) {
      product *= num[i];
    }
    return product;
  }
};
console.log(Abcd("+", 1, 2, 3, 4, 5, 10));
console.log(Abcd("*", 1, 2, 3, 4, 5, 10));
