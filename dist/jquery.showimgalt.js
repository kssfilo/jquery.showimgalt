/*! jQuery Img Alt Appender - v0.1.2 - 2014-10-28
* http://kanasys.com/gtech/
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
