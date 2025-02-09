
// Chapter 31 to 34 

// Q no 01  

// var date = new Date()
// document.write(date)

// Q no 02 

// var date = new Date();
// var months = ['january' , 'february' , 'march' , 'april' , 'may' , 'june' , 'july' , 'august' , 'september' , 'october' , 'november' , 'december'];

// document.write(months[date.getMonth()]);


// Q no 03 ////////////////////////////////

// var date = new Date();
// date = date.toString().slice(0,3);
// console.log(date);

// Q no 04  //////////////////////////////////

// var date = new Date().getDay()
//  ;
// if(date == 0 || 6){

// alert('Its Funday')
// }

// Q no 05 ////////////////////////////////////////

// var date = new Date().getDate();

// if(date <= 15 ){
//     alert('First Fifteen Days of month')
// }else{
//     alert('Last Days Of month')
// }


// Q no 06 ////////////////////////////

// var currentDate = new Date();

// var date = currentDate.getTime();

// var minute = Math.floor(date / (1000  * 60) );

// document.write(`Minutes since 1970 is : ${minute} <br> Mili-seconds since 1970 is : ${date} `)   

// Q no 07 
// var date = new Date();
// var hours = date.getHours();
// if (hours < 12) {
//     alert("it's AM")
// }
// else {
//     alert("it's PM")
// }



// Q no 08 
// var date = new Date("December 31, 2020");
// document.write(date);

//                            Question: 09

// var ramadan = new Date("March 23, 2023");
// var date = new Date();
// var milliSecondsPassed = date - ramadan;
// var passed = Math.floor(milliSecondsPassed / (1000 * 60 * 60 * 24));
// document.write( passed + " Days have passed since 1st Ramadan");


// //                            Question: 10

// var date = new Date("december 5 2015");
// var todayDate = new Date();
// var referenceMilliSec = todayDate - date;
// var referenceSeconds = referenceMilliSec / 1000;
// document.write("On reference date " + date + "<br>");
// document.write(referenceSeconds + " seconds had passed since beginning of 2015");


// //                             Quesstion: 11
    
// var currentDate1 = new Date();
// currentDate.setHours(currentDate1.getHours() - 1);
// document.write(new Date() + "<br>" + currentDate1);

//                              Question: 12

// const currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert(new Date() + "\n100 years back it was " + currentDate);


// //                              Question: 13

// const age = parseInt(prompt("Please enter your age:"));
// const currentYear = new Date().getFullYear(); 
// const birth = currentYear - age;
// document.write("Your age is: " + age + "<br>");
// document.write("Your birth year is: " + birth);


//                              Question: 14

// const name1 = prompt("Enter customer name :");
// const theMonth = prompt("Enter current month :");
// const units = parseFloat(prompt("Enter number of units :"));
// const chargesPerUnits = parseFloat(prompt("Enter charges per unit :"));
// const latePaymentSurchargeRate = 0.1;
// const netPayable = (numberOfUnits * chargesPerUnits).toFixed(2);
// const lateSurcharge = (netAmountPayable * latePaymentSurchargeRate).toFixed(2);
// const grossAmount = (parseFloat(netAmountPayable) + parseFloat(lateSurcharge)).toFixed(2);
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: " + name1 + "<br>");
// document.write("Current Month: " + theMonth + "<br>");
// document.write("Number of Units: " + units.toFixed(2) + "<br>");
// document.write("Charges per Unit: " + chargesPerUnits.toFixed(2) + "<br><br>" );
// document.write("Net Amount Payable (within Due Date): " + netPayable + "<br>");
// document.write("Late Payment Surcharge: " + lateSurcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");