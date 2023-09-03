/*
 * @Author: your name
 * @Date: 2022-01-19 15:34:45
 * @LastEditTime: 2022-01-20 16:20:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \issoc-obp-website\src\utils\secureUtil.js
 */
import JSEncrypt from 'jsencrypt'
export default {
  encrypt(msg, key) {
    var encrypt = new JSEncrypt()
    encrypt.setPublicKey(key)
    var encryptMsg = encrypt.encrypt(msg)
    return encryptMsg
  },
  decrypt(msg, key) {
    var decrypt = new JSEncrypt()
    decrypt.setPrivateKey(key)
    var decryptMsg = decrypt.decrypt(msg)
    return decryptMsg
  }
}
