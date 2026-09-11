const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((accumulator, number) => accumulator + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, number) => accumulator * number);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let answer = 1
  for (i = 1; i <= number; i++)
  {
    answer = answer * i;
  }

  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
