const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');

  let arrNew = Array(arr.length).fill(1)
  for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
          case '--discard-next':
            if (i + 1 < arr.length) {
              arrNew[i + 1] -= 10
            }
            arrNew[i] = 0
            break
          case '--discard-prev':
            if (i > 0) {
              arrNew[i - 1]--
            }
            arrNew[i] = 0
            break
          case '--double-next':
            if (arr.length > i + 1) {
              arrNew[i + 1]++
            }
            arrNew[i] = 0
            break
          case '--double-prev':
            if (i > 0) {
              arrNew[i - 1]++
            }
            arrNew[i] = 0
            break     
    }
    
  }
  let arrRes = []
  for (let i = 0; i < arrNew.length; i++) {
    while (arrNew[i] > 0) {
      arrRes.push(arr[i])
      arrNew[i]--
    }
  }
  return arrRes
};
