(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{176:function(i,t,e){var a,n,s;
/**
 * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
 * {@link http://kottenator.github.io/jquery-circle-progress/}
 *
 * @author Rostyslav Bryzgunov <kottenator@gmail.com>
 * @version 1.2.2
 * @licence MIT
 * @preserve
 */n=[e(4)],void 0===(s="function"==typeof(a=function(i){function t(i){this.init(i)}t.prototype={value:0,size:100,startAngle:-Math.PI,thickness:"auto",fill:{gradient:["#3aeabb","#fdd250"]},emptyFill:"rgba(0, 0, 0, .1)",animation:{duration:1200,easing:"circleProgressEasing"},animationStartValue:0,reverse:!1,lineCap:"butt",insertMode:"prepend",constructor:t,el:null,canvas:null,ctx:null,radius:0,arcFill:null,lastFrameValue:0,init:function(t){i.extend(this,t),this.radius=this.size/2,this.initWidget(),this.initFill(),this.draw(),this.el.trigger("circle-inited")},initWidget:function(){this.canvas||(this.canvas=i("<canvas>")["prepend"==this.insertMode?"prependTo":"appendTo"](this.el)[0]);var t=this.canvas;if(t.width=this.size,t.height=this.size,this.ctx=t.getContext("2d"),window.devicePixelRatio>1){var e=window.devicePixelRatio;t.style.width=t.style.height=this.size+"px",t.width=t.height=this.size*e,this.ctx.scale(e,e)}},initFill:function(){function t(){var t=i("<canvas>")[0];t.width=a.size,t.height=a.size,t.getContext("2d").drawImage(e,0,0,r,r),a.arcFill=a.ctx.createPattern(t,"no-repeat"),a.drawFrame(a.lastFrameValue)}var e,a=this,n=this.fill,s=this.ctx,r=this.size;if(!n)throw Error("The fill is not specified!");if("string"==typeof n&&(n={color:n}),n.color&&(this.arcFill=n.color),n.gradient){var l=n.gradient;if(1==l.length)this.arcFill=l[0];else if(l.length>1){for(var o=n.gradientAngle||0,h=n.gradientDirection||[r/2*(1-Math.cos(o)),r/2*(1+Math.sin(o)),r/2*(1+Math.cos(o)),r/2*(1-Math.sin(o))],c=s.createLinearGradient.apply(s,h),d=0;d<l.length;d++){var g=l[d],u=d/(l.length-1);i.isArray(g)&&(u=g[1],g=g[0]),c.addColorStop(u,g)}this.arcFill=c}}n.image&&(n.image instanceof Image?e=n.image:(e=new Image).src=n.image,e.complete?t():e.onload=t)},draw:function(){this.animation?this.drawAnimated(this.value):this.drawFrame(this.value)},drawFrame:function(i){this.lastFrameValue=i,this.ctx.clearRect(0,0,this.size,this.size),this.drawEmptyArc(i),this.drawArc(i)},drawArc:function(i){if(0!==i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;t.save(),t.beginPath(),this.reverse?t.arc(e,e,e-a/2,n-2*Math.PI*i,n):t.arc(e,e,e-a/2,n,n+2*Math.PI*i),t.lineWidth=a,t.lineCap=this.lineCap,t.strokeStyle=this.arcFill,t.stroke(),t.restore()}},drawEmptyArc:function(i){var t=this.ctx,e=this.radius,a=this.getThickness(),n=this.startAngle;i<1&&(t.save(),t.beginPath(),i<=0?t.arc(e,e,e-a/2,0,2*Math.PI):this.reverse?t.arc(e,e,e-a/2,n,n-2*Math.PI*i):t.arc(e,e,e-a/2,n+2*Math.PI*i,n),t.lineWidth=a,t.strokeStyle=this.emptyFill,t.stroke(),t.restore())},drawAnimated:function(t){var e=this,a=this.el,n=i(this.canvas);n.stop(!0,!1),a.trigger("circle-animation-start"),n.css({animationProgress:0}).animate({animationProgress:1},i.extend({},this.animation,{step:function(i){var n=e.animationStartValue*(1-i)+t*i;e.drawFrame(n),a.trigger("circle-animation-progress",[i,n])}})).promise().always((function(){a.trigger("circle-animation-end")}))},getThickness:function(){return i.isNumeric(this.thickness)?this.thickness:this.size/14},getValue:function(){return this.value},setValue:function(i){this.animation&&(this.animationStartValue=this.lastFrameValue),this.value=i,this.draw()}},i.circleProgress={defaults:t.prototype},i.easing.circleProgressEasing=function(i){return i<.5?.5*(i*=2)*i*i:1-.5*(i=2-2*i)*i*i},i.fn.circleProgress=function(e,a){var n="circle-progress",s=this.data(n);if("widget"==e){if(!s)throw Error('Calling "widget" method on not initialized instance is forbidden');return s.canvas}if("value"==e){if(!s)throw Error('Calling "value" method on not initialized instance is forbidden');if(void 0===a)return s.getValue();var r=arguments[1];return this.each((function(){i(this).data(n).setValue(r)}))}return this.each((function(){var a=i(this),s=a.data(n),r=i.isPlainObject(e)?e:{};if(s)s.init(r);else{var l=i.extend({},a.data());"string"==typeof l.fill&&(l.fill=JSON.parse(l.fill)),"string"==typeof l.animation&&(l.animation=JSON.parse(l.animation)),(r=i.extend(l,r)).el=a,s=new t(r),a.data(n,s)}}))}})?a.apply(t,n):a)||(i.exports=s)}}]);