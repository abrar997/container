


function opennav() {
    document.getElementById("navbar").style.width = "260px";
    document.getElementById("allpage").style.marginLeft = "260px"
    document.getElementById("allpage").style.transition = "0.3s ease"
    document.getElementById("navbar222").style.height = "0px"; //cloes nav bar bt height=0

}

// function cloesicon(){
//     document.getElementById("navbar").style.width = "0px";


// }
// $('#open-menu').click(function() {
//   $("#mySidenav").css("width" , "250px");
//   $("#l_m").css({"marginLeft": "250px", "position" : "absolute", "width" : "100%"});
//   // $(this).attr('id','close-menu');
// });

// $('#close-menu').click(function() {
//   $("#mySidenav").css("width" , "0");
//   $("#l_m").css("marginLeft" , "0");
// });



// horizontal nav bar
function opennav1() {
    document.getElementById("navbar222").style.height = "60px"; //give navbar height 
    document.getElementById("allpage").style.marginTop = "80px"; //push body 80px
    // document.getElementById("navbar222").addEventListener("remove", opennav1()).style.width="0px"
    document.getElementById("navbar").style.width = "0px";

}

// function cloesicon1() {
//     document.getElementById("navbar222").style.height = "0px"; //cloes nav bar bt height=0

// }


// function navbarzzz(){
//     document.getElementById("navbar222").style.display="none"
// onkeyup=" navbarzzz()" put in html code 
// }


// dark mode with change icon
function darkmode() {
    document.body.classList.toggle("background"); //dark mode
    document.getElementById("dark").classList.toggle("fa-sun") //chage icon from home to sun
    // document.getElementsById("dark").classname="fas fa-lightbulb"
}





// // validation
function validationform() {

    var email = document.getElementById("emalis").value
    var tel = document.getElementById("tel").value
    var text = "";
    var password = document.getElementById("password").value
    var errormessage = document.getElementById("error")
    errormessage.style.background = "red";
    errormessage.style.color = "white";
    errormessage.style.fontSize = "22px";

    if (password.length > 8) { //condion to password work well
        text = "password  less than 8 number";
        errormessage.innerHTML = text;
        return false
    }

    else if (tel.length > 11) { //condtion to phone number work
        text = "phone less than 11 number";
        errormessage.innerHTML = text;
        return false
    }



    else {
        alert("welcome in our page ");
        return true; //to return the function work  without any error
        // document.querySelector(input[type=submit]).default;

    }


}



// change color by random
//just give rgb * any number and use random to choose any random color in the syntax bellow


function changecolor() {
    document.body.style.backgroundColor =
        'rgb( ' + Math.round(Math.random() * 40) +
        ' , ' + Math.round(Math.random() * 32)
        + ' , ' + Math.round(Math.random() * 38);
        + ' , ' + Math.round(Math.random() * 35);

        document.body.style.transition ="0.5s"


}


// function currentTime() {
//     var date = new Date(); /* creating object of Date class */
//     var hour = date.getHours();
//     var min = date.getMinutes();
//     var sec = date.getSeconds();
//     var midday = "AM";
//     midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
//     hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
//     hour = updateTime(hour);
//     min = updateTime(min);
//     sec = updateTime(sec);
//     document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
//     var t = setTimeout(currentTime, 1000); /* setting timer */
// }

// function updateTime(k) { /* appending 0 before time elements if less than 10 */
//     if (k < 10) {
//         return "0" + k;
//     }
//     else {
//         return k;
//     }
// }

// currentTime();



function currentTime() {
    var date = new Date();  // current time
    var hour = date.getHours(); //to definition hours
    var min = date.getMinutes();//to definition minutes
    var sec = date.getSeconds();//to definition seconds
    var midday = "AM"; 
    midday = (hour >= 12) ? "PM" : "AM"; //assigning of condition replace AM to PM when the time be more than 12 
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); //assigning of condition to create adigital clock with 12 hour system 
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec +" "+ midday; //the syntax of our clock
    var t = setTimeout(currentTime, 1000); //????
}

//to add 0 befor the number less than 10 

function updateTime(k) {
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    if (k < 10) {
        return "0" + k;

    } else {
        return k
    }

}


currentTime(); //calling the function 






// craete clock 


// // program to create a simple calculator using the if...else...if in JavaScript.  
// // take the operator from the user through prompt box in JavaScript.  
// const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');  
  
// // accept the number from the user through prompt box  
// const number1 = parseFloat(prompt ('Enter the first number: '));  
// const number2 = parseFloat(prompt ('Enter the second number: '));  
  
// let result; // declaration of the variable.  
  
// // use if, elseif and else keyword to define the calculator condition in JavaScript.  
// if (operator == '+') { // use + (addition) operator to add two numbers  
//     result = number1 + number2;  
// }  
// else if (operator == '-') { // use -  (subtraction) operator to subtract two numbers  
//     result = number1 - number2;  
// }  
// else if (operator == '*') { // use * (multiplication) operator to multiply two numbers  
//     result = number1 * number2;  
// }  
// else {  
//     result = number1 / number2; // use / (division) operator to divide two numbers  
// }  
  
// // display the result of the Calculator  
// window.alert(" Result is" + result);  


// document.getElementsByClassName("one");
// console.log("x{0}")

var x=7;
var y=9;
var z=x+y;
console.log(z);
console.log(typeof z);

var x= document.getElementsByClassName("one");
console.log(x[0]);



var array=["abrar","tamtam","aomma","ashash"];
console.log(array[0])


var text="";
for (i = 0; i < 10; i++) {
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;










