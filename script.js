//---------------Globos de Estudios Universitarios------------------------

var firstYearGlobe = document.getElementById('first-year-globe');
var secondYearGlobe = document.getElementById('second-year-globe');
var thirdYearGlobe = document.getElementById('third-year-globe');

//-----------------------------------------------------------------------

toggleHiddenFunction = (year) => {

    yearMap = {
        'first': () => document.getElementById('visible-first-year'),
        'second': () => document.getElementById('visible-second-year'),
        'third': () => document.getElementById('visible-third-year')
    }

    var materiasGlobe = yearMap[year]();
    materiasGlobe.style.visibility == 'visible' ? materiasGlobe.style.visibility = 'hidden' : materiasGlobe.style.visibility = 'visible';
    materiasGlobe.style.display == 'block' ? materiasGlobe.style.display = 'none' : materiasGlobe.style.display = 'block';
}

firstYearGlobe.addEventListener('click', () => {
    toggleHiddenFunction('first');
});

secondYearGlobe.addEventListener('click', () => {
    toggleHiddenFunction('second');
});

thirdYearGlobe.addEventListener('click', () => {
    toggleHiddenFunction('third');
    var otherGlobe = document.getElementById('visible-third-year-rest');
    otherGlobe.style.visibility == 'visible' ? otherGlobe.style.visibility = 'hidden' : otherGlobe.style.visibility = 'visible';
    otherGlobe.style.display == 'block' ? otherGlobe.style.display = 'none' : otherGlobe.style.display = 'block';
});