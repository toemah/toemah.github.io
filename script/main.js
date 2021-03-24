let footer = null;

window.addEventListener("load", () => {
    footer = document.getElementById("#footer");
    document.querySelectorAll(".child").forEach(e => {
        let dom = e;
        let bool = e.id == "theme";
        dom.addEventListener("click", bool ? changeTheme : () => loadHTML(dom), { once: !bool });
    });
})

let rgb2hex = (rgb) => {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

let changeTheme = () => {
    let clr = rgb2hex(window.getComputedStyle(document.body).backgroundColor),
        gitImg = footer.querySelector("img"),
        themeImg = document.getElementById("theme").querySelector("img");
    document.body.style.backgroundColor = rgb2hex(window.getComputedStyle(document.body).color);
    document.body.style.color = clr;
    gitImg.setAttribute("src", "media/" + (gitImg.src.match(/white/i) ? "GitHub_Logo.png" : "GitHub_Logo_White.png"));
    themeImg.setAttribute("src", "media/" + (themeImg.src.match(/moon/i) ? "sun.png" : "moon.png"))
}

let fileExists = (str) => {
    let http = new XMLHttpRequest();
    http.open("HEAD", `${str}.html`, false);
    http.send();
    return http.status != 404;
}

let loadHTML = (e) => {
    if (fileExists(e.id)) {
        if (e.id == "about") {
            let setAge = setInterval(() => {
                let age = document.querySelector("#age") || null;
                if (age) {
                    age.innerHTML = calculateYears("2001-12-06");
                    clearInterval(setAge);
                }
            }, 1);
        }
        e.innerHTML = `<iframe src="${e.id}.html"onload="this.insertAdjacentHTML('afterend', this.contentDocument.body.innerHTML); this.remove()"></iframe>`;
        e.style.backgroundColor = "transparent";
    }
}

let calculateYears = (date) => {
    let now = new Date(),
        bday = new Date(date),
        yearsPassed = now.getFullYear() - bday.getFullYear();
    bday.setFullYear(now.getFullYear());
    if (bday.getTime() > now.getTime()) {
        yearsPassed--;
    }
    return yearsPassed;
}