
/* eslint no-useless-escape:0 import/prefer-default-export:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = (path: string): boolean => reg.test(path);

export const delay = (ms: number) =>new Promise(res=>setTimeout(res,ms));

export const flattenObj = function(obj: any){
  const result = {};

  function recurse(src: any, prop: string | number) {
    const toString = Object.prototype.toString;
    if (toString.call(src) == '[object Object]') {
      let isEmpty = true;
      for (let p in src) {
        isEmpty = false;
        recurse(src[p], prop ? prop + '.' + p : p)
      }
      if (isEmpty && prop) {
        // @ts-ignore
        result[prop] = {};
      }
    } else if (toString.call(src) == '[object Array]') {
      const len = src.length;
      if (len > 0) {
        src.forEach(function (item: any, index: number) {
          recurse(item, prop ? prop + '.[' + index + ']' : index);
        })
      } else {
        // @ts-ignore
        result[prop] = [];
      }
    } else {
      // @ts-ignore
      result[prop] = src;
    }
  }
  recurse(obj,'');

  return result;
}

export const isIOS = () => {
  const ua = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(ua)) {
    // console.log('苹果终端设备')
    return true
  }
  return false
}

export const isMobile = () => navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
