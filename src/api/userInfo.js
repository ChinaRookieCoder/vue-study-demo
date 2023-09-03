import http from '@/utils/http'

class CompanyAuditApi {
  getPublicKey(data) {
    return http({
      url: '/login/getPublicKey',
      method: 'post',
      data,
      noLoading: true
    })
  }

  pageQueryUserInfo(params) {
    return http({
      url: '/pageQueryUserInfo',
      method: 'get',
      params,
      noLoading: true
    })
  }

  insertUserInfo(data) {
    return http({
      url: '/insertUserInfo',
      method: 'post',
      data,
      noLoading: false
    })
  }

  getUserInfo(params) {
    return http({
      url: `/getUserInfo/${params.id}`,
      method: 'get',
      noLoading: false
    })
  }

  modifyUserInfo(data) {
    return http({
      url: '/modifyUserInfo',
      method: 'post',
      data,
      noLoading: false
    })
  }

  deleteUserInfo(data) {
    return http({
      url: '/deleteUserInfo',
      method: 'post',
      data,
      noLoading: false
    })
  }

  exportUserInfoExcel(data) {
    return http({
      url: '/exportUserInfoExcel',
      method: 'post',
      data: data,
      noLoading: false,
      type: 'application/vnd.ms-excel;charset=utf-8',
      responseType: 'blob'
    })
  }
}

export default new CompanyAuditApi()
