var calculation = ""
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
    var result = eval(calculation)
    var e = document.getElementById("display")
    console.log(e)
    e.innerHTML=result
}

