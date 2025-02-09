             // CHAPTER 14TO 16  
              // #ARRAYS

            //  qustion no 1.
var studentName = [];

//           qustion no  2.
var myFirstName = new Array();

//          question no    3.
var StudentName = ["kainat","ali","fatima" , "fahim" ,"abdul hadi","kiran faiz","erum"];

//           qustion no    4.
var studentInNumber= [1,2,3,4,5,6,7,8,9,10];

//          question no   5.
var booleanArray = [True , False];

//         question no    6.
var mixedArray = ["kainat" , "fatima", 5  ,56 , False];

//         qustion no 7.
document.write("<h1>" + "Qualifications:" + "</h1>")

var degree = ["1) SSC", "2) HSC", "3) BCS" , "4) BS" , "5) BCOM" , "6) MS" , "7) M.Phil" , "8) PHD"]

document.write(degree[0]) 
document.write("<br>")
document.write(degree[1]) 
document.write("<br>")
document.write(degree[2]) 
document.write("<br>")
document.write(degree[3]) 
document.write("<br>")
document.write(degree[4]) 
document.write("<br>")
document.write(degree[5]) 
document.write("<br>")
document.write(degree[6]) 
document.write("<br>")
document.write(degree[7]) 

// console.log(degree) 

//          qustion no 8.
let nameStudents = ["kainat" , "hina" , "hira"];
let score = [320 , 230 , 480];

// let totalMarks = 500;

document.write("Score of " + nameStudents[0] + " is " + score[0] + "." + " Percentage: " + score[0] / totalMarks * 100 + "%" + "<br>")
document.write("Score of " + nameStudents[1] + " is " + score[1] + "." + " Percentage: " + score[1] / totalMarks * 100 + "%" + "<br>")
document.write("Score of " + nameStudents[2] + " is " + score[2] + "." + " Percentage: " + score[2] / totalMarks * 100 + "%")

//     question  no  9.
let colorName = [" pink " , " yellow " , " Blue " , " green "]

document.write(colorName + "</br>");


// a. 
let beg = prompt("What Color would you add in the begining?");
colorName.unshift(beg);
document.write(colorName + "</br>")

// b. 
let end = prompt("What Color would you add in the end?");
colorName.push(end);
document.write(colorName  + "</br>")

// c.
colorName.unshift("pink" , "green");
document.write(colorName + "</br>")

// d.
colorName.shift();
document.write(colorName  + "</br>")

// e. 
colorName.pop();
document.write(colorName  + "</br>")

// f. 
var newColorAdd = +prompt("What Color would you add in the desired index/position?");
var colorNameIs = prompt("Which color you want add?");
colorName.splice(newColorAdd,0 , "<br>" + colorNameIs)
document.write(colorName  + "</br>");

// g. 
var deleteIndex = +prompt("Which color index you wanna delete & how many color you want delete?");
var deleteNumber =prompt ("what you wanna remove the same number of color of that position?");
colorName.splice(deleteIndex,deleteNumber);
document.write(colorName + "</br>")

//    qustion no 10.
var studentscores = [320 , 230 , 480 , 120] 
document.write("Scores of Students : " + studentscores + "<br>");
studentscores.sort()
document.write("Order Scores of Students : " + studentscores);

//   qustion no 11.
var cityName = ["Karachi" , "quetta" , "lahore" , "islamabad" , "Peshawar"]
document.write("Cities list:" + "<br>");
document.write(cityName + "<br>");

document.write("Selected cities list:" + "<br>");
selectCity = cityName.slice(2,4);
document.write(selectCity);

//     question no 12.
let line = ["This" , "is" , "my" , "cat"];
document.write("Array:" + "<br>" + line + "<br>");

afterJoining = line.join(" ")
document.write("Array:" + "<br>" + afterJoining);


// question no 13.
var Devices = ["keyboard" , "mouse" , "printer" ,"monitor"]
var shift;

document.write("Devices:" + "<br>");
document.write(Devices + "<br>" + "<br>");
document.write("Out:" + "<br>");
shift = Devices.shift()
document.write(shift + "<br>");
document.write("Out:" + "<br>");
shift = Devices.shift()
document.write(shift + "<br>");
document.write("Out:" + "<br>");
shift = Devices.shift()
document.write(shift + "<br>");
document.write("Out:" + "<br>");
shift = Devices.shift()
document.write(shift);
 
//   question no 14. 
var devices = ["keyboard" , "mouse" , "printer" , "monitor"]

document.write("Devices:" + "<br>");
document.write(devices);
document.write("<br>");
document.write("<br>");

var removeitem = devices.pop()
document.write("Out:" + "<br>");
document.write(removeitem + "<br>");
document.write("Out:" + "<br>");
removeitem = devices.pop()
document.write(removeitem + "<br>");
document.write("Out:" + "<br>");
removeitem = devices.pop()
document.write(removeitem + "<br>");
document.write("Out:" + "<br>");
removeitem = devices.pop()
document.write(removeitem);

    //  qustiion  no 15.
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write("<select>" + '<option value = '+phoneManufacturers[0]+'>' + phoneManufacturers[0] + '</option>' + '<option value = '+phoneManufacturers[1]+'>' + phoneManufacturers[1] + '</option>' + '<option value = '+phoneManufacturers[2]+'>' + phoneManufacturers[2] + '</option>' + '<option value = '+phoneManufacturers[3]+'>' + phoneManufacturers[3] + '</option>' +
'<option value = '+phoneManufacturers[4]+'>' + phoneManufacturers[4] + '</option>'
+ '<option value = '+phoneManufacturers[5]+'>' + phoneManufacturers[5] + '</option>' +  "</select>")

