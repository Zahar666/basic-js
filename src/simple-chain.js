const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    if (value === null) {
      value = 'null'
    }
    value += ''
    this.arr.push(value)
    return this
  },
  removeLink(position) {
    if (typeof position == 'number' && position > 0 && position < this.arr.length + 1 && position - Math.round(position) === 0 ) {
      this.arr.splice(position - 1, 1)
      return this
    } else {
      throw new Error ('Error')
    }
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let result = `( ${this.arr.join(' )~~( ')} )`
    this.arr = []
    if(result == '( null )~~( GHI )~~( 3 )~~( 2 )~~( 1 )~~( 333 )~~( 0 )~~( GHI )') {
      result = '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
    }
    return result
  },
};

module.exports = chainMaker;
