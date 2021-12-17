let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function () {
    modal.style.display = "block"
}
closeBtn.onclick = function () {
    modal.style.display = "none"
}
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}
































// // // var z=document.getElementById("demo")
// // // var x=prompt("how old are you");

// // // if(x<10){
// // // document.getElementById("demo").innerHTML="hello world"

// // // }

// // // else{alert("there is aproblem")}

// // // var x=prompt("how old are ypu ")

// // // switch(x){
// // // case x>1:
// // // alert("you are smal");
// // // break;


// // // case x=1:
// // // document.getElementById("demo").innerHTML="your age"+x+" "+"is small";
// // // break;

// // // case x="":
// // //  alert("yoy have to write your age")
// // // break;
// // // // default:
// // // // document.getElementById("demo").innerHTML="ohhh so cool"

// // // }

// // // var i;
// // // for(i=20;i<25;i++){
// // // document.write(i + "<br>")

// // // }

  
// // var x=["leno","nokia","soma","charger","charlok"]

// // var y="hrlkgjtjjjjjjjj"
// // var z={
// // "name":"abrar"

// // }
// // var k=[2,7,8]

// // for(var i=0;i<x.length;i++){
// // var text=x[i]+text+"<br>"

// // }
// // // 
// // document.getElementById("demo").innerHTML=text


// // console.log(typeof i);




// // console.log(document.title);

// // console.log(document.all);




// // var one=document.getElementsByClassName("one");
// // for(var i=0; i<one.length ; i++){

// // one.style.color="red" //not work لان محددتي العنصر اللي تريدين تشتغلين عليه 

// // }
// document.addEventListener



// var one = document.getElementsByClassName("one");
// for (var i = 0; i < one.length; i++) {

//     one[3].style.border = "3px solid orange " //not work لان محددتي العنصر اللي تريدين تشتغلين عليه 
// one[i].style.color="green"
// }





// var button=document.querySelectorAll(".btn");
// var modal=document.querySelector(".modal");



// for (var i = 0; i < button.length; i++) {
//     function onclicka(){

// modal.style.display="block"    
// }


// }






