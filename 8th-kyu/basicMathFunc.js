// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(op, n1, n2)
{
  if (op == '+'){
    return n1+n2;
  }
  else if(op == '-'){
    return n1-n2;
  }
  else if(op == '*'){
    return n1*n2;
  }
  else if(op == '/'){
    return n1/n2;
  }
}