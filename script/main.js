window.addEventListener("load", () => {
    document.querySelector("#age").innerHTML = calculateYears("2001-12-06");
})

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