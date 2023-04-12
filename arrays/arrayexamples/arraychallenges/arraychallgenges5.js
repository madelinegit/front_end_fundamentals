function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    while(fibArr.length<n) {
        var x = fibArr[fibArr.length-1];
        var y = fibArr[fibArr.length-2];
        fibArr.push(x+y);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// fn=fn-1 + fn-2,  n>2