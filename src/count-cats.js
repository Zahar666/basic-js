const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let x = 0; x < matrix[i].length; x++) {
            if (matrix[i][x] === "^^") {
                number++
            }
        }
    }
    return number
};
