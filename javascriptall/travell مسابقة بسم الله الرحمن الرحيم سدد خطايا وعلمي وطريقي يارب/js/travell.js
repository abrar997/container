fetch("https://hotels4.p.rapidapi.com/locations/search?query=new%20york&locale=en_US", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "057d442e26mshadaa6b709da5c53p1e87b3jsn5bd69f978ac0"
    }
})
    .then(response => {
        console.log(response);
    })

    .catch(err => {
        console.error(err);
    });

var submits = document.getElementById("hotel");
submits.addEventListener("submt",function(){


})













// // change navbar when sroll down 

// window.onscroll = function () { scrollFunction() };

// // by ad and remove class
// function scrollFunction() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         document.getElementById("menu").classList.add("active");

//     } else {
//         document.getElementById("menu").classList.remove("active");

//     }
// }










function tab(evt, service) {
    var i;

    // to hidden form لمن اضغط على بتون ويطلع الفورم ينحذف الفورم السابق بدون تكرار 
    buttononeflights = document.querySelector(".formcontents1")

    tabcontent = document.getElementsByClassName("formcontents");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //to replace class name =formcontents in active 
    var buttons = document.querySelectorAll(".button-clcik");

    for (i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(" active", "")
    }

    // لتفعيل كلاس active

    // to appeare form
    buttononeflights.style.display = "none"
    document.getElementById(service).style.display = "block";
    evt.currentTarget.className += " active";


}






// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    // loop: true,
    // loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// swiper for Destination gallery

var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    // loop: true,
    // loopFillGroupWithBlank: true,


    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    }
});


// 1-amadeus
// [ Base URL: test.api.amadeus.com/v2]


// api link 

// api - key for https://developer.hotelbeds.com/dashboard/myapikeys

// 2
// hotel api keys 
// 74d01b196b67a6347d39beb4f39a3dc6
// secret=e8711a8cbc

// activates api key b74bc3e950f9a45c40c4d6e67b8d1a22 
//activata secret c2e19f38b3

// transfers api key 
// 6c7f34d9d95b3c2d7e9dc295223465b9
// secret cf30b822b5

// fetch('https://api.test.hotelbeds.com/hotel-api/1.0/status&74d01b196b67a6347d39beb4f39a3dc6&e8711a8cbc')
// .then(res=>res.json())
// .then(data=>{
// console.log(data);

// })

// 3


// fetch('http://api.travelpayouts.com/v1/flight_search_results?uuid=%search_id%&057d442e26mshadaa6b709da5c53p1e87b3jsn5bd69f978ac0')
// // fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/monthly?origin=LED&destination=%20MOW&currency=RUB&length=3", {
// //     "method": "GET",
// //     "headers": {
// //         "x-access-token": "undefined",
// //         "x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
// //         "x-rapidapi-key": "057d442e26mshadaa6b709da5c53p1e87b3jsn5bd69f978ac0"
// //     }
// // })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });























// accordation 

// var buttons = document.getElementsByClassName("accordion");

// for(var i=0;i<buttons.length;i++){
// buttons[i].addEventListner("click",acoordationFun)
// this.classList.toggle("active")

// function acoordationFun(){
//     var text = this.nextElementSibling;

// if(text.style.display==="block"){
//     text.style.display="none"
// }else{
//     text.style.display="block"
// }

// }
// }



//    autoplay: {
// delay: 3000,
//     disableOnInteraction: false





// https://docs.impala.travel/docs/booking-api/branches/v1.003/docs/getting-started.md
// api  key from impala 
// sandb_rrq2X8lrpouFcE78wWy5ji5cbD8XoRaFSO6S3bxW

