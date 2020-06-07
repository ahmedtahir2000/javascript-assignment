//Chapter 1

//alert("Welcome to HAK");
//alert("Error! Please enter a valid password.");
//alert("Welcome to JS Land..."+"\n"+"Happy Coding!");
//alert("Welcome to JS Land...");
//alert("Happy Coding!\n");

//Chapter 2

//var username;
//var myName="Ahmed Tahir Shekhani";
/*var message="Hello World";
alert(message);*/


/*var name="Ahmed Tahir";
var age="15 years old";
var course="Certified web and mobile hybrid application development"
alert(name);
alert(age);
alert(course);*/

/*var x="PIZZA";
alert(x+"\n"+x.substring(0, x.length - 1)+"\n"+x.substring(0, x.length - 2)+"\n"+x.substring(0, x.length - 3)+"\n"+x.substring(0, x.length - 4));
*/

/*var email="xyz@example.com";
alert("My email address is "+email);*/

/*var book="A smarter way to learn JavaScript";
alert("I am trying to learn from the Book "+book);*/

//document.write("Yah! I can write HTML content through JavaScript");

/*var x="============ஜ۩۞۩ஜ============";
alert(x);*/


//Chapter 3
/*
var age=15;
alert("I am "+age+" years old");

var N=14;
alert("You have visited this site "+N+" times");

var birthYear=2000;
document.write("My birth year is "+birthYear);
document.write("<br>");
document.write("Data type of my declared variable is "+typeof(birthYear));
*/

/*
var custName=prompt("What is your name?", "Ahmed");
var productName=prompt("Product title: ", "T-shirt");
var quantity= +prompt("Enter quantity: ", "15");

document.write("<b>"+custName+"</b>"+" ordered "+"<b>"+quantity+" "+productName+"</b>"+" on XYZ CLothing store");

*/

//Chapter 4

//var x,y,z;

/*var game, $game1, _myname, student23, game5over;
var 1game, typeof, &name, return, default;*/

//Q3 in index

//Chapter 5
/*
var num1, num2=0;
num1= +prompt("Enter Num 1");
num2= +prompt("Enter Num 2");
var sum=num1+num2;
document.write("Sum of "+num1+" and "+num2+" is "+ sum);
*/

/*
var num1, num2=0;
num1= +prompt("Enter Num 1");
num2= +prompt("Enter Num 2");
var diff=0;
if(num2<num1){
	diff=num1-num2;
	document.write("Difference of "+num1+" and "+num2+" is "+ diff);
}else if(num2>num1){
	diff=num2-num1;
document.write("Difference of "+num1+" and "+num2+" is "+ diff;
}else if(num1==num2){
	document.write("Difference of "+num1+" and "+num2+" is "+ 0);
}
*/


/*
var num1, num2=0;
num1= +prompt("Enter Num 1");
num2= +prompt("Enter Num 2");
var prod=num1*num2;
document.write("Product of "+num1+" and "+num2+" is "+ prod);
*/

/*
var num1, num2=0;
num1= +prompt("Enter Divident");
num2= +prompt("Enter Divisor");
var quo=num1/num2;
document.write("Quotient of "+num1+" divided by "+num2+" is "+ quo);
*/

/*
var num1, num2=0;
num1= +prompt("Enter Divident");
num2= +prompt("Enter Divisor");
var remainder=num1%num2;
document.write("Remainder of "+num1+" divided by "+num2+" is "+ remainder);
*/

/*
var num;
document.write("Value after variable declaration is: "+typeof(num)+"<br>");
num=5;
document.write("Initial Value: "+num+"<br>");
++num;
document.write("Value after increment is: "+num+"<br>");
num=num+7;
document.write("Value after addition is:  "+num+"<br>");
--num;
document.write("Value after decrement is: "+num+"<br>");
num=num%3;
document.write("The remainder is: "+num+"<br>");
*/

/*
var per_ticket_cost=600;
var tickets=prompt("Enter number of tickets");
var total_cost=per_ticket_cost*tickets;
document.write("Total cost to buy "+tickets+" tickets to a movie is "+total_cost+" PKR");*/

/*
var num=prompt("Enter number for which you need table: ");
document.write("Table of "+num+"<br>");
for (var i = 1; i <= 10; i++) {
	document.write(num+"x"+i+"="+num*i+"<br>");
}*/

