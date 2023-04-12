// function reverse(arr) {
    
//     return arr;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);


// var result = reverse(["a", "b", "c", "d", "e"]); {
//     reverse[0]=reverse[4];
//     reverse[1]=reverse[3];
//     return arr; 
// }
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]
  // for (let e of arr) {
        // arr.push();
        // arr.pop();

function reverse (arr) {
    var result = [];
    for (var i=0; i<arr.length/2; i++)   {
        let temp = arr[arr.length-1-i]
        arr[arr.length-1-i] =arr[i]
        arr[i]=temp
    }
    return arr
}

var result = reverse(["a", "b", "c", "d", "e"]); 
console.log(result);