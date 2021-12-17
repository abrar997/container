
///


// document.getElementById("demo").innerHTML=prompt("how old are you?");

//syntax of object
// var infor = {
//     name: "abrar",
//     types: "petrochemical engineering",
//     country: "iraq"

// }

// document.getElementById("all").innerHTML=infor.country


//syntax of array

// var animal=["ship","ox","fox","snake"];
// document.getElementById("demo").innerHTML=animal[3]


// syntax of if and else 
// var date=new Date().getMonth;
// var typess;
// if(date>4){
//     typess="summe"

// }
// else{
//     typess="winter"
// }

// document.getElementsByClassName("tamo").innerHTML = typess

//if and  else


// var x = 14;
// var y = 12;
// var z;
// if (x < 12) {
//     z = x + y

// } else if(x>23)
// {
//     z = x - y
// }
// else {
//     z = 0
// }

// document.getElementById("all").innerHTML = alert(z)


// console.log(4+7);
// window.alert("hello java scripts")

// var salary=22;
// salary ++;

// document.getElementsById("demo").innerHTML=salary;



function myFunc() {
    var x = document.getElementById("click");

    if (x.innerHTML === "HTML") {

        x.innerHTML = "hello world we wait yoy"

    } else {
        x.innerHTML = "HTML"
    }


};

//img when you click on it be full screen

var y = document.getElementById("btn");

function fullImg() {
    if (y.webkitRequestFullScreen) {
        y.webkitRequestFullScreen()

    }

}

//switch case which it's  so funny track 

// var anime = prompt("what is your favourite anime?")

// switch (anime){
//     case "Attack On titan ":
//     alert("its killer,bloder evaluation anime")
// break;
// case "kimetsu":
//     alert("part of life some one want to protect his sister and her name is  nezoko")

// break;

//  default :
//  alert("you can wach what you want")

// }



// var age= document.getElementById("animewatch").innerHTML=prompt("how old are you?")

// if (age >19){

// document.write( "<a href=1.html></a>")



// }else{
//     age.innerHTML = alert("welcome in our web have fun and enjoy in your time")

// }


// var x=12;
// for(var i=0;i<10;i++){
// document.write(i+ "<br>")

// }



// document.getElementById("animewatch").addEventListener("click",function(){

//     document.getElementById("animewatch").innerHTML="gelloworld";

//     document.getElementById("animewatch").style.backgroundColor = "yellow";

// })

document.getElementById("animewatch").addEventListener("mouseover", function () {
    document.getElementById("animewatch").innerHTML += "Moused over!<br>"

})

// document.getElementById("animewatch").addEventListener("mouseout", function () {
//     document.getElementById("animewatch").innerHTML += "mouse out!<br>"

// })

// console.log(document.URL);
// console.log(document.title);
// console.log(document.links[2]);
// console.log(document.forms);
// console.log(document.doctype);
// console.log(document.domain);
// console.log(document.body);
// console.log(document.all);



//1))

var x = document.getElementById("demo");
document.getElementById("demo").innerHTML = "hello my lover";
console.log(x)



//2))
// var x = document.getElementsByClassName("list");

// document.getElementsByClassName("list").innerHTML="hello my lover";
// console.log(x)
// // console.log(x[2]);
// //ypu can declaration by class name and use for loop for it
// for(var i=0;i<x.length;i++){

//     x[i].style.color="red"
// }



//3))tag name


var z = document.getElementsByTagName("h3");
console.log(x);
for (i = 0; i < z.length; i++) {

    z[i].style.backgroundColor = "teal"
    z[i].style.color = "white"


}


// 4)) query selector

// document.querySelector(".list").style.backgroundColor="blue";


//5)) query srlsector All

var pp = document.querySelectorAll(".list");
for (i = 0; i < pp.length; i++) {
    pp[i].style.backgroundColor = "lightblue"
    pp[i].style.color = "teal"
    pp[1].style.backgroundColor = "orange"

}

//different between innerHTML & innerText &textContent

var hhh = document.getElementById("me");
console.log(hhh.innerHTML);
console.log(hhh.innerText);
console.log(hhh.textContent);


document.getElementById("differ").innerHTML = "<a href='1.html'>hello dearly</a>";//it is great we solve first problem in our web of anime when web ask about age  then go to the a perfect web page for this age
document.getElementById("differzz").textContent = "<h2>hello dearly</h2>";




