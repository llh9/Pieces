!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){"use strict";function r(){return fetch("/api/images").then((function(t){return t.json()})).catch((function(t){return reject(t)}))}function i(t){return fetch("/api/images/"+t).then((function(t){return t.json()})).catch((function(t){return reject(t)}))}n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return i}))},function(t,e,n){"use strict";function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0,n=document.createElement(t);return e&&n.setAttribute("class",e),n}n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d}));var i=n(0);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,a=[],o=!0,u=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(t){u=!0,i=t}finally{try{o||null==n.return||n.return()}finally{if(u)throw i}}return a}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t){var e=a(t.currentTarget.getAttribute("for").split("-"),3),n=e[0],r=e[2];fetch("/api/images/".concat(n),{method:"PUT",body:JSON.stringify({rating:r}),headers:{"Content-Type":"application/json"}}).then((function(){if(window.location.pathname.includes("/images")){console.log("yoyo");var t=window.location.pathname.split("/")[2],e=document.getElementsByClassName("container")[0];Object(i.a)(t).then((function(t){e.removeChild(e.firstChild),e.appendChild(d(t))}))}else Object(i.b)().then((function(t){c(t)}))}))}function c(t){var e,n=document.getElementsByClassName("container")[0];n.innerHTML="";var i=r("div","row");return t.forEach((function(t,a){var o=r("div","col-md-4 mt-4");return o.appendChild(d(t)),a%3==0&&(i.appendChild(o),n.appendChild(i),e=i),e.appendChild(o)}))}function d(t){var e=r("div","card"),n=r("div","card-body"),i=r("div","card__image-container"),a=r("img","card-img-top card__image--cover");a.setAttribute("src",t.image),a.setAttribute("alt",t.description);var o=r("div","rating d-flex justify-content-start");o.setAttribute("data-id",t._id),o.setAttribute("data-rating",t.rating);var c=function(t){var e={1:"One Star",2:"Two Stars",3:"Three Stars",4:"Four Stars",5:"Five Stars"},n=r("form");n.setAttribute("action","post");for(var i=1;i<=5;i++){var a=r("input","visuallyhidden");a.setAttribute("type","radio"),a.setAttribute("name","rating"),a.setAttribute("id","".concat(t._id,"-star-").concat(i)),a.setAttribute("value",i);var o=r("label");o.setAttribute("for","".concat(t._id,"-star-").concat(i));var c=r("span","visuallyhidden");c.innerText=e[i];var d=r("i","fa-star ".concat(t.rating>=i?"fas":"far"));o.appendChild(c),o.appendChild(d),o.onclick=u,n.appendChild(a),n.appendChild(o)}return n}(t),d=r("a","card-text font-weight-bold mt-2");return d.setAttribute("href","/images/".concat(t._id)),d.innerText="".concat(t.description," (").concat(t.rating,")"),i.append(a),o.append(c),n.appendChild(o),n.appendChild(d),e.appendChild(i),e.appendChild(n),e}},,function(t,e,n){"use strict";n.r(e);var r=n(0),i=n(1);Object(r.b)().then((function(t){return Object(i.b)(t)}))}]);