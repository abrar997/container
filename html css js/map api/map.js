
// // api_key='AIzaSyB22c5OiFCbfcD9cHUqq8BBTsRdLVhr92A'
// api_key ='key=AIzaSyB22c5OiFCbfcD9cHUqq8BBTsRdLVhr92A'
// base_url ="https://maps.googleapis.com"
// api_url = base_url + '/maps/api/js?' + api_key +'&callback=initMap'

// // // https://maps.googleapis.com/maps/api/js?key=AIzaSyB22c5OiFCbfcD9cHUqq8BBTsRdLVhr92A&callback=initMap

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}
