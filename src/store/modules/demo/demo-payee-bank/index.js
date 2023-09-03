const state = {
  responsePayeeBankDataList: [
    {
      bankLineNo: '102528000258', // 银行行号
      bankLineNoName: '中国工商银行股份有限公司襄阳左岸春天支行', // 银行全称
      reserved1: 102 // 总行代码
    },
    {
      bankLineNo: '102513022034', // 银行行号
      bankLineNoName: '中国工商银行股份有限公司南阳天冠支行', // 银行全称
      reserved1: 102 // 总行代码
    },
    {
      bankLineNo: '102424010119', // 银行行号
      bankLineNoName: '中国工商银行股份有限公司九江天鹅泉支行', // 银行全称
      reserved1: 102 // 总行代码
    },
    {
      bankLineNo: '301521009019', // 银行行号
      bankLineNoName: '交通银行湖北省分行徐东支行', // 银行全称
      reserved1: 301 // 总行代码
    },
    {
      bankLineNo: '301521008000', // 银行行号
      bankLineNoName: '交通银行湖北省分行武昌支行', // 银行全称
      reserved1: 301 // 总行代码
    },
    {
      bankLineNo: '402539440070', // 银行行号
      bankLineNoName: '湖北竹山农村商业银行股份有限公司城关分理处', // 银行全称
      reserved1: 101 // 总行代码
    },
    {
      bankLineNo: '302881000088', // 银行行号
      bankLineNoName: '中信银行股份有限公司乌鲁木齐南湖北路支行', // 银行全称
      reserved1: 101 // 总行代码
    }, {
      bankLineNo: '303301001607', // 银行行号
      bankLineNoName: '中国光大银行股份有限公司南京湖北路支行', // 银行全称
      reserved1: 101 // 总行代码
    }
  ],
  payeeBankValueSet: [
    {
      codeValue: 102,
      codeValueName: '中国工商银行'
    },
    {
      codeValue: 301,
      codeValueName: '交通银行'
    },
    {
      codeValue: 101,
      codeValueName: '其他银行'
    }
  ]
}
const mutations = {

}
const actions = {
  getPayeeBankDataList({ commit }, param) {
    return state.responsePayeeBankDataList
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
