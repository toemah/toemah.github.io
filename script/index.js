let sTitle = 'this is literally just a custom homepage for my browser',
    links = ['https://www.twitter.com/',
        'https://www.youtube.com/',
        'https://www.protonmail.com/',
        'https://www.discord.com/app',
        'https://www.twitch.tv/'
    ],
    icons = ['Twitter_Logo_WhiteOnImage.png',
        'yt_icon_mono_dark.png',
        'protonmail-sign-white.png',
        'Discord-Logo-White.png',
        'TwitchGlitchBlackOps.png'
    ],
    root = './media/',
    cLink = document.getElementsByClassName('link'),
    cIcon = document.getElementsByClassName('icon');

window.addEventListener('load', () => {
    scroll(sTitle + " ");
    let btnLeft = document.getElementById("left"),
        btnRight = document.getElementById('right');
    btnLeft.addEventListener('click', () => update(-1));
    btnLeft.addEventListener('dblclick', () => spin(-1));
    btnRight.addEventListener('click', () => update(1));
    btnRight.addEventListener('dblclick', () => spin(1));
});

// i spent a good hour looking for a solution online
// until i remembered my good friend caltrop wrote his own
// kudos to him: @Caltrop256 - github.com/CaltropUWU
function scroll(text) {
    document.title = text;
    setTimeout(() => {
        scroll(text.substr(1) + text.substr(0, 1));
    }, 200);
}

function getIndex(arr, n) {
    return n >= arr.length ? 0 : n < 0 ? arr.length - 1 : n;
}

function update(n) {
    Array.prototype.forEach.call(cLink, e => {
        e.href = links[getIndex(links, links.indexOf(e.href) - n)];
    });
    Array.prototype.forEach.call(cIcon, e => {
        e.src = root + icons[getIndex(icons, icons.indexOf(e.src.split('/')[e.src.split('/').length - 1]) - n)];
    });
}

function spin(n) {
    let start = new Date(),
        loop = setInterval(() => {
            update(n);
            if (new Date() - start >= 3000) {
                cIcon.item(Math.round((cIcon.length - 1) / 2)).style.backgroundColor = 'pink';
                setTimeout(() => {
                    window.location.href = cLink.item(Math.round((cLink.length - 1) / 2));
                }, 1000);
                clearInterval(loop);
            };
        }, 200 + (Math.random() - 0.5) * 200);
}