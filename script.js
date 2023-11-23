function sum() {
    var num1 = Number(document.getElementById("First").value)
    var num2 = Number(document.getElementById("Second").value)
    var answer= num1 + num2
    document.getElementById("result").innerHTML = answer
}

function subtract() {
    var num1 = Number(document.getElementById("First").value)
    var num2 = Number(document.getElementById("Second").value)
    var answer= num1 - num2
    document.getElementById("result").innerHTML = answer
}

function multiply() {
    var num1 = Number(document.getElementById("First").value)
    var num2 = Number(document.getElementById("Second").value)
    var answer= num1 * num2
    document.getElementById("result").innerHTML = answer
}

function division() {
    var num1 = Number(document.getElementById("First").value)
    var num2 = Number(document.getElementById("Second").value)
    var answer= num1 / num2
    document.getElementById("result").innerHTML = answer
}