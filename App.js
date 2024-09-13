// console.log("Hello World");

// for (var test = 0; test < 10; test++) {
//     console.log("Running Loops")
// }

// for (var table = 1; table <= 10; table++) {
//     console.log("2" + " x " + table + " = " + table * 2)
// }

var output = document.getElementById("output")
var input = document.getElementById("Table_print")
var tableError = document.getElementById("tableError")

function prinTable() {
    tableError.innerHTML = "";
    output.innerHTML = "<h1>Your Printed Table Here!</h1>"
    for (var table = 1; table <= 10; table++) {
        // console.log("2" + " x " + table + " = " + table * 2)   ///console testing
        output.innerHTML += `${input.value} x  ${table} =  ${table * +input.value} <br />`
    }
    // if (input.value >= 1) {
    // } else {
    //     tableError.innerHTML = "Warning: Please enter a number to generate its multiplication table. Without a valid input, the table cannot be displayed."
    // }
}
