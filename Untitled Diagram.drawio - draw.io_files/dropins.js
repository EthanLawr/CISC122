/*! For license information please see dropins_sdk_v2.js.LICENSE */
!function(e,o){for(var t in o)e[t]=o[t]}(window,function(e){var o={};function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var i in e)t.d(n,i,function(o){return e[o]}.bind(null,i));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=3)}([function(e,o,t){"use strict";t.d(o,"i",(function(){return n})),t.d(o,"g",(function(){return i})),t.d(o,"e",(function(){return r})),t.d(o,"j",(function(){return a})),t.d(o,"b",(function(){return p})),t.d(o,"d",(function(){return u})),t.d(o,"c",(function(){return d})),t.d(o,"f",(function(){return h})),t.d(o,"k",(function(){return b})),t.d(o,"a",(function(){return m})),t.d(o,"h",(function(){return v}));var n,i,r,s=t(1);function a(e,o){var t=window.screenX+((window.outerWidth||document.documentElement.offsetWidth)-e)/2,n=window.screenY+((window.outerHeight||document.documentElement.offsetHeight)-o)/2;return"width=".concat(e,",height=").concat(o,",left=").concat(t,",top=").concat(n)}function c(e,o,t){var n=-1===e.indexOf("?")?"?":"&";return"".concat(e).concat(n).concat(o,"=").concat(t)}function l(e){return c(e,"version",encodeURIComponent(Dropbox.VERSION))}function p(e,o){var t,n,i=encodeURIComponent(window.location.protocol+"//"+window.location.host),r=encodeURIComponent(Dropbox.appKey),s=Dropbox.productKey?encodeURIComponent(Dropbox.productKey):null,a=encodeURIComponent(e.linkType||""),p=encodeURIComponent(e._trigger||"js"),u=Boolean(e.multiselect),d=encodeURIComponent(m(e.extensions,"join",(function(e){return e.join(" ")}))||""),f=Boolean(e.folderselect);o=Boolean(o);var h="".concat(Dropbox.baseUrl,"/chooser?origin=").concat(i,"&app_key=").concat(r,"&link_type=").concat(a,"&trigger=").concat(p,"&multiselect=").concat(u,"&extensions=").concat(d,"&folderselect=").concat(f,"&iframe=").concat(o);if(void 0!==e.fileselect&&(h=c(h,"fileselect",Boolean(e.fileselect))),void 0!==e.sizeLimit&&(h=c(h,"size_limit",e.sizeLimit)),null!=e.initialNavigation){if(null!=e.initialNavigation.mode)h=c(h,"initial_navigation_mode",encodeURIComponent(e.initialNavigation.mode));if(null!=e.initialNavigation.role)h=c(h,"initial_navigation_role",encodeURIComponent(e.initialNavigation.role));if(e.initialNavigation.cursor)h=c(h,"initial_navigation_cursor",encodeURIComponent(e.initialNavigation.cursor))}null!=e.initialViewType&&(h=c(h,"initial_view_type",encodeURIComponent(e.initialViewType)));null!=e.fields&&(h=c(h,"fields",encodeURIComponent("function"==typeof e.fields.join?e.fields.join(" "):void 0)));(!1===e.showSignOut&&(h=c(h,"show_sign_out","false")),e.initialNavigationPath)&&(h=c(h,"initial_navigation_path",encodeURIComponent(e.initialNavigationPath)));e.requiredPermissions&&(h=c(h,"required_permissions",encodeURIComponent(m(e.requiredPermissions,"join",(function(e){return e.join(" ")}))||"")));(s&&(h=c(h,"product_key",s)),null===(t=e.suggestions)||void 0===t?void 0:t.experimentGroup)&&(h=c(h,"suggestions_experiment_group",encodeURIComponent(null===(n=e.suggestions)||void 0===n?void 0:n.experimentGroup)));return l(h)}function u(){/\bTrident\b/.test(navigator.userAgent)&&null!=document.body&&null==i&&((i=document.createElement("iframe")).setAttribute("id","dropbox_xcomm"),i.setAttribute("src",Dropbox.baseUrl+"/static/api/1/xcomm.html"),i.style.display="none",document.body.appendChild(i))}function d(e){var o={options:Object(s.a)(Object(s.a)({},e),{success:function(t,n){"function"==typeof e.success&&e.success(t,n),r===o&&(r=null)},cancel:function(t){"function"==typeof e.cancel&&e.cancel(t),r===o&&(r=null)}})};return r=o,o}function f(e,o){var t,n=encodeURIComponent(Dropbox.appKey),i="https://".concat("api.dropboxapi.com","/2/dropins/get_job_status"),r=JSON.stringify({app_key:n,job:o});if(!("withCredentials"in new XMLHttpRequest))throw new Error("Unable to find suitable means of cross domain communication");return t=function(){var o=new XMLHttpRequest;return o.onload=function(){return function(o){var n=o[".tag"];if("complete"===n){if("function"==typeof e.progress&&e.progress(1),"function"==typeof e.success)if(0!==e.success.length&&o.file_ids){var i={fileIds:o.file_ids};e.success(i)}else e.success()}else"pending"===n||"downloading"===n?(null!=o.progress&&"function"==typeof e.progress&&e.progress(o.progress/100),setTimeout(t,1500)):"failed"===n&&"function"==typeof e.error&&e.error(o.error_message)}(JSON.parse(o.responseText))},o.onerror=function(){return"function"==typeof e.error?e.error():void 0},o.open("POST",i,!0),o.setRequestHeader("Content-Type","application/json"),o.send(r)},"function"==typeof e.progress&&e.progress(0),t()}function h(e,o,t){var r,s=JSON.parse(e.data);switch(r=null!=i&&t._popup?i.contentWindow:e.source,void 0!==s.sequence_number&&r.postMessage(JSON.stringify({method:"ack",sequence_number:s.sequence_number}),Dropbox.baseUrl),s.method){case"origin_request":e.source.postMessage(JSON.stringify({method:"origin"}),Dropbox.baseUrl);break;case"ready":if(null!=t.files){var a=void 0;if(t._fetch_url_on_save){for(var c=[],l=0;l<t.files.length;l++){var p=t.files[l];c.push({filename:p.filename})}a=JSON.stringify({method:"files_with_callback",params:c})}else a=JSON.stringify({method:"files",params:t.files});if(r.postMessage(a,Dropbox.baseUrl),null!=t._ews_auth_token){var u=JSON.stringify({method:"ews_auth_token",params:{ews_auth_token:t._ews_auth_token}});r.postMessage(u,Dropbox.baseUrl)}}"function"==typeof t.ready&&t.ready();break;case"files_selected":case"files_saved":"function"==typeof o&&o(),"function"==typeof t.success&&t.success(s.params,n);break;case"cursor_changed":n={cursor:s.params};break;case"progress":"function"==typeof t.progress&&t.progress(s.params);break;case"close_dialog":"function"==typeof o&&o(),"function"==typeof t.cancel&&t.cancel(n);break;case"resize":"function"==typeof t.resize&&t.resize(s.params);break;case"error":"function"==typeof t.error&&t.error(s.params);break;case"error_and_close":"function"==typeof o&&o(),"function"==typeof t.error&&t.error(s.params);break;case"job_id":"function"==typeof o&&o(),f(t,s.params);break;case"save_callback":!function(e,o,t){if(e._fetch_url_on_save){var n=e.fetch_urls_fn;"function"!=typeof n&&"function"==typeof e.error&&e.error("Something went wrong, file url callback not provided."),n(t,o)}}(t,s.params,(function(e){if(null==e)throw new Error("Please supply {urls: [...]} to success callback");if(null!=e.url&&null!=e.urls)throw new Error("Do not pass both url and urls to the save callback");if(null!=e.url&&(e.urls=[e.url]),null==e.urls)throw new Error("Please supply {urls: [...]} to success callback");return s={method:"continue_saving",params:{download_urls:e.urls}},void r.postMessage(JSON.stringify(s),Dropbox.baseUrl)}));break;case"_debug_log":"undefined"!=typeof console&&null!==console&&console.log(s.params.msg);break;case"chooser_extras_changed":Dropbox.chooserExtras=s.params.chooserExtras}}function b(e){var o=encodeURIComponent(window.location.protocol+"//"+window.location.host),t=encodeURIComponent(Dropbox.appKey);return e=Boolean(e),l("".concat(Dropbox.baseUrl,"/saver?origin=").concat(o,"&app_key=").concat(t,"&iframe=").concat(e))}function m(e,o,t){return null!=e&&"function"==typeof e[o]?t(e,o):void 0}function v(){n={},i=null,r=null,null==Dropbox.baseUrl&&(Dropbox.baseUrl="https://".concat("www.dropbox.com")),null==Dropbox.blockBaseUrl&&(Dropbox.blockBaseUrl="https://".concat("dl-web.dropbox.com")),Dropbox.addListener=function(e,o,t){e.addEventListener?e.addEventListener(o,t,!1):e.attachEvent("on".concat(o),(function(e){return e.preventDefault=function(){return!1},t(e)}))},Dropbox.removeListener=function(e,o,t){e.removeEventListener?e.removeEventListener(o,t,!1):e.detachEvent("on".concat(o),t)},Dropbox.createChooserWidget=function(e){var o=d(e),t=function(e){var o=document.createElement("iframe");return o.src="about:blank",o._postAction=e,o.name="dropbox-dropins",o.style.display="block",o.style.backgroundColor="white",o.style.border="none",o}(p(o.options,!0));return t._handler=function(e){e.source===t.contentWindow&&e.origin===Dropbox.baseUrl&&h(e,null,o.options)},Dropbox.addListener(window,"message",t._handler),t},Dropbox.cleanupWidget=function(e){if(!e._handler)throw new Error("Invalid widget!");Dropbox.removeListener(window,"message",e._handler),delete e._handler}}null==window.Dropbox&&(window.Dropbox={})},function(e,o,t){"use strict";t.d(o,"b",(function(){return i})),t.d(o,"a",(function(){return r})),t.d(o,"c",(function(){return s}));var n=function(e,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])})(e,o)};function i(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function t(){this.constructor=e}n(e,o),e.prototype=null===o?Object.create(o):(t.prototype=o.prototype,new t)}var r=function(){return(r=Object.assign||function(e){for(var o,t=1,n=arguments.length;t<n;t++)for(var i in o=arguments[t])Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);return e}).apply(this,arguments)};Object.create;function s(e,o,t){if(t||2===arguments.length)for(var n,i=0,r=o.length;i<r;i++)!n&&i in o||(n||(n=Array.prototype.slice.call(o,0,i)),n[i]=o[i]);return e.concat(n||Array.prototype.slice.call(o))}Object.create},function(e,o,t){"use strict";t.d(o,"c",(function(){return s})),t.d(o,"a",(function(){return a})),t.d(o,"b",(function(){return c})),t.d(o,"d",(function(){return p}));var n=t(0),i="https://".concat("www.dropbox.com","/developers/dropins/chooser/js"),r=["text","documents","images","video","audio"],s={init:function(){}};function a(e,o){null!=o?o.innerHTML="":(o=document.createElement("a")).href="#",o.className+=" dropbox-dropin-btn",Dropbox.isBrowserSupported()?o.className+=" dropbox-dropin-default":o.className+=" dropbox-dropin-disabled";var t=document.createElement("span");return t.className="dropin-btn-status",o.appendChild(t),e=document.createTextNode(e),o.appendChild(e),o}function c(e){return e.replace(/\/+$/g,"").split("/").pop()}function l(e){var o=document.createElement("a");return o.href=e,c(o.pathname)}function p(){var e;Object(n.h)(),null==Dropbox.appKey&&(Dropbox.appKey=null===(e=document.getElementById("dropboxjs"))||void 0===e?void 0:e.getAttribute("data-app-key")),Dropbox.init=function(e){null!=e.appKey&&(Dropbox.appKey=e.appKey),null!=e.productKey&&(Dropbox.productKey=e.productKey)};var o=function(e){var o,t,n;if("string"==typeof e[0])n=e.shift(),o="string"==typeof e[0]?e.shift():l(n),(t=e.shift()||{}).files=[{url:n,filename:o}];else{if(null==(t=e.shift()))throw new Error("Missing arguments. See documentation.");if((null==t.files||!t.files.length)&&"function"!=typeof t.files)throw new Error("Missing files. See documentation.");if(null!=t.fetch_urls_fn){if("function"!=typeof t.fetch_urls_fn)throw new Error("fetch_urls_fn must be a function if supplied.  See documentation.");t._fetch_url_on_save=!0}for(var i=0;i<t.files.length;i++){var r=t.files[i];if("function"==typeof r.url&&(t._fetch_url_on_save=!0,t.fetch_urls_fn=r.url,r.url=null,i>0))throw new Error("Old style url as callback is only supported for single files.");r.filename||(r.filename=l(r.url))}}return t};Dropbox.save=function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];var r=o(e);if(Dropbox.isBrowserSupported()){if(r._popup=!0,"object"!=typeof r.files||!r.files.length)throw new Error("The object passed in must have a 'files' property that contains a list of objects. See documentation.");if(r.iframe&&!r.windowName)throw new Error("Dropbox.save does not yet support creating its own iframe.                       windowName must be provided when the iframe option is present.");for(var s=0,a=r.files;s<a.length;s++){var c=a[s];if(r._fetch_url_on_save){if(r.fetch_urls_fn){if(null!=c.url)throw new Error("You passed in a 'fetch_urls_fn' option to specify the file URLs.  Don't include individual URLs in each file objects.")}else if("function"!=typeof c.url)throw new Error("File urls should be all urls, or a single file with function. See documentation.")}else if("string"!=typeof c.url)throw new Error("File urls to download incorrectly configured. Each file must have a url. See documentation.")}var l=Object(n.j)(735,670);return t(Object(n.k)(r.iframe),l,r).window}alert("Your browser does not support the Dropbox Saver")};var t=function(e,o,t){var i=function(){a.closed||(a.close(),a.postMessage(JSON.stringify({method:"close"}),Dropbox.baseUrl)),Dropbox.removeListener(window,"message",r),clearInterval(c)},r=function(e){e.source!==a&&e.source!==(void 0!==n.g&&null!==n.g?n.g.contentWindow:void 0)||Object(n.f)(e,i,t)},s=t.iframe?"":"".concat(o,",resizable,scrollbars"),a=window.open(e,t.windowName||"dropbox",s);if(!a)throw new Error("Failed to open/load the window. Dropbox.choose and Dropbox.save should only be called from within a user-triggered event handler such as a tap or click event.");a.focus();var c=setInterval((function(){(function(){try{return a.closed}catch(e){}})()&&(i(),"function"==typeof t.cancel&&t.cancel(n.i))}),100);return Dropbox.addListener(window,"message",r),{window:a,onClose:i}},c=function(e){null==e.success&&Object(n.a)(console,"warn",(function(e){return e.warn("You must provide a success callback to the Chooser to see the files that the user selects")})),void 0===e.fileselect||Boolean(e.fileselect)||Boolean(e.folderselect)||Object(n.a)(console,"error",(function(e){return e.error("You must enable either fileselect or folderselect on the Chooser so the user can select something")}));var o=function(){return Object(n.a)(console,"warn",(function(e){return e.warn("The provided list of extensions or file types is not valid. See Chooser documentation: ".concat(i))})),Object(n.a)(console,"warn",(function(e){return e.warn("Available file types are: ".concat(r.join(", ")))})),delete e.extensions};if(null!=e.extensions&&null!=Array.isArray)if(Array.isArray(e.extensions))for(var t=0,s=e.extensions;t<s.length;t++){var a=s[t];a.match(/^\.[\.\w$#&+@!()\-'`_~]+$/)||-1!==r.indexOf(a)||o()}else o();return void 0!==e.sizeLimit&&"number"!=typeof e.sizeLimit&&e.sizeLimit<=0&&Object(n.a)(console,"error",(function(e){return e.error("The sizeLimit option, if provided, must be a positive number")})),e},p=function(e){if(Dropbox.isBrowserSupported()){var o,i,r=Object(n.c)(e);if(e.iframe&&!e.windowName){var s=(o=Object(n.b)(e,!0),(i=document.createElement("iframe")).src=o,i.style.display="block",i.style.backgroundColor="white",i.style.border="none",i);s.style.width="735px",s.style.height="700px",s.style.margin="125px auto 0 auto",s.style.border="1px solid #ACACAC",s.style.boxShadow="rgba(0, 0, 0, .2) 0px 4px 16px";var a=document.createElement("div");a.style.position="fixed",a.style.left=a.style.right=a.style.top=a.style.bottom="0",a.style.zIndex="1000",a.style.backgroundColor="rgba(160, 160, 160, 0.2)",a.appendChild(s),document.body.appendChild(a);var c=function(e){e.source===s.contentWindow&&(r.onClose=function(){document.body.removeChild(a),Dropbox.removeListener(window,"message",c)},Object(n.f)(e,r.onClose,r.options))};Dropbox.addListener(window,"message",c)}else{var l=Object(n.j)(735,700);r.onClose=t(Object(n.b)(r.options,r.options.iframe),l,r.options).onClose}}else alert("Your browser does not support the Dropbox Chooser")};Dropbox.choose=function(e){null==e&&(e={}),e=c(e),p(e)},Dropbox.cancelChooser=function(){n.e&&(n.e.onClose&&n.e.onClose(),n.e.options.cancel&&n.e.options.cancel(n.i))},Dropbox.getChooserExtras=function(){var e;return null!==(e=Dropbox.chooserExtras)&&void 0!==e?e:{}};Dropbox.isBrowserSupported=function(){var e=function(){for(var e=0,o=[/IEMobile\/(7|8|9|10)\./,/BB10;/];e<o.length;e++){if(o[e].test(navigator.userAgent))return!1}return"undefined"!=typeof JSON&&null!==JSON&&null!=window.postMessage&&null!=window.addEventListener&&!/MSIE |Trident\/.*rv:11/.test(navigator.userAgent)}();return Dropbox.isBrowserSupported=function(){return e},e},Dropbox.createChooseButton=function(e){null==e&&(e={}),e=c(e);var o=a("Choose from Dropbox");return Dropbox.addListener(o,"click",(function(t){t.preventDefault(),p({success:function(t,n){o.className="dropbox-dropin-btn dropbox-dropin-success","function"==typeof e.success&&e.success(t,n)},cancel:e.cancel,linkType:e.linkType,multiselect:e.multiselect,fileselect:e.fileselect,folderselect:e.folderselect,extensions:e.extensions,sizeLimit:e.sizeLimit,iframe:e.iframe,requiredPermissions:e.requiredPermissions,_trigger:"button"})})),o},Dropbox.createSaveButton=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o(e),i=e.shift();return i=a("Save to Dropbox",i),Dropbox.addListener(i,"click",(function(e){if(e.preventDefault(),i.className.indexOf("dropbox-dropin-error")>=0||i.className.indexOf("dropbox-dropin-default")>=0||i.className.indexOf("dropbox-dropin-disabled")>=0){var o=("function"==typeof n.files?n.files():void 0)||n.files;if(!(null!=o?o.length:void 0))return i.className="dropbox-dropin-btn dropbox-dropin-error",void("function"==typeof n.error&&n.error("Missing files"));Dropbox.save({files:o,success:function(){i.className="dropbox-dropin-btn dropbox-dropin-success","function"==typeof n.success&&n.success()},progress:function(e){i.className="dropbox-dropin-btn dropbox-dropin-progress","function"==typeof n.progress&&n.progress(e)},cancel:function(){"function"==typeof n.cancel&&n.cancel()},error:function(e){i.className="dropbox-dropin-btn dropbox-dropin-error","function"==typeof n.error&&n.error(e)}})}})),i};var u=function(e,o){return"  background: ".concat(e,";\n  background: -moz-linear-gradient(top, ").concat(e," 0%, ").concat(o," 100%);\n  background: -webkit-linear-gradient(top, ").concat(e," 0%, ").concat(o," 100%);\n  background: linear-gradient(to bottom, ").concat(e," 0%, ").concat(o," 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='").concat(e,"', endColorstr='").concat(o,"',GradientType=0);  ")},d=document.createElement("style");d.type="text/css";var f='  @-webkit-keyframes rotate {\n    from  { -webkit-transform: rotate(0deg); }\n    to   { -webkit-transform: rotate(360deg); }\n  }\n\n  @keyframes rotate {\n    from  { transform: rotate(0deg); }\n    to   { transform: rotate(360deg); }\n  }\n\n    .dropbox-dropin-btn, .dropbox-dropin-btn:link, .dropbox-dropin-btn:hover {\n      display: inline-block;\n      height: 14px;\n      font-family: "Lucida Grande", "Segoe UI", "Tahoma", "Helvetica Neue", "Helvetica", sans-serif;\n      font-size: 11px;\n      font-weight: 600;\n      color: #636363;\n      text-decoration: none;\n      padding: 1px 7px 5px 3px;\n      border: 1px solid #ebebeb;\n      border-radius: 2px;\n      border-bottom-color: #d4d4d4;\n      '.concat(u("#fcfcfc","#f5f5f5"),"\n    }\n\n    .dropbox-dropin-default:hover, .dropbox-dropin-error:hover {\n      border-color: #dedede;\n      border-bottom-color: #cacaca;\n      ").concat(u("#fdfdfd","#f5f5f5"),"\n    }\n\n    .dropbox-dropin-default:active, .dropbox-dropin-error:active {\n      border-color: #d1d1d1;\n      box-shadow: inset 0 1px 1px rgba(0,0,0,0.1);\n    }\n\n    .dropbox-dropin-btn .dropin-btn-status {\n      display: inline-block;\n      width: 15px;\n      height: 14px;\n      vertical-align: bottom;\n      margin: 0 5px 0 2px;\n      background: transparent url('").concat(Dropbox.baseUrl,"/static/metaserver/static/images/widgets/dbx-saver-status.png') no-repeat;\n      position: relative;\n      top: 2px;\n    }\n\n    .dropbox-dropin-default .dropin-btn-status {\n      background-position: 0px 0px;\n    }\n\n    .dropbox-dropin-progress .dropin-btn-status {\n      width: 18px;\n      margin: 0 4px 0 0;\n      background: url('").concat(Dropbox.baseUrl,"/static/metaserver/static/images/widgets/dbx-progress.png') no-repeat center center;\n        -webkit-animation-name: rotate;\n        -webkit-animation-duration: 1.7s;\n        -webkit-animation-iteration-count: infinite;\n        -webkit-animation-timing-function: linear;\n      animation-name: rotate;\n      animation-duration: 1.7s;\n      animation-iteration-count: infinite;\n      animation-timing-function: linear;\n    }\n\n    .dropbox-dropin-success .dropin-btn-status {\n      background-position: -15px 0px;\n    }\n\n    .dropbox-dropin-disabled {\n      background: #e0e0e0;\n      border: 1px #dadada solid;\n      border-bottom: 1px solid #ccc;\n      box-shadow: none;\n    }\n\n    .dropbox-dropin-disabled .dropin-btn-status {\n      background-position: -30px 0px;\n    }\n\n    .dropbox-dropin-error .dropin-btn-status {\n      background-position: -45px 0px;\n    }\n\n  @media only screen and (-webkit-min-device-pixel-ratio: 1.4) {\n      .dropbox-dropin-btn .dropin-btn-status {\n        background-image: url('").concat(Dropbox.baseUrl,"/static/metaserver/static/images/widgets/dbx-saver-status-2x.png');\n        background-size: 60px 14px;\n          -webkit-background-size: 60px 14px;\n      }\n\n      .dropbox-dropin-progress .dropin-btn-status {\n        background: url('").concat(Dropbox.baseUrl,"/static/metaserver/static/images/widgets/dbx-progress-2x.png') no-repeat center center;\n        background-size: 20px 20px;\n          -webkit-background-size: 20px 20px;\n      }\n  }\n\n    .dropbox-saver:hover, .dropbox-chooser:hover {\n      text-decoration: none;\n      cursor: pointer;\n    }\n\n    .dropbox-chooser, .dropbox-dropin-btn {\n      line-height: 11px !important;\n      text-decoration: none !important;\n      box-sizing: content-box !important;\n        -webkit-box-sizing: content-box !important;\n        -moz-box-sizing: content-box !important;\n    }\n    ");d.styleSheet?d.styleSheet.cssText=f:d.textContent=f,document.getElementsByTagName("head")[0].appendChild(d),setTimeout(n.d,0);var h=function(){document.removeEventListener?document.removeEventListener("DOMContentLoaded",h,!1):document.detachEvent&&document.detachEvent("onreadystatechange",h),Object(n.d)(),s.init()};"interactive"===document.readyState||"complete"===document.readyState?setTimeout(h,0):document.addEventListener?document.addEventListener("DOMContentLoaded",h,!1):document.attachEvent("onreadystatechange",h)}},function(e,o,t){"use strict";t.r(o),t.d(o,"Dropin",(function(){return x})),t.d(o,"Dropbox",(function(){return _}));var n=t(1),i=t(0),r=function(){function e(e,o){var t=this;this.popupWindow=e,this.onClose=o,this.stopInterval=function(){clearInterval(t.intervalId)},this.isWindowClosedByUser=function(){try{return t.popupWindow.closed}catch(e){}return!1},this.messagingWindow=function(){return void 0!==i.g&&null!==i.g?i.g.contentWindow:t.popupWindow},this.handleInterval=function(){t.isWindowClosedByUser()&&(t.onClose(),t.stopInterval())},this.intervalId=setInterval(this.handleInterval,100)}return e.open=function(o,t,n){var r=Object(i.j)(t.width,t.height),s="".concat(r,",resizable,scrollbars"),a=window.open(o,"_blank",s);if(null===a)throw new Error("Failed to open the window. Dropbox popups may only be attached to a user-triggered event handler such as a tap or click event.");return a.focus(),new e(a,n)},e}();function s(e){return function(){for(var o=0,t=e;o<t.length;o++){(0,t[o])()}}}var a="https://".concat("www.dropbox.com"),c=function(){};var l=function(){function e(){var e=this;this.activeDropins=[],this.deleteActiveDropin=function(o){return function(){var t=e.activeDropins.indexOf(o);-1!==t&&e.activeDropins.splice(t,1)}},this.openWindow=function(o){e.throwIfAlreadyActive(o);var t=s([]);try{var n=o.url(),i="".concat(a).concat(n.pathname).concat(n.search),l=r.open(i,o.windowDimensions(),(function(){t()}));t=s([l.stopInterval,t]);var p=e.attach(o,l.messagingWindow);t=s([p,t]),t=s([function(){o.sendMessage({method:"close"})},t]);var u={dropin:o,cleanup:c};e.activeDropins.push(u),t=s([e.deleteActiveDropin(u),t]),o.hasOnCloseDialogMessage()||o.setOnCloseDialogMessage(t),u.cleanup=t}catch(e){throw t(),e}}}return e.prototype.mount=function(e,o){if(!e)throw new Error("Dropbox component must be provided");if(!o)throw new Error("Container element must be provided");this.throwIfAlreadyActive(e);var t=s([]);try{var n=this.createIframe();t=s([this.attach(e,(function(){if(!n.contentWindow)throw new Error("iframe does not contain a contentWindow");return n.contentWindow})),t]);var i=e.url();n.src="".concat(a).concat(i.pathname).concat(i.search,"&iframe=true"),n.scrolling="no",o.appendChild(n),t=s([function(){o.removeChild(n)},t]);var r={dropin:e,cleanup:c};this.activeDropins.push(r),t=s([this.deleteActiveDropin(r),t]),e.hasOnCloseDialogMessage()||e.setOnCloseDialogMessage(t),r.cleanup=t}catch(e){throw t(),e}},e.prototype.remove=function(e){if(!e)throw new Error("Dropbox component must be provided");for(var o=0,t=this.activeDropins;o<t.length;o++){var n=t[o];if(n.dropin===e){n.cleanup();break}}},e.prototype.throwIfAlreadyActive=function(e){for(var o=0,t=this.activeDropins;o<t.length;o++){if(t[o].dropin===e)throw new Error("Component is already in use")}},e.prototype.attach=function(e,o){e.sendMessage=function(e){o().postMessage(JSON.stringify(e),a)};var t=function(t){if(t.source===o()&&t.origin===a){var n;try{n=JSON.parse(t.data)}catch(e){return}(function(e){return"object"==typeof e&&"string"==typeof e.method})(n)&&e.handleMessage(n)}};return window.addEventListener("message",t),function(){e.sendMessage=c,window.removeEventListener("message",t)}},e.prototype.createIframe=function(){var e=window.document.createElement("iframe");return e.style.height="100%",e.style.width="100%",e.style.border="none",e.allowFullscreen=!0,e},e}(),p=t(2),u=window.location.protocol+"//"+window.location.host,d=function(){function e(o){if(this.origin=u,this.sendMessage=function(e){},this.state={},this.options=o,!this.options)throw new Error("options must be provided");if(!this.options.appKey)throw new Error("appKey must be provided");e.validateOnError(this.options.onError)}return e.validateOnError=function(e){if(e&&"function"!=typeof e)throw new Error("onError must be a function")},e.prototype.setOnError=function(o){e.validateOnError(o),this.options.onError=o},e.prototype.hasOnCloseDialogMessage=function(){return void 0!==this.onCloseDialogMessage},e.prototype.setOnCloseDialogMessage=function(e){if("function"!=typeof e)throw new Error("onCloseDialogMessage must be a function");this.onCloseDialogMessage=e},e.prototype.sendState=function(){this.sendMessage({method:"state",params:this.state})},e.prototype.url=function(){var e=Object(n.c)([{key:"app_key",value:this.options.appKey},{key:"origin",value:this.origin}],this.urlParams(),!0).map((function(e){return"".concat(encodeURIComponent(e.key),"=").concat(encodeURIComponent(e.value))})).join("&");return{pathname:this.urlPathname(),search:"?".concat(e)}},e.prototype.windowDimensions=function(){return{width:735,height:552}},e.prototype.handleMessage=function(e){switch(void 0!==e.sequenceNumber&&this.sendMessage({method:"ack",sequenceNumber:e.sequenceNumber}),e.method){case"origin_request":this.sendMessage({method:"origin"});break;case"ready":this.sendState();break;case"error":this.options.onError&&this.options.onError(e.params);break;case"close_dialog":this.onCloseDialogMessage&&this.onCloseDialogMessage(),this.onCloseDialogMessage=void 0}},e}(),f="https://".concat("www.dropbox.com","/developers/dropins/chooser/js"),h=["text","documents","images","video","audio"],b=function(e){function o(o){var t=e.call(this,o)||this;return t.chooserExtras={},t.validateOptions=function(){var e=function(e,o){if(void 0!==t.options[e]&&typeof t.options[e]!==o)throw new Error("The ".concat(e," option, if provided, must have type ").concat(o))};if(e("linkType","string"),e("_trigger","string"),void 0!==t.options.extensions){if(!(t.options.extensions instanceof Array))throw new Error("The extensions option, if provided, must be an array");for(var o=0,n=t.options.extensions;o<n.length;o++){var i=n[o];if("string"!=typeof i||!i.match(/^\.[\.\w$#&+@!()\-'`_~]+$/)&&-1===h.indexOf(i))throw new Error("The provided list of extensions or file types is not valid. "+"See Chooser documentation: ".concat(f,". ")+"Available file types are: ".concat(h.join(", ")))}}if(e("multiselect","boolean"),e("iframe","boolean"),e("folderselect","boolean"),e("fileselect","boolean"),void 0!==t.options.fileselect&&!t.options.fileselect&&!t.options.folderselect)throw new Error("You must enable either fileselect or folderselect on the Chooser so the user can select something");if(e("sizeLimit","number"),void 0!==t.options.sizeLimit&&t.options.sizeLimit<=0)throw new Error("The sizeLimit option, if provided, must be a positive number");var r=t.options.initialNavigation;if(void 0!==r){if(void 0!==r.mode&&"string"!=typeof r.mode)throw new Error("The initialNavigation.mode option, if provided, must be a string");if(void 0!==r.role&&"string"!=typeof r.role)throw new Error("The initialNavigation.role option, if provided, must be a string");if(void 0!==r.cursor&&"string"!=typeof r.cursor)throw new Error("The initialNavigation.cursor option, if provided, must be a string")}if(e("initialViewType","string"),void 0!==t.options.fields){if(!(t.options.fields instanceof Array))throw new Error("The fields option, if provided, must be an array");for(var s=0,a=t.options.fields;s<a.length;s++){if("string"!=typeof a[s])throw new Error("The fields option, if provided, must be an array of strings")}}e("showSignOut","boolean"),e("version","string"),e("cl","string"),e("productKey","string");var c=t.options.suggestions;if(c){if("object"!=typeof c)throw new Error("The suggestions option, if provided, must be an object");if("string"!=typeof c.experimentGroup)throw new Error("The suggestions.experimentGroup option, if provided, must be a string")}if("function"!=typeof t.options.onSuccess)throw new Error("You must provide a success callback to the Chooser to see the files that the user selects");e("onReady","function"),e("onCancel","function"),e("onError","function"),e("onResize","function")},t.validateOptions(),t}return Object(n.b)(o,e),o.prototype.urlParams=function(){var e,o,t=[],n=function(e,o){void 0!==o&&t.push({key:e,value:"".concat(o)})};return n("link_type",this.options.linkType),t.push({key:"trigger",value:this.options._trigger||"js"}),void 0!==this.options.extensions&&t.push({key:"extensions",value:this.options.extensions.join(" ")}),n("multiselect",this.options.multiselect),n("iframe",this.options.iframe),n("folderselect",this.options.folderselect),n("fileselect",this.options.fileselect),n("size_limit",this.options.sizeLimit),void 0!==this.options.initialNavigation&&(n("initial_navigation_mode",this.options.initialNavigation.mode),n("initial_navigation_role",this.options.initialNavigation.role),n("initial_navigation_cursor",this.options.initialNavigation.cursor)),n("initial_view_type",this.options.initialViewType),void 0!==this.options.fields&&t.push({key:"fields",value:this.options.fields.join(" ")}),n("show_sign_out",this.options.showSignOut),n("version",this.options.version),n("cl",this.options.cl),n("product_key",this.options.productKey),n("suggestions_experiment_group",null===(o=null===(e=this.options)||void 0===e?void 0:e.suggestions)||void 0===o?void 0:o.experimentGroup),t},o.prototype.urlPathname=function(){return"/chooser"},o.prototype.close=function(){"function"==typeof this.onCloseDialogMessage&&this.onCloseDialogMessage()},o.prototype.handleMessage=function(o){switch(e.prototype.handleMessage.call(this,o),o.method){case"ready":void 0!==this.options.onReady&&this.options.onReady();break;case"files_selected":this.close(),this.options.onSuccess(o.params,this.lastNavigation);break;case"cursor_changed":this.lastNavigation={cursor:o.params};break;case"close_dialog":void 0!==this.options.onCancel&&this.options.onCancel(this.lastNavigation);break;case"resize":void 0!==this.options.onResize&&this.options.onResize(o.params);break;case"error":this.close();break;case"_debug_log":void 0!==console&&null!==console&&console.log(o.params.msg);break;case"chooser_extras_changed":this.chooserExtras=o.params.chooserExtras}},o.prototype.getChooserExtras=function(){return this.chooserExtras},o}(d),m=function(e){function o(o){return e.call(this,o)||this}return Object(n.b)(o,e),o}(b),v=function(e){function o(o){var t=e.call(this,o)||this;return t.validateNoOptionLinkType(),t}return Object(n.b)(o,e),o.prototype.validateNoOptionLinkType=function(){if(void 0!==this.options.linkType)throw new Error("The ZoomChooser SDK does not accept a linkType.")},o.prototype.urlParams=function(){var o=e.prototype.urlParams.call(this);return o.push({key:"is_zoom_chooser",value:"true"}),o},o}(b),g=function(e){function o(o){void 0===o&&(o={});var t,n,i,r=this;return(r=e.call(this,o)||this).state={link:r.options.link,file_zoom:null===(t=r.options.file)||void 0===t?void 0:t.zoom,folder_view:null===(n=r.options.folder)||void 0===n?void 0:n.view,folder_headerSize:null===(i=r.options.folder)||void 0===i?void 0:i.headerSize},r}return Object(n.b)(o,e),o.prototype.urlPathname=function(){return"/dropins/embed"},o.prototype.urlParams=function(){return Object(n.c)(Object(n.c)(Object(n.c)(Object(n.c)([],this.state.link?[{key:"link",value:this.state.link}]:[],!0),this.state.file_zoom?[{key:"file_zoom",value:this.state.file_zoom}]:[],!0),this.state.folder_view?[{key:"folder_view",value:this.state.folder_view}]:[],!0),this.state.folder_headerSize?[{key:"folder_header_size",value:this.state.folder_headerSize}]:[],!0)},o.prototype.handleMessage=function(o){switch(o.method){case"update_size":this.options.onSizeChanged&&this.options.onSizeChanged(o.params);break;default:e.prototype.handleMessage.call(this,o)}},o}(d),w=function(e){function o(t){var n=e.call(this,t)||this;return o.validateOnSuccess(n.options.onSuccess),o.validateOnCancel(n.options.onCancel),n.state={entries:n.options.entries,initialFolderSelection:n.options.initialFolderSelection},n.onSuccess=n.options.onSuccess,n.onCancel=n.options.onCancel,n.setOnFolderSelected(n.options.onFolderSelected),n}return Object(n.b)(o,e),o.validateOnSuccess=function(e){if(e&&"function"!=typeof e)throw new Error("onSuccess must be a function")},o.validateOnCancel=function(e){if(e&&"function"!=typeof e)throw new Error("onCancel must be a function")},o.validateOnFolderSelected=function(e){if(e&&"function"!=typeof e)throw new Error("onFolderSelected must be a function")},o.prototype.urlParams=function(){var e=[{key:"account_id",value:this.options.accountId},{key:"initial_folder_selection",value:this.state.initialFolderSelection}];return this.options.showFoldersOnly&&e.push({key:"show_folders_only",value:"true"}),this.options.showSearchBar&&e.push({key:"show_search_bar",value:"true"}),e},o.prototype.urlPathname=function(){return"/dropins/mover"},o.prototype.handleMessage=function(o){switch(e.prototype.handleMessage.call(this,o),o.method){case"success":this.onSuccess&&this.onSuccess();break;case"cancel":this.onCancel&&this.onCancel();break;case"folder_selected":this.onFolderSelected&&this.onFolderSelected(o.params.path)}},o.prototype.setEntries=function(e){this.state=Object(n.a)(Object(n.a)({},this.state),{entries:e}),this.sendState()},o.prototype.setInitialFolderSelection=function(e){this.state=Object(n.a)(Object(n.a)({},this.state),{initialFolderSelection:e}),this.sendState()},o.prototype.setOnSuccess=function(e){o.validateOnSuccess(e),this.onSuccess=e},o.prototype.setOnCancel=function(e){o.validateOnCancel(e),this.onCancel=e},o.prototype.setOnFolderSelected=function(e){o.validateOnFolderSelected(e),this.onFolderSelected=e},o}(d),y=function(e){function o(o){void 0===o&&(o={});var t=e.call(this,o)||this;return t.state={accountId:t.options.accountId,hideAccount:t.options.hideAccount,link:t.options.link,cl:t.options.cl,view:t.options.initialView,openLinksWithSDK:!!t.options.onOpenLink},t}return Object(n.b)(o,e),o.prototype.urlPathname=function(){return"/dropins/previewer"},o.prototype.urlParams=function(){return Object(n.c)(Object(n.c)(Object(n.c)(Object(n.c)(Object(n.c)([],this.state.accountId?[{key:"account_id",value:this.state.accountId}]:[],!0),this.state.hideAccount?[{key:"hide_account",value:"true"}]:[],!0),this.state.view?[{key:"initial_view",value:this.state.view}]:[],!0),this.state.cl?[{key:"cl",value:this.state.cl}]:[],!0),this.state.link?[{key:"link",value:this.state.link}]:[],!0)},o.prototype.handleMessage=function(o){switch(o.method){case"view_change":var t=o.params.view;this.state=Object(n.a)(Object(n.a)({},this.state),{view:t}),this.options.onViewChange&&this.options.onViewChange(t);break;case"open_link":this.options.onOpenLink&&this.options.onOpenLink(o.params.link);break;case"open_login":this.options.onOpenLogin&&this.options.onOpenLogin();break;case"update_size":this.options.onSizeChanged&&this.options.onSizeChanged(o.params);break;default:e.prototype.handleMessage.call(this,o)}},o.prototype.setAccountId=function(e){this.state=Object(n.a)(Object(n.a)({},this.state),{accountId:e}),this.sendState()},o.prototype.setHideAccount=function(e){this.state=Object(n.a)(Object(n.a)({},this.state),{hideAccount:e}),this.sendState()},o.prototype.setLink=function(e){this.state=Object(n.a)(Object(n.a)({},this.state),{link:e}),this.sendState()},o.prototype.setView=function(e){this.state=Object(n.a)(Object(n.a)({},this.state),{view:e}),this.sendState()},o}(d);!function(){Object(p.d)(),Dropbox.VERSION="2";var e=new l;Dropbox.mount=e.mount.bind(e),Dropbox.openWindow=e.openWindow.bind(e);var o=e.remove.bind(e);Dropbox.unmount=o,Dropbox.closeWindow=o,Dropbox.Mover=w,Dropbox.Previewer=y,Dropbox.Chooser=m,Dropbox.ZoomChooser=v,Dropbox.embed=function(e,o){Dropbox.appKey&&(e=Object(n.a)(Object(n.a)({},e),{appKey:Dropbox.appKey}));var t=new g(e);return Dropbox.mount(t,o),t},p.c.init=function(){for(var e=document.getElementsByTagName("a"),o=e.length-1;o>=0;o--){var t=e[o],n=(t.getAttribute("class")||"").split(" ");n.indexOf("dropbox-saver")>=0?function(e){Dropbox.createSaveButton({files:function(){return[{url:e.getAttribute("data-url")||e.href,filename:e.getAttribute("data-filename")||Object(p.b)(e.pathname)}]}},e)}(t):n.indexOf("dropbox-embed")>=0&&function(e){var o=e.getAttribute("data-url")||e.href;if(o&&e.parentElement){var t=e.getAttribute("data-file-zoom")||void 0,n=e.getAttribute("data-folder-view")||void 0,i=e.getAttribute("data-folder-header-size")||void 0,r=document.createElement("div");r.classList.add("dropbox-embed-container"),r.style.height=e.getAttribute("data-height")||"100%",r.style.width=e.getAttribute("data-width")||"100%",e.parentElement.replaceChild(r,e),Dropbox.embed({link:o,file:{zoom:t},folder:{view:n,headerSize:i}},r)}}(t)}}}();var x=function(){},_=window.Dropbox}]));