//use different events
var mme = document.getElementById("mezzzz")
var mmme = document.getElementById("mezzzz").className;// to know class name of  this id حتى اوصل للكلاس بعدؤين تفد لمن اسوي كلاس جديد واخل بالمكان الاريدة وادخل الاريدو
console.log(mme)
console.log(mmme)


var mmme = document.getElementById("mezzzz").classList;
console.log(mmme)

var mmme = document.getElementById("me").classList.add("class1");//اضغط  على inspect عدين elementراح الكى ضايف كلاس سب اللي اني كاتبتو 
console.log(mmme)

var zzzzzz = document.getElementById("zzzzz");
console.log(zzzzzz);

var zzzzazz = document.getElementById("zzzzz").classList.remove("clazz");//remove the name of class from element
console.log(zzzzazz)



//get aatribute and add attribute

var lisss = document.getElementsByClassName("list");
// console.log(lisss[0].getAttribute("id"))
console.log(lisss[1]);
console.log(lisss[1].setAttribute("id", "ddddddddd")) //add id called ddddddddd to the second <p> which has class=list by setAttribute by javascript


// console.log(lisss[3]);
// // console.log(lisss[3].setAttribute("class", "ssss"))
// console.log(lisss[3].setAttribute("src", "ssss"))


//get attribute to define any attribute

// setAttribute == createAttribute to creatte attribute

//create div (element) new div by java script

var myDiv = document.createElement("DIV"); //create element

document.body.appendChild(myDiv).setAttribute("class", "helloo"); //put element inside body bt apendChild and create class called helloo bt seAttribute
console.log(myDiv)
var mytext = document.createTextNode("hi dearly looooooooool");
myDiv.appendChild(mytext)

//put the last div that we create it by java and put it inside th e form
var forms = document.querySelector("form");
console.log(forms)

var h1 = document.querySelector("#zzzzzzAbrar");
console.log(h1)


forms.insertBefore(myDiv, h1); //great job every thing well done thanks god 



//new examle create new things and put it inside div

var divzz = document.querySelector(".elloworld");//declare father div                    1-
console.log(divzz)

var h4 = document.querySelector(".h444444444"); //declare h4 inside (original place) the dad div     2-

var h55555555 = document.createElement("h5"); //create h5 inside the document  (body)    3-

h55555555.setAttribute("class", "h555"); // create attribute inside h5                     4-
var textss = document.createTextNode("java is so funny"); //create text inside the body     5-

h55555555.appendChild(textss); //put the text inside h5 by append child                   6-

divzz.appendChild(h55555555); // put h5 inside my div in 1-


divzz.insertBefore(h55555555, h4) //put new h5  inside my div 





//family tree ------- 

// var xxxxx = document.getElementById("zzzzz"); //has no father so it well tke the body as a father

// console.log(xxxxx.parentElement)

//  console.log(xxxxx.parentNode.parentNode) //grandfather  will be html bcz no father div or form

// console.log(xxxxx.nextElementSibling) //the next element ally baado *

// console.log(xxxxx.nextSibling) //next space if there is not any space and exactly element will take the element

// console.log(xxxxx.previousElementSibling) //previous element

// console.log(xxxxx.previousSibling) //previous distance if there is not exactly previous element will take a text as prev (empty space ) 



// console.log(xxxxx.firstChild) //first space inside the dad div  if there is nothing the result = null

// console.log(xxxxx.firstElementChild) //first element inside the father div if there is nothing the result = null


// console.log(xxxxx.lastChild)  //last space inside the dad div if there is nothing the result = null

// console.log(xxxxx.lastElementChild) //last element inside the father div if there is nothing the result = null


var formmm=document.getElementById("formssss");
console.log(formmm.children) // all element inside father div




//addEventLitner        had to string one event as click,submit,print,....etc and one for function 

// var buttons = document.querySelector(".btn").addEventListener("click",function(){

// document.body.classList.toggle("color")

// })



// assigning for the over code is 

var buttons = document.querySelector(".btn").addEventListener("click", changeBackground ) //assign for the function code 


function changeBackground(){

document.body.classList.toggle("color")

}

var buttons = document.querySelector(".btn").addEventListener("mouseover", changeBackground) //apply action by only let the assign og mouse touch the button the action apply 


function changeBackground() {

    document.body.classList.toggle("color")

}



















