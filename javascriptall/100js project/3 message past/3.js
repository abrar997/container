
// var input = document.getElementById("message").value

// if (input === "") { alert("what are you doing now ") }

// if (input.length>30) {alert("ohhhhhhhavsfjhssssssssss") }





// (function () {
//     //Select the input element
//     const form = document.querySelector('#message-form')
//     //Set up Submit Button
//     form.addEventListener('submit', function (e) {
//         // prevent the form's default submission action
//         e.preventDefault()
//         //Get user's input from from
//         const message = document.querySelector('#message')
//         const feedback = document.querySelector('.feedback')
//         const messageContent = document.querySelector('.message-content')

//         if (message.value === '') {
//             feedback.classList.add('show')
//             setTimeout(function () {
//                 feedback.classList.remove('show')
//             }, 2000)
//         } else {
//             //Change message content and clear the message input
//             messageContent.textContent = message.value
//             message.value = ''
//         }
//     })
// })()


// var form =document.querySelector(".message-form");
// var input = document.querySelector("#message").value;
// var errormessage = document.querySelector("#erorr");
// var textss="";

// form.addEventListener("submit",functionsss)

// function functionsss(e){


// if(input.length<12){
// errormessage="plaese fall this message";
// errormessage.innerHTML=textss;
// return false



// }else{

//     return true
// }

// }

// var form = document.getElementById("message-form"),
//     input = document.getElementById("message").value,
//     errormessage = document.getElementById("erorr"),
//     text = "",

// function validate(e) {
//     e.preventDefault()

//     if (input.length < 10) {
//         errormessage = alert("plase fall this txt more then 11 ")
//         errormessage.innerHTML = text;


//     } else {

//         errormessage=alert("welcome dearly")

//     }



// }

// validate()


// var input = document.getElementById("message").value
// var form = document.querySelector(".message-forms")
// var body = document.getElementById("main")
// var submit = document.getElementById("submitBtn")
// // if (input === "") { alert("what are you doing now ") }
// var amin=document.getElementById("main")
// var divzz= document.createElement("div");

// divzz.setAttribute("class","hallo");
// body.appendChild(divzz)

// var text=divzz.value=""

// form.addEventListener("submit",formmmmmm)
// function formmmmmm(){
// if(input.length<3){
//   text.textContent="please fall this input"
//   return false
// }
// }
// console.log(document.body)




(function () {

    var form = document.querySelector('#message-form')
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        var input = document.querySelector("#message")
        var feedback = document.getElementById(".feedback")
        var messageError = document.querySelector(".message-content")

        if (input.value === '') {
            feedback.classList.add("show")
            setTimeout(function () {

                feedback.classList.remove("show")
            }, 2000)
        }
        else { messageError.textContent = input.value }


    })


}
)()




















