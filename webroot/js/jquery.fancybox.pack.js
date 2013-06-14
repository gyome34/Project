﻿/*! fancyBox v2.0.6 fancyapps.com | fancyapps.com/fancybox/#license & Buttons helper & Media helper  */
(function(k,n,i,e){var d=i(k),a=i(n),o=i.fancybox=function(){o.open.apply(this,arguments)},c=false,f=n.createTouch!==e,j=function(p){return p&&p.hasOwnProperty&&p instanceof i},b=function(p){return p&&i.type(p)==="string"},l=function(p){return b(p)&&p.indexOf("%")>0},h=function(p){return(p&&!(p.style.overflow&&p.style.overflow==="hidden")&&((p.clientWidth&&p.scrollWidth>p.clientWidth)||(p.clientHeight&&p.scrollHeight>p.clientHeight)))},m=function(p,q){if(q&&l(p)){p=o.getViewport()[q]/100*parseInt(p,10)}return Math.ceil(p)},g=function(p,q){return m(p,q)+"px"};i.extend(o,{version:"2.0.6",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:true,autoHeight:false,autoWidth:false,autoResize:!f,autoCenter:!f,fitToView:true,aspectRatio:false,topRatio:0.5,fixed:false,scrolling:"auto",wrapCSS:"",arrows:true,closeBtn:true,closeClick:false,nextClick:false,mouseWheel:true,autoPlay:false,playSpeed:3000,preload:3,modal:false,loop:true,ajax:{dataType:"html",headers:{"X-fancyBox":true}},iframe:{scrolling:"auto",preload:true},keys:{next:{13:"right",34:"down",39:"right",40:"down"},prev:{8:"left",33:"up",37:"left",38:"up"},close:[27],play:[32],toggle:[70]},index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0"'+(i.browser.msie?' allowtransparency="true"':"")+"></iframe>",swf:'<object id="fancybox-swf{rnd}" name="fancybox-swf{rnd}" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<div title="Close" class="fancybox-item fancybox-close"></div>',next:'<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:true,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:true,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:{speedIn:0,speedOut:250,opacity:0.8,css:{cursor:"pointer"},closeClick:true},title:{type:"float"}},onCancel:i.noop,beforeLoad:i.noop,afterLoad:i.noop,beforeShow:i.noop,afterShow:i.noop,beforeChange:i.noop,beforeClose:i.noop,afterClose:i.noop},group:{},opts:{},coming:null,current:null,isActive:false,isOpen:false,isOpened:false,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:false},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(q,p){if(!q){return}p=i.isPlainObject(p)?p:{};o.close(true);if(!i.isArray(q)){q=j(q)?i(q).get():[q]}i.each(q,function(v,w){var u={},r,z,x,y,t,A,s;if(i.type(w)==="object"){if(w.nodeType){w=i(w)}if(j(w)){u={href:w.attr("href"),title:w.attr("title"),isDom:true,element:w};if(i.metadata){i.extend(true,u,w.metadata())}}else{u=w}}r=p.href||u.href||(b(w)?w:null);z=p.title!==e?p.title:u.title||"";x=p.content||u.content;y=x?"html":(p.type||u.type);if(!y&&u.isDom){y=w.data("fancybox-type");if(!y){t=w.prop("class").match(/fancybox\.(\w+)/);y=t?t[1]:null}}if(b(r)){if(!y){if(o.isImage(r)){y="image"}else{if(o.isSWF(r)){y="swf"}else{if(r.match(/^#/)){y="inline"}else{if(b(w)){y="html";x=w}}}}}if(y==="ajax"){A=r.split(/\s+/,2);r=A.shift();s=A.shift()}}if(!x){if(y==="inline"){if(r){x=i(b(r)?r.replace(/.*(?=#[^\s]+$)/,""):r)}else{if(u.isDom){x=w}}}else{if(y==="html"){x=r}else{if(!y&&!r&&u.isDom){y="inline";x=w}}}}i.extend(u,{href:r,type:y,content:x,title:z,selector:s});q[v]=u});o.opts=i.extend(true,{},o.defaults,p);if(p.keys!==e){o.opts.keys=p.keys?i.extend({},o.defaults.keys,p.keys):false}o.group=q;return o._start(o.opts.index||0)},cancel:function(){var p=o.coming;if(!p||false===o.trigger("onCancel")){return}o.hideLoading();if(p.wrap){p.wrap.stop().trigger("onReset").remove()}o.coming=null;if(o.ajaxLoad){o.ajaxLoad.abort()}o.ajaxLoad=null;if(o.imgPreload){o.imgPreload.onload=o.imgPreload.onerror=null}},close:function(p){o.cancel();if(!o.current||false===o.trigger("beforeClose")){return}o.unbindEvents();if(!o.isOpen||p===true){i(".fancybox-wrap").stop().trigger("onReset").remove();o._afterZoomOut()}else{o.isOpen=o.isOpened=false;i(".fancybox-item, .fancybox-nav").remove();o.wrap.stop(true).removeClass("fancybox-opened");if(o.wrap.css("position")==="fixed"){o.wrap.css(o._getPosition(true))}o.transitions[o.current.closeMethod]()}},play:function(r){var p=function(){clearTimeout(o.player.timer)},t=function(){p();if(o.current&&o.player.isActive){o.player.timer=setTimeout(o.next,o.current.playSpeed)}},q=function(){p();i("body").unbind(".player");o.player.isActive=false;o.trigger("onPlayEnd")},s=function(){if(o.current&&(o.current.loop||o.current.index<o.group.length-1)){o.player.isActive=true;i("body").bind({"afterShow.player onUpdate.player":t,"onCancel.player beforeClose.player":q,"beforeLoad.player":p});t();o.trigger("onPlayStart")}};if(r===true||(!o.player.isActive&&r!==false)){s()}else{q()}},next:function(p){if(!b(p)){p="down"}if(o.current){o.jumpto(o.current.index+1,p,"next")}},prev:function(p){if(!b(p)){p="up"}if(o.current){o.jumpto(o.current.index-1,p,"prev")}},jumpto:function(q,s,p){var r=o.current;if(!r){return}q=parseInt(q,10);o.direction=s||(q>r.index?"right":"left");o.router=p||"jumpto";if(r.loop){if(q<0){q=r.group.length+(q%r.group.length)}q=q%r.group.length}if(r.group[q]!==e){o.cancel();o._start(q)}},reposition:function(q,p){var r;if(o.isOpen){r=o._getPosition(p);if(q&&q.type==="scroll"){delete r.position;o.wrap.stop(true,true).animate(r,200)}else{o.wrap.css(r)}}},update:function(r){var q=!r||(r&&r.type==="orientationchange"),p=r&&r.type==="scroll";if(q){clearTimeout(c);c=null}if(!o.isOpen||c){return}if(q&&f){o.wrap.removeAttr("style").addClass("fancybox-tmp");o.trigger("onUpdate")}c=setTimeout(function(){var s=o.current;c=null;if(!s){return}o.wrap.removeClass("fancybox-tmp");if((s.autoResize&&!p)||q){o._setDimension();o.trigger("onUpdate")}if((s.autoCenter&&!(p&&s.canShrink))||q){o.reposition(r)}o.trigger("onUpdate")},(q?20:200))},toggle:function(p){if(o.isOpen){o.current.fitToView=i.type(p)==="boolean"?p:!o.current.fitToView;o.update()}},hideLoading:function(){a.unbind("keypress.fb");i("#fancybox-loading").remove()},showLoading:function(){var q,p;o.hideLoading();a.bind("keypress.fb",function(r){if((r.which||r.keyCode)===27){r.preventDefault();o.cancel()}});q=i('<div id="fancybox-loading"><div></div></div>').click(o.cancel).appendTo("body");if(o.coming&&!o.coming.fixed){p=o.getViewport();q.css({position:"absolute",top:(p.h*0.5)+p.y,left:(p.w*0.5)+p.x})}},getViewport:function(){return{x:d.scrollLeft(),y:d.scrollTop(),w:f&&k.innerWidth?k.innerWidth:d.width(),h:f&&k.innerHeight?k.innerHeight:d.height()}},unbindEvents:function(){if(o.wrap){o.wrap.unbind(".fb")}a.unbind(".fb");d.unbind(".fb")},bindEvents:function(){var q=o.current,p;if(!q){return}d.bind("resize.fb orientationchange.fb"+(q.autoCenter&&!q.fixed?" scroll.fb":""),o.update);p=q.keys;if(p){a.bind("keydown.fb",function(t){var r=t.which||t.keyCode,s=t.target||t.srcElement;if(!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey&&!(s&&(s.type||i(s).is("[contenteditable]")))){i.each(p,function(u,v){if(q.group.length>1&&v[r]!==e){o[u](v[r]);t.preventDefault();return false}if(i.inArray(r,v)>-1){o[u]();t.preventDefault();return false}})}})}if(i.fn.mousewheel&&q.mouseWheel){o.wrap.bind("mousewheel.fb",function(w,x,s,r){var v=w.target||null,t=i(v),u=false;while(t.length){if(u||t.is(".fancybox-skin")||t.is(".fancybox-wrap")){break}u=h(t[0]);t=i(t).parent()}if(x!==0&&!u){if(o.group.length>1&&!q.canShrink){if(r>0||s>0){o.prev(r>0?"up":"left")}else{if(r<0||s<0){o.next(r<0?"down":"right")}}w.preventDefault()}else{if(o.wrap.css("position")==="fixed"){w.preventDefault()}}}})}},trigger:function(q,s){var p,r=s||o[i.inArray(q,["onCancel","beforeLoad","afterLoad"])>-1?"coming":"current"];if(!r){return}if(i.isFunction(r[q])){p=r[q].apply(r,Array.prototype.slice.call(arguments,1))}if(p===false){return false}if(r.helpers){i.each(r.helpers,function(u,t){if(t&&o.helpers[u]&&i.isFunction(o.helpers[u][q])){o.helpers[u][q](t,r)}})}i.event.trigger(q+".fb")},isImage:function(p){return b(p)&&p.match(/\.(jp(e|g|eg)|gif|png|bmp)((\?|#).*)?$/i)},isSWF:function(p){return b(p)&&p.match(/\.(swf)((\?|#).*)?$/i)},_start:function(q){var r={},u=o.group[q]||null,p,s,t;if(!u){return false}r=i.extend(true,{},o.opts,u);t=r.margin;if(i.type(t)==="number"){r.margin=[t,t,t,t]}if(r.modal){i.extend(true,r,{closeBtn:false,closeClick:false,nextClick:false,arrows:false,mouseWheel:false,keys:null,helpers:{overlay:{css:{cursor:"auto"},closeClick:false}}})}if(r.autoSize){r.autoWidth=r.autoHeight=true}if(r.width==="auto"){r.autoWidth=true}if(r.height==="auto"){r.autoHeight=true}r.group=o.group;r.index=q;o.coming=r;if(false===o.trigger("beforeLoad")){o.coming=null;return}s=r.type;p=r.href;if(!s){o.coming=null;if(o.current&&o.router&&o.router!=="jumpto"){o.current.index=q;return o[o.router](o.direction)}return false}o.isActive=true;if(s==="image"||s==="swf"){r.autoHeight=r.autoWidth=false;r.scrolling="visible"}if(s==="image"){r.aspectRatio=true}if(s==="iframe"&&f){r.scrolling="scroll"}r.wrap=i(r.tpl.wrap).addClass("fancybox-"+(f?"mobile":"desktop")+" fancybox-type-"+s+" fancybox-tmp "+r.wrapCSS).appendTo("body");i.extend(r,{skin:i(".fancybox-skin",r.wrap).css("padding",g(r.padding)),outer:i(".fancybox-outer",r.wrap),inner:i(".fancybox-inner",r.wrap)});if(s==="inline"||s==="html"){if(!r.content||!r.content.length){return o._error("content")}}else{if(!p){return o._error("href")}}if(s==="image"){o._loadImage()}else{if(s==="ajax"){o._loadAjax()}else{if(s==="iframe"){o._loadIframe()}else{o._afterLoad()}}}},_error:function(p){i.extend(o.coming,{type:"html",autoWidth:true,autoHeight:true,minWidth:0,minHeight:0,scrolling:"no",hasError:p,content:o.coming.tpl.error});o._afterLoad()},_loadImage:function(){var p=o.imgPreload=new Image();p.onload=function(){this.onload=this.onerror=null;o.coming.width=this.width;o.coming.height=this.height;o._afterLoad()};p.onerror=function(){this.onload=this.onerror=null;o._error("image")};p.src=o.coming.href;if(p.complete===e||!p.complete){o.showLoading()}},_loadAjax:function(){var p=o.coming;o.showLoading();o.ajaxLoad=i.ajax(i.extend({},p.ajax,{url:p.href,error:function(q,r){if(o.coming&&r!=="abort"){o._error("ajax",q)}else{o.hideLoading()}},success:function(q,r){if(r==="success"){p.content=q;o._afterLoad()}}}))},_loadIframe:function(){var p=o.coming,q=i(p.tpl.iframe.replace("{rnd}",new Date().getTime())).attr("scrolling",f?"auto":p.iframe.scrolling).attr("src",p.href);i(p.wrap).bind("onReset",function(){try{q.hide().parent().empty()}catch(r){}});if(p.iframe.preload){o.showLoading();q.bind("load",function(){i(this).unbind().bind("load.fb",o.update).data("ready",1);o.coming.wrap.removeClass("fancybox-tmp").show();o._afterLoad()})}p.content=q.appendTo(p.inner);if(!p.iframe.preload){o._afterLoad()}},_preloadImages:function(){var u=o.group,t=o.current,p=u.length,r=t.preload?Math.min(t.preload,p-1):0,s,q;for(q=1;q<=r;q+=1){s=u[(t.index+q)%p];if(s.type==="image"&&s.href){new Image().src=s.href}}},_afterLoad:function(){var p=o.coming,s=o.current,u,r,q,t;o.hideLoading();if(!p||false===o.trigger("afterLoad",p,s)){o.coming.wrap.stop().trigger("onReset").remove();o.coming=null;return}if(s){o.trigger("beforeChange",s)}o.unbindEvents();if(o.isOpened){i(".fancybox-item, .fancybox-nav").remove();s.wrap.stop(true).removeClass("fancybox-opened");o.transitions[s.prevMethod]()}else{i(".fancybox-wrap").not(p.wrap).stop().trigger("onReset").remove()}u=p;r=p.content;q=p.type;t=p.scrolling;i.extend(o,{wrap:u.wrap,skin:u.skin,outer:u.outer,inner:u.inner,current:u});switch(q){case"inline":case"ajax":case"html":if(u.selector){r=i("<div>").html(r).find(u.selector)}else{if(j(r)){r=r.show().detach();i(u.wrap).bind("onReset",function(){i(this).find(".fancybox-inner").children().appendTo("body").hide()})}}break;case"image":r=u.tpl.image.replace("{href}",u.href);break;case"swf":r=u.tpl.swf.replace(/\{rnd\}/g,new Date().getTime()).replace(/\{href\}/g,u.href);break}if(!(u.type==="iframe"&&u.iframe.preload)){u.inner.append(r)}o.trigger("beforeShow");o._setDimension();u.pos=i.extend({},u.dim,o._getPosition(true));u.inner.css("overflow",t==="yes"?"scroll":(t==="no"?"hidden":t));u.wrap.removeClass("fancybox-tmp");o.isOpen=false;o.coming=null;o.bindEvents();o.transitions[o.isOpened?u.nextMethod:u.openMethod]();o._preloadImages()},_setDimension:function(){var S=o.getViewport(),O=0,U=false,W=false,A=o.wrap,M=o.skin,X=o.inner,J=o.current,K=J.width,H=J.height,D=J.minWidth,w=J.minHeight,Q=J.maxWidth,I=J.maxHeight,C=J.scrolling,u=J.scrollOutside,G=J.margin,v=G[1]+G[3],t=G[0]+G[2],r,q,N,P,F,E,L,y,x,T,s,V,p,z,B;A.add(M).add(X).width("auto").height("auto");r=M.outerWidth(true)-M.width();q=M.outerHeight(true)-M.height();N=v+r;P=t+q;F=l(K)?(S.w-N)*parseFloat(K)/100:K;E=l(H)?(S.h-P)*parseFloat(H)/100:H;if(J.type==="iframe"){z=J.content;if(J.autoHeight&&z.data("ready")===1){try{if(z[0].contentWindow.document.location){X.width(F).height(9999);B=z.contents().find("body");if(u){B.css("overflow-x","hidden")}E=B.height()}}catch(R){}}}else{if(J.autoWidth||J.autoHeight){X.addClass("fancybox-tmp");if(J.autoWidth){F=X.width()}if(J.autoHeight){E=X.height()}X.removeClass("fancybox-tmp")}}K=m(F);H=m(E);x=F/E;D=m(l(D)?m(D,"w")-N:D);Q=m(l(Q)?m(Q,"w")-N:Q);w=m(l(w)?m(w,"h")-P:w);I=m(l(I)?m(I,"h")-P:I);L=Q;y=I;V=S.w-v;p=S.h-t;if(J.aspectRatio){if(K>Q){K=Q;H=K/x}if(H>I){H=I;K=H*x}if(K<D){K=D;H=K/x}if(H<w){H=w;K=H*x}}else{K=Math.max(D,Math.min(K,Q));H=Math.max(w,Math.min(H,I))}if(J.fitToView){Q=Math.min(S.w-N,Q);I=Math.min(S.h-P,I);X.width(m(K)).height(m(H));A.width(m(K+r));T=A.width();s=A.height();if(J.aspectRatio){while((T>V||s>p)&&K>D&&H>w){if(O++>19){break}H=Math.max(w,Math.min(I,H-10));K=H*x;if(K<D){K=D;H=K/x}X.width(m(K)).height(m(H));A.width(m(K+r));T=A.width();s=A.height()}}else{K=Math.max(D,Math.min(K,K-(T-V)));H=Math.max(w,Math.min(H,H-(s-p)))}}if(u&&C==="auto"&&H<E&&(K+r+u)<V){K+=u}X.width(m(K)).height(m(H));A.width(m(K+r));T=A.width();s=A.height();U=(T>V||s>p)&&K>D&&H>w;W=J.aspectRatio?(K<L&&H<y&&K<F&&H<E):((K<L||H<y)&&(K<F||H<E));i.extend(J,{dim:{width:g(T),height:g(s)},origWidth:F,origHeight:E,canShrink:U,canExpand:W,wPadding:r,hPadding:q,wrapSpace:s-M.outerHeight(true),skinSpace:M.height()-H});if(!z&&J.autoHeight&&H>w&&H<I&&!W){X.height("auto")}},_getPosition:function(r){var v=o.current,q=o.getViewport(),t=v.margin,s=o.wrap.width()+t[1]+t[3],p=o.wrap.height()+t[0]+t[2],u={position:"absolute",top:t[0]+q.y,left:t[3]+q.x};if(v.autoCenter&&v.fixed&&!r&&p<=q.h&&s<=q.w){u={position:"fixed",top:t[0],left:t[3]}}u.top=g(Math.max(u.top,u.top+((q.h-p)*v.topRatio)));u.left=g(Math.max(u.left,u.left+((q.w-s)*0.5)));return u},_afterZoomIn:function(){var p=o.current;if(!p){return}o.isOpen=o.isOpened=true;o.wrap.addClass("fancybox-opened").css("overflow","visible");o.trigger("afterShow");o.reposition();if(p.closeClick||p.nextClick){o.inner.css("cursor","pointer").bind("click.fb",function(q){if(!i(q.target).is("a")&&!i(q.target).parent().is("a")){o[p.closeClick?"close":"next"]()}})}if(p.closeBtn){i(p.tpl.closeBtn).appendTo(o.skin).bind("click.fb",o.close)}if(p.arrows&&o.group.length>1){if(p.loop||p.index>0){i(p.tpl.prev).appendTo(o.outer).bind("click.fb",o.prev)}if(p.loop||p.index<o.group.length-1){i(p.tpl.next).appendTo(o.outer).bind("click.fb",o.next)}}if(o.opts.autoPlay&&!o.player.isActive){o.opts.autoPlay=false;o.play()}},_afterZoomOut:function(){var p=o.current;o.wrap.trigger("onReset").remove();i.extend(o,{group:{},opts:{},current:null,isActive:false,isOpened:false,isOpen:false,router:false,wrap:null,skin:null,outer:null,inner:null});o.trigger("afterClose",p)}});o.transitions={getOrigPosition:function(){var s=o.current,q=s.element,v=i(s.orig),u={},p=50,w=50,t=s.hPadding,x=s.wPadding,r;if(!v.length&&s.isDom&&q.is(":visible")){v=q.find("img:first");if(!v.length){v=q}}if(v.length){u=v.offset();if(v.is("img")){p=v.outerWidth();w=v.outerHeight()}}else{r=o.getViewport();u.top=r.y+(r.h-w)*0.5;u.left=r.x+(r.w-p)*0.5}u={top:g(u.top-t*0.5),left:g(u.left-x*0.5),width:g(p+x),height:g(w+t)};return u},step:function(q,r){var t,v,w,p=r.prop,s=o.current,u=s.wrapSpace,x=s.skinSpace;if(p==="width"||p==="height"){t=(q-r.start)/(r.end-r.start);if(r.start>r.end){t=1-t}v=p==="width"?s.wPadding:s.hPadding;w=q-v;o.skin[p](m(p==="width"?w:w-(u*t)));o.inner[p](m(p==="width"?w:w-(u*t)-(x*t)))}},zoomIn:function(){var s=o.wrap,u=o.current,q=u.pos,r=u.openEffect,t=r==="elastic",p=i.extend({opacity:1},q);delete p.position;if(t){q=this.getOrigPosition();if(u.openOpacity){q.opacity=0.1}}else{if(r==="fade"){q.opacity=0.1}}s.css(q).animate(p,{duration:r==="none"?0:u.openSpeed,easing:u.openEasing,step:t?this.step:null,complete:o._afterZoomIn})},zoomOut:function(){var r=o.wrap,t=o.current,q=t.closeEffect,s=q==="elastic",p={opacity:0.1};if(s){p=this.getOrigPosition();if(t.closeOpacity){p.opacity=0.1}}r.animate(p,{duration:q==="none"?0:t.closeSpeed,easing:t.closeEasing,step:s?this.step:null,complete:o._afterZoomOut})},changeIn:function(){var s=o.wrap,v=o.current,r=v.nextEffect,q=v.pos,p={opacity:1},u=o.direction,w=200,t;q.opacity=0.1;if(r==="elastic"){t=u==="down"||u==="up"?"top":"left";if(u==="down"||u==="right"){q[t]=g(parseInt(q[t],10)-w);p[t]="+="+w+"px"}else{q[t]=g(parseInt(q[t],10)+w);p[t]="-="+w+"px"}}s.css(q).animate(p,{duration:r==="none"?0:v.nextSpeed,easing:v.nextEasing,complete:function(){setTimeout(o._afterZoomIn,10)}})},changeOut:function(){var r=o.wrap,t=o.current,q=t.prevEffect,p={opacity:0.1},s=o.direction,u=200;if(q==="elastic"){p[s==="down"||s==="up"?"top":"left"]=(s==="up"||s==="left"?"-":"+")+"="+u+"px"}r.animate(p,{duration:q==="none"?0:t.prevSpeed,easing:t.prevEasing,complete:function(){i(this).trigger("onReset").remove()}})}};o.helpers.overlay={overlay:null,update:function(){var r,p,q;this.overlay.width("100%").height("100%");if(i.browser.msie||f){p=Math.max(n.documentElement.scrollWidth,n.body.scrollWidth);q=Math.max(n.documentElement.offsetWidth,n.body.offsetWidth);r=p<q?d.width():p}else{r=a.width()}this.overlay.width(r).height(a.height())},beforeShow:function(q){var p;if(this.overlay){return}q=i.extend(true,{},o.defaults.helpers.overlay,q);p=this.overlay=i('<div id="fancybox-overlay"></div>').css(q.css).appendTo("body").bind("mousewheel",function(r){if(!o.wrap||(o.wrap.css("position")==="fixed"||o.wrap.is(":animated"))){r.preventDefault()}});if(q.closeClick){p.bind("click.fb",o.close)}if(o.opts.fixed&&!f){p.addClass("overlay-fixed")}else{this.update();this.onUpdate=function(){this.update()}}p.fadeTo(q.speedIn,q.opacity)},afterClose:function(p){if(this.overlay){this.overlay.fadeOut(p.speedOut||0,function(){i(this).remove()})}this.overlay=null}};o.helpers.title={beforeShow:function(q){var s=o.current.title,p=q.type,r;if(s){r=i('<div class="fancybox-title fancybox-title-'+p+'-wrap">'+s+"</div>").appendTo("body");if(p==="float"){r.width(r.width()).wrapInner('<span class="child"></span>');o.current.margin[2]+=Math.abs(parseInt(r.css("margin-bottom"),10))}r.appendTo(p==="over"?o.inner:(p==="outside"?o.wrap:o.skin))}}};i.fn.fancybox=function(r){var q,s=i(this),p=this.selector||"",t=function(x){var w=this,u=q,v,y;if(!(x.ctrlKey||x.altKey||x.shiftKey||x.metaKey)&&!i(w).is(".fancybox-wrap")){v=r.groupAttr||"data-fancybox-group";y=i(w).attr(v);if(!y){v="rel";y=w[v]}if(y&&y!==""&&y!=="nofollow"){w=p.length?i(p):s;w=w.filter("["+v+'="'+y+'"]');u=w.index(this)}r.index=u;if(o.open(w,r)!==false){x.preventDefault()}}};r=r||{};q=r.index||0;if(!p||r.live===false){s.unbind("click.fb-start").bind("click.fb-start",t)}else{a.undelegate(p,"click.fb-start").delegate(p,"click.fb-start",t)}return this};if(!i.scrollbarWidth){i.scrollbarWidth=function(){var q,r,p;q=i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body");r=q.children();p=r.innerWidth()-r.height(99).innerWidth();q.remove();return p}}a.ready(function(){o.defaults.scrollOutside=i.scrollbarWidth();o.defaults.fixed=i.support.fixedPosition||!((i.browser.msie&&i.browser.version<=6)||f)})}(window,document,jQuery));(function(b){var a=b.fancybox;a.helpers.buttons={tpl:'<div id="fancybox-buttons"><ul><li><a class="btnPrev" title="Previous" href="javascript:;"></a></li><li><a class="btnPlay" title="Start slideshow" href="javascript:;"></a></li><li><a class="btnNext" title="Next" href="javascript:;"></a></li><li><a class="btnToggle" title="Toggle size" href="javascript:;"></a></li><li><a class="btnClose" title="Close" href="javascript:jQuery.fancybox.close();"></a></li></ul></div>',list:null,buttons:null,beforeLoad:function(c,d){if(d.group.length<2){d.helpers.buttons=false;d.closeBtn=true;return}d.margin[c.position==="bottom"?2:0]+=30},onPlayStart:function(){if(this.buttons){this.buttons.play.attr("title","Pause slideshow").addClass("btnPlayOn")}},onPlayEnd:function(){if(this.buttons){this.buttons.play.attr("title","Start slideshow").removeClass("btnPlayOn")}},afterShow:function(d,e){var c=this.buttons;if(!c){this.list=b(d.tpl||this.tpl).addClass(d.position||"top").appendTo("body");c={prev:this.list.find(".btnPrev").click(a.prev),next:this.list.find(".btnNext").click(a.next),play:this.list.find(".btnPlay").click(a.play),toggle:this.list.find(".btnToggle").click(a.toggle)}}if(e.index>0||e.loop){c.prev.removeClass("btnDisabled")}else{c.prev.addClass("btnDisabled")}if(e.loop||e.index<e.group.length-1){c.next.removeClass("btnDisabled");c.play.removeClass("btnDisabled")}else{c.next.addClass("btnDisabled");c.play.addClass("btnDisabled")}this.buttons=c;this.onUpdate(d,e)},onUpdate:function(d,e){var c;if(!this.buttons){return}c=this.buttons.toggle.removeClass("btnDisabled btnToggleOn");if(e.canShrink){c.addClass("btnToggleOn")}else{if(!e.canExpand){c.addClass("btnDisabled")}}},beforeClose:function(){if(this.list){this.list.remove()}this.list=null;this.buttons=null}}}(jQuery));(function(b){var a=b.fancybox;a.helpers.media={beforeLoad:function(e,g){var c=g.href||"",d=false,f;if((f=c.match(/(youtube\.com|youtu\.be)\/(v\/|u\/|embed\/|watch\?v=)?([^#\&\?]*).*/i))){c="//www.youtube.com/embed/"+f[3]+"?autoplay=1&autohide=1&fs=1&rel=0&enablejsapi=1&hd=1";d="iframe"}else{if((f=c.match(/vimeo.com\/((channels|groups)\/(.*)\/)?(\d+)\/?(.*)/))){c="//player.vimeo.com/video/"+f[4]+"?hd=1&autoplay=1&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1";d="iframe"}else{if((f=c.match(/metacafe.com\/watch\/(\d+)\/?(.*)/))){c="//www.metacafe.com/fplayer/"+f[1]+"/.swf?playerVars=autoPlay=yes";d="swf"}else{if((f=c.match(/dailymotion.com\/video\/(.*)\/?(.*)/))){c="//www.dailymotion.com/swf/video/"+f[1]+"?additionalInfos=0&autoStart=1";d="swf"}else{if((f=c.match(/twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i))){c="//www.twitvid.com/embed.php?autoplay=0&guid="+f[1];d="iframe"}else{if((f=c.match(/twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i))){c="//twitpic.com/show/full/"+f[1]+"/";d="image"}else{if((f=c.match(/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i))){c="//"+f[1]+"/p/"+f[2]+"/media/?size=l";d="image"}else{if((f=c.match(/maps\.google\.com\/(\?ll=|maps\/?\?q=)(.*)/i))){c="//maps.google.com/"+f[1]+""+f[2]+"&output="+(f[2].indexOf("layer=c")>0?"svembed":"embed");d="iframe"}}}}}}}}if(d){g.href=c;g.type=d;g.autoHeight=false}}}}(jQuery));