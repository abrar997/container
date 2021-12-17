

var API_KEY = 'api_key=05c29ad5481c70be52281708e669671e'; //apikey

var BASE_URL = 'https://api.themoviedb.org/3'; //link for the main web 

var API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc' + API_KEY  //path of movies 

// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&sort_by=popularity.desc&api_key=05c29ad5481c70be52281708e669671e

// https://api.themoviedb.org/3/movie/550?/search/movie?&api_key=05c29ad5481c70be52281708e669671e

var IMG_URL = 'https://image.tmdb.org/t/p/w500';  //link o image from IMDB web 
var searchUrl = BASE_URL + '/search/movie?' + API_KEY;  //for search also the middle link from IMDB 


var form = document.getElementById("form");  //declare form 
var main = document.getElementById("main");  //declare rhe contain of my web y using id
var serach = document.getElementById("search");  //declare input type  search


//request to data and print it in my web by console.log  

function getMovies(API_URL ='https://api.themoviedb.org/3/movie/550?/search/movie?&api_key=05c29ad5481c70be52281708e669671e'){
fetch('https://api.themoviedb.org/3/movie/550?/search/movie?&api_key=05c29ad5481c70be52281708e669671e')
.then( links=>links.json())
.then(data=>{
console.log(data.results)


showMovies(data.results)
})
}

// // get films from IMDB to my Web 

// function showMovies(movies){
// main.innerHTML="";
// movies.forEach(movie=>{
// const {poster_path,title,vote_average,overview} = movie;


// var movieEl=document.createElement("div");
//     movieEl.classList.add("movie");
//     movieEl.innerHTML=`
//         <img src="${IMG_URL+poster_path}"
//         alt="${title}"
// />
// <div class="movie_info">
// <h3>${title}</h3>
// <span class="${getClassRate(vote_average)}">${vote_average}</span>
// </div>
// <div class="overview">
// <h3>overview:</h3>
// </div>
// `
// main.appendChild(movieEl)
//     console.log(main)
// })
    
// }
// getMovies(API_URL);

// form.addEventListener('submit',(e) => {
// e.preveDefault();
// var searchterm=search.value;
// if(searchterm){
//     getMovies(searchUrl+"&query="+searchterm);

// }else{
//     getMovies(API_URL)
// }

// })
