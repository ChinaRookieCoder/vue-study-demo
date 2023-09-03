import BigNumber from 'bignumber.js'
// import parseTime, formatTime and set to filter
export { parseTime, formatTime } from '@/utils'
/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

/**
 * @param {number} time
 */
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
  return (num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * 设置千分位并保留小数位
 * num: 需转化的数字
 * needDot: 是否保留小数
 * dotNum: 保留几位小数
 * needRounding: 是否四舍五入
 */
export function toThousandAndDotFilter(num, needDot, dotNum, needRounding) {
  let number = ''
  if (needDot && !needRounding) {
    // 保留小数,不四舍五入
    number = changeTwoDecimal_f(num, dotNum)
  } else if (needDot && needRounding) {
    // 保留小数,四舍五入
    number = new BigNumber(num).toFixed(dotNum)
  }
  // 千分位
  number = toThousandFilter(number)
  return number
}

function changeTwoDecimal_f(x, dotNum) {
  var f_x = parseFloat(x)
  if (isNaN(x)) {
    return 0
  }
  const pow = new BigNumber(Math.pow(10, dotNum))
  const x_info = new BigNumber(x)
  f_x = new BigNumber(Math.floor(x_info.multipliedBy(pow).toNumber())).dividedBy(pow).toNumber()
  var s_x = f_x.toString()
  var pos_decimal = s_x.indexOf('.')
  if (pos_decimal < 0) {
    pos_decimal = s_x.length
    s_x += '.'
  }
  while (s_x.length <= pos_decimal + dotNum) {
    s_x += '0'
  }
  return s_x
}
