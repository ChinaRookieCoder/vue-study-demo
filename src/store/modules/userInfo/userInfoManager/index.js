import userInfoApi from '@/api/userInfo'
const state = {
  // 值集
  valueSetSearch: (ValueSetName) => {
    let list = []
    switch (ValueSetName) {
      // 用户爱好
      case 'USER_HOBBY':
        list = [
          { value: 101, valueDesc: '唱' },
          { value: 102, valueDesc: '跳' },
          { value: 103, valueDesc: 'rap' },
          { value: 104, valueDesc: '篮球' }
        ]
        break
      // 用户性别
      case 'USER_SEX':
        list = [
          { value: 1, valueDesc: '男' },
          { value: 0, valueDesc: '女' }
        ]
        break
    }
    return list
  },
  // form规则
  userInfoFormRule: {
    'userName': [{ required: true, message: '用户名称不能为空', trigger: 'change' }],
    'userSex': [{ required: true, message: '用户性别不能为空', trigger: 'change' }],
    'userAge': [{ required: true, message: '用户年龄不能为空', trigger: 'change' }],
    'userBirthday': [{ required: true, message: '用户生日不能为空', trigger: 'change' }],
    'userHobby': [{ required: true, message: '用户爱好不能为空', trigger: 'change' }],
    'userBalance': [{ required: true, message: '用户余额不能为空', trigger: 'change' }]
  }
}

const actions = {
  getPublicKey({ commit }, params) {
    return userInfoApi.getPublicKey(params)
  },
  pageQueryUserInfo({ commit }, params) {
    return userInfoApi.pageQueryUserInfo(params)
  },
  insertUserInfo({ commit }, params) {
    return userInfoApi.insertUserInfo(params)
  },
  getUserInfo({ commit }, params) {
    return userInfoApi.getUserInfo(params)
  },
  modifyUserInfo({ commit }, params) {
    return userInfoApi.modifyUserInfo(params)
  },
  deleteUserInfo({ commit }, params) {
    return userInfoApi.deleteUserInfo(params)
  },
  exportUserInfoExcel({ commit }, params) {
    return userInfoApi.exportUserInfoExcel(params)
  }
}

export default {
  namespaced: true,
  state,
  actions
}
