/**
 * 签名
 *
 * @date 2019-03-27
 * @author chenyongzheng
 */

import Vue from 'vue';
import md5 from 'js-md5'

function objKeySort(obj) {//排序的函数
    var newkey = Object.keys(obj).sort();
    //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
    //创建一个新的对象，用于存放排好序的键值对
    var newObj = {};
    //遍历newkey数组
    for (var i = 0; i < newkey.length; i++) {
        //向新创建的对象中按照排好的顺序依次增加键值对
        newObj[newkey[i]] = obj[newkey[i]];
    }
    //返回排好序的新对象
    return newObj;
};

function sign(data) {
    let dataStr = "";
    if (data['datas']) {
        data['datas'] = JSON.stringify(data['datas']);
    }
    data = objKeySort(data);  //函数执行
    for (let key in data) {
        dataStr += key + "=" + data[key] + "&";
    }
    return md5(dataStr + "key=dalianyitongchuangxin");
}

// 添加到 Vue原型链
Vue.prototype.$sign = sign;
