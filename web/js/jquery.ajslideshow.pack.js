/* a jSlideshow Plugin
--------
Author: Sovit Tamrakar
URL: http://ssovit.com
Version: 2.0
---------
*/
(function (_0x5b0fx0){_0x5b0fx0["fn"]["ajSlideshow"]=function (_0x5b0fx1){var _0x5b0fx2={autoplay:true,loop:true,width:500,stripmargin:5,height:400,thumbwidth:35,thumbheight:30,timeout:5};return this["each"](function (){var _0x5b0fx3=_0x5b0fx0(this);var _0x5b0fx4=_0x5b0fx3["attr"]("id");var _0x5b0fx5=_0x5b0fx0["extend"](_0x5b0fx2,_0x5b0fx1);var _0x5b0fx6=_0x5b0fx0(_0x5b0fx5["container"],_0x5b0fx3);var _0x5b0fx7=_0x5b0fx5["width"];var _0x5b0fx8=_0x5b0fx5["height"];var _0x5b0fx9=_0x5b0fx5["thumbwidth"];var _0x5b0fxa=_0x5b0fx5["thumbheight"];var _0x5b0fxb=_0x5b0fx5["stripmargin"];var _0x5b0fxc=_0x5b0fx5["autoplay"];var _0x5b0fxd=_0x5b0fx5["loop"];var _0x5b0fxe=_0x5b0fx5["timeout"]*1000;var _0x5b0fxf=0;var _0x5b0fx10=_0x5b0fx0("\x3Eul\x3Eli",_0x5b0fx3);var _0x5b0fx11="container-"+_0x5b0fx4;_0x5b0fx3["prepend"]("\x3Cdiv id=\x22"+_0x5b0fx11+"\x22\x3E\x3C/div\x3E");var _0x5b0fx12=_0x5b0fx0("#"+_0x5b0fx11);_0x5b0fx12["addClass"]("ajSlideshow");_0x5b0fx12["append"]("\x3Cdiv class=\x22ajSlideshow-controls\x22\x3E\x3C/div\x3E");var _0x5b0fx13=_0x5b0fx0(".ajSlideshow-controls",_0x5b0fx12);var _0x5b0fx14=_0x5b0fxa+10;var _0x5b0fx15=_0x5b0fx7-(_0x5b0fxb*2);var _0x5b0fx16=25;_0x5b0fx14=_0x5b0fxa+10;_0x5b0fx13["wrap"](_0x5b0fx0("\x3Cdiv\x3E\x3C/div\x3E")["css"]({width:_0x5b0fx15,height:_0x5b0fx14,position:"absolute",bottom:_0x5b0fxb,left:_0x5b0fxb,overflow:"hidden",zIndex:30}))["css"]({width:_0x5b0fx15,height:_0x5b0fxa+10,position:"relative",marginTop:0,bottom:0,left:0,overflow:"hidden",zIndex:30});_0x5b0fx13["append"]("\x3Cdiv class=\x22ajSlideshow-strip\x22\x3E\x3C/div\x3E");_0x5b0fx13["append"]("\x3Ca class=\x22ajSlideshow-nav-left\x22 title=\x22Previous Slide\x22\x3E\x3C/a\x3E");_0x5b0fx13["append"]("\x3Ca class=\x22ajSlideshow-nav-right\x22 title=\x22Next Slide\x22\x3E\x3C/a\x3E");_0x5b0fx13["append"]("\x3Ca class=\x22ajSlideshow-nav-play\x22 title=\x22Play/Pause\x22\x3E\x3C/a\x3E");var _0x5b0fx17=_0x5b0fx0(".ajSlideshow-strip",_0x5b0fx12);var _0x5b0fx18=_0x5b0fx0(".ajSlideshow-nav-left",_0x5b0fx12);var _0x5b0fx19=_0x5b0fx0(".ajSlideshow-nav-right",_0x5b0fx12);var _0x5b0fx1a=_0x5b0fx0(".ajSlideshow-nav-play",_0x5b0fx12);var _0x5b0fx1b=_0x5b0fx10["size"]()*(_0x5b0fx9+4);_0x5b0fx12["css"]({width:_0x5b0fx7+"px",height:_0x5b0fx8+"px",margin:0,background:"#000",position:"relative",overflow:"hidden"});_0x5b0fx17["wrap"](_0x5b0fx0("\x3Cdiv\x3E\x3C/div\x3E")["css"]({width:_0x5b0fx15-(_0x5b0fx9*3),height:_0x5b0fxa+4,position:"absolute",bottom:3,left:_0x5b0fx9,zIndex:30}));_0x5b0fx18["css"]({position:"absolute",left:0,bottom:5,width:_0x5b0fx9,height:_0x5b0fxa,zIndex:31,display:"block",outline:"none",cursor:"pointer"});_0x5b0fx19["css"]({position:"absolute",right:_0x5b0fx9,bottom:5,width:_0x5b0fx9,height:_0x5b0fxa,zIndex:31,display:"block",outline:"none",cursor:"pointer"});_0x5b0fx1a["css"]({position:"absolute",right:0,bottom:5,width:_0x5b0fx9,height:_0x5b0fxa,zIndex:31,display:"block",outline:"none",cursor:"pointer"});var _0x5b0fx1c=0;_0x5b0fx0("img",_0x5b0fx10)["each"](function (){var _0x5b0fx1d=_0x5b0fx0("\x3Cimg rel=\x22"+_0x5b0fx1c+"\x22 src=\x22"+_0x5b0fx0(this)["attr"]("src")+"\x22 /\x3E")["width"](_0x5b0fx9)["height"](_0x5b0fxa)["css"]({border:"1px solid #000",margin:1,cursor:"pointer",padding:0})["attr"]("alt",_0x5b0fx0(this)["attr"]("alt"));_0x5b0fx17["append"](_0x5b0fx1d);_0x5b0fx1c++;} );_0x5b0fx0("\x3Eul",_0x5b0fx3)["remove"]();var _0x5b0fx1e=0;var _0x5b0fx1f=0;_0x5b0fx0("img",_0x5b0fx17)["live"]("click",function (){var _0x5b0fx1c=_0x5b0fx0(this)["attr"]("rel");_0x5b0fx1f=_0x5b0fx1c;_0x5b0fx20(_0x5b0fx1c);_0x5b0fx0("img",_0x5b0fx17)["css"]({border:"1px solid #000"})["css"]({opacity:0.5});_0x5b0fx0(this)["css"]({border:"1px solid #DDD"})["css"]({opacity:1});_0x5b0fxf=clearInterval(_0x5b0fxf);_0x5b0fx22();} );_0x5b0fx0("img",_0x5b0fx17)["hover"](function (){_0x5b0fx0("img",_0x5b0fx17)["css"]({border:"0px solid #000"})["css"]({opacity:0.5});_0x5b0fx0(this)["css"]({border:"1px solid #DDD"})["css"]({opacity:1});_0x5b0fx0("img:eq("+_0x5b0fx1f+")",_0x5b0fx17)["css"]({border:"0px solid #FFF"})["css"]({opacity:1});} ,function (){_0x5b0fx0("img",_0x5b0fx17)["css"]({border:"1px solid #000"})["css"]({opacity:0.5});_0x5b0fx0("img:eq("+_0x5b0fx1f+")",_0x5b0fx17)["css"]({border:"1px solid #DDD"})["css"]({opacity:1});} );_0x5b0fx0("img:first",_0x5b0fx17)["trigger"]("click");function _0x5b0fx20(_0x5b0fx1c){_0x5b0fx0(".img2",_0x5b0fx12)["addClass"]("img-out")["removeClass"]("img2");_0x5b0fx0(".img1",_0x5b0fx12)["addClass"]("img2")["removeClass"]("img1");_0x5b0fx12["prepend"]("\x3Cimg class=\x22img1\x22 /\x3E");var _0x5b0fx21=_0x5b0fx0("img:eq("+_0x5b0fx1c+")",_0x5b0fx17)["attr"]("src");_0x5b0fx0(".img1",_0x5b0fx12)["attr"]("src",_0x5b0fx21);_0x5b0fx0(".img1",_0x5b0fx12)["hide"]()["css"]({position:"absolute",left:0,top:0,zIndex:29,margin:0,padding:0,border:0});_0x5b0fx12["children"](".image_label")["remove"]();_0x5b0fx0(".img1",_0x5b0fx12)["fadeIn"](_0x5b0fxe*0.2);_0x5b0fx0(".img2",_0x5b0fx12)["fadeOut"](_0x5b0fxe*0.2);_0x5b0fx0(".img-out",_0x5b0fx12)["remove"]();if(_0x5b0fx0("img:eq("+_0x5b0fx1c+")",_0x5b0fx17)["attr"]("alt")["length"]>0){_0x5b0fx12["append"](_0x5b0fx0("\x3Cdiv\x3E")["addClass"]("image_label")["css"]({width:_0x5b0fx15-10,height:"auto",position:"absolute",top:_0x5b0fxb,left:_0x5b0fxb,padding:5,fontSize:16,fontFace:"verdana",color:"#FFF",zIndex:35})["hide"]()["text"](_0x5b0fx0("img:eq("+_0x5b0fx1c+")",_0x5b0fx17)["attr"]("alt")));} ;} ;_0x5b0fx18["live"]("click",function (){_0x5b0fx1f--;if(_0x5b0fx1f<0){_0x5b0fx1f=_0x5b0fx10["length"]-1;} ;_0x5b0fx0("img:eq("+_0x5b0fx1f+")",_0x5b0fx17)["trigger"]("click");} );_0x5b0fx19["live"]("click",function (){_0x5b0fx1f++;if(_0x5b0fx1f>_0x5b0fx10["length"]-1){_0x5b0fx1f=0;} ;_0x5b0fx0("img:eq("+_0x5b0fx1f+")",_0x5b0fx17)["trigger"]("click");} );function _0x5b0fx22(){if(_0x5b0fxc){_0x5b0fxf=setInterval(function (){_0x5b0fx1f++;if(_0x5b0fx1f>_0x5b0fx10["length"]-1){_0x5b0fx1f=0;if(!_0x5b0fxd){_0x5b0fxc=false;_0x5b0fx1f=_0x5b0fx10["length"]-1;} ;} ;_0x5b0fx0("img:eq("+_0x5b0fx1f+")",_0x5b0fx17)["trigger"]("click");} ,_0x5b0fxe);_0x5b0fx1a["removeClass"]("inactive-play-btn")["addClass"]("active-play-btn");} else {_0x5b0fxf=clearInterval(_0x5b0fxf);_0x5b0fx1a["removeClass"]("active-play-btn")["addClass"]("inactive-play-btn");} ;} ;_0x5b0fx18["css"]({opacity:0.5});_0x5b0fx19["css"]({opacity:0.5});_0x5b0fx1a["css"]({opacity:0.5});_0x5b0fx18["hover"](function (){_0x5b0fx0(this)["css"]({opacity:1});} ,function (){_0x5b0fx0(this)["css"]({opacity:0.5});} );_0x5b0fx19["hover"](function (){_0x5b0fx0(this)["css"]({opacity:1});} ,function (){_0x5b0fx0(this)["css"]({opacity:0.5});} );_0x5b0fx1a["hover"](function (){_0x5b0fx0(this)["css"]({opacity:1});} ,function (){_0x5b0fx0(this)["css"]({opacity:0.5});} );_0x5b0fx1a["click"](function (){if(_0x5b0fxc){_0x5b0fxc=false;_0x5b0fx22();} else {_0x5b0fxc=true;_0x5b0fx22();} ;} );var _0x5b0fx23=0;_0x5b0fx12["mouseover"](function (){_0x5b0fx23=clearInterval(_0x5b0fx23);_0x5b0fx13["parent"]()["slideDown"](100,function (){_0x5b0fx13["parent"]()["show"]();} );_0x5b0fx12["children"](".image_label")["slideDown"](100,function (){_0x5b0fx12["children"](".image_label")["show"]();} );} );_0x5b0fx12["mouseout"](function (){_0x5b0fx23=setInterval(function (){_0x5b0fx13["parent"]()["slideUp"](500,function (){_0x5b0fx13["parent"]()["hide"]();} );_0x5b0fx12["children"](".image_label")["slideUp"](500,function (){_0x5b0fx12["children"](".image_label")["hide"]();} );_0x5b0fx23=clearInterval(_0x5b0fx23);} ,1000);} );_0x5b0fx17["hoverscrollModified"]({vertical:false,width:_0x5b0fx15-(_0x5b0fx9*3),height:_0x5b0fxa+4,arrows:false,arrowsOpacity:0,fixedArrows:false,rtl:false,debug:false});_0x5b0fx13["parent"]()["hide"]();} );} ;} )(jQuery);
(function($){$.fn.hoverscrollModified=function(params){if(!params){params={}}params=$.extend({},$.fn.hoverscrollModified.params,params);this.each(function(){var $this=$(this);$this.wrap('<div class="listcontainer"></div>');$this.addClass('list');var listctnr=$this.parent();listctnr.wrap('<div class="ui-widget-content hoverscroll"></div>');listctnr.css({overflow:'hidden'});var ctnr=listctnr.parent();ctnr.css({position:'relative'});var leftArrow,rightArrow,topArrow,bottomArrow;ctnr.width(params.width).height(params.height);listctnr.width(params.width).height(params.height);var size=0;ctnr.addClass('horizontal');$this.children().each(function(){$(this).addClass('item');if($(this).outerWidth){size+=$(this).outerWidth(true)}else{size+=$(this).width()+parseInt($(this).css('padding-left'))+parseInt($(this).css('padding-right'))+parseInt($(this).css('margin-left'))+parseInt($(this).css('margin-right'))}});$this.width(size);if(ctnr.outerWidth){size=ctnr.outerWidth()}else{size=ctnr.width()+parseInt(ctnr.css('padding-left'))+parseInt(ctnr.css('padding-right'))+parseInt(ctnr.css('margin-left'))+parseInt(ctnr.css('margin-right'))}var zone={1:{action:'move',from:0,to:0.06*size,direction:-1,speed:16},2:{action:'move',from:0.06*size,to:0.15*size,direction:-1,speed:8},3:{action:'move',from:0.15*size,to:0.25*size,direction:-1,speed:4},4:{action:'move',from:0.25*size,to:0.4*size,direction:-1,speed:2},5:{action:'stop',from:0.4*size,to:0.6*size},6:{action:'move',from:0.6*size,to:0.75*size,direction:1,speed:2},7:{action:'move',from:0.75*size,to:0.85*size,direction:1,speed:4},8:{action:'move',from:0.85*size,to:0.94*size,direction:1,speed:8},9:{action:'move',from:0.94*size,to:size,direction:1,speed:16}};ctnr[0].isChanging=false;ctnr[0].direction=0;ctnr[0].speed=1;function checkMouse(x,y){x=x-ctnr.offset().left;var pos;pos=x;for(i in zone){if(pos>=zone[i].from&&pos<zone[i].to){if(zone[i].action=='move'){startMoving(zone[i].direction,zone[i].speed)}else{stopMoving()}}}}function startMoving(direction,speed){if(ctnr[0].direction!=direction){stopMoving();ctnr[0].direction=direction;ctnr[0].isChanging=true;move()}if(ctnr[0].speed!=speed){ctnr[0].speed=speed}}function stopMoving(){if(ctnr[0].isChanging){ctnr[0].isChanging=false;ctnr[0].direction=0;ctnr[0].speed=1;clearTimeout(ctnr[0].timer)}}function move(){if(ctnr[0].isChanging==false){return}var scrollSide;scrollSide='scrollLeft';listctnr[0][scrollSide]+=ctnr[0].direction*ctnr[0].speed;ctnr[0].timer=setTimeout(function(){move()},50)}ctnr.mousemove(function(e){checkMouse(e.pageX,e.pageY)}).bind('mouseleave',function(){stopMoving()});this.startMoving=startMoving;this.stopMoving=stopMoving});return this};if(!$.fn.offset){$.fn.offset=function(){this.left=this.top=0;if(this[0]&&this[0].offsetParent){var obj=this[0];do{this.left+=obj.offsetLeft;this.top+=obj.offsetTop}while(obj=obj.offsetParent)}return this}}$.fn.hoverscrollModified.params={width:400,height:50,}})(jQuery);