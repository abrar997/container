
//TASK11


//constructor object=contructor function 
// just 1_ put standard passive  poperties instead parameters  place 
//2_declare standard proper by this.(any name)
//3_use these declaration in objects created by (new XXXXX)   
//4_ put values for these declarations in new objects 
//5_use these properties as you want 
//6_access these proper which back to it's own objects by this syntax
// (name of object.name of declaration standard ) 
//7_ when you return any declaretion proper by this.property

function information(first,middle,last,age,college,work,from,languages){
this.firstName=first; //this.
this.miiddleName=middle;//this.
this.lastName=last;
this.ages=age;
this.college=college;
this.yourWork=work;
this.country=from;
this.languages=languages


}
// console.log(information); without() of function


//new object ceate by new XXX 

var abrar = new information ( "Abrar","Muthanna","Alrawi",23,"Chemical and Petrochemical Enginnering", "Front End Web Development", "Iraq","Arabic (nativ) , English (Good) and Turkish (basics)");

//add new property
abrar.live="Irbil _ IRAQ"; 

//use the standard declartion properties
document.querySelector("#name").innerHTML= "NAME : " + " " + abrar.firstName + " " + abrar.miiddleName  + " " +abrar.lastName + " , "

document.querySelector("#age").innerHTML = "AGE : " + " " + abrar.ages + " , ";

document.getElementById("college").innerHTML = "COLLEGE : " + " " + abrar.college + " , ";

document.getElementById("work").innerHTML = "WORK : " + " " + abrar.yourWork + " , ";

document.getElementById("from").innerHTML = "FROM : " + " " + abrar.country + " , ";

document.getElementById("languages").innerHTML = "LANGUAGES : " + " " + abrar.languages + " , " ;

document.getElementById("lives").innerHTML = "LIVE : " + " " + abrar.live + " . ";


































