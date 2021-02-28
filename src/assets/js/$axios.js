import Vue from 'vue';
import axios from 'axios';

// 配置baseURL
const serverAddress = {
    production: 'https://www.t-mi.co',
    development: 'https://www.t-mi.co',
};
// 通过 process.env.NODE_ENV 来判断当前运行环境
axios.defaults.baseURL = serverAddress[process.env.NODE_ENV];


// // 拦截所有请求
// axios.interceptors.request.use((request) => {

//     // 如果包含本地测试数据的请求地址
//     // if ('test-json-data'.indexOf(request.url)) {
//     //     // 将本次请求的 baseURL 临时替换
//     //     request.baseURL = 'http://localhost:8090/static';
//     //     return request;
//     // }

//     // 除登录的请求地址以外所有请求都添加 account_token;
//     // let token = Vue.prototype.$localStorage.getItem('token');
//     // request.headers.Authorization = token;
//     request.headers = {
//         'Content-Type': 'application/x-www-form-urlencoded'
//     }
//     return request;
// }, (err) => {
//     return Promise.reject(err);
// });


// 拦截所有响应
// axios.interceptors.response.use((response) => {
//     return response;
// }, (err) => {
//     return Promise.reject(err);
// });
export const axiosData = (type, url, data, _callback, that,responseType) => {
    const role = localStorage.getItem('access_token');
    if(responseType==undefined){
    	responseType=''
    }
	let config = {
		method: type,
		url: url,
		data: data,
		requestHeader: {
			'Content-Type': 'application/json'
		},
		responseType: responseType,
		timeout: 30000,
	}
	if(!role){
    }else{
    	config.headers={
			"Authorization":'Bearer '+ role
		}
    }

	axios(config).then(
		function(res) {
			if(res.status == 200) {

                if (res.data.code== 401) {
                    if(config.url!='/mall-portal/cart/list'){
                        localStorage.removeItem('access_token', res.data.token);
                        localStorage.removeItem('access_refreshToken', res.data.refreshToken);
                        localStorage.removeItem('access_tokenHead', res.data.tokenHead);
                        // that.$confirm('会话过期，请重新登录！', '提示', {
                        // 	type: 'warning'
                        // })
                        that.$router.push('/login');
                        
                    }
                    return false
                }
                _callback(res.data)
			} else if(res.status == 401) {
                    localStorage.removeItem('access_token', res.data.token);
                    localStorage.removeItem('access_refreshToken', res.data.refreshToken);
                    localStorage.removeItem('access_tokenHead', res.data.tokenHead);
				// that.$confirm('会话过期，请重新登录！', '提示', {
				// 	type: 'warning'
				// })
				that.$router.push('/login');
                return false
			} else {

				// that.$message.error(res.data.message)
			}
			// NProgress.done();
			// that.loading = false;
			// that.listLoading = false;
		}
	).catch(
		function(err) {
			// NProgress.done();
			// that.loading = false;
			// that.listLoading = false;
			console.log(err.response);
			if (err.response!=undefined) {
				if(err.response.status == 400) {
					// that.$message.error(err.response.data.message)
				}else if(err.response.status == 401){
                    localStorage.removeItem('access_token', res.data.token);
                    localStorage.removeItem('access_refreshToken', res.data.refreshToken);
                    localStorage.removeItem('access_tokenHead', res.data.tokenHead);
					// that.$confirm('会话过期，请重新登录！', '提示', {
					// 	type: 'warning'
					// })
					that.$router.push('/login');
				}else {
					that.$message.error('数据解析失败！')
				}
			}


		}
	)

};
// 添加到 Vue原型链
Vue.prototype.$axios = axios;
