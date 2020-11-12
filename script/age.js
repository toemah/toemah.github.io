let birthday = '2001-12-06';

window.addEventListener('load', () => {
    document.getElementById('age').innerHTML = calculateAge(birthday);
})

function calculateAge(birthday) {
    return Math.trunc((new Date() - new Date(birthday)) / (365 * 24 * 60 * 60 * 1000));
}