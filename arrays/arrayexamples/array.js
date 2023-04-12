var arr = ["maddy", 29, true, ["4124 W 56th St"] ] 
console.log(arr[3][1]);

arr.push(2168357202)
console.log(arr);

arr.pop()
console.log(arr);

var dough ="deep dish"
var meat =["mushrooms", "sausage"]
var cheese ="goat"
var toppings=["onion", "pepper", "basil"]

onePizza = {
    //Object --- Key : Valie
    "dough" : "deep dish",
    "meat" : ["mushrooms", "sausage"],
    "cheese" : "goat",
    "toppings" : ["onion", "pepper", "basil"]
}

console.log ("Cheese:" + onePizza.cheese);
console.log("Topping" + onePizza.toping[2]);


onePizza = {
    //Object --- Key : Valie
    "dough" : "deep dish",
    "meat" : ["mushrooms", "sausage"],
    "cheese" : "goat",
    "toppings" : ["onion", "pepper", "basil"],
    pizzaDetails: function(){
        console.log("Dough: " + this.dough);
        console.log("Meat:" + this.meat);
        console.log("Toppong" + this.topping[2]);
    }
}
onePizza.pizzaDetails()

var min = 0 
var max = 10 

var rand = Math.random() * (max - min) + min 
var subtraction = max - min 
console.log(subtraction);

console.log(rand)