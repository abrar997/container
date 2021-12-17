

// window.addEventListener('DOMContentLoaded', event => {

//     // Activate Bootstrap scrollspy on the main nav element
//     const sideNav = document.body.querySelector('#sideNav');
//     if (sideNav) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#sideNav',
//             offset: 74,
//         });
//     };

//     // Collapse responsive navbar when toggler is visible
//     const navbarToggler = document.body.querySelector('.navbar-toggler');
//     const responsiveNavItems = [].slice.call(
//         document.querySelectorAll('#navbarResponsive .nav-link')
//     );
//     responsiveNavItems.map(function (responsiveNavItem) {
//         responsiveNavItem.addEventListener('click', () => {
//             if (window.getComputedStyle(navbarToggler).display !== 'none') {
//                 navbarToggler.click();
//             }
//         });
//     });

// });

// -----------------------------------------------------------------------



function icon() {

    var x = document.getElementById("info");
    if (x.style.display === "none") {
        x.style.display = "block";

    } else {
        x.style.display = "none";

    }

}


function myFunction(x) {
    x.classList.toggle("fa-moon");
    document.body.classList.toggle("color");

}




function about() {
    var x = document.getElementById("infor")
    if (x.style.display === "none") {
        x.style.display = "block"
    }

    else {
        x.style.display = "none"
    }
}


function result() {
    var a = 1;
    var b = 2;
    var c = 3;
    var d = 4;
    var e = 5;
    var f = 6;
    var g = 7;
    var h = 8;
    var z = a + b + c + d + e + f + g + h / 8;
    document.getElementById("math").innerHTML = z;

}



function result1() {
    var a = 1009;
    var b = 33;
    a *= b;
    document.getElementById("math1").innerHTML = a;

}



function result2() {
    var a = 1009;
    var b = 33;
    a -= b;
    document.getElementById("math2").innerHTML = a;

}



function result3() {
    var a = 1009;
    var b = 33;
    a += b;
    document.getElementById("math3").innerHTML = a;

}


function result4() {
    var a = 1009;
    var b = 33;
    a %= b;
    document.getElementById("math4").innerHTML = a;

}


















