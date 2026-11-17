"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var u=n(function(h,s){
var v=require('@stdlib/assert-is-string/dist').isPrimitive,i=require('@stdlib/string-base-replace/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist'),l=/~(?![01])/;function g(e){var r,t;if(!v(e))throw new TypeError(a('null3B',e));if(e==="")return[];if(e.charAt(0)!=="/")throw new Error(a("invalid argument. Must provide either an empty string or a string starting with a `/` character. Value: `%s`.",e));if(l.test(e))throw new Error(a("invalid argument. A `~` character must be followed by either `0` or `1`. Value: `%s`.",e));for(r=e.split("/"),r=r.slice(1),t=0;t<r.length;t++)r[t]=i(r[t],/~1/g,"/"),r[t]=i(r[t],/~0/g,"~");return r}s.exports=g
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
