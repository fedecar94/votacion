(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],u=0,m=[];u<i.length;u++)r=i[u],n[r]&&m.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,r=1;r<o.length;r++){var l=o[r];0!==n[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var a={},n={3:0},s=[];function r(t){return i.p+"js/"+({0:"Graficas",1:"Resultado"}[t]||t)+"."+{0:"3a89a3ef",1:"a70e0240"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,a){o=n[t]=[e,a]});e.push(o[2]=a);var s,l=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t),s=function(e){c.onerror=c.onload=null,clearTimeout(u);var o=n[t];if(0!==o){if(o){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,o[1](r)}n[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:c})},12e4);c.onerror=c.onload=s,l.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(o,a,function(e){return t[e]}.bind(null,a));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([1,2]),o()})({1:function(t,e,o){t.exports=o("Vtdi")},Vtdi:function(t,e,o){"use strict";o.r(e);o("VRzm");var a=o("Kw5r"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Cargar datos")]),t._v(" |\n    "),o("router-link",{attrs:{to:"/Bancas"}},[t._v("Resultados")]),t._v(" |\n    "),o("router-link",{attrs:{to:"/Graficas"}},[t._v("Graficas")])],1),o("router-view")],1)},s=[],r=(o("ZL7j"),o("KHd+")),i={},l=Object(r["a"])(i,n,s,!1,null,null,null),c=l.exports,u=o("jE9Z"),d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("form",{staticClass:"row"},[o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"escano"}},[t._v("Cantidad de escaños")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.escano,expression:"escano"}],staticClass:"form-control",attrs:{type:"number",name:"escano","aria-describedby":"escanoHelp"},domProps:{value:t.escano},on:{input:function(e){e.target.composing||(t.escano=e.target.value)}}}),o("small",{staticClass:"form-text text-muted",attrs:{id:"escanoHelp"}},[t._v("Indica la cantidad de lugares disponibles en esta eleccion")])]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"habilitados"}},[t._v("Votantes habilitados")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.habilitados,expression:"habilitados"}],staticClass:"form-control",attrs:{type:"number",name:"habilitados","aria-describedby":"habilitadosHelp"},domProps:{value:t.habilitados},on:{input:function(e){e.target.composing||(t.habilitados=e.target.value)}}}),o("small",{staticClass:"form-text text-muted",attrs:{id:"habilitadosHelp"}},[t._v("Es la cantidad de votantes que se han habilitado en esta eleccion")])]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"blancos"}},[t._v("Votos en blanco")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.blancos,expression:"blancos"}],staticClass:"form-control",attrs:{type:"number",name:"blancos","aria-describedby":"blancosHelp"},domProps:{value:t.blancos},on:{input:function(e){e.target.composing||(t.blancos=e.target.value)}}}),o("small",{staticClass:"form-text text-muted",attrs:{id:"blancosHelp"}},[t._v("Cantidad de papeletas que no poseen marca alguna")])]),o("div",{staticClass:"form-group col-md-6"},[o("label",{attrs:{for:"nulos"}},[t._v("Votos nulos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.nulos,expression:"nulos"}],staticClass:"form-control",attrs:{type:"number",name:"nulos","aria-describedby":"nulosHelp"},domProps:{value:t.nulos},on:{input:function(e){e.target.composing||(t.nulos=e.target.value)}}}),o("small",{staticClass:"form-text text-muted",attrs:{id:"nulosHelp"}},[t._v("Cantidad de papeletas que no poseen marca valida")])]),t._m(0),o("div",{staticClass:"form-group col-md-5"},[o("label",{attrs:{for:"movimiento"}},[t._v("Nombre Movimiento")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.movimiento,expression:"movimiento"}],staticClass:"form-control",attrs:{type:"text",name:"movimiento","aria-describedby":"movimientoHelp"},domProps:{value:t.movimiento},on:{input:function(e){e.target.composing||(t.movimiento=e.target.value)}}}),o("small",{staticClass:"form-text text-muted",attrs:{id:"movimientoHelp"}},[t._v("Denominacion de la agrupacion politica")])]),o("div",{staticClass:"form-group col-md-5"},[o("label",{attrs:{for:"votos"}},[t._v("Votos conseguidos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.votos,expression:"votos"}],staticClass:"form-control",attrs:{type:"number",name:"votos","aria-describedby":"votosHelp"},domProps:{value:t.votos},on:{input:function(e){e.target.composing||(t.votos=e.target.value)}}}),o("small",{staticClass:"form-text text-muted",attrs:{id:"votosHelp"}},[t._v("Cantidad de votos conseguidos por la agrupacion")])]),o("div",{staticClass:"col-md-2"},[o("br"),o("button",{staticClass:"btn btn-info btn-lg btn-block",attrs:{type:"button",name:"anadir"},on:{click:t.anadir}},[t._v("Añadir")])])]),o("br"),o("br"),o("table",{staticClass:"table table-striped table-responsive-lg"},[t._m(1),o("tbody",[t._l(t.array,function(e){return o("tr",{key:e.index},[o("th",{attrs:{scope:"row"}},[t._v(t._s(e.nombre))]),o("td",[t._v(t._s(e.votos))]),o("td",[t._v(t._s(t.calculaPorcentaje(e.votos))+" %")]),o("td",[t._v(t._s(t.calculaPorcentajeR(e.votos))+" %")]),o("td",[o("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button",name:"eliminar"},on:{click:function(o){t.eliminar(e)}}},[t._v("Eliminar")])])])}),o("tr",[o("th",{attrs:{scope:"row"}},[t._v("Votó en blanco")]),o("td",[t._v(t._s(t.blancos))]),o("td",[t._v(t._s(t.calculaPorcentaje(t.blancos))+" %")]),o("td",[t._v(t._s(t.calculaPorcentajeR(t.blancos))+" %")]),t._m(2)]),o("tr",[o("th",{attrs:{scope:"row"}},[t._v("Votó nulo")]),o("td",[t._v(t._s(t.nulos))]),o("td",[t._v(t._s(t.calculaPorcentaje(t.nulos))+" %")]),o("td",[t._v(t._s(t.calculaPorcentajeR(t.nulos))+" %")]),t._m(3)]),o("tr",[o("th",{attrs:{scope:"row"}},[t._v("No votó")]),o("td",[t._v(t._s(t.habilitados-t.totalVotantes))]),o("td",[t._v(t._s(t.calculaPorcentaje(t.habilitados-t.totalVotantes))+" %")]),o("td",[t._v("0 %")]),t._m(4)])],2)])])},m=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12"},[o("h4",[t._v("Añadir movimiento")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("Agrupacion")]),o("th",{attrs:{scope:"col"}},[t._v("Votos")]),o("th",{attrs:{scope:"col"}},[t._v("Porcentaje Total")]),o("th",{attrs:{scope:"col"}},[t._v("Porcentaje Votantes")]),o("th",{attrs:{scope:"col"}},[t._v("Acciones")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("td",[o("button",{staticClass:"btn btn-secondary btn-block",attrs:{type:"button",name:"eliminar",disabled:""}},[t._v("Eliminar")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("td",[o("button",{staticClass:"btn btn-secondary btn-block",attrs:{type:"button",name:"eliminar",disabled:""}},[t._v("Eliminar")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("td",[o("button",{staticClass:"btn btn-secondary btn-block",attrs:{type:"button",name:"eliminar",disabled:""}},[t._v("Eliminar")])])}],v={name:"home",data:function(){return{movimiento:"",votos:0}},computed:{totalVotantes:function(){var t=parseInt(0);if(this.array>[])for(var e=0;e<this.array.length;e++)t+=parseInt(this.array[e].votos);return parseInt(this.blancos)+parseInt(this.nulos)+t},array:{get:function(){return this.$store.state.array},set:function(t){this.$store.dispatch("setarray",t)}},blancos:{get:function(){return this.$store.state.blancos},set:function(t){this.$store.dispatch("setblancos",t)}},nulos:{get:function(){return this.$store.state.nulos},set:function(t){this.$store.dispatch("setnulos",t)}},habilitados:{get:function(){return this.$store.state.habilitados},set:function(t){this.$store.dispatch("sethabilitados",t)}},escano:{get:function(){return this.$store.state.escano},set:function(t){this.$store.dispatch("setescano",t)}}},methods:{anadir:function(){var t=this.array;t.push({nombre:this.movimiento,votos:this.votos}),this.array=t,this.movimiento="",this.votos=0},calculaPorcentaje:function(t){return 0===this.habilitados||""===this.habilitados?0:Math.round(t/this.habilitados*1e4)/100},calculaPorcentajeR:function(t){return 0===this.habilitados||""===this.habilitados?0:Math.round(t/this.totalVotantes*1e4)/100},eliminar:function(t){for(var e=[],o=0;o<this.array.length;o++)this.array[o]!==t&&e.push(this.array[o]);this.array=e}}},p=v,f=Object(r["a"])(p,d,m,!1,null,null,null),b=f.exports;a["a"].use(u["a"]);var h=new u["a"]({routes:[{path:"/",name:"home",component:b},{path:"/Bancas",name:"resultado",component:function(){return o.e(1).then(o.bind(null,"nO5S"))}},{path:"/Graficas",name:"graficas",component:function(){return o.e(0).then(o.bind(null,"Cfg/"))}}]}),_=o("L2JU");a["a"].use(_["a"]);var g=new _["a"].Store({state:{escano:0,array:[],blancos:0,nulos:0,habilitados:0,tipo:"Sistema d'Hondt",movimientos:[]},mutations:{SET_ARRAY:function(t,e){t.array=e},SET_ESCANO:function(t,e){t.escano=e},SET_BLANCOS:function(t,e){t.blancos=e},SET_NULOS:function(t,e){t.nulos=e},SET_HABILITADOS:function(t,e){t.habilitados=e},SET_TIPO:function(t,e){t.tipo=e},SET_MOVIMIENTOS:function(t,e){t.movimientos=e}},actions:{setarray:function(t,e){t.commit("SET_ARRAY",e)},setescano:function(t,e){t.commit("SET_ESCANO",e)},setblancos:function(t,e){t.commit("SET_BLANCOS",e)},setnulos:function(t,e){t.commit("SET_NULOS",e)},sethabilitados:function(t,e){t.commit("SET_HABILITADOS",e)},settipo:function(t,e){t.commit("SET_TIPO",e)},setmovimientos:function(t,e){t.commit("SET_MOVIMIENTOS",e)}}}),y=o("lIOY");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({router:h,store:g,render:function(t){return t(c)}}).$mount("#app")},ZL7j:function(t,e,o){"use strict";var a=o("slcd"),n=o.n(a);n.a},slcd:function(t,e,o){}});
//# sourceMappingURL=app.cc144a81.js.map