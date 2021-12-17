

function opennav() {
    document.getElementById("mysidenav").style.width = "280px";
    document.getElementById("main").style.width = "100%";
    document.getElementById("main").style.marginLeft = "300px";
    document.getElementById("nav").style.display = "none"


}


function cloes() {
    document.getElementById("mysidenav").style.width = "-280px";

    document.getElementById("main").style.width = " -280px";


}



function btn1(){
    var x = document.getElementById("more")
    if(x.style.display ="none"){
x.style.display ="block";

    }else{
        x.style.display ="block"
    }
    var y = document.getElementById("btn");
    y.style.display="none"
}



function btn2() {
    var x = document.getElementById("more1")
    if (x.style.display = "none") {
        x.style.display = "block";

    } else {
        x.style.display = "block"
    }
    var y = document.getElementById("btn1");
    y.style.display = "none"
}







