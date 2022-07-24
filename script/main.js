const birthday = "2001-12-06";
const langButton = document.querySelector("#lang-button");
const themeButton = document.querySelector("#theme-button");
const age = document.querySelector("#age");
const head = document.querySelector("#head");
const section = document.querySelectorAll(".section");
const eduLogo = document.querySelectorAll(".edu-logo");
const control = document.querySelectorAll(".control");

const theme = {
    light: {
        body: "body-light",
        head: "head-light",
        section: "section-light",
        eduLogo: "edu-logo-light",
        control: "control-light"
    },
    dark: {
        body: "body-dark",
        head: "head-dark",
        section: "section-dark",
        eduLogo: "edu-logo-dark",
        control: "control-dark"
    }
}

let selectedTheme = theme.light;
let language = navigator.language.includes("fr") ? "fr" : "en";

const calculateYears = function (date) {
    let now = new Date();
    let bday = new Date(date);
    let yearsPassed = now.getFullYear() - bday.getFullYear();
    bday.setFullYear(now.getFullYear());
    if (bday.getTime() > now.getTime()) {
        yearsPassed--;
    }
    return yearsPassed;
};

window.addEventListener("load", () => {
    themeButton.addEventListener("click", switchTheme);
    langButton.addEventListener("click", switchLang);
    lang[language].forEach(e => {
        document.querySelector(e.selector).innerHTML = e.html;
    });
});

const switchTheme = function() {
    if(selectedTheme == theme.light) {
        selectedTheme = theme.dark;
        document.body.classList.replace(theme.light.body, selectedTheme.body);
        head.classList.replace(theme.light.head, selectedTheme.head);
        section.forEach(e => e.classList.replace(theme.light.section, selectedTheme.section));
        eduLogo.forEach(e => e.classList.replace(theme.light.eduLogo, selectedTheme.eduLogo));
        control.forEach(e => e.classList.replace(theme.light.control, selectedTheme.control));
        themeButton.classList.replace("bi-lightbulb-fill", "bi-lightbulb-off-fill");
    } else {
        selectedTheme = theme.light;
        document.body.classList.replace(theme.dark.body, selectedTheme.body);
        head.classList.replace(theme.dark.head, selectedTheme.head);
        section.forEach(e => e.classList.replace(theme.dark.section, selectedTheme.section));
        eduLogo.forEach(e => e.classList.replace(theme.dark.eduLogo, selectedTheme.eduLogo));
        control.forEach(e => e.classList.replace(theme.dark.control, selectedTheme.control));
        themeButton.classList.replace("bi-lightbulb-off-fill", "bi-lightbulb-fill");
    }
}

const switchLang = function() {
    langButton.innerText = language.toUpperCase();
    language = language == "fr" ? "en" : "fr";
    lang[language].forEach(e => {
        document.querySelector(e.selector).innerHTML = e.html;
    })
}