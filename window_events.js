let intervalId = null;
        
window.onload = function (event) {
    console.log("Program rozpoczął swoje działanie");
    intervalId = setInterval(function() {
        console.log(innerHeight, innerWidth);
    }, 1000);
}

window.onfocus = function (event) {
    console.log("Jest focus");
}

window.onblur = function (event) {
    clearInterval(intervalId);
};