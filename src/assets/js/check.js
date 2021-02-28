import Vue from 'vue';
function isIdCard(id){
	var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
	if(!regIdNo.test(id)){ 
	  // alert(‘身份证号填写有误‘); 
	  return false; 
	}else{
	  return true;
	}
}
Vue.prototype.isIdCard = isIdCard;