/*
var cel=prompt("Enter celsius temperature: ");
var far=(cel*9/5)+32;
document.write(cel+" "+"\u00B0"+"C is "+far+" "+"\u00B0"+"F"+"<br>");
far=prompt("Enter temperature in Farenheit: ");
cel=(far-32)*5/9;
document.write(far+" "+"\u00B0"+"F is "+cel+" "+"\u00B0"+"C"+"<br>");*/


/* Question 7 in index file*/

/*
document.write("<h1>Marks Sheet</h1><br>");
var tot_marks= +prompt("Enter Total Marks: ");
var obt_marks= +prompt("Enter Obtained Marks: ");
document.write("Total Marks: "+tot_marks+"<br>");
document.write("Obtained Marks: "+obt_marks+"<br>");
document.write("Percentage: "+obt_marks/tot_marks*100+"<br>");
*/

/*
document.write("<h1>Currency in PKR</h1><br>");
var curr=10*104.8+25*28;
document.write("Total Currency in PKR: "+ curr);
*/

/*
var num=5;
num=((num+5)*10)/2;
document.write("The answer after applying operators is "+num);
*/

/*
document.write("<h1>Age Calculator</h1><br>");
var cur_year= +prompt("Enter Current year: ");
var bir_year= +prompt("Enter Birth year: ");
document.write("Current year: "+cur_year+"<br>");
document.write("Birth year: "+bir_year+"<br>");
document.write("You age is: "+(cur_year-bir_year));
*/

/*
document.write("<h1>The Geometrizer</h1><br>");
var rad= +prompt("Radius of circle: ");
const pi=3.142;
var cir= 2*pi*rad;
var area=pi*(rad**2);
document.write("Radius of a circle: "+rad+"<br>");
document.write("The circumference of a circle: "+cir+"<br>");
document.write("The area is: "+area);
*/

/*
document.write("<h1>The Lifetime Supply Calculator</h1><br>");
var fav_snack=prompt("Enter Favorite Snack: ");
var curr_age= +prompt("Enter Current age: ");
var exp_age= +prompt("Enter Estimated Maximum age: ");
var per_day= +prompt("Enter Amount of snacks per day: ");
document.write("Favorite Snack: "+fav_snack+"<br>");
document.write("Current age: "+curr_age+"<br>");
document.write("Estimated Maximum age: "+exp_age+"<br>");
document.write("Amount of snacks per day: "+per_day+"<br>");
var snack_needed=(exp_age-curr_age)*365.25*per_day;
document.write("You will need "+snack_needed+" "+fav_snack+" to last you until the ripe old age of "+exp_age +"<br>");
*/

//Chapter 6-9
/*
var a= +prompt("Enter value of a: ");
document.write("Result<br>The value of a is: "+a+"<br>...........................................<br><br>");
document.write("The value of ++a is: "+ (++a)+"<br>Now the value of a is: "+a+"<br><br>");
document.write("The value of a++ is: "+ (a++)+"<br>Now the value of a is: "+a+"<br><br>");
document.write("The value of --a is: "+ (--a)+"<br>Now the value of a is: "+a+"<br><br>");
document.write("The value of a-- is: "+ (a--)+"<br>Now the value of a is: "+a+"<br><br>");
*/

/*
var a=2, b=1;
var result= --a - --b + ++b + b--;
// --a; a=1
// --a - --b; a=1, b=0, result=1
// --a - --b + ++b; b=1, result=2
// --a - --b + ++b + b--; b=0, result=3
document.write("a is: "+a+"<br>");
document.write("b is: "+b+"<br>");
document.write("result is: "+result+"<br>");*/

/*
var username=prompt("Enter your name: ");
document.write("<h1>Welcome "+username+"</h1>");
*/

/*
var num=prompt("Enter number for which you need table: ",5);
document.write("Table of "+num+"<br>");
for (var i = 1; i <= 10; i++) {
	document.write(num+"x"+i+"="+num*i+"<br>");
}
*/

