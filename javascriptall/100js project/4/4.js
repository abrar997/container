// (function () {
// var buttons = document.querySelectorAll(".counterBtn");
// var count=0;
//     buttons.forEach(function (button){
//  button.addEventListener('click',function(){
//      if (button.classList.contain("prevBtn")){
//          count --

//      } else if (button.classList.contains("nextBtn"))
//      { count++}
//      var h1h1h1h = document.querySelector("#counter")
//      h1h1h1h.textContent=count
//     })
    
// })

// })()


// (function () {
//     var buttons = document.querySelectorAll('.counterBtn')
//     var count = 0


//     //Add event listeners and functionailty to each button  
//     buttons.forEach(function (button) {
//         button.addEventListener('click', function () {
//             if (button.classList.contains('prevBtn')) {
//                 count--
//             } else if (button.classList.contains('nextBtn')) {
//                 count++
//             }

//             //Select the counter text
//             var counter = document.querySelector('#counter')
//             counter.textContent = count

//             //   if (count < 0 ){
//             //     counter.style.color = 'red'
//             //   } else if (count > 0){
//             //     counter.style.color = 'green'
//             //   } else {
//             //     counter.style.color = '#333333'
//             //   }     
//    })
//     })
// })()










// function click(){

//  var icon=document.querySelector(".fa")

//     icon.replace("fa-heart","fa-moon")


// }



// الفهم
// اريد ازيد الشي بنقرة احتاج onclick استبدلة 
//onclick على button
// for loop على البوتون محتاجة ++&-- حتى ازيد وانقص بنقرة مغ if الشرطية حتى اذا هيج سوي او اذا هيج سوي اكدر اسبدلة ب switch case
// 



function increaseValue(){
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}



function increaseValue(){

var increase= document.querySelector("#increase").value

if(increase.value=== "isNaN" )
{increase++}



}






























