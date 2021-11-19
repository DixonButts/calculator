var calculation = ""
var result = ""
var memory = ""
function addToCalculation(key) {
    calculation = calculation + key
    console.log(calculation)
    var e = document.getElementById("display")
    console.log(e)
    e.innerHTML=calculation
}

function alertSum(a, b) {
    var i = a + b
    alert(i)
}

function clearCalculation() {
    calculation=""
    var e = document.getElementById("display")
    console.log(e)
    e.innerHTML=calculation
}

function solveCalculation() {
    try {
        result = eval(calculation)
        clearCalculation()
        var e = document.getElementById("display")
        console.log(e)
        e.innerHTML=result
    } catch (e) {
        var e = document.getElementById("display")
        console.log(e)
        e.innerHTML="error"
    }
    
}

function calculationTakeGive() {
    addToCalculation(result)
}

function calculationStore() {
    var e = document.getElementById("display")
    console.log(e)
    memory = e.innerHTML
    clearCalculation()  
}

function calculationRetrieve() {
    addToCalculation(memory)
}


