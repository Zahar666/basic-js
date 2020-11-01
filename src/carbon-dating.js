const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(numActivity) {
  if (typeof numActivity != 'string') {
    return false
  } else {
    if (+numActivity <= 0 || +numActivity > 15 || isNaN(+numActivity)) {
      return false
    } else {
      let k = 0.693 / HALF_LIFE_PERIOD
      let t = Math.log2(MODERN_ACTIVITY/numActivity) / k
      return t
    }
  }
};
