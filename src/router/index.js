import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
var routerName = '/down'
var u = navigator.userAgent;
// if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
//     routerName = '/downAndroid';
// } else if (u.indexOf('iPhone') > -1) {
//     //苹果手机
//     routerName = '/downMain';
// } else if (u.indexOf('Windows Phone') > -1) {
//     //winphone手机
// }
export default new Router({
    mode: 'hash',
    routes: [{
            path: '/',
            redirect: routerName
        },
        {
            path: '/down',
            component: resolve => require(['@/components/views/down.vue'], resolve),
        },
       
    ]
})
