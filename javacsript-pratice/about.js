
// /// chapter lastindexof & indexof 
// /// is ma index ki lenght pata kar sekta hai 

// let hero=["kainat","fatima","ali","erum","rafiq","kainat"];
// console.log(hero.lastIndexOf("kainat"));
// // console.log(hero.indexOf("fatima"));
// // chartat sy hm num dak kar sentnce k index pata kar sekta hai 
// var namm ="blue";
// console.log(namm.charAt(3));

// //// math.round ////
// // var perc= 23.4
// // document.write(Math.ceil(perc))/////  ceil percentage ko aga la jati hai 
// var per= 23.9
// document.write(Math.floor(per))/////  same value hi rha gi 
// //// math . randam ///

// console.log(Math.random()*10);///////////////////////
// var player1= prompt("enter heads name")
// var player2= prompt("enter tails name")
// var toss = Math.random()*2
// var ch =Math.floor(toss)
// if (ch==0) {
//     document.write(player1 +"head wins")
// }
// else{
//     document.write ( `${player2} !!!"tails wins` )
// }
// console.log( Math.floor(toss));

// console.log(Math.random()*3);
// let math= Math.floor(Math.random()*100);
// console.log(math);
///// is ma hum number k zor hath sekth hai math.floor ki help sy 
// let math= Math.floor(Math.random()*100);
// console.log(math);
// let player1= prompt("enter  heads  name ");
// let player2= prompt("enter  tails  name ");
// let toss= Math.random()*2;
// let change =Math.floor(toss);
// if (change==0) {
//     document.write(player1  + "!head to win ")
// } else {
//     document.write(player2 +" !!!!!! tail you win")
// }

// var a= "  22" //// intervalue ko return karta hai
// var num= parseInt(a);///// with out decimal return karta hai 
// document.write(num);

// var a= " 10.39" //// intervalue ko return karta hai
// var num= parseFloat(a);///// decimal k bd k number bhi show karti hai 
// document.write(num);
// var num = 89.009;
// var numb = num.toFixed(1);
// document.write(numb)
var children = ["ali","fatima","muqtasid","zehra" ];
 var prop=prompt("enter your child name ?")
var match = false;
// var child="muqtasid";
for( let i =0; i <= 3;i++){
    if (prop === children[i]) {
        match = true;
        alert( prop + " "+"is eldest child of his family ")
        break
    }
}
if(match=== false){
alert(prop + "you are not in family")
} 
