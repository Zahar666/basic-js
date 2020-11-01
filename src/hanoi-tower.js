const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let getSteps  = disks => {
    if(disks == 1) {
      return 1
    } else {
      return getSteps(disks - 1) * 2 + 1
    }
  }
  let steps = getSteps(disksNumber)
  return {
    turns : steps,
    seconds : Math.floor(steps / turnsSpeed * 3600)
  }
};
