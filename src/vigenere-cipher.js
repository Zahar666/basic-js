const CustomError = require("../extensions/custom-error");
const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'  

class VigenereCipheringMachine {
  constructor (isRev = true) {
    this.isRev = isRev
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error ('Error')
    }

    let inputValue = message.toUpperCase()
    let keyValue = key.toUpperCase()
    let result = ''
    let whiteSpaces = 0

    for (let i = 0; i < inputValue.length; i++) {
      let posAlphInputSymbol = alph.indexOf(inputValue[i])
      if (posAlphInputSymbol === -1) {
          result+= inputValue[i]
          whiteSpaces++
      } else {
          let posKey = (i - whiteSpaces) % keyValue.length
          let posAlphKeySymbol = alph.indexOf(keyValue[posKey])
          result += alph[(posAlphKeySymbol + posAlphInputSymbol) % alph.length]
      }
    }
    return (this.isRev) ? result : result.split("").reverse().join("")
  }    




  decrypt(message, key) {
    if (message == undefined || key == undefined) {
      throw new Error ('Error')
    }
    
    let inputValue = message.toUpperCase()
    let keyValue = key.toUpperCase()
    let result = ''
    let whiteSpaces = 0

    for (let i = 0; i < inputValue.length; i++) {
      let posAlphInputSymbol = alph.indexOf(inputValue[i])
      if (posAlphInputSymbol === -1) {
          result += inputValue[i]
          whiteSpaces++
      } else {
          let posKey = (i - whiteSpaces) % keyValue.length
          let posAlphKeySymbol = alph.indexOf(keyValue[posKey])    
          result += alph[(posAlphInputSymbol + alph.length - posAlphKeySymbol) % alph.length]
      }
    }
    return (this.isRev) ? result : result.split("").reverse().join("")


  }
}


module.exports = VigenereCipheringMachine;



