// --------question no 1--------

function displayCurrentDateTime(){
    var today=new Date();
    return today;
}
document.write(displayCurrentDateTime());



// ------------question no 2----------------.

function greetUser(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    let greeting = "Hello, " + fullName + "!";
    return greeting;
}
document.write(greetUser("Jerry", "tom!</br>"));

// ------------- question no 3 ------------------

function addNumbers(b, d) {
    return b + d;
}
let number1 = parseFloat(prompt("Enter 1 number: "));
let number2 = parseFloat(prompt("Enter 2 number: "));
let result = addNumbers(number1, number2);
document.write("The sum is: " + result);

// --------- question no 4-------------

function calculator(){
    var num1 = +prompt("Enter the num 1");
    var operator = prompt("Enter the operator i.e +, -, *, /")
    var num2 = +prompt("Enter the num 2");

    if(operator === "+"){
      return  num1 +num2
    }else if(operator === "-"){
        return  num1 - num2
    }else if(operator === "*"){
        return  num1 * num2
    }else if(operator === "/"){
        if(num2 === 0){
            return "Error: Division by zero"
        }else{
            return  num1 / num2
        }
    }else{ 
        return "invalid operator"

    }

}
alert(calculator())

//  ------ .question no 5 --------

function square(num) {
    return num * num;
}
document.write(square(4));

// ----------- Question no 6------------.


function factorial() {
    var num = +prompt("please enter your number:")

    if (num < 0) {
        alert("Error: Factorial is not defined for negative numbers")
    } else {
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result *= i 
        }
        alert("The factorial of " + num + " is " + result)
    }
}

// -------------question no 7-------------------------

function counting(start, last) {
    for (var i = start; i <= last; i++) {
        document.write(i + " ");
    }
}
var start = +prompt("Enter your start number:");
var last = +prompt("Enter your last number:");
counting(start, last);

//---------------- Question no 8----------

function calculateHypotenuse() {
    function calculateSquare(x) {
        return x * x
    }
    var base = +prompt("Enter the base of a right angle triangle:")
    var perpendicular = +prompt("Enter the perpendicular of a right angle triangle:")

    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))

    alert("The hypoteneus of right angle triangle with base " + base + " and perpendicular " + perpendicular + " is " + hypotenuse)
}
calculateHypotenuse()

// -----------question 9 --------------


var height = +prompt("Enter height of rectangle: ");
var width = +prompt("Enter width of rectangle: ");
var calculate = Rectangle(width, height);
alert("Area of Rectangle: " + calculate);

// ------ question no 10--------

function Palindrome(str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]){
            return str+ " it is not a palindrome"
        }else{
              return str+ " yes is a palindrome"
        }
    }
}
console.log(Palindrome("hiii"))
console.log(Palindrome("hellooooo"))
console.log(Palindrome(prompt("hilo:")))

//------ questiion no 11------

function Case(str){
    var str=prompt("enter you like any lines:");
    var words=str.split(" ");
    var Case=" ";
    for(i=0;i<words.length;i++){
    Case +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+ " ";
    }
    return Case;
}
console.log(titleCase());

// question no 12 .

function find(str) {
    const words = str.split(' ');
    let Word = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > Word.length) {
        Word = words[i];
      }
    }
  
    return Word;
  }
  const inputStr1 = 'Web Development Tutorial';
const longestWord = find(inputStr1);
document.write(longestWord); 

// ---------- question no 13---------

function count(string, word){
         var count = 0;
        for(var i =0; i< string.length; i++){
             if(string[i].toLowerCase()===word.toLowerCase()){ 
                count++
        }
         }
    return count;
    }
    var string = prompt("Enter a string");
     var letr= prompt("Enter a letter");
    alert(count(string, letr))
     alert(count("hi", "jeeryyy"))

//------------ question no 14-------------------------

var r = +prompt("Enter Value");
function circumfarance(radius){
    var pi = Math.PI
    var circum = 2*pi*radius
    return "The circumfarance of circle is " +circum;
}
function area(radius){
    var area = Math.PI*Math.pow(radius,2)
    return "The area of circle is " + area.toFixed(2);
}
console.log(circumfarance(r))
console.log(area(r));

/////-------------------------------------------end------------------- my assigment-------------------------------