// function anime() {
//  var x = document.getElementById("animelist");
// if(x.style.display==="none"){
// x.style.display="block";

// }
// else{x.style.disply="none"}
// }

//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05c29ad5481c70be52281708e669671e


var api_key = "api_key=05c29ad5481c70be52281708e669671e"
var base_link = "https://api.themoviedb.org/3"
var api_url = base_link + " /discover/movie?sort_by=popularity.desc&" + api_key

var form = document.getElementById("form");
var main = document.getElementById("main");
var search = document.getElementById("search");



function getMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            showMovies(data.results)
        })
}
console.log(getMovies(url))

getMovies(api_url)
