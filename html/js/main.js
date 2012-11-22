//Initlize objects
var playground = playground || {};
	playground.containers = playground.containers ||{};
	playground.defaultVars = playground.defaultVars || {};

//Default variables objects
playground.defaultVariables = {
	winHeight:	$(window).height(),
	scrollElem:	$('#scrollElement li, .inside-container'),
	win:		$(window)

};
// resize the containers to the size of the browser height
playground.containers = {
	init:function(){
		var opt = playground.defaultVariables;
		(function(){
			opt.scrollElem.height(opt.winHeight);
			opt.win.resize(function(){
				var h = $(window).height();
				$('#scrollElement li, .inside-container').height(h);
			});
		})();
	}
};
//Initlize all plugins and scrips here
$(document).ready(function(){
    playground.containers.init();
});