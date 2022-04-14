(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1028:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(94),i=n(146),u=n(1053),c=n(1),s=n.n(c),l=n(271),f=n(1099),p=n(1061),y=(n(1084),n(38));function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var O=a.a.OHIFStudyMetadata,P=i.a.studyMetadataManager,D=function(e,t,n){return o.a.createElement(f.a,{onDrop:e,noDrag:!0},(function(e){var r=e.getRootProps,a=e.getInputProps;return o.a.createElement("span",w({},r(),{className:"link-dialog"}),n?o.a.createElement("span",null,t("Load folders"),o.a.createElement("input",w({},a(),{webkitdirectory:"true",mozdirectory:"true"}))):o.a.createElement("span",null,t("Load files"),o.a.createElement("input",a())))}))},j=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return r=this,o=(e=v(t)).call.apply(e,[this].concat(i)),n=!o||"object"!==d(o)&&"function"!=typeof o?g(r):o,S(g(n),"state",{studies:null,loading:!1,error:null}),S(g(n),"updateStudies",(function(e){P.purge();var t=e.map((function(e){var t=new O(e,e.StudyInstanceUID),n=l.c.modules.sopClassHandlerModule;return e.displaySets=e.displaySets||t.createDisplaySets(n),t.forEachDisplaySet((function(e){e.localFile=!0})),P.add(t),e}));n.setState({studies:t})})),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this,t=function(){var t,n=(t=regeneratorRuntime.mark((function t(n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,Object(p.a)(n);case 3:if(r=t.sent,o=e.updateStudies(r)){t.next=7;break}return t.abrupt("return");case 7:e.setState({studies:o,loading:!1});case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(e){b(a,r,o,i,u,"next",e)}function u(e){b(a,r,o,i,u,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}();return this.state.error?o.a.createElement("div",null,"Error: ",JSON.stringify(this.state.error)):o.a.createElement(f.a,{onDrop:t,noClick:!0},(function(n){var r=n.getRootProps;return n.getInputProps,o.a.createElement("div",w({},r(),{style:{width:"100%",height:"100%"}}),e.state.studies?o.a.createElement(u.a,{studies:e.state.studies,studyInstanceUIDs:e.state.studies&&e.state.studies.map((function(e){return e.StudyInstanceUID}))}):o.a.createElement("div",{className:"drag-drop-instructions"},o.a.createElement("div",{className:"drag-drop-contents"},e.state.loading?o.a.createElement("h3",null,e.props.t("Loading...")):o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",null,e.props.t("Drag and Drop DICOM files here to load them in the Viewer")),o.a.createElement("h4",null,function(e,t){return o.a.createElement(o.a.Fragment,null,t("Or click to "),D(e,t),t(" or "),D(e,t,!0),t(" from dialog"))}(t,e.props.t))))))}))}}])&&m(n.prototype,r),a&&m(n,a),t}(r.Component);S(j,"propTypes",{studies:s.a.array}),t.default=Object(y.d)("Common")(j)},1061:function(e,t,n){"use strict";var r=n(59),o=n.n(r);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){var t,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=void 0,(n="fileType")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}var t,n,r;return t=e,(n=[{key:"loadFile",value:function(e,t){}},{key:"getDataset",value:function(e,t){}},{key:"getStudies",value:function(e,t){}}])&&a(t.prototype,n),r&&a(t,r),e}();function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=new(function(e){function t(){var e,n,r,o,a,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var f=arguments.length,p=new Array(f),y=0;y<f;y++)p[y]=arguments[y];return r=this,n=!(o=(e=s(t)).call.apply(e,[this].concat(p)))||"object"!==u(o)&&"function"!=typeof o?l(r):o,a=l(n),c="application/pdf",(i="fileType")in a?Object.defineProperty(a,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[i]=c,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(r=[{key:"loadFile",value:function(e,t){return o.a.wadouri.loadFileRequest(t)}},{key:"getDataset",value:function(e,t){var n={};return n.imageId=e.imageId||t,n}},{key:"getStudies",value:function(e,t){return this.getDefaultStudy(t)}},{key:"getDefaultStudy",value:function(e){return{StudyInstanceUID:"",StudyDate:"",StudyTime:"",AccessionNumber:"",ReferringPhysicianName:"",PatientName:"",PatientID:"",PatientBirthdate:"",PatientSex:"",StudyId:"",StudyDescription:"",series:[{SeriesInstanceUID:"",SeriesDescription:"",SeriesNumber:"",instances:[{metadata:{SOPInstanceUID:"",SOPClassUID:"1.2.840.10008.5.1.4.1.1.104.1",Rows:"",Columns:"",NumberOfFrames:0,InstanceNumber:1},getImageId:function(){return e},isLocalFile:!0}]}]}}}])&&c(n.prototype,r),a&&c(n,a),t}(i)),y=n(32);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=n(16).a.cornerstone.metadataProvider,S=new(function(e){function t(){var e,n,r,o,a,i,u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return r=this,n=!(o=(e=m(t)).call.apply(e,[this].concat(s)))||"object"!==d(o)&&"function"!=typeof o?v(r):o,a=v(n),u="application/dicom",(i="fileType")in a?Object.defineProperty(a,i,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[i]=u,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"loadFile",value:function(e,t){return o.a.wadouri.loadFileRequest(t)}},{key:"getDataset",value:function(e,t){var n={};try{var r=y.b.data.DicomMessage.readFile(e);n=y.b.data.DicomMetaDictionary.naturalizeDataset(r.dict),h.addInstance(n),n._meta=y.b.data.DicomMetaDictionary.namifyDataset(r.meta)}catch(e){console.error("Error reading dicom file",e)}return n.imageId=t,n}},{key:"getStudies",value:function(e,t){return this.getStudyFromDataset(e)}},{key:"getStudyFromDataset",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.StudyInstanceUID,n=e.StudyDate,r=e.StudyTime,o=e.AccessionNumber,a=e.ReferringPhysicianName,i=e.PatientName,u=e.PatientID,c=e.PatientBirthDate,s=e.PatientSex,l=e.StudyID,f=e.StudyDescription,p=e.SeriesInstanceUID,y=e.SeriesDescription,d=e.SeriesNumber,b=e.imageId,m={metadata:e,url:b},v={SeriesInstanceUID:p,SeriesDescription:y,SeriesNumber:d,instances:[m]},g={StudyInstanceUID:t,StudyDate:n,StudyTime:r,AccessionNumber:o,ReferringPhysicianName:a,PatientName:i,PatientID:u,PatientBirthDate:c,PatientSex:s,StudyID:l,StudyDescription:f,series:[v]};return g}}])&&b(n.prototype,r),a&&b(n,a),t}(i));function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=j(t).call(this))||"object"!==w(o)&&"function"!=typeof o?I(r):o,k(I(n),"fileType",void 0),k(I(n),"loader",void 0);var a=e&&e.type;return n.loader=n.getLoader(a),n.fileType=n.loader.fileType,n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,a=[{key:"groupSeries",value:function(e){var t=function(e,t,n){var r=1;return e.reduce((function(e,o){var a,i=o[t],u=o[n];return e[i=i||""+r++]||(e[i]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(n,!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o),e[i][n]=[]),(a=e[i][n]).push.apply(a,O(u)),e}),{})};return Object.values(t(e,"StudyInstanceUID","series")).map((function(e){var n=t(e.series,"SeriesInstanceUID","instances");return e.series=Object.values(n),e}))}}],(r=[{key:"addFile",value:function(e){return o.a.wadouri.fileManager.add(e)}},{key:"loadFile",value:function(e,t){return this.loader.loadFile(e,t)}},{key:"getDataset",value:function(e,t){return this.loader.getDataset(e,t)}},{key:"getStudies",value:function(e,t){return this.loader.getStudies(e,t)}},{key:"getLoader",value:function(e){return"application/pdf"===e?p:S}}])&&D(n.prototype,r),a&&D(n,a),t}(i);function T(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function F(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){T(a,r,o,i,u,"next",e)}function u(e){T(a,r,o,i,u,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return N}));var x=function(){var e=F(regeneratorRuntime.mark((function e(t){var n,r,o,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new _(t),r=n.addFile(t),e.next=5,n.loadFile(t,r);case 5:return o=e.sent,e.next=8,n.getDataset(o,r);case 8:return a=e.sent,e.next=11,n.getStudies(a,r);case 11:return i=e.sent,e.abrupt("return",i);case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0.name,":Error when trying to load and process local files:",e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();function N(e){return R.apply(this,arguments)}function R(){return(R=F(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.map(x),e.next=3,Promise.all(n);case 3:return r=e.sent,e.abrupt("return",_.groupSeries(r.flat()));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1084:function(e,t,n){}}]);
//# sourceMappingURL=ViewerLocalFileData.bundle.35606be366c6cfd88425.js.map