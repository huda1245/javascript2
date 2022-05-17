// chapterno9to11
// answerno1
// var cities = ["karachi", "lahore", "multan", "sahiwal"];
// var city = prompt("enter city name :");
// if (city === "karachi"){
//     alert("welcome to city of lites.");
// }
// else if (city === "lahore"){
//     alert("welcome to heart of Pakistan.");
// }
// else if (city === "multan"){
//     alert("welcome to city of caints.");
// }
// else if (city === "sahiwal"){
//     alert("welcome among loving people.");
// }
// else{
//     alert("enter right name of city.");
// }
// answerno2
// var gender = prompt("enter gender: 'm' for male and 'f' for female");
// if (gender === "m"){
//     alert("welcome you here Sir");
// }
// else if ( gender === "f"){
//     alert("welcome you here Mam");
// }
// else{
//     alert("enter right command.");
// }

// answerno4
// var fuel = +prompt("enter remaining fuel :");
// if ( fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("fuel is enough.");
// }
// answerno5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// true
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// } if (c === 14) {
//     alert("condition 4 is true");
// }


// condition 2 and 4 is true.
// chapterno12to13
// answerno1

// var x = prompt("enter char :");
// if (x >= 'A' && x <= 'Z'){
//     alert("this char is on upper case.");
// }
// else if (x >= 'a' && x <= 'z'){
//     alert("this char is on lower case.");
// }
// else{
//     alert("Not a char.");
// }
// answerno2
// var a = +prompt("enter number");
// var b = +prompt("enter number");
// if (a > b) {
//     document.write(a);
// }
// else if ( a < b){
//     document.write(b);
// }
// else if ( a === b){
//     document.write(b);
// }
// else{
//     alert("incorrect command.");
// }
// answerno5
// var passsword = "12345";
// var inputPassword = prompt("enter password");
// if (passsword === inputPassword){
//     alert("Correct Password");
// }
// else if (inputPassword === ""){
//     alert("enter Password");
// }
// else{
//     alert("inCorrect Password");
// }

// answerno6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     alert(greeting);
// }
// else {
//     greeting = "Good evening";
//     alert(greeting);
// }
// chapterno14to16

// var names = ["uqman", "jawad", "bilal", "zubair", "talha"];

// var numbers = [1,2,3,4,5,6,7];

// var qualification = ["SSC"," HSC"," BCS"," BS"," BCOM"," MS"," M. Phil"," PhD"];
// document.write("Qualification : <br> ")
// for (var i=1; i<qualification.length; i++){
//     document.write(i + " : " + qualification[i] + "<br>");
// }

// var names = ["bilal", "zubair", "talha"];
// var marks = [300, 350, 400];
// var totalMarks = 500;
// for (var i = 0,j = 0; i < name.length, j < marks.length ; i++, j++){
//     document.write("Score of " + names[i] + " and marks is " + marks[j]+ ".  Percentage is " + (marks[j]/500 * 100) + "<br>") ;
// }

// var marks = [480,310,420,270,350,120,380];
// marks.sort();
// document.write(marks);


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var energy = fruits.join();
// document.write(energy);
// console.log(typeof(fruits));
// console.log(typeof(energy));


// chapterno17to20

// answerno1
// var multiDimensionalArrays = [[], [], [], [],[]];
// answerno2
// var multiDimensionalArrays = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// document.write(multiDimensionalArrays[0] + "<br>" + multiDimensionalArrays[1] + "<br>" + multiDimensionalArrays[2]);
// answerno3
// for (var i=1; i<11; i++){
//     document.write(i + "<br>") ;
// }
// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }
// answerno4
// var number = +prompt("enter num for table :");
// var len = +prompt("enter length for table :");
// for (var i=1; i<= len; i++){
//     document.write(number + " * " + i + " = " + number*i + " <br>");
// }
// answerno5
// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (var i=0; i<fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }
// document.write("Elements at index number 0 " +" is " + fruits[0] + "<br>");
// document.write("Elements at index number 1 " + " is " + fruits[1] + "<br>");
// document.write("Elements at index number 2" +" is " + fruits[2] + "<br>");
// document.write("Elements at index number 3" +" is " + fruits[3] + "<br>");
// document.write("Elements at index number 4" +" is " + fruits[4] + "<br>");

// answerno6
// for (var i=1; i<16; i++){
//     document.write(i + ",") ;
// }

// for (var i=10; i>0; i--){
//     document.write(i + ",") ;
// }

// for (var i=0; i<21; i=i + 2){
//     document.write(i + ",") ;
// }

// for (var i=1; i<21; i=i + 2){
//     document.write(i + ",") ;
// }
// answerno7
// var a = ["cake", "applepie", "coockie", "chips", "patties"];
// var b = prompt("welcome here sir! what you want :");
// var c = false;
// for (var i=0; i<a.length; i++){
//     if (b === a[i]){
//         alert(b + " is avilable at index " + i );
//         c = true;
//         break;
//     }
// }
// if (c === false){
//     alert(b + " is not avilable in bakery.");
// }
// answerno8,9
// var a= [24, 53, 78, 91, 12];
// var b = a.sort();
// alert(lastIndexOf(b));

// answerno10
// for (var i=0; i<101; i=i + 5){
//     document.write(i + ",") ;
//
