"use strict";var k=function(v,i){return function(){return i||v((i={exports:{}}).exports,i),i.exports}};var B=k(function(K,A){
function F(v,i,r,u){var m,z,c,q,p,f,o,e,n,x,l,w,y,O,R,b,g,h,a,N;if(a=i[0],!(a<=0))for(m=r[0],z=r[1],c=r[2],q=r[3],p=r[4],f=r[5],m<0?o=(1-a)*m:o=0,z<0?e=(1-a)*z:e=0,c<0?n=(1-a)*c:n=0,q<0?x=(1-a)*q:x=0,p<0?l=(1-a)*p:l=0,f<0?w=(1-a)*f:w=0,y=v[0],O=v[1],R=v[2],b=v[3],g=v[4],h=v[5],N=0;N<a;N++)h[w]=u(y[o],O[e],R[n],b[x],g[l]),o+=m,e+=z,n+=c,x+=q,l+=p,w+=f}A.exports=F
});var D=k(function(L,C){
function G(v,i,r,u,m){var z,c,q,p,f,o,e,n,x,l,w,y,O,R,b,g,h,a,N,j;if(N=i[0],!(N<=0))for(e=u[0],n=u[1],x=u[2],l=u[3],w=u[4],y=u[5],z=r[0],c=r[1],q=r[2],p=r[3],f=r[4],o=r[5],O=v[0],R=v[1],b=v[2],g=v[3],h=v[4],a=v[5],j=0;j<N;j++)a[y]=m(O[e],R[n],b[x],g[l],h[w]),e+=z,n+=c,x+=q,l+=p,w+=f,y+=o}C.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=B(),I=D();H(E,"ndarray",I);module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
