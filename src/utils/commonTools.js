export default class CommonTools {
  static deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj))
  }
  static deepClone(target) {
    let result
    if (typeof target === 'object') {
      if (Array.isArray(target)) {
        result = []
        for (const i in target) {
          result.push(this.deepClone(target[i]))
        }
      } else if (target === null) {
        result = null
      } else if (target.constructor === RegExp) {
        result = target
      } else {
        result = {}
        for (const i in target) {
          result[i] = this.deepClone(target[i])
        }
      }
    } else {
      result = target
    }
    return result
  }
}
