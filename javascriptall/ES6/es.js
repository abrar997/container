// var buttons = document.querySelector("button")


// buttons.addEventListener('click',function(){

// document.body.style.backgroundColor="purple";
// document.getElementById("demo").innerHTML="hellohdjkhjjjjjjjdg"


// }) 










// // const x = 12;
// // console.log(x);
// // if(x>10){
// // document.body.style.backgroundColor="red"

// // }


// // function myFun(){
// // const g=22;
// // if(g<12){
// //    document.body.style.backgroundColor="green" 
// // }

// // }


// //1- declare

// // var x=10;
// // x=12;
// // console.log(x);

// // //1_ not declare
// //    const z=12;
// //    z=12.3;
// //  console.log(z);



// // reassign اكتب شي وارجع اغيرو
// //reassigned اعادة تعيين //function scope any where you write it is declare and work
// // var x;
// // x=14
// // console.log(x);


// // //not  reassigned  //block scope
// // // const z;
// // //  z=144;
// // // console.log(z);



// // // no declare no hoisted but reassigned in top of block
// // //reassigned
// // caName="noneoe"
// // let carNAme;
// // console.log(carName);

// // // redeclar


















// // var form=document.querySelector("form");
// // var text=document.querySelector("#text").value;
// // var submit=document.querySelector("input[type='submit']")
// // var errorss = document.querySelector(".list")

// // function Form(){

// // if(text=="" && text.length>10){

// // // var wrong="plaese check your info";
// // //     errorss.innerHTML = wrong;
    
// //     alert("plaese check your info")
// // return false


// // }

// // return false


// // }


// // // validation
// // function validationform() {

// //     // var email = document.getElementById("emalis").value
// //     var tel = document.getElementById("tel").value
// //     var text = "";
// //     var password = document.getElementById("password").value
// //     var errormessage = document.getElementById("error")
// //     errormessage.style.background = "red";
// //     errormessage.style.color = "white";
// //     errormessage.style.fontSize = "22px";

// //     if (password.length > 8) { //condion to password work well
// //         text = "password  less than 8 number";
// //         errormessage.innerHTML = text;
// //         return false
// //     }

// //     else if (tel.length > 11) { //condtion to phone number work
// //         text = "phone less than 11 number";
// //         errormessage.innerHTML = text;
// //         return false
// //     }



// //     else {
// //         alert("welcome in our page ");
// //         return true; //to return the function work  without any error
// //         // document.querySelector(input[type=submit]).default;

// //     }


// // }


(function(){ //self invoke
var servces=[{
    value:1,
    title:"great-20%"
    
},
{
    value:2,
    title:"good-10%"
},
{value:3,
title:"bad-2%"}

]

var validationinput=function(billAmount,numUsers,selectService){

   var isFeedback=false;
   var feedback=document.querySelector(".feedback") ;
   feedback.innerHTML="";

    if (billAmount === "" || billAmount<="0"){
feedback.classList.add('showItem','alert-danger');
feedback.innerHTML+=`<p>Bill amount cnn't be blank</p>`
isFeedback=true

    }

if(numUsers<="0"){
    feedback.classList.add('showItem', 'alert-danger');
    feedback.innerHTML+=`<p>Number of users must e greate tan zero</p>`;
    isFeedback=true
}

if(selectService==="0"){
    feedback.classList.add('showItem', 'alert-danger');
    feedback.innerHTML+=`<p>You must select a service</p>`
isFeedback=true
}


setTimeout(function(){
    feedback.classList.remove('showItem', 'alert-danger')
},10000);
return isFeedback
} //end vallidation 







})











































