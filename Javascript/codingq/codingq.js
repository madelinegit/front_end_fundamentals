// Write a function that will return how many even numbers
// exist inside a given array, but will return false if there
// are no even numbers. 

1--- we need to tell the computer what an even and an odd is 
//variable
//function
//for loop 


function evenNum(arr) {
    even = 0
    for( i=0; i < arr.length; i++ ){
        if( i % 2 == 0){
            pineapple += 1
        }
}
console.log(evenNum[ 12, 2, 5, 3, 6, 8, 7, 9, 17, 24 ])

function name_of_function() {        
        // code to be executed
    }
    
    function counter() {    
            for(var num = 0; num <= 5; num++){
                console.log(num);
            }
        }
// However, as it stands, our counter code is not being run. That is because we have yet to call it.  

function counter() {    
        for (var num = 0; num <= 5; num++) {        
            console.log(num);    
        }
    }
    counter();    // run the function
    counter();    // run the function again
    

function counter(startNum) {    //The function is expecting some PARAMETER in order to run
        for (var num = startNum ; num >= 0 ; num--) {        
            console.log(num);    
        }
    }
    counter(6);    // Passing in an ARGUMENT of 6, the console would display: 6, 5, 4, 3, 2, 1, 0
    counter(3);    // Passing in an ARGUMENT of 3, the console would display: 3, 2, 1, 0
    


// Suppose we wanted to have a function that, when given a number, created an array with values from 0 to that number:
    function createArray(num) {        
            var newArray = [];       
            for (var i = 0; i <= num; i++) {                
                newArray.push(i);        
            }
        }
        createArray(5);
        //The newArray only exists inside of the function.  Out here it no longer exists!
        
        function createArray(num) {        
                var newArray = [];        
                for (var i = 0; i <= num; i++) {                
                    newArray.push(i);        
                }        
                return newArray;        // added the return statement
            }
            var y = createArray(5);        // now y is the variable that is calling on createArray
            

// Linking to Scripts
function custom() {
    // we can include more code here if we want to
    console.log("this message is coming from script.js");
}
<script src="script.js"></script>
