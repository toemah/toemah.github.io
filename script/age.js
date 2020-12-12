let birthday = '2001-12-06';

window.addEventListener('load', () => {
    document.getElementById('age').innerHTML = calculateYears(birthday);
})

// function written by skruffl (@skruffl or https://gitlab.com/Skruffl)
function calculateYears(date) {
    let now = new Date(),
	bday = new Date(date),
	yearsPassed = now.getFullYear() - bday.getFullYear();
    bday.setFullYear(now.getFullYear());
    if (bday.getTime() > now.getTime()) {
        yearsPassed--;
    }
    return yearsPassed;
}