/*
var sub1=prompt("Enter Name of Subject 1");
var obt1= +prompt("Enter Marks of Subject 1");
var sub2=prompt("Enter Name of Subject 2");
var obt2= +prompt("Enter Marks of Subject 2");
var sub3=prompt("Enter Name of Subject 3");
var obt3= +prompt("Enter Marks of Subject 3");
const tot_marks=100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>"+tot_marks+"</td><td>"+obt1+"</td><td>"+obt1/tot_marks*100+"%</td></tr><tr><td>"+sub2+"</td><td>"+tot_marks+"</td><td>"+obt2+"</td><td>"+obt2/tot_marks*100+"%</td></tr><tr><td>"+sub3+"</td><td>"+tot_marks+"</td><td>"+obt3+"</td><td>"+obt3/tot_marks*100+"%</td></tr><tr><th></th><th>"+tot_marks*3+"</th><th>"+(obt1+obt2+obt3)+"</th>	<th>"+(obt1+obt2+obt3)/(tot_marks*3)*100+"%</th></tr></table>");
*/


//Chapter 9-11

/*
var city=prompt("Enter City Name: ");
if (city=="Karachi"||city=="karachi"){
	document.write("Welcome to City of Lights");
}else{
	document.write("Welcome to "+city);
}
*/

/*
var gen=prompt("Enter your gender(Male/Female): ");
if (gen=="Male" || gen=="male"){
	document.write("Good Morning Sir");
}else if(gen=="Female" || gen=="female"){
	document.write("Good Morning Ma'am");
}else{
	document.write("Error: you haven't specified your gender correctly");
}
*/

/*
var lig=prompt("Enter the traffic light(Red/Yellow/Green): ");
if (lig=="Red" || lig=="red"){
	document.write("Must Stop");
}else if(lig=="Yellow" || lig=="yellow"){
	document.write("Ready to move");
}else if(lig=="Green" || lig=="green"){
	document.write("Move Now");
}else{
	document.write("Error: you haven't specified traffic light correctly");
}
*/

/*
var rem= +prompt("Enter remaining fuel(in litres) in the car: ");
if (rem<0.25) {
	alert("Please refill the fuel in your car");
}else{
	alert("You are good to go");
}
*/

/*
var a = 4; if (++a === 5)
{ alert("given condition for variable a is true"); }  //Yes: given condition for variable a is true


var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } //No


var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } //Yes: condition 2 is true & condition 4 is true 


var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); } //Yes: The cost equals

if (true){ alert("True"); } if (false){ alert("False"); } //Yes:True
 
if("car" < "cat"){ alert("car is smaller than cat"); } //Yes: car is smaller than cat

 */

/*
 document.write("<h1>Marks Sheet</h1><br>");
 var obt_marks= +prompt("Enter obtained marks in three subjects");
 const tot_marks=300;
 var per=obt_marks/tot_marks*100;
 var grade="";
 var remarks="";
 if (per>=80) {
 	grade="A-One";
 	remarks="Excellent";
 }else if(per>=70){
 	grade="A";
 	remarks="Good";
 }else if(per>=60){
 	grade="B";
 	remarks="You need to improve";
 }else if(per<60){
 	grade="Fail";
 	remarks="Sorry";
 }

document.write("Total Marks: "+tot_marks+"<br>Marks Obtained: "+obt_marks+"<br>Percentage: "+per+"%<br>Grade: "+grade+"<br>Remarks: "+remarks);
*/

/*

var sec=4;
var user= +prompt("Guess a number (1-10)");
if (user===sec){
	alert("Bingo! Correct answer");
}else if(user===sec-1){
	alert("Close enough to the correct answer");
}else{
	alert("Try again!");
}
*/

/*
var num=prompt("Enter any number: ");
if (num%3===0) {
	alert("Number is divisible by 3");
}
*/

/*
var num=prompt("Enter any number: ");
if (num%2===0) {
	alert("Number is even");
}else if(num%2===1){
	alert("Number is odd");

}

*/
/*
var temp=prompt("Enter Temperature: ");
if (temp>40) {
	alert("It's too hot outside");
}else if(temp>30){
	alert("The Weather today is Normal");

}else if(temp>20){
	alert("Today’s Weather is cool");

}else if(temp>10){
	alert("OMG! Today’s weather is so Cool");

}*/

var num1= +prompt("Enter first number: ");
var num2= +prompt("Enter second number: ");
var op=prompt("Enter operator (+,-,*,/,%)");

if (op==="+"){
	alert(num1+" + "+num2+" = "+num1+num2);
}else if (op==="-"){
	alert(num1+" - "+num2+" = "+ num1-num2);
}else if (op==="*"){
	alert(num1+" * "+num2+" = "+ num1*num2);
}else if (op==="/"){
	alert(num1+" / "+num2+" = "+ num1/num2);
}else if (op==="%"){
	alert(num1+" Mod "+num2+" = "+ num1%num2);
};
