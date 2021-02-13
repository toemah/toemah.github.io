let icon = null,
	toggle = null,
	slides = null,
	slidesSrc = null,
	palette = {
		bodyBgdColor: {
			dark: '#151515',
			light: '#ededed'
		},
		mainBgdColor: {
			dark: '#1b1b1b',
			light: '#f8f8ff'
		},
		mainBrdColor: {
			dark: '#111111',
			light: '#d3d3d3'
		},
		sliderBtnBgdColor: {
			dark: '#1e1e1e',
			light: '#f1f1f1'
		},
		logoSrc: {
			dark: 'media/github_dark.png',
			light: 'media/github_light.png'
		}
	};

function rgb2hex(rgb) {
	if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
		return ("0" + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function switchTheme() {
	let bodyBgdColor = rgb2hex(window.getComputedStyle(document.body).backgroundColor);
	document.body.style.backgroundColor = bodyBgdColor != palette.bodyBgdColor.light ? palette.bodyBgdColor.light : palette.bodyBgdColor.dark;
	let main = document.getElementById('main-container'),
		mainBgdColor = rgb2hex(window.getComputedStyle(main).backgroundColor),
		mainBrdColor = rgb2hex(window.getComputedStyle(main).borderBottomColor);
	main.style.backgroundColor = mainBgdColor != palette.mainBgdColor.light ? palette.mainBgdColor.light : palette.mainBgdColor.dark;
	main.style.borderColor = mainBrdColor != palette.mainBrdColor.light ? palette.mainBrdColor.light : palette.mainBrdColor.dark;
	Array.from(document.getElementsByClassName('slider-button')).forEach(e => {
		e.style.backgroundColor = rgb2hex(window.getComputedStyle(e).backgroundColor) != palette.sliderBtnBgdColor.light ? palette.sliderBtnBgdColor.light : palette.sliderBtnBgdColor.dark;
	})
	let logo = document.getElementById('footer').children[0],
		logoSrc = logo.getAttribute('src');
	logo.setAttribute('src', logoSrc != palette.logoSrc.dark ? palette.logoSrc.dark : palette.logoSrc.light);
}

function owofy(str) {
	let arr = str.split(''),
		owod = '',
		index = 0;
	arr.forEach(c => {
		key = c.toLowerCase();
		switch (key) {
			case 'l':
			case 'r':
				arr[index] = c === key ? 'w' : 'W';
				break;
			case 'o':
			case 'u':
				if (arr[index + 2] == key) {
					arr[index + 1] = Math.random() >= 0.5 ? 'w' : 'W';
				}
				break;
			case 'n':
				if (['a', 'e', 'i', 'o', 'u'].includes(arr[index + 1])) {
					arr[index] = c === key ? 'ny' : 'Ny';
				}
			default:
				break;
		}
		owod += arr[index];
		index++;
	})
	return owod;
}

function uwuModeActivated() {
	icon.setAttribute('src', 'media/artwork_by_ninjer.webp');
	icon.setAttribute('title', 'made by ninjer');
	icon.parentElement.href = "https://www.twitter.com/_ninjer"
	document.querySelector('link').setAttribute('href', 'media/faviconya.png')
	let p = document.getElementById('about').querySelector('p'),
		t = document.title;
	p.innerHTML = owofy(p.innerText);
	document.title = owofy(t);
}

function fullView() {
	if (document.body.lastChild.nodeName.toLowerCase() == 'img') return;
	let src = this.getAttribute('src'),
		img = document.createElement('img'),
		body = document.body;
	if (src.split('.')[1] != "png") {
		img.setAttribute('src', `${src.substr(0, src.indexOf('.'))}.png`);
	} else {
		img.setAttribute('src', src);
	}
	img.setAttribute('style', 'height: 77%; box-shadow: 0 0 31px 12px black; position: absolute; z-index: 1;');
	img.setAttribute('title', 'click me to close!');
	img.addEventListener('click', () => body.removeChild(body.children.item(body.children.length - 1)));
	body.appendChild(img);
}

function prevSlide() {
	updateSlideshow(-1);
}

function nextSlide() {
	updateSlideshow(1);
}

function updateSlideshow(n) {
	slides.forEach(e => {
		let i = slidesSrc.indexOf(e.getAttribute('src'))+n,
			index = i >= slidesSrc.length ? 0 : i < 0 ? slidesSrc.length-1 : i;
		e.setAttribute('src', slidesSrc[index]);
	});
}

window.addEventListener('load', () => {
	icon = document.getElementById('icon');
	toggle = document.getElementById('toggle');
	toggle.addEventListener('click', switchTheme);
	slides = Array.from(document.getElementById('slideshow').children);
	slidesSrc = [];
	slides.forEach(e => {
		if (slides.indexOf(e) != Math.floor(slides.length / 2)) {
			e.style.filter = `blur(${Math.abs(slides.indexOf(e) - (slides.length) / (slides.length / 2))}px)`;
		} else {
			e.addEventListener('click', fullView);
		}
		slidesSrc.push(e.getAttribute('src'));
	});
	document.getElementById('prev').addEventListener('click', prevSlide);
	document.getElementById('next').addEventListener('click', nextSlide);
	if (Math.random().toFixed(2) == 0.69) {
		uwuModeActivated();
	} else {
		icon.setAttribute('src', 'media/me.webp');
	}
})