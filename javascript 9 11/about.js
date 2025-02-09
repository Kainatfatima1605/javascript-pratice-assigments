//    question no 1
 
var cityname=prompt("Where do you live?");
var correctAns="Karachi";
if(cityname==correctAns){
    alert("Welcome to city of lights");
}

//    question no 2

var gender=prompt("gender");
var correctAns="Male";
if(gender==correctAns){
    alert("Good Morning Sir");
}
else{
    var gender=prompt("gender");
    var correctAns="Female";
    alert("Good Morning Ma’am");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


var red=prompt("enter colour of traffic signal:1");
var yellow=prompt("enter colour of traffic signal:2");
var green=prompt("enter colour of traffic signal:3");

document.write("<table boder 2px>" + "<tr>"+ 
    "<th>"+"Signal Colour"+"</th>"+
    "<th>"+"Message"+"</th>"+"</tr>"+
    "<tr>"+"<td>"+red+"</td>"+"<td>"+"Must Stop"+"</td>"+"</tr>"+
    "<tr>"+"<td>"+yellow+"</td>"+"<td>"+"Ready to move"+"</td>"+"</tr>"+
    "<tr>"+"<td>"+green+"</td>"+"<td>"+"Move now" + "</td>"+"</tr>"+"</table>"
    
);


//    question 4

let fuel=+prompt("fuel in car");
let correctAns="0.25";
if(fuel < correctAns){
  alert("Please refill the fuel in your car");
}
else{
    alert("You have enough fuel");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
 var a = 82;
if (++a === 83){
alert("given condition for variable a is true");
}

 var b = 12;
if (b++ === 13){
alert("given condition for variable b is true");
}

 var c = 13;
if (c++ === 14){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
    alert("car is smaller than cat");
}

//    question no 6

var Marks1=+prompt("Enter Marks obtained:1");
var Marks2=+prompt("Enter Marks obtained:2");
var Marks3=+prompt("Enter Marks obtained:3");
var total=(Marks1+Marks2+Marks3);

var percentage=(total/300*100);
 

if(percentage>=80){
    document.write   ("Total marks: 300" + "</br>");
    document.write   ("Marks obtained:" + total + "</br>");
    document.write   ("Percentege: " + percentage + "</br>");
    document.write   ("Grade: A- one " + "</br>");
    document.write   ("Remarks : Excellent");

}
else if(percentage>=70){

    document.write  ("Total marks: 300" + "</br>");
    document.write   ( "Marks obtained:" + total + "</br>");
    document.write    ("Percentage:" + percentage + "</br>");
    document.write ("Grade: A" + "</br>");nt.write(

        "Total marks: 300" + "</br>" +
        "Marks obtained:" + total + "</br>"+
        "Percentage:" + percentage + "</br>"+
        "Grade: B" + "</br>"+
        "Remarks : You need to improve" 
    )
}
else if(percentage<60){
    
    document.write     ("Total marks: 300" + "</br>");
    document.write ("Marks obtained:" + total + "</br>");
    document.write   ("Percentage:" + percentage + "</br>");
    document.write  ("Grade: Fail" + "</br>");
    document.write  ("Remarks : Sorry" );
    
}

// /question no 7(a).

var secret=13;
var user=+prompt("Guess the secret number");

if(secret==user){
  alert("Bingo!Correct Answer");
}
// 7(b)
if(user==++secret){
    alert("Close enough to the correct answer")
}

//  questiion no 8
var multiple3=+prompt("Enter a number");
if(multiple3%3==0){
    document.write("Your Number is divisible by 3..."+"</br>");
}
else{
    document.write("Your Number is NOT divisible by 3... "+"</br>");
}
// question no 9.

var num=+prompt("Enter any number");
if(num%2==0){
    document.write("Number is even"+"</br>");
}
else{
    document.write("Number is odd" + "</br>");
}
   
//    question no 10
var temp=+prompt("Enter the temperature");
if(temp>40){
    document.write("“It is too hot outside.”"+"</br>");
}
else if(temp>30){
    document.write("“The Weather today is Normal.”"+"</br>");
}
else if(temp>20){
    document.write("“Today’s Weather is cool.”"+"</br>");
}
else if(temp>10){
    document.write("“OMG! Today’s weather is so Cool.”"+"</br>");
}


// question no 11

var  number1=+prompt("Enter the number 1");
var  number2=+prompt("Enter the number 2");
var operators=+prompt("Enter Operators: Either (+, -, *, /, %)");

if(operators="+"){
    document.write(number1+number1);
}

 if(operators= "-"){
    document.write(number1-number2);
}
 if(operators= "*"){
    document.write(number1*number2);
}
 if(operators= "/"){
    document.write(number1/number2);
}
 if(operators= "%"){
    document.write(number1%number2);
}





