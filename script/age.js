let birthday = '2001-12-06';

window.addEventListener('load', () => {
    document.getElementById('age').innerHTML = calculateAge(birthday);
})

function calculateAge(birthday) {
    let today = new Date(),
        year = today.getFullYear(),
	yearMs = ((year % 400 === 0 || year % 100 !== 0 && year % 4 === 0) ? 366 : 365) * 24 * 60 * 60 * 1000;
    return Math.trunc((today - new Date(birthday)) / yearMs);
}
