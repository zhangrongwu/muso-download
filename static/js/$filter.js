/**
 * 过滤器
 *
 * @date 2019-01-21
 * @author chenyongzheng
 */

import Vue from 'vue';

/**
 * 金额格式化
 *
 * @date 2019-01-21
 * @author chenyongzheng
 * @param val
 * @return {string}
 */
Vue.filter('cashFormat', function (number) {

    let decimals = 1;
    let dec_point = '.';
    let thousands_sep = ',';

    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    let n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            let k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    let re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);

})

Vue.filter('cashFormatT', function (number) {

    let decimals = 2;
    let dec_point = '.';
    let thousands_sep = ',';

    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    let n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            let k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        };

    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    let re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);

})

import moment from 'moment';

/**
 * 日期格式化
 *
 * @date 2019-01-21
 * @author chenyongzheng
 * @param val
 * @return {string}
 */
Vue.filter('dateMoment', function (val) {
    return moment(val).format('YYYY-MM-DD HH:mm');
})

/**
 * 卡号格式化
 *
 * @date 2019-01-21
 * @author chenyongzheng
 * @param val
 * @return {string}
 */
Vue.filter('cardFormat', function (val) {
    try {
        return val.substring(0, 4) + '**** **** ****' + val.substring(16, 19);
    } catch (e) {

    }
})

/**
 * 手机号格式化
 *
 * @date 2019-01-21
 * @author chenyongzheng
 * @param val
 * @return {string}
 */
Vue.filter('phoneFormat', function (val) {
    try {
        return val.substring(0, 3) + '****' + val.substring(7, 11);
    } catch (e) {

    }
})

/**
 * 身份证号格式化
 *
 * @date 2019-01-21
 * @author chenyongzheng
 * @param val
 * @return {string}
 */
Vue.filter('idNumberFormat', function (val) {
    try {
        return val.substring(0, 4) + '**********' + val.substring(14, 18);
    } catch (e) {

    }
})
