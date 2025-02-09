// ==============Question1: Write a program that take two numbers & add them in a new variable. Show the result in your browser.  //////////////////////

// var num1 = 3;
// var num2 = 5;
// document.write(`Sum of 3 and 5 is ${num1 + num2}</br>`);
// console.log(`Sum of 3 and 5 is ${num1 + num2}</br>`);
// ==============Question2: Repeat task1 for subtraction, multiplication, division & modulus./////////////////////////////////
// Substraction
// document.write(`Subtraction of 3 and 5 is ${num1 - num2}</br>`);
// console.log(`Subtraction of 3 and 5 is ${num1 - num2}</br>`);
// Multiplication
// document.write(`Multiplication of 3 and 5 is ${num1 * num2}</br>`);
// console.log(`Multiplication of 3 and 5 is ${num1 * num2}</br>`);
// Division
// document.write(`Division of 3 and 5 is ${num1 / num2}</br>`);
// console.log(`Division of 3 and 5 is ${num1 / num2}</br>`);
// Mudulus
// document.write(`Modulus of 3 and 5 is ${num1 % num2}`);
// console.log(`Modulus of 3 and 5 is ${num1 % num2}`);

// ============Question3: Do the following using JS Mathematic Expressions ///////////////
// a. Declare a variable.
// var value;

// b. Show the value of the variable in your browser like “Value after variable declaration is: ??”.
// document.write(`Value after variable declaration is: ${value}<br>`);

// c. Initialize the variable with some number.
// value = 5;

// d. Show the value of the variable in your browser like “Initial value: 5”.
// document.write(`Initial value: ${value}<br>`);

// e. Increment the variable.
// value++;

// f. Show the value of the variable in your browser like “Value after increment is: 6”.
// document.write(`Value after increment is: ${value }<br>`);

// g. Add 7 to the variable.
// value += 7;

// h. Show the value of the variable in your browser like “Value after addition is: 13”.
// document.write(`Value after addition is: ${value}<br>`);

// i. Decrement the variable.
// value--;

// j. Show the value of the variable in your browser like “Value after decrement is: 12”.
// document.write(`Value after decrement is: ${value}<br>`);

// k. Show the remainder after dividing the variable’s value by 3.
// var remainder = value % 3;

// l. Output: “The remainder is : 0”.
// document.write(`The remainder is: ${remainder}<br>`);

// ==============Question4: Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:
// var oneTicketPrize = 600;
// var costOfTicket = 5;
// document.write(`Total cost to buy 5 tickets to a movie is ${oneTicketPrize * costOfTicket}PKR`);
// console.log(`Total cost to buy 5 tickets to a movie is ${oneTicketPrize * costOfTicket}PKR`);

// ==============Question5: Write a script to display multiplication table of any number in your browser. E.g.
// var table = prompt("Write a number to print table.");
// document.write(`Table of ${table}<br>`);
// document.write(`${table} x 1 = ${table*1}<br>`);
// document.write(`${table} x 2 = ${table*2}<br>`);
// document.write(`${table} x 3 = ${table*3}<br>`);
// document.write(`${table} x 4 = ${table*4}<br>`);
// document.write(`${table} x 5 = ${table*5}<br>`);
// document.write(`${table} x 6 = ${table*6}<br>`);
// document.write(`${table} x 7 = ${table*7}<br>`);
// document.write(`${table} x 8 = ${table*8}<br>`);
// document.write(`${table} x 9 = ${table*9}<br>`);
// document.write(`${table} x 10 = ${table*10}<br>`);

// ==============Question6: The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// var cT = 25;
// var fT = 70;
// document.write(`${cT}C is ${(cT*9/5)+32}F  <br>`);
// document.write(`${fT}F is ${(fT-32)*5/9}F`);

// =============Question7: Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// Price of item 1 
// var priceItem1 = 650;

// Ordered quantity of item 1
// var quantiyiItem1 = 3;

// Price of item 2
// var priceItem2 = 100;

// Ordered quantity of item 2
// var quantiyiItem2 = 7;

// Shipping charges 
// var shippingCharges = 100;

// Total cost
// var totalCost = (priceItem1 * quantiyiItem1) + (priceItem2 * quantiyiItem2) + shippingCharges;

