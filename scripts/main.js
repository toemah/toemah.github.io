// snippet by github.com/caltrop256
(function scroll(text) {
	document.title = text;
	setTimeout(function() {
		scroll(text.substr(1) + text.substr(0, 1));
	}, 200);
})('   just a custom homepage lol   ');