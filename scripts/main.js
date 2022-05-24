// ##### LOADING CONTENT #####
let elements = '';
Array.prototype.forEach.call(offers, e => {

    elements += '<div class="block">';
    elements += '<div class="image" style="background-image: url(\'./img/' + e.image + '\')"></div>';
    elements += '<div class="text"><h3>' + e.name + '</h3>' + e.description;
    elements += '<div class="additional" > ' + e.additional + '</ ></div>';
    if(showPrices) elements += '<div class="price" > ' + e.price + '$ osoba</ ></div>';
    elements += '</div></div>';
})

document.querySelector('section.offer .container').innerHTML = elements;



// ##### MENU #####
(function () {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop + e.parentElement.offsetTop - 80;
    });


    console.log(sections);

    window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
            }
        }
    };
})();


// ##### ANIMATIONS #####
window.sr = ScrollReveal();
sr.reveal('h1, h2', {
    reset: true,
    delay: 300,
    distance: '20px'
});
sr.reveal('.block', {
    reset: false,
    delay: 300,
    distance: '20px'
});
sr.reveal('img', {
    reset: true,
    delay: 300,
    distance: '20px',
    origin: 'right'
});
sr.reveal('p', {
    reset: true,
    delay: 300,
    distance: '20px',
    origin: 'left'
});


