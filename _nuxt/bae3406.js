(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{224:function(e,t,o){var content=o(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(115).default)("1b7833da",content,!0,{sourceMap:!1})},226:function(e,t,o){"use strict";o(224)},227:function(e,t,o){var n=o(114)(!1);n.push([e.i,"#search{width:100%}#search_autocomplete a{cursor:pointer}#search_autocomplete a:hover{color:red;font-weight:700}#container{height:100%}#container iframe{border:none;width:100%;height:100%}",""]),e.exports=n},228:function(e,t,o){"use strict";o.r(t);o(33),o(59),o(60),o(32),o(48),o(113);var n=o(225),r={components:{RedocWrapper:o.n(n).a},data:function(){return{redocOptions:{hideDownloadButton:!1},search:"",endpoints:[],showAutocomplete:!1,url:""}},mounted:function(){this.load()},computed:{searched:function(){var e=this;return this.endpoints.filter((function(t){return t.name.includes(e.search)}))}},methods:{load:function(){var e=this;this.$axios.get("/xx/enpoints.json").then((function(t){e.endpoints=t.data}))},select:function(e){var t=this;this.url="",this.showAutocomplete=!1,this.$nextTick((function(){t.url="/xx/".concat(e.url)}))}}},c=(o(226),o(46)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{id:"search",placeholder:"search ..."},domProps:{value:e.search},on:{click:function(t){e.showAutocomplete=!0},input:function(t){t.target.composing||(e.search=t.target.value)}}}),e._v(" "),e.showAutocomplete?o("div",{attrs:{id:"search_autocomplete"}},[o("ul",e._l(e.searched,(function(t,i){return o("li",{key:i,on:{click:function(o){return e.select(t)}}},[o("a",[e._v(e._s(t.name))])])})),0)]):e._e(),e._v(" "),o("div",{ref:"container",attrs:{id:"container"}},[""!==e.url?o("redoc-wrapper",{attrs:{"spec-or-spec-url":e.url,options:e.redocOptions}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports}}]);