// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e,t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__;function f(e,t,r,o){var n,i,a,l,u,f,c,_,p,d,y,b,s,v,j,m,g,h,w,O;if(!((w=t[0])<=0))for(c=(n=r[0])<0?(1-w)*n:0,_=(i=r[1])<0?(1-w)*i:0,p=(a=r[2])<0?(1-w)*a:0,d=(l=r[3])<0?(1-w)*l:0,y=(u=r[4])<0?(1-w)*u:0,b=(f=r[5])<0?(1-w)*f:0,s=e[0],v=e[1],j=e[2],m=e[3],g=e[4],h=e[5],O=0;O<w;O++)h[b]=o(s[c],v[_],j[p],m[d],g[y]),c+=n,_+=i,p+=a,d+=l,y+=u,b+=f}return e=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===n.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(l.call(e,t)||u.call(e,t)?(f=e.__proto__,e.__proto__=o,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},e(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,o,n){var i,a,l,u,f,c,_,p,d,y,b,s,v,j,m,g,h,w,O,P;if(!((O=t[0])<=0))for(_=o[0],p=o[1],d=o[2],y=o[3],b=o[4],s=o[5],i=r[0],a=r[1],l=r[2],u=r[3],f=r[4],c=r[5],v=e[0],j=e[1],m=e[2],g=e[3],h=e[4],w=e[5],P=0;P<O;P++)w[s]=n(v[_],j[p],m[d],g[y],h[b]),_+=i,p+=a,d+=l,y+=u,b+=f,s+=c}}),f},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).quinary=t();
//# sourceMappingURL=browser.js.map
