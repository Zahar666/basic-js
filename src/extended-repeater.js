const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator == undefined) {
    options.separator ='+'
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '|'
  }
  let stringValue = ''
  if (options.repeatTimes != undefined && options.repeatTimes != null) {
    for (let i = options.repeatTimes; i > 0; i--) {
      if (i == 1) {
        if (typeof options.addition != undefined) {
          stringValue += `${str}`
          for (let c = options.additionRepeatTimes; c > 0; c--) {
            if (c == 1) {
              stringValue += `${options.addition}` 
            } else {
              stringValue += `${options.addition}${options.additionSeparator}` 
            }
          } 
        } else {
          stringValue += `${str}` 
        } 
      } else {
        stringValue += str
        for (let x = options.additionRepeatTimes; x > 0; x--) {
          if (options.additionSeparator == undefined) {
            stringValue += `${options.addition}`
          } else { 
            if (x == 1) {
              stringValue += `${options.addition}`
            } else {
              stringValue += `${options.addition}${options.additionSeparator}`
            }
          }
        }
      }
      if (i != 1) {
        stringValue += options.separator
      }
    } 
  } else {
    stringValue += `${str}${options.addition}`
  }
  return stringValue
};
  