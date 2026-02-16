"use strict";var C=function(v,u){return function(){return u||v((u={exports:{}}).exports,u),u.exports}};var N=C(function(P,D){
function H(v,u,r,n,q){var a,l,m,t,O,R,e,x,c,y,o,w,b,g,j,k,A,B,z,p;if(z=u[0],!(z<=0))for(e=n[0],x=n[1],c=n[2],y=n[3],o=n[4],w=n[5],a=r[0],l=r[1],m=r[2],t=r[3],O=r[4],R=r[5],b=v[0],g=v[1],j=v[2],k=v[3],A=v[4],B=v[5],p=0;p<z;p++)B[w]=q(b[e],g[x],j[c],k[y],A[o]),e+=a,x+=l,c+=m,y+=t,o+=O,w+=R}D.exports=H
});var F=C(function(Q,E){
var i=require('@stdlib/strided-base-stride2offset/dist'),I=N();function J(v,u,r,n){var q,a;return a=u[0],q=[i(a,r[0]),i(a,r[1]),i(a,r[2]),i(a,r[3]),i(a,r[4]),i(a,r[5])],I(v,u,r,q,n)}E.exports=J
});var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=F(),L=N();K(G,"ndarray",L);module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
