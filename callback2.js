function filterArr(arr, callback) {
    for (let i = 0; i < arr.length; i++ ) {
        const el = arr[i];
        const flag = callback(el);
        if (flag) console.log(el);
    }
}

const nameCheck = function(name) {
    if (name.length > 3) {
        return true;
    } else {
        return false;
    }
}

console.log(filterArr(["Ola", "Kasia", "Daniel", "Ania"], nameCheck))
console.log(filterArr([10,20,30,40,50], function (num) {
    if (num < 35) return true;
}))