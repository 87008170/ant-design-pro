(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{"1Gbu":function(t,e,n){!function(e,i){t.exports=i(n("q1tI"))}(0,(function(t){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){var n={};for(var i in t)0>e.indexOf(i)&&Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){if(t.onChange!==e.onChange)return!0;for(var n=0;v.length>n;n+=1){var i=v[n];if(!window.G2.Util.isEqual(t[i],e[i]))return!0}return!1}var h=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u=function(){function t(t,e){for(var n=0;e.length>n;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),d=n(2),c=i(d),f=n(1),g=i(f),p=n(3),m=i(p),v=["width","height","padding","xAis","yAxis","start","end","fillerStyle","backgroundStyle","scales","textStyle","handleStyle","backgroundChart"],y=function(t){function e(){r(this,e);var t=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.refHandle=function(e){t.container||(t.container=e)},t.reBuild=!1,t}return o(e,t),u(e,[{key:"componentDidMount",value:function(){this.createG2Instance().render()}},{key:"componentWillReceiveProps",value:function(t){var e=this.props,n=e.data,i=a(e,["data"]),r=t.data,s=a(t,["data"]);n!==r&&(this.slider.changeData(r),this.slider.repaint()),l(i,s)&&(this.reBuild=!0)}},{key:"componentDidUpdate",value:function(){this.reBuild&&(this.slider.destroy(),this.createG2Instance().render(),this.reBuild=!1)}},{key:"componentWillUnmount",value:function(){this.slider.destroy()}},{key:"createG2Instance",value:function(){return this.slider=new c.default(h({container:this.container},this.props))}},{key:"render",value:function(){return g.default.createElement("div",{ref:this.refHandle})}}]),e}(f.Component);e.default=function(t){function e(){return r(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return o(e,t),u(e,[{key:"render",value:function(){return g.default.createElement(m.default,null,g.default.createElement(y,this.props))}}]),e}(f.Component),t.exports=e.default},function(e,n){e.exports=t},function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){var i=n(1);window&&!window.G2&&console.err("Please load the G2 script first!"),t.exports=i},function(t,e,n){var i=n(2),a=window&&window.G2,r=a.Chart,s=a.Util,o=a.G,l=a.Global,h=o.Canvas,u=s.DomUtil,d=function(t){return"number"==typeof t};t.exports=function(){function t(t){this._initProps(),s.deepMix(this,t);var e=this.container;if(!e)throw Error("Please specify the container for the Slider!");this.domContainer=s.isString(e)?document.getElementById(e):e,this.handleStyle=s.mix({width:this.height,height:this.height},this.handleStyle),"auto"===this.width&&window.addEventListener("resize",s.wrapBehavior(this,"_initForceFitEvent"))}var e=t.prototype;return e._initProps=function(){this.height=26,this.width="auto",this.padding=l.plotCfg.padding,this.container=null,this.xAxis=null,this.yAxis=null,this.fillerStyle={fill:"#BDCCED",fillOpacity:.3},this.backgroundStyle={stroke:"#CCD6EC",fill:"#CCD6EC",fillOpacity:.3,lineWidth:1},this.range=[0,100],this.layout="horizontal",this.textStyle={fill:"#545454"},this.handleStyle={img:"https://gw.alipayobjects.com/zos/rmsportal/QXtfhORGlDuRvLXFzpsQ.png",width:5},this.backgroundChart={type:["area"],color:"#CCD6EC"}},e._initForceFitEvent=function(){var t=setTimeout(s.wrapBehavior(this,"forceFit"),200);clearTimeout(this.resizeTimer),this.resizeTimer=t},e.forceFit=function(){if(this&&!this.destroyed){var t=u.getWidth(this.domContainer),e=this.height;if(t!==this.domWidth){var n=this.canvas;n.changeSize(t,e),this.bgChart&&this.bgChart.changeWidth(t),n.clear(),this._initWidth(),this._initSlider(),this._bindEvent(),n.draw()}}},e._initWidth=function(){var t;t="auto"===this.width?u.getWidth(this.domContainer):this.width,this.domWidth=t;var e=s.toAllPadding(this.padding);"horizontal"===this.layout?(this.plotWidth=t-e[1]-e[3],this.plotPadding=e[3],this.plotHeight=this.height):"vertical"===this.layout&&(this.plotWidth=this.width,this.plotHeight=this.height-e[0]-e[2],this.plotPadding=e[0])},e.render=function(){this._initWidth(),this._initCanvas(),this._initBackground(),this._initSlider(),this._bindEvent(),this.canvas.draw()},e.changeData=function(t){this.data=t,this.repaint()},e.destroy=function(){clearTimeout(this.resizeTimer),this.rangeElement.off("sliderchange"),this.bgChart&&this.bgChart.destroy(),this.canvas.destroy();for(var t=this.domContainer;t.hasChildNodes();)t.removeChild(t.firstChild);window.removeEventListener("resize",s.getWrapBehavior(this,"_initForceFitEvent")),this.destroyed=!0},e.clear=function(){this.canvas.clear(),this.bgChart&&this.bgChart.destroy(),this.bgChart=null,this.scale=null,this.canvas.draw()},e.repaint=function(){this.clear(),this.render()},e._initCanvas=function(){var t=this.domWidth,e=this.height,n=new h({width:t,height:e,containerDOM:this.domContainer,capture:!1}),i=n.get("el");i.style.position="absolute",i.style.top=0,i.style.left=0,i.style.zIndex=3,this.canvas=n},e._initBackground=function(){var t,e=this.data,n=this.xAxis,i=this.yAxis,a=s.deepMix((t={},t[""+n]={range:[0,1]},t),this.scales);if(!e)throw Error("Please specify the data!");if(!n)throw Error("Please specify the xAxis!");if(!i)throw Error("Please specify the yAxis!");var o=this.backgroundChart,l=o.type,h=o.color;s.isArray(l)||(l=[l]);var u=s.toAllPadding(this.padding),d=new r({container:this.container,width:this.domWidth,height:this.height,padding:[0,u[1],0,u[3]],animate:!1});d.source(e),d.scale(a),d.axis(!1),d.tooltip(!1),d.legend(!1),s.each(l,(function(t){d[t]().position(n+"*"+i).color(h).opacity(1)})),d.render(),this.bgChart=d,this.scale="horizontal"===this.layout?d.getXScale():d.getYScales()[0],"vertical"===this.layout&&d.destroy()},e._initRange=function(){var t=this.startRadio,e=this.endRadio,n=this.start,i=this.end,a=this.scale,r=0,s=1;d(t)?r=t:n&&(r=a.scale(a.translate(n))),d(e)?s=e:i&&(s=a.scale(a.translate(i)));var o=this.minSpan,l=this.maxSpan,h=0;if("time"===a.type||"timeCat"===a.type){var u=a.values;h=u[u.length-1]-u[0]}else a.isLinear&&(h=a.max-a.min);h&&o&&(this.minRange=o/h*100),h&&l&&(this.maxRange=l/h*100);var c=[100*r,100*s];return this.range=c,c},e._getHandleValue=function(t){var e=this.range,n=e[0]/100,i=e[1]/100,a=this.scale;return"min"===t?this.start?this.start:a.invert(n):this.end?this.end:a.invert(i)},e._initSlider=function(){var t=this.canvas,e=this._initRange(),n=this.scale,a=t.addGroup(i,{middleAttr:this.fillerStyle,range:e,minRange:this.minRange,maxRange:this.maxRange,layout:this.layout,width:this.plotWidth,height:this.plotHeight,backgroundStyle:this.backgroundStyle,textStyle:this.textStyle,handleStyle:this.handleStyle,minText:n.getText(this._getHandleValue("min")),maxText:n.getText(this._getHandleValue("max"))});"horizontal"===this.layout?a.translate(this.plotPadding,0):"vertical"===this.layout&&a.translate(0,this.plotPadding),this.rangeElement=a},e._bindEvent=function(){var t=this;t.rangeElement.on("sliderchange",(function(e){var n=e.range;t._updateElement(n[0]/100,n[1]/100)}))},e._updateElement=function(t,e){var n=this.scale,i=this.rangeElement,a=i.get("minTextElement"),r=i.get("maxTextElement"),s=n.invert(t),o=n.invert(e),l=n.getText(s),h=n.getText(o);a.attr("text",l),r.attr("text",h),this.start=l,this.end=h,this.onChange&&this.onChange({startText:l,endText:h,startValue:s,endValue:o,startRadio:t,endRadio:e})},t}()},function(t,e){function n(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var i=window&&window.G2,a=i.Util,r=i.G,s=r.Group,o=a.DomUtil;t.exports=function(t){function e(){return t.apply(this,arguments)||this}n(e,t);var i=e.prototype;return i.getDefaultCfg=function(){return{range:null,middleAttr:null,backgroundElement:null,minHandleElement:null,maxHandleElement:null,middleHandleElement:null,currentTarget:null,layout:"vertical",width:null,height:null,pageX:null,pageY:null}},i._initHandle=function(t){var e,n,i,r=this.addGroup(),s=this.get("layout"),o=this.get("handleStyle"),l=o.img,h=o.width,u=o.height;if("horizontal"===s){var d=o.width;i="ew-resize",n=r.addShape("Image",{attrs:{x:-d/2,y:0,width:d,height:u,img:l,cursor:i}}),e=r.addShape("Text",{attrs:a.mix({x:"min"===t?-(d/2+5):d/2+5,y:u/2,textAlign:"min"===t?"end":"start",textBaseline:"middle",text:this.get("min"===t?"minText":"maxText"),cursor:i},this.get("textStyle"))})}else i="ns-resize",n=r.addShape("Image",{attrs:{x:0,y:-u/2,width:h,height:u,img:l,cursor:i}}),e=r.addShape("Text",{attrs:a.mix({x:h/2,y:"min"===t?u/2+5:-(u/2+5),textAlign:"center",textBaseline:"middle",text:this.get("min"===t?"minText":"maxText"),cursor:i},this.get("textStyle"))});return this.set(t+"TextElement",e),this.set(t+"IconElement",n),r},i._initSliderBackground=function(){var t=this.addGroup();return t.initTransform(),t.translate(0,0),t.addShape("Rect",{attrs:a.mix({x:0,y:0,width:this.get("width"),height:this.get("height")},this.get("backgroundStyle"))}),t},i._beforeRenderUI=function(){var t=this._initSliderBackground(),e=this._initHandle("min"),n=this._initHandle("max"),i=this.addShape("rect",{attrs:this.get("middleAttr")});this.set("middleHandleElement",i),this.set("minHandleElement",e),this.set("maxHandleElement",n),this.set("backgroundElement",t),t.set("zIndex",0),i.set("zIndex",1),e.set("zIndex",2),n.set("zIndex",2),i.attr("cursor","move"),this.sort()},i._renderUI=function(){"horizontal"===this.get("layout")?this._renderHorizontal():this._renderVertical()},i._transform=function(t){var e=this.get("range"),n=e[0]/100,i=e[1]/100,a=this.get("width"),r=this.get("height"),s=this.get("minHandleElement"),o=this.get("maxHandleElement"),l=this.get("middleHandleElement");s.resetMatrix?(s.resetMatrix(),o.resetMatrix()):(s.initTransform(),o.initTransform()),"horizontal"===t?(l.attr({x:a*n,y:0,width:(i-n)*a,height:r}),s.translate(n*a,0),o.translate(i*a,0)):(l.attr({x:0,y:r*(1-i),width:a,height:(i-n)*r}),s.translate(0,(1-n)*r),o.translate(0,(1-i)*r))},i._renderHorizontal=function(){this._transform("horizontal")},i._renderVertical=function(){this._transform("vertical")},i._bindUI=function(){this.on("mousedown",a.wrapBehavior(this,"_onMouseDown"))},i._isElement=function(t,e){var n=this.get(e);return t===n||!!n.isGroup&&n.get("children").indexOf(t)>-1},i._getRange=function(t,e){var n=t+e;return n=n>100?100:n,0>n?0:n},i._limitRange=function(t,e,n){n[0]=this._getRange(t,n[0]),(n[1]=n[0]+e)>100&&(n[1]=100,n[0]=n[1]-e)},i._updateStatus=function(t,e){var n=this.get("x"===t?"width":"height");t=a.upperFirst(t);var i,r=this.get("range"),s=this.get("page"+t),o=this.get("currentTarget"),l=this.get("rangeStash"),h=this.get("layout"),u="vertical"===h?-1:1,d=e["page"+t],c=d-s,f=c/n*100*u,g=this.get("minRange"),p=this.get("maxRange");r[1]>r[0]?(this._isElement(o,"minHandleElement")&&(r[0]=this._getRange(f,r[0]),g&&(r[1]-r[0]>g||this._limitRange(f,g,r)),p&&(p>r[1]-r[0]||this._limitRange(f,p,r))),this._isElement(o,"maxHandleElement")&&(r[1]=this._getRange(f,r[1]),g&&(r[1]-r[0]>g||this._limitRange(f,g,r)),p&&(p>r[1]-r[0]||this._limitRange(f,p,r)))):(this._isElement(o,"minHandleElement")||this._isElement(o,"maxHandleElement"))&&(r[0]=this._getRange(f,r[0]),r[1]=this._getRange(f,r[0])),this._isElement(o,"middleHandleElement")&&(i=l[1]-l[0],this._limitRange(f,i,r)),this.emit("sliderchange",{range:r}),this.set("page"+t,d),this._renderUI(),this.get("canvas").draw()},i._onMouseDown=function(t){var e=t.currentTarget,n=t.event,i=this.get("range");n.stopPropagation(),n.preventDefault(),this.set("pageX",n.pageX),this.set("pageY",n.pageY),this.set("currentTarget",e),this.set("rangeStash",[i[0],i[1]]),this._bindCanvasEvents()},i._bindCanvasEvents=function(){var t=this.get("canvas").get("containerDOM");this.onMouseMoveListener=o.addEventListener(t,"mousemove",a.wrapBehavior(this,"_onCanvasMouseMove")),this.onMouseUpListener=o.addEventListener(t,"mouseup",a.wrapBehavior(this,"_onCanvasMouseUp")),this.onMouseLeaveListener=o.addEventListener(t,"mouseleave",a.wrapBehavior(this,"_onCanvasMouseUp"))},i._onCanvasMouseMove=function(t){"horizontal"===this.get("layout")?this._updateStatus("x",t):this._updateStatus("y",t)},i._onCanvasMouseUp=function(){this._removeDocumentEvents()},i._removeDocumentEvents=function(){this.onMouseMoveListener.remove(),this.onMouseUpListener.remove(),this.onMouseLeaveListener.remove()},e}(s)}])}))},function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;e.length>n;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),o=n(1),l=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(t){function e(t){i(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={hasError:!1},n}return r(e,t),s(e,[{key:"componentDidCatch",value:function(t,e){this.setState({hasError:!0})}},{key:"unstable_handleError",value:function(t,e){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?l.default.createElement("h1",null,"Slider error."):this.props.children}}]),e}(l.default.Component)},function(t,e,n){n(0),t.exports=n(0)}])}))},"8gNO":function(t,e,n){"use strict";n.r(e);n("IzEo");var i=n("bx4M"),a=(n("7Kak"),n("9yH6")),r=n("9kvl"),s=n("q1tI"),o=n.n(s),l=n("ucLW"),h=n("B6XH"),u=n("UXoT"),d=n.n(u),c=function(t){var e=t.dropdownGroup,n=t.salesType,s=t.loading,u=t.salesPieData,c=t.handleChangeSalesType;return o.a.createElement(i["a"],{loading:s,className:d.a.salesCard,bordered:!1,title:o.a.createElement(r["a"],{id:"dashboardandanalysis.analysis.the-proportion-of-sales",defaultMessage:"The Proportion of Sales"}),style:{height:"100%"},extra:o.a.createElement("div",{className:d.a.salesCardExtra},e,o.a.createElement("div",{className:d.a.salesTypeRadio},o.a.createElement(a["a"].Group,{value:n,onChange:c},o.a.createElement(a["a"].Button,{value:"all"},o.a.createElement(r["a"],{id:"dashboardandanalysis.channel.all",defaultMessage:"ALL"})),o.a.createElement(a["a"].Button,{value:"online"},o.a.createElement(r["a"],{id:"dashboardandanalysis.channel.online",defaultMessage:"Online"})),o.a.createElement(a["a"].Button,{value:"stores"},o.a.createElement(r["a"],{id:"dashboardandanalysis.channel.stores",defaultMessage:"Stores"})))))},o.a.createElement("div",null,o.a.createElement("h4",{style:{marginTop:8,marginBottom:32}},o.a.createElement(r["a"],{id:"dashboardandanalysis.analysis.sales",defaultMessage:"Sales"})),o.a.createElement(l["g"],{hasLegend:!0,subTitle:o.a.createElement(r["a"],{id:"dashboardandanalysis.analysis.sales",defaultMessage:"Sales"}),total:function(){return o.a.createElement(h["a"],null,u.reduce((function(t,e){return e.y+t}),0))},data:u,valueFormat:function(t){return o.a.createElement(h["a"],null,t)},height:248,lineWidth:4})))};e["default"]=c},B6XH:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("fWQN"),a=n("mtLc"),r=n("yKVA"),s=n("879j"),o=n("q1tI"),l=n.n(o),h=n("ucLW"),u=function(t){Object(r["a"])(n,t);var e=Object(s["a"])(n);function n(){var t;Object(i["a"])(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return t=e.call.apply(e,[this].concat(r)),t.main=null,t.renderToHtml=function(){var e=t.props.children;t.main&&(t.main.innerHTML=Object(h["i"])(e))},t}return Object(a["a"])(n,[{key:"componentDidMount",value:function(){this.renderToHtml()}},{key:"componentDidUpdate",value:function(){this.renderToHtml()}},{key:"render",value:function(){var t=this;return l.a.createElement("span",{ref:function(e){t.main=e}})}}]),n}(l.a.Component)}}]);