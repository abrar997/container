// first way to write fetch syntax

// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(function(infor){
// return infor.json();
// }
// )
// .then (function(first){
// console.log(first);
//     document.getElementById("demoooo").innerHTML=first[3].title;
//     document.getElementById("de2de2").innerHTML=first[3].url + " " +first[6].url;
//     document.getElementById("image").src = first[3].thumbnailUrl;
//     document.getElementById("imagess").src = first[5].thumbnailUrl;
// })











// second way to write fetch syntax

// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(infor => infor.json())
//     .then(first =>console.log(first)) // diplay data by this 



// async & sync is promise reject and resolve حاجة تنح حاجة لاء  ملخص البرومس 
// async with fetch and await 






var api_key = '05c29ad5481c70be52281708e669671e';

var base_url = 'https://api.themoviedb.org/3';

var api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key;

https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=05c29ad5481c70be52281708e669671e

var img_url = 'https://image.tmdb.org/t/p/w500';
var searchurl = base_url + 'search/movie?' + api_key;
https://api.themoviedb.org/3/search/movie?&api_key=05c29ad5481c70be52281708e669671e

var main = document.getElementById("main");
var search = document.getElementById("search");
var form = document.getElementById("form");


function getMovies(url) {
    fetch(url)
        .then(link => link.json())
        .then(data => {
            console.log(data.results);


        })
}
function showmovies(movies) {
    main.innerHTML = "";
    movies.forEach(movies => {
        var { poster_pathm, title, vote_average, overview } = movie;
        var movieEl = document.createElement("div");
        movieEl.classList.ade("movie");
        movieEl.innerHTML =
<img src="${img_url + poster_Path}"
alt='${title}'
    />
<div class="movie_info">
    <h3>${title}</h3>
    <Span class="${getClassRate{
        vote_average}}">  
        </Span>
        </div>

        main.appendChild(movieEl)

    });

}


getMovies(api_url)



































