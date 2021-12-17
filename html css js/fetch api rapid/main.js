
const MY_API_KEY = '057d442e26mshadaa6b709da5c53p1e87b3jsn5bd69f978ac0';
fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": MY_API_KEY
    }
})
    .then(response => response.json())
    .then(response => {
        console.log(response);

        document.getElementById('quote').innerHTML = response.content;
        document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
    })
    .catch(err => {
        console.log(err);
    });