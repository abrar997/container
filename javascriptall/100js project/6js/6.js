var pictures=[
"contBcg-0",
"contBcg-1",
"contBcg-2",
"contBcg-3",
"contBcg-4"

]


var buttons=document.querySelectorAll("button");
var images = document.getElementById("imagea");
var counter=0;


buttons.forEach((button => {
  
   button.addEventListener("click",function(){
       if (button.classList.contains("btn-left")){

counter--;
if(counter<0){
counter=pictures.length-1
}

       }

   }) 


}));