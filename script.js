var calculation = ""
var result = ""
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
    result = eval(calculation)
    clearCalculation()
    var e = document.getElementById("display")
    console.log(e)
    e.innerHTML=result
}

function calculationTakeGive() {
    addToCalculation(result)
}

function calculationTake() {
    result
    clearCalculation(result)  
}

function calculationGive() {
    addToCalculation(result)
}
