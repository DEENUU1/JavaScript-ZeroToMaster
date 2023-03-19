function changeArr(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i];
        const result = callback(v);
        console.log(result);
    };
}


console.log(changeArr([1,2,3,4,5,6], function (num) {
    return num * 2;
} ));
