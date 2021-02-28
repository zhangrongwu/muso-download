export const isAndroid = () =>{
  var u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
      return true;
  } else if (u.indexOf('iPhone') > -1) {
      //苹果手机
      return false;
  }
} 