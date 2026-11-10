"use strict";var n=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=n(function(o,s){
var v=require('@stdlib/assert-is-string/dist').isPrimitive,t=require('@stdlib/string-base-replace/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function g(i){var r,e;if(!v(i))throw new TypeError(a('null3B',i));if(i==="")return[];if(i.charAt(0)!=="/")throw new Error(a("invalid argument. Must provide either an empty string or a string starting with a `/` character. Value: `%s`.",i));for(r=i.split("/"),r=r.slice(1),e=0;e<r.length;e++)r[e]=t(r[e],/~1/g,"/"),r[e]=t(r[e],/~0/g,"~");return r}s.exports=g
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
