const birthday = "2001-12-06";
const age = document.querySelector("#age");

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