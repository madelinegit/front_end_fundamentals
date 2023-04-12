function highPass(arr, cutoff) {
    var filteredArr = [];
    console.log(highPass(0[0,1,3,6])); //there are two nums, call from within 0 like L10ch1
    return filteredArr;
}
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]

// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     // your code here
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for (filteredArr=(0[0,1,3,6])); //or for
//     return [filteredArr];
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]



function highPass(arr,cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        console.log(arr[i])
            if (arr[i] > cutoff) {
                filteredArr.push(arr[i])
            }
        }
    return filteredArr
}


var result = highPass ([6,8,3,10,-2,5,9], 5); 
    console.log(result)
