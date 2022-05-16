//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
    const inverse = (n) => {return n * -1}
    return array.map(inverse)
  }