let toggle = null,
	palette = {
		bodyBgdColor: {
			dark: "#151515",
			light: "#ededed"
		},
		mainBgdColor: {
			dark: "#1b1b1b",
			light: "#f8f8ff"
		},
		mainBrdColor: {
			dark: "#111111",
			light: "#d3d3d3"
		},
		logoSrc: {
			dark: "media/GitHub-Mark-32px.png",
			light: "media/GitHub-Mark-Light-32px.png"
		}
	};

window.addEventListener('load', () => {
	toggle = document.getElementById('toggle');
	toggle.addEventListener('click', switchTheme);
})

function switchTheme() {
	let bodyBgdColor = rgb2hex(window.getComputedStyle(document.body).backgroundColor);
	document.body.style.backgroundColor = bodyBgdColor != palette.bodyBgdColor.light ? palette.bodyBgdColor.light : palette.bodyBgdColor.dark;
	let main = document.getElementById('main-container'),
		mainBgdColor = rgb2hex(window.getComputedStyle(main).backgroundColor),
		mainBrdColor = rgb2hex(window.getComputedStyle(main).borderBottomColor);
	main.style.backgroundColor = mainBgdColor != palette.mainBgdColor.light ? palette.mainBgdColor.light : palette.mainBgdColor.dark;
	main.style.borderColor = mainBrdColor != palette.mainBrdColor.light ? palette.mainBrdColor.light : palette.mainBrdColor.dark;
	let logo = document.getElementById('footer').children[0],
		logoSrc = logo.getAttribute('src');
	logo.setAttribute('src', logoSrc != palette.logoSrc.dark ? palette.logoSrc.dark : palette.logoSrc.light);
}

function rgb2hex(rgb) {
	if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}