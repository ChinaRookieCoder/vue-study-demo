
const state = {
  judgeTypeList: [
    {
      collapseTitle: '判断String类型',
      collapseName: 'stringType',
      grammar: '_.isString(value)',
      returnParam: 'Boolean(true/false)',
      descrition: '用于判断是否String类型,如果 value 为字符串，那么返回 true，否则返回 false。'
    },
    {
      collapseTitle: '判断Number类型',
      collapseName: 'integerType',
      grammar: '_.isNumber(value)',
      returnParam: 'Boolean(true/false)',
      descrition: '用于判断是否Number(数值【整数、小数】)类型，如果 value 为一个数值，那么返回 true，否则返回 false。'
    },
    {
      collapseTitle: '判断Array类型',
      collapseName: 'arrayType',
      grammar: '_.isArray(value)',
      returnParam: 'Boolean(true/false)',
      descrition: '用于判断是否Array(数组)类型，如果value是一个数组返回 true，否则返回 false。'
    },
    {
      collapseTitle: '判断Object类型',
      collapseName: 'objectType',
      grammar: '_.isObject(value)',
      returnParam: 'Boolean(true/false)',
      descrition: `检查 value 是否为 Object 的language type。 (例如： arrays, functions, objects, regexes,new Number(0), 以及 new String(''))用于判断是否Object(对象)类型，如果value是一个对象返回 true，否则返回 false。`
    }
  ]
}
const mutations = {

}
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
