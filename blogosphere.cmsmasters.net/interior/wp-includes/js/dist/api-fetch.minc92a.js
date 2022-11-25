/*! This file is auto-generated */
!function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return b}});var r=window.wp.i18n;var n=function(e){const t=(e,r)=>{const{headers:n={}}=e;for(const o in n)if("x-wp-nonce"===o.toLowerCase()&&n[o]===t.nonce)return r(e);return r({...e,headers:{...n,"X-WP-Nonce":t.nonce}})};return t.nonce=e,t};var o=(e,t)=>{let r,n,o=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(r=e.namespace.replace(/^\/|\/$/g,""),n=e.endpoint.replace(/^\//,""),o=n?r+"/"+n:r),delete e.namespace,delete e.endpoint,t({...e,path:o})};var a=e=>(t,r)=>o(t,(t=>{let n,o=t.url,a=t.path;return"string"==typeof a&&(n=e,-1!==e.indexOf("?")&&(a=a.replace("?","&")),a=a.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(a=a.replace("?","&")),o=n+a),r({...t,url:o})})),s=window.wp.url;function i(e,t){return Promise.resolve(t?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}var c=function(e){const t=Object.fromEntries(Object.entries(e).map((e=>{let[t,r]=e;return[(0,s.normalizePath)(t),r]})));return(e,r)=>{const{parse:n=!0}=e;let o=e.path;if(!o&&e.url){const{rest_route:t,...r}=(0,s.getQueryArgs)(e.url);"string"==typeof t&&(o=(0,s.addQueryArgs)(t,r))}if("string"!=typeof o)return r(e);const a=e.method||"GET",c=(0,s.normalizePath)(o);if("GET"===a&&t[c]){const e=t[c];return delete t[c],i(e,!!n)}if("OPTIONS"===a&&t[a]&&t[a][c]){const e=t[a][c];return delete t[a][c],i(e,!!n)}return r(e)}};const d=(e,t)=>{let{path:r,url:n,...o}=e;return{...o,url:n&&(0,s.addQueryArgs)(n,t),path:r&&(0,s.addQueryArgs)(r,t)}},u=e=>e.json?e.json():Promise.reject(e),p=e=>{const{next:t}=(e=>{if(!e)return{};const t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}})(e.headers.get("link"));return t};var l=async(e,t)=>{if(!1===e.parse)return t(e);if(!(e=>{const t=!!e.path&&-1!==e.path.indexOf("per_page=-1"),r=!!e.url&&-1!==e.url.indexOf("per_page=-1");return t||r})(e))return t(e);const r=await b({...d(e,{per_page:100}),parse:!1}),n=await u(r);if(!Array.isArray(n))return n;let o=p(r);if(!o)return n;let a=[].concat(n);for(;o;){const t=await b({...e,path:void 0,url:o,parse:!1}),r=await u(t);a=a.concat(r),o=p(t)}return a};const h=new Set(["PATCH","PUT","DELETE"]),f="GET";const w=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t?204===e.status?null:e.json?e.json():Promise.reject(e):e},g=e=>{const t={code:"invalid_json",message:(0,r.__)("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch((()=>{throw t}))},m=function(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(w(e,t)).catch((e=>y(e,t)))};function y(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)throw e;return g(e).then((e=>{const t={code:"unknown_error",message:(0,r.__)("An unknown error occurred.")};throw e||t}))}var v=(e,t)=>{if(!function(e){const t=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&t}(e))return t(e);let n=0;const o=e=>(n++,t({path:`/wp/v2/media/${e}/post-process`,method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((()=>n<5?o(e):(t({path:`/wp/v2/media/${e}?force=true`,method:"DELETE"}),Promise.reject()))));return t({...e,parse:!1}).catch((t=>{const n=t.headers.get("x-wp-upload-attachment-id");return t.status>=500&&t.status<600&&n?o(n).catch((()=>!1!==e.parse?Promise.reject({code:"post_process",message:(0,r.__)("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(t))):y(t,e.parse)})).then((t=>m(t,e.parse)))};const _={Accept:"application/json, */*;q=0.1"},P={credentials:"include"},O=[(e,t)=>("string"!=typeof e.url||(0,s.hasQueryArg)(e.url,"_locale")||(e.url=(0,s.addQueryArgs)(e.url,{_locale:"user"})),"string"!=typeof e.path||(0,s.hasQueryArg)(e.path,"_locale")||(e.path=(0,s.addQueryArgs)(e.path,{_locale:"user"})),t(e)),o,(e,t)=>{const{method:r=f}=e;return h.has(r.toUpperCase())&&(e={...e,headers:{...e.headers,"X-HTTP-Method-Override":r,"Content-Type":"application/json"},method:"POST"}),t(e)},l];const j=e=>{if(e.status>=200&&e.status<300)return e;throw e};let T=e=>{const{url:t,path:n,data:o,parse:a=!0,...s}=e;let{body:i,headers:c}=e;c={..._,...c},o&&(i=JSON.stringify(o),c["Content-Type"]="application/json");return window.fetch(t||n||window.location.href,{...P,...s,body:i,headers:c}).then((e=>Promise.resolve(e).then(j).catch((e=>y(e,a))).then((e=>m(e,a)))),(e=>{if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:(0,r.__)("You are probably offline.")}}))};function A(e){return O.reduceRight(((e,t)=>r=>t(r,e)),T)(e).catch((t=>"rest_cookie_invalid_nonce"!==t.code?Promise.reject(t):window.fetch(A.nonceEndpoint).then(j).then((e=>e.text())).then((t=>(A.nonceMiddleware.nonce=t,A(e))))))}A.use=function(e){O.unshift(e)},A.setFetchHandler=function(e){T=e},A.createNonceMiddleware=n,A.createPreloadingMiddleware=c,A.createRootURLMiddleware=a,A.fetchAllMiddleware=l,A.mediaUploadMiddleware=v;var b=A;(window.wp=window.wp||{}).apiFetch=t.default}();