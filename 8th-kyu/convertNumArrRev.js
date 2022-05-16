//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    const arrOfDigits = Array.from(String(n), Number)
    return arrOfDigits.reverse()
  }