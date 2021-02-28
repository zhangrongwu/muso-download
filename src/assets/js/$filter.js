import Vue from 'vue';
// 时间处理
Vue.filter('historyDate', function (val) {
    try {
        return new Date(val).format('MM-dd');
    } catch (e) {

    }
})
// 手机号格式处理
Vue.filter('phoneFormat', function (val) {
    try {
        return val.substring(0, 3) + '****' + val.substring(7, 11);
    } catch (e) {

    }
})
// 日期格式处理
Vue.filter('dateFilter', function (val) {
    try {
        return new Date(val).format('yyyy-MM-dd hh:mm:ss')
    } catch (e) {

    }
})
// 日期格式处理
Vue.filter('dateDayFilter', function (val) {
    try {
        return new Date(val).format('yyyy-MM-dd')
    } catch (e) {

    }
})
// 订单状态处理
Vue.filter('orderStatusFilter', function (val) {
    // 订单状态：0->待付款；1->待发货；2->已发货；3->已完成；4->已关闭；5->无效订单
    try {
        switch (val){
            case 0:
                return '待付款'
                break;
            case 1:
                return '待发货'
                break;
            case 2:
                return '已发货'
                break;
            case 3:
                return '已完成'
                break;
            case 4:
                return '已关闭'
                break;
            case 5:
                return '无效订单'
                break;
            default:
                break;
        }

    } catch (e) {

    }
})
// 物流状态处理
Vue.filter('logisticStatusFilter', function (val) {
    // 订单状态：2-在途中,3-签收,4-问题件
    try {
        switch (val){

            case 2:
                return '在途中'
                break;
            case 3:
                return '签收'
                break;
            case 4:
                return '问题件'
                break;

            default:
                break;
        }

    } catch (e) {

    }
})
// 购物车数量格式处理
Vue.filter('carNumFilter', function (val) {
    try {
        var valText = ''
        if(val>99){
            valText = "99+"
        }else{
            valText = val
        }
        return valText
    } catch (e) {

    }
})
// 发票状态处理
Vue.filter('fpFilter', function (val) {
    // 订单状态：0->不开发票；1->电子发票；2->纸质发票
    try {
        switch (val){

            case 0:
                return '不开发票'
                break;
            case 1:
                return '电子发票'
                break;
            case 2:
                return '纸质发票'
                break;

            default:
                break;
        }

    } catch (e) {

    }
})
