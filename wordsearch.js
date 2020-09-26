// Pair Programming Exercise
// Authors: Helen Ouyang, Will Zak, Marcello Kuenzler

const transpose = function(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      newMatrix[c].push(matrix[r][c]);
    }
  }
  return newMatrix;
};

const rotate = function(matrix) {
  let newMatrix = [];
  for (let r = 0; r < matrix.length; r++) {
    newMatrix.push([]);
    for (let c = r; c < matrix[r].length + r; c++) {
      if (c >= matrix[r].length) newMatrix[r].push("");
      else newMatrix[r].push(matrix[r][c])
    }
  }
  return newMatrix;
}

const checkBoard = function(letters, word) {
  const reverseWord = word.split("").reverse().join("");
  const join = letters.map(ls => ls.join(''));
  for (const l of join) if (l.includes(word) || l.includes(reverseWord)) return true;
  return false;
}

const wordSearch = (letters, word) => {
  if (letters.length === 0 || letters[0].length === 0) return "The board has no letters.";
  if (word === "") return "There is no word.";

  const tests = [letters];
  tests.push(transpose(letters));
  tests.push(transpose(rotate(letters)));
  tests.push(transpose(rotate(transpose(letters))));
  tests.push(transpose(rotate(letters.map(ls => ls.reverse()))));
  tests.push(transpose(rotate(transpose(letters)).map(ls => ls.reverse())));

  for(const test of tests) if(checkBoard(test, word)) return true;

  return false;
};

module.exports = wordSearch;