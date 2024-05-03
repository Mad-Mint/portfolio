const prof = document.getElementById('professional-id');
const pers = document.getElementById('personal-id');
console.log(prof);

prof.addEventListener('click', displayProf);
pers.addEventListener('click', displayPers);

function displayProf(){
    let display = document.getElementById("displayProf");
    console.log('click');
    if (display.classList.contains("show-professional")){
        display.classList.remove("show-professional");
        display.classList.add("hide-professional");
    } else {
        display.classList.add("show-professional");
        display.classList.remove("hide-professional");
    }
}

function displayPers(){
    let display = document.getElementById("displayPers");
    console.log('click');
    if (display.classList.contains("show-personal")){
        display.classList.remove("show-personal");
        display.classList.add("hide-personal");
    } else {
        display.classList.add("show-personal");
        display.classList.remove("hide-personal");
    }
}

// Initialize map
var map = L.map('map').setView([40.8136, -96.7026], 13); // Lincoln, Nebraska coordinates

// Add tile layer (you can choose different tile providers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add click event handler
map.on('click', function(e) {
    var clickedLatLng = e.latlng;
    // Send clickedLatLng to your server for prediction
    // Use AJAX or Fetch API to send data to the server and handle the response
    // Display prediction result on the map
    console.log(clickedLatLng)
});
