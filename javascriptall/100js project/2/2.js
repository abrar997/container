
var button =document.querySelector("button");
var hexvalue=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
function clickhere(){
// document.body.style.backgroundColor=
// '#('+Math.round(Math.random()*22)+
// ','+Math.round(Math.random()*11)+
// ','+Math.round(Math.random()*32)
var hex='#';

    for (var i = 0; i < hexvalue.length;i++){
var index=Math.floor(Math.random()*hexvalue.length)

    hex += hexvalue[index]

    document.getElementById("demo").textContent=hex
    document.body.style.backgroundColor=hex
}


}
