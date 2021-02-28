import Vue from 'vue';

let debuggerFunc = function (json){
    let jsonStr = JSON.stringify(json,null,2);
    //创建新数组，存放数据及样式
    let arr=[''];
    //给每一个黑字设置样式
    arr[0]+='%c'+ jsonStr;
    //用随机函数生成三位数代表rgb颜色
    var random = randomFunc();
    arr[1]='color:#fff;font-size:15px;background-color:#'+random;
    console.log.apply(console,arr)
}

let randomFunc = function(){
    let random = Math.random().toFixed(3)*1000;
    if(random <= 100){
        return randomFunc();
    }else{
        return random;
    }
}

window.console.debug = debuggerFunc;


// 添加到 Vue原型链
// 临时调试方法
Vue.prototype.$debugger = debuggerFunc;
