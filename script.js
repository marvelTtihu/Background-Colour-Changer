const btnPrimary = document.getElementById('btnprimary');
const colorName = document.getElementById('colorname')

function getRandomColor () {
    return '#' + Math.floor(Math.random() * 16777216).toString(16). padStart(6, '0');
}
btnPrimary.addEventListener('click', function () {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    colorName.textContent = "Color: " + randomColor;
});



