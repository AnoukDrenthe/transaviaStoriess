/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/


console.log('Hallo')

//aside filter
var button = document.querySelector('form > button');
var filterForm = document.querySelector('aside form > fieldset');


var filterClass = function () {
    filterForm.classList.toggle('active');
    //document.getElementById("filterButton").innerHTML = "Sluiten";
};


button.addEventListener('click', filterClass);

//Header form: Inloggen
var buttonInlog = document.querySelector('nav a:nth-child(3) > img');
var filterInlog = document.querySelector('header form');


var filterClassI = function () {
    filterInlog.classList.toggle('active');
}

buttonInlog.addEventListener('click', filterClassI);

//Header form: forgot password
var form2 = document.querySelector('header form:nth-of-type(2)');
var buttonP = document.querySelector('.forgotPass');


var toggleForm2 = function () {
    form2.classList.toggle('active');
};


buttonP.addEventListener('click', toggleForm2);
buttonP.addEventListener('click', filterClassI);



//Header form: Back button forgot password
var form2 = document.querySelector('header form:nth-of-type(2)');
var buttonP = document.querySelector('.backW');

var toggleForm2 = function () {
form2.classList.toggle('active');
};

buttonP.addEventListener('click', toggleForm2);
buttonP.addEventListener('click', filterClassI);


//Header form: new account
var form3 = document.querySelector('header form:nth-of-type(3)');
var buttonN = document.querySelector('.newAccount');


var toggleForm3 = function () {
    form3.classList.toggle('active');
};


buttonN.addEventListener('click', toggleForm3);
buttonN.addEventListener('click', filterClassI);


//Header form: Back button new account
var form3 = document.querySelector('header form:nth-of-type(3)');
var buttonR = document.querySelector('.backR');


var toggleForm3 = function () {
    form3.classList.toggle('active');
};

buttonR.addEventListener('click', toggleForm3);
buttonR.addEventListener('click', filterClassI);



//Button
var safed = document.querySelector('article > div > p');
function switchButton(img){
    if (img.classList.contains("on")){
            img.src = img.src.split(".gif").join(".png");
            img.classList.remove("on");
            safed.classList.remove('active');
        } else {
            img.src = img.src.split(".png").join(".gif");
            img.classList.add("on");
            safed.classList.add('active');
        }
}
var allButtons = document.querySelectorAll("footer button");
allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        switchButton(button.childNodes[0]);
    });
});



//Button verhalen
function switchButtonV (img){
    if (img.classList.contains("on")){
            img.src = img.src.split(".gif").join(".png");
            img.classList.remove("on");
        } else {
            img.src = img.src.split(".png").join(".gif");
            img.classList.add("on");
        }
}
var allButtonsS = document.querySelectorAll("body > div button");
allButtonsS.forEach(function(button){
    button.addEventListener("click", function(){
        switchButtonV(button.childNodes[0]);
    });
});
