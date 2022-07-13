const birthday = "2001-12-06";
const age = document.querySelector("#age");
const head = document.querySelector("#head");
const section = document.querySelectorAll(".section");

const theme = {
    light: {
        body: "body-light",
        head: "head-light",
        section: "section-light"
    },
    dark: {
        body: "body-dark",
        head: "head-dark",
        section: "section-dark"
    }
}

let selectedTheme = theme.light;

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
    age.innerText = `${calculateYears(birthday)}yo`;
});

const switchTheme = function() {
    if(selectedTheme == theme.light) {
        selectedTheme = theme.dark;
        document.body.classList.replace(theme.light.body, selectedTheme.body);
        head.classList.replace(theme.light.head, selectedTheme.head);
        section.forEach(e => e.classList.replace(theme.light.section, selectedTheme.section));
    } else {
        selectedTheme = theme.light;
        document.body.classList.replace(theme.dark.body, selectedTheme.body);
        head.classList.replace(theme.dark.head, selectedTheme.head);
        section.forEach(e => e.classList.replace(theme.dark.section, selectedTheme.section));
    }
}