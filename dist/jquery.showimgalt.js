/*! jQuery Img Alt Appender - v0.1.0 - 2014-10-28
* https://github.com/kssfilo/jquery.showimgalt
* Copyright (c) 2014 kssfilo; Licensed MIT */
(function($){
	$.fn.showImgAlt=function(options){
		var settings={
			tag:'<span>',
			class:'imgalt',
			before:false
		};
		$.extend(settings,options);
		this.each(function(){
			var o=this;
			var alt=$(o).attr('alt');
			if(alt){
				var alttext=$(settings.tag).html(alt).addClass(settings.class);
				if(settings.before){alttext.insertBefore(o);}
				else{alttext.insertAfter(o);}
			}
		});
		return(this);
	};
})(jQuery);
