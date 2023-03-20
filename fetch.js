
fetch("https://swapi.dev/api/people/3/")
.then(function (response) {
        return response.json();
})
.then(processData);

function processData(data) {
    console.log(data.name);
    console.log(data.height);
    console.log(data.mass);
    console.log(data.eye_color);
}  