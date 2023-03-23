
let lat;
let long;
const apiKey = '<<API KEY HERE >>';

function startApp() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                lat = position.coords.latitude;
                long = position.coords.longitude;
                console.log(lat, long);
                getWeatherData();
            }
        );
    }
}

function getWeatherData() {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
    fetch(url).then(function(response){
        response.json().then(function(data){
            updateWeatherData(data);
        });
    })
}


function updateWeatherData(data) {
    const temp = data.main.temp;
    const airHumadity = data.main.humidity;
    const pressure = data.main.pressure;
    const cloudsPercentage = data.clouds.all;
    const city = data.name;

    document.getElementById('temp').innerHTML = temp;
    document.getElementById('humidity').innerHTML = airHumadity;
    document.getElementById('pressure').innerHTML = pressure;
    document.getElementById('cloudsPerc').innerHTML = cloudsPercentage;

    let imgUrl = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    document.getElementById("currentWeatherImg").setAttribute("src", imgUrl);

    const locationLink = document.getElementById("locationLink");
    locationLink.innerHTML = city;
    locationLink.href = `https://openstreetmap.org/#map=9/${lat}/${long}`;

}