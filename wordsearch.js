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

const wordSearch = (letters, word) => {
  if (letters.length === 0 || letters[0].length === 0) return "The board has no letters.";
  if (word === "") return "There is no word.";
    
  const horizontalJoin = letters.map(ls => ls.join(''));
    
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  const transposed = transpose(letters);
  const verticalJoin = transposed.map(ls => ls.join(''));
    
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;