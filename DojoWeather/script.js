function loading(element){
    alert("Loading Weather Report...");
}
var corF= document.querySelector('select').value
console.log(corF)

function changeScale(e){
    corF= e.value
    console.log(corF)
    var elements= document.querySelectorAll('.temp')
    for(var i=0; i<elements.length; i++){
        console.log(elements[i].innerHTML)
        var newTemp= pickTemp(elements[i].innerHTML, corF)
        console.log(newTemp)
        elements[i].innerHTML= Math.round(newTemp)
    }
}

function pickTemp(temp, select){
    if(select=="F"){    
        return temp * 9/5 + 32;
    }
    else if(select=="C"){
        return (temp - 32) * 5/9;
    }
    else{
        return null;
    }
}

function accept(){
    var row = document.querySelector('.row-3')
    console.log(row)
    row.remove()
}