// recipt in browser
// document.write('<h1>Shopping cart</h1><br>');
// document.write(`Price of item 1 is ${priceItem1}<br>`);
// document.write(`Quantity of item 1 is ${quantiyiItem1}<br>`);
// document.write(`Price of item 2 is ${priceItem2}<br>`);
// document.write(`Quantity of item 2 is ${quantiyiItem2}<br>`);
// document.write(`Shipping charges ${shippingCharges}<br><br>`);
// document.write(`Total cost of your order is ${totalCost}<br>`);

// ================Question8:Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// Total marks
// var totalMarks = 980;

// Marks obtained
// var marksObtained = 804;

// percentage
// var percentage = (marksObtained / totalMarks) * 100;
// console.log(percentage);

// Marks Sheet in browser
// document.write(`<h1>Marks Sheet</h1> <br>`);
// document.write(`Total marks: ${totalMarks} <br>`);
// document.write(`Marks obtained: ${marksObtained} <br>`);
// document.write(`Percentage ${percentage}% <br>`);

// ================Question9: Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// Exchange rates
// var usdToPkr = 104.80;  // 1 US Dollar = 104.80 Pakistani Rupee
// var suadiriyalToPkr = 28; // 1 Saudi Riyal = 28 Pakistani Rupee

// Amounts in USD and Saudiriyals
// var usdAmount = 10; // 10 US dollars
// var saudiriyalsAmount = 25; // 25 Saudi Riyals

// calculate tha total in pakistan Rupee
// var totalPkrAmount = (usdAmount * usdToPkr) + (saudiriyalsAmount * suadiriyalToPkr);
// console.log(totalPkrAmount);

// Display currency in browser
// document.write(`<h1>Currency in PKR</h1> <br>`);
// document.write(`Total Currency in PKR: ${totalPkrAmount}`);

// ================Question10: Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// var number = 10;

// Add 5 -  Multiply by 10 -  Divide the result by 2 - Perform all calculations in a single expression 
// var total = ((number + 5) * 10) / 2;
// console.log(total);

// ================Question11: The Age Calculator: Forgot how old someone is? Calculate it!

//  Store the current year in a variable. 
// var currentYear = 2024;

// Store their birth year in a variable.
// var birthYear = 2009;

// Calculate their 2 possible ages based on the stored values.
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;

// output
// console.log(age2);

// current year in prompt
// var currentYear = prompt(`Current Year`);
// birth year in prompt
// var birthYear = prompt(`Your Birth Year`);

// Display age calculator in browser
// document.write(`<h1>Age Calculator</h1> <br>`);
// document.write(`Current Year: ${currentYear}<br>`);
// document.write(`Birth Year: ${birthYear}<br>`);
// document.write(`Your Age is: ${age1} and ${age2}`);

// =================Question12: The Geometrizer: Calculate properties of a circle
// a. Store a radius into a variable
// var radius = 20;

// Constants
// var pi = 3.142;

// b. Calculate the circumference based on the radius
// var circumference = 2 * pi * radius;

// Calculate the area based on the radius
// var area = pi * radius * radius;

// Output the results
// document.write(`<h1>The Geometrizerr</h1> <br>`);
// document.write(`Radius of a circle: ${radius}<br>`);
// document.write(`The circumference is: ${circumference}<br>`);
// document.write(`The area is: ${area}`);

// =================Question13: The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more
// Store your favorite snack into a variable 
// var favSnack = "Chocolate chip";

// Store your current age into a variable.
// var currentAge = 15;

//  Store a maximum age into a variable.
// var maxAge = 65;

// Store an estimated amount per day (as a number).
// var amountSnacksPerDay = 3;

// Calculate how many would you eat total for the rest of your life.
// var yearsRemain = maxAge - currentAge;
// var total = yearsRemain * amountSnacksPerDay;

// output in browser
// document.write(`<h1>The Lifetime Supply Calculator</h1> <br>`);
// document.write(`Favourite Snack: ${favSnack}<br>`);
// document.write(`Current age: ${currentAge}<br>`);
// document.write(`Estimated Maximum Age: ${maxAge}<br>`);
// document.write(`Amount of snacks per day: ${amountSnacksPerDay}<br>`);
// document.write(`You will need ${total} ${favSnack} to last you until the ripe old age of ${maxAge}<br>`);