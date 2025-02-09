
//     chapter 21 to 25  ///////

// Qustion no 01  ///////////////////////////////////////////////////////////////

// var firstName = prompt('Enter your first Name');
// var lastName = prompt('Enter your last Name');

// fullName = firstName + " " + lastName ;

// alert('welcome ' + fullName ) ;



// Question  no 02  ////////////////////////////////////

// var usermobile = prompt('Enter your mobile model') ;
// var userLength = usermobile.length

// document.write(`My Favourite Mobile is : ${usermobile} <br> & Its Length is : ${userLength} ` );



// Question no 03 ///////////////////////////////////////

// var str = 'Pakistan';
// var strIndex = str.indexOf('n');

// document.write(`String : ${str} <br> Index of ' n' is : ${strIndex} `);


// Question  no 04    /////////////////////////////////////////////////

// var str = 'Hello World';
// var strIndex = str.lastIndexOf('l');

// document.write(`String : ${str} <br> Last Index of ' l ' is : ${strIndex} `);


// Question no 05   ////////////////////////////////////////////////////

// var str = 'Pakistan';
// var index3 = str[3];

// document.write(`String : ${str} <br> Third Index of string is : ${index3} `);



// Question no 06 (repeted question no 1)    ////////////////////////////////////////////////

// var firstName = prompt('Enter your first Name');
// var lastName = prompt('Enter your last Name');

// firstName = firstName.concat(" " + lastName) ; 
// document.write(firstName); 



// Question no 07       ////////////////////////////////////////////////

// var city = 'Hyderabad' ; 
// var repl = city.replace('Hyder' , 'Islam');
// document.write(`City : ${city} <br> After Replace : ${repl}`);


// Question no 08  //////////////////////////////////
 
// var message = "Ali and Sami are best friends. They play cricket and football together" ; 
// var repl = message.replaceAll('and' , '&');
//  document.write(`Message : ${message} <br> After Replace : ${repl}`);

// Question  no 09             //////////////////////////////////

// var str = '472';

// document.write(`Value : ${str} <br>`);

// var type = typeof(str);
// document.write(`Type : ${type} <br>`)

// var repl = Number(str);

// document.write(`Value : ${repl} <br>`);

// var type2 = typeof(repl);
// document.write(`Type : ${type2} <br>`)


// Question   no 10   //////////////////////////////////////////////

// var userinp = prompt('Enter Your name');
// document.write("Userinput : "+ userinp + '<br>') ;

// var uppercase = userinp.toUpperCase() ; 
// document.write( "Upper Case : "+ uppercase) ;


// Question    no 11  /////////////////////////////////


// var userinp = prompt('Enter Your subject');
// document.write("Userinput : "+ userinp + '<br>') ;

// var uppercase = userinp.charAt(0).toUpperCase() + userinp.slice(1);; 
// document.write( "Title Case : "+ uppercase) ;

// Question  no 12  

// var num = 35.36 ;  

// var changeStr = num.toString().replace('.' , '') ;
// document.write(`Number : ${num} <br> Result : ${changeStr}`);


// Question no 13

// var str  = prompt('Enter Your Name');
// var isCheck = /[!@$%^&&*()_+{}]/ ;  

// if(isCheck.test(str)){
//     alert('invalid Name');
// }else{
//     alert('Username Accepted')
// }



// Question no 14 

// var str = ['cake', 'roll', 'pestry', 'chips', 'petties'];
// var userinp = prompt('Welcome to ABC Bakery. What you want to Order Sir / Mam');
// var flag = false ;

// for (i = 0; i < str.length; i++) {
//     if (userinp == str[i]) {

//         document.write(`${userinp}  is Avaliable at section : ${i} in our bakery`);
//         flag = true ;
//         break
//     } 
// }
//     if(flag == false){

//         document.write(`Sorry ${userinp} is not  Avaliable  in our bakery`)

//     }


// Question  no 15 

// var input=prompt("Enter password");
// var inputlength=false;
// var inputinteger=false;
// var inputchar=false;
// var passstart=false


//  for(var i=0 ; i<input.length ; i++){

//     var passvalue=input[i].charCodeAt(0);



//     if(passvalue>=65 && passvalue<=90){;
//     inputchar=true;
//  }
//  else if( passvalue>=97 && passvalue<=122){
//     inputchar=true;
//  }
// }

// for(var i=0 ; i<input.length  ; i++){
//     var passvalue=input[i].charCodeAt(0);

//     if(passvalue>=48 && passvalue<=57){
//         inputinteger=true;
//     }



// }
//  var passvalue=input[i].charAt(0);

//  if(passvalue>=48 && passvalue<=57){
//     inputinteger=false;
//  }

//  for (var i=0 ; i<input.length ; i++){
//     if(input.length>=6){
//         inputlength=true;
//     }
//  }

//  if(inputchar=true || inputinteger==true || inputlength==true || passstart==true){
//     alert("Password approved")
//  }
// else {
//     alert("Invalid password")
// }

// Question no 16  

// var university = 'University of Karachi' ;
// var changeStr = university.split('') ; 

// for(i=0 ; i <changeStr.length ; i++){
// document.write(changeStr[i] + '<br>')

// }

// Question no 17 

// var userinp = prompt('Enter a word') ; 

// laststr = userinp.slice(-1);
// document.write( 'User input : '+ userinp +'<br>');
// document.write('Last Character : ' + laststr);

// Question no 18  

// var str = 'the quick brown fox jumps over the lazy dog' ;

// var strCount = str.split('the').length -1 ;

// console.log(strCount)




 


        

        
        





