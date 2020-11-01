const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!'
  } else if (date.getMilliseconds() == 0) {
    throw new Error ('Error')
  } else {
    if (date.getMonth() >= 2 && date.getMonth() < 5) {
      return 'spring'
    } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
      return 'summer'
    } else if (date.getMonth() >= 8 && date.getMonth() < 11) {
      return 'autumn'
    } else if (date.getMonth() == 11 || date.getMonth() == 0 || date.getMonth() == 1) {
      return 'winter'
    }
  }
};
