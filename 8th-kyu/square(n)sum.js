//Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    return numbers.map(function(n){
      return n ** 2;
    }).reduce(function(prev, cur){
      return prev + cur;
    }, 0);
  }