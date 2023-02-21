console.log("javascript")
let joinbtn = document.querySelector(".join-btn")
function join() {
    joinbtn.remove() 
}
function searching() {
    alert('You are searching for...')
}
var count=0
var likeCount=document.getElementById("likeCount")
function liked() {
    count++
    console.log(count)
    likeCount.innerText=count
}
var count2=0
var likeCount2=document.getElementById("likeCount2")
function liked2() {
    count2++
    console.log(count2)
    likeCount2.innerText=count2
}
var count3=0
var likeCount3=document.getElementById("likeCount3")
function liked3() {
    count3++
    console.log(count3)
    likeCount3.innerText=count3
}




// function searching() {
//     alert('You are seraching for' .document.queryselector(".searchcontent"))
// }
// var buscar=document.getElementByClass(".searchcontent")
// function.searching() {
//     alert('You are searching for...')
//     .searchcontent
// }
// var buscar=getElementByClass(".searchcontent")