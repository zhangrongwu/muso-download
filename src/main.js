// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入Vant
import Vant from 'vant';
// 引入Vant样式
import 'vant/lib/index.css';
// 引入swiper样式
import 'swiper/dist/css/swiper.css';
// 引入动画库
import animated from 'animate.css'
// 引入路由
import router from './router/index';
// 引入axios
import '@/assets/js/$axios.js';
// 引入md5
import '@/assets/js/$md5.js';
// 引入font-awesome
// import 'font-awesome/css/font-awesome.min.css'
// 引入Storage
import '@/assets/js/$localStorage.js';
// 引入格式化
import '@/assets/js/$moment.js';
// 引入过滤器
import '@/assets/js/$filter.js';
// // 适配
import 'lib-flexible/flexible'
// 引入签名
import '@/assets/js/$sign.js';
// 引入校验文件
import '@/assets/js/check.js'
//引入调试js
import '@/assets/js/$debugger.js';
// 兼容ie
import '@babel/polyfill'
// 懒加载
import { Lazyload } from 'vant';
// 引用fastClick
// import FastClick from 'fastclick';
// FastClick.attach(document.body);
// 使用Vant
Vue.use(Vant);
// 使用路由
Vue.use(router);
Vue.use(animated);//动画插件
//---------------------中英文切换-------------------
import lang from '@/language/index' // 中英文翻译

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n=new VueI18n({
    locale:localStorage.getItem('languageSet')||'zh',   //从localStorage里获取用户中英文选择，没有则默认中文
    messages:{
      'zh':{
        ...lang.zh,
        // ...zhLocale
      },
      'en':{
        ...lang.en,
        // ...enLocale
      }
    }
})

Vue.config.productionTip = false

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
import AMap from 'vue-amap';

Vue.use(AMap);

// 初始化vue-amap
AMap.initAMapApiLoader({
    // 高德key
    key: 'ec3e29785a641aaab11394a5529cb4c2',
    // 插件集合 （插件按需引入）
    plugin: [
        "AMap.Autocomplete", //输入提示插件
        "AMap.PlaceSearch", //POI搜索插件
        "AMap.Scale", //右下角缩略图插件 比例尺
        "AMap.OverView", //地图鹰眼插件
        "AMap.ToolBar", //地图工具条
        "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
        "AMap.PolyEditor", //编辑 折线多，边形
        "AMap.CircleEditor", //圆形编辑器插件
        "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
    ],
});

new Vue({
    el: '#app',
    router,
    i18n,   //把 i18n 挂载到 vue 根实例上
    components: {App},
    template: '<App/>'
})

