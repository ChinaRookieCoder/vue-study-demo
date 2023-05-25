
const state = {
  judgeTypeList: [
    {
      collapseTitle: '判断String类型',
      collapseName: 'stringType',
      grammar: '_.isString(val)',
      returnParam: 'Boolean(true/false)',
      descrition: '用于判断是否String类型'
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
