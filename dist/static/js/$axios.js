import Vue from 'vue';
import axios from 'axios';

// 配置baseURL
const serverAddress = {
    // 生产环境服务器地址 https://production.hfxing.cn:8880/ 
    production: 'http://www.xcycgj.cn:1785/',
    // 开发环境服务器地址 https://t.pandabus.cc:18802/
    development: 'http://www.xcycgj.cn:1785/',
};
// 通过 process.env.NODE_ENV 来判断当前运行环境
axios.defaults.baseURL = serverAddress[process.env.NODE_ENV];


// 拦截所有请求
axios.interceptors.request.use((request) => {

    // 如果包含本地测试数据的请求地址
    // if ('test-json-data'.indexOf(request.url)) {
    //     // 将本次请求的 baseURL 临时替换
    //     request.baseURL = 'http://localhost:8090/static';
    //     return request;
    // }

    // 除登录的请求地址以外所有请求都添加 account_token;
    // let token = Vue.prototype.$localStorage.getItem('token');
    // request.headers.Authorization = token;
    request.headers = {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
    return request;
}, (err) => {
    return Promise.reject(err);
});


// 拦截所有响应
axios.interceptors.response.use((response) => {
    return response;
}, (err) => {
    return Promise.reject(err);
});

// 添加到 Vue原型链
Vue.prototype.$axios = axios;
