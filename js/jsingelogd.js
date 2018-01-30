/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
 console.log('Hallo');


var button = document.querySelector('nav a:nth-child(3) > img');
var filterForm = document.querySelector('header nav:nth-of-type(2) ul');


var filterClass = function () {
    filterForm.classList.toggle('active');
    //document.getElementById("filterButton").innerHTML = "Sluiten";
};


button.addEventListener('click', filterClass);
