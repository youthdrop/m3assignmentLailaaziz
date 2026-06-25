let num1 = parseInt(prompt("Enter the first number"))
let num2 = parseInt(prompt("Enter the second number"))
// this is an if, else if, else conditional statement 
if (num1 > num2) {
    alert(num1 + " is the larger number.") // professor said we dont need window.alert
} else if (num2 > num1) {
    alert(num2 + " is the larger number.")  //alert is sub object of windows 
} else {
    alert("Both numbers are equal.")
}

