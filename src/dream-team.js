const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let array = [];
  if (members === null || members === undefined) {
    return false
  } else {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        for (let x = 0; x < members[i].length; x++) {
          if (members[i][x] === ' ') {
            continue
          } else {
            array.push(members[i][x]) 
            break
          }
        }
      } else {
        continue
      }
    }
  }  
  for (let c = 0; c < array.length; c++) {
    array[c] = array[c].toUpperCase()
  }
  array.sort()
  let str = array.join('')
  return str
};














// throw new CustomError('Not implemented');
