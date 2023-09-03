/**
 * 遍历对象属性，属性为空串的话，赋null，支持[String,Number,Array,Ob]
 * @param {Object} obj 对象:{}
 * @param {Boolean} isSetArr 是否给数组赋默认值,但默认值只能为null
 * @returns obj
 */
export function setEmptyPropNullVal(obj, isSetArr = false) {
  // 是否符合Object条件
  if (obj && Object.keys(obj).length > 0) {
    const objKeysArr = Object.keys(obj)
    objKeysArr.filter(v => {
      if (obj[v] && obj[v].length === 0 && isSetArr === true && Object.prototype.toString.call(obj[v]) === '[object Array]') {
        obj[v] = null
      } else if (!obj[v] && obj[v] !== 0) {
        obj[v] = null
      }
      const objType = Object.prototype.toString.call(obj[v])
      if (objType === '[object Object]') {
        setEmptyPropNullVal(obj[v], isSetArr)
      }
    })
  }
  return obj
}
