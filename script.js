const btnPrimary = document.getElementById('btnprimary');
const titleName = document.getElementById('titlename');

function getRandomColor () {
    return '#' + Math.floor(Math.random() * 16777216).toString(16). padStart(6, '0');
}
function getRandomColor2 () {
    return '#' + Math.floor(Math.random() * 16777216).toString(16). padStart(6, '0');
}

btnPrimary.addEventListener('click', function () {
    const randomColor = getRandomColor();
    const randomColor2 = getRandomColor2();
    document.body.style.backgroundColor = randomColor;
    titleName.style.color = randomColor2;
    btnPrimary.style.backgroundColor = randomColor2;
});



