const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      let maxD = 0
      for (let i = 0; i < arr.length; i++) {
          let d = this.calculateDepth(arr[i]) 
          if (d > maxD) {
              maxD = d
          }
      }
      return 1 + maxD
    } else {
      return 0
    }
  }
};