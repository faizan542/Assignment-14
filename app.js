// CH:31-34
// Q:1
// var a = new Date()
// document.write(a)

// Q:2
// var a = new Date()
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write(" Current Month : " + month[a.getMonth()]); 

// Q:3
// var a = new Date()
// var day = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
// document.write("Today is " + day[a.getDay()].substr(0,3));

// Q:4
// var a = new Date
// var day = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
// var b = day[a.getDay()]
// if(b === "Saturday" || b === "Sunday"){
//     alert("It's Fun Day")
// }else{
//     alert("Working Day")
// }

// Q:5
// var a = new Date()
// var b = a.getDate()
// if (a < 16){
//     document.write("First fifteen days of the month<br><br>")
// }
// else{
//     document.write("Last fifteen days of the month<br><br>");
// }

// Q:6
// var date = new Date();
// var milli = date.getTime();
// document.write("Current Date : " + date);
// document.write("<br>Elapsed milliseconds since January 1, 1970 : " + milli);
// document.write("<br>Elapsed minutes since January 1, 1970 : " + milli / (1000 * 60 * 60));

//Q:7
// var a = new Date
//  var hours = a.getHours()
//  if(hours < 12){
//      alert("Its AM")
//  }
//  else{
//      alert("Its PM")
//  }

//Q:8
//  var laterDate = new Date("Dec 31, 2020");
//  document.write("Later date: " + laterDate );

// Q:9
// var ram = new Date("24,Apr,2020");
// var cdate = new Date();
// var difft = cdate.getTime() - ram.getTime();
// var diffd = difft / (1000*60*60*24);
// document.write(Math.round(diffd),' days have passed since 1st Ramdan, 2020');

//Q:10
// var dt = new Date("01/01/2020");
// var dd = new Date();
// var milli = dd.getTime() - dt.getTime();
// document.write("On reference date " + dt);
// document.write("<br>" + Math.round(milli / (1000*60))+' Seconds had passed since begining of 2020')

// Q:11
// var dt = new Date();
// document.write("Current date " + dt);
// dt.setHours(dt.getHours() - 1);
// document.write("<br>1 hour ago, it was " + dt);

//Q:12
// var a = new Date();
// document.write("current date: " + a);
// a.setFullYear(a.getFullYear() - 100);
// document.write("<br>100 years back, it was " + a);

//Q:13
// var age = +prompt("Enter your age:","Your age is")
// var current = new Date();
// var year = current.getFullYear()-age;
// document.write("Your age is " + age + "<br>Your birthyear is " + year)

// Q:14
// var a = new Date();
// var name = prompt("Enter your name");
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var units = prompt("Enter number of units");
// var charges = 16;
// var netAmount = units*charges;
// var latePay = 350;
// var grossAmount = netAmount + latePay;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("Customer Name: <b>"  +  name + "</b><br>Month: <b>" + month[a.getMonth()] + "</b><br>Number of units: <b>" + units + "</b><br>Units per charge: <b>" + charges + "</b>");
// document.write("<br><br>Net amount payable (within Due Date): <b>" + netAmount + "</b><br>Late payment surcharge: <b>" + latePay + "</b><br>Gross Amount payable (after Due Date): <b>" + grossAmount + "</b>")



// CH:35-38
// Q:1
// function date(currentDate){
// document.write(currentDate);
// }
// date(new Date);

//Q:2
// var a = prompt("Enter your first name");
// var b =  prompt("Enter your last name");
// function name(greet){
//     alert("Hello " + a + " " + b); 
// }
// name();

// Q:3
// var input = +prompt("Enter first number");
// var input1 = +prompt("Enter second number");
// function sum(input,input2){
//     alert(input+input1);
// }
// sum(input,input1)

//Q:4
// var num1 = prompt("Enter first value");
// var oper = prompt("Enter your operator");
// var num2 = prompt("Enter second value");
// function calc(num1,oper,num2){
// if(oper === "+"){
//     return +num1 + +num2 
// }
// else if(oper === "-"){
//     return num1 - num2
// }
// else if(oper === "*"){
//     return num1 * num2
// }

// else if(oper === "/"){
//     return num1 / num2
// }

// else if(oper === "%"){
//    return num2 / num1*100
// }
// }
// document.write("The output is: " + calc( num1 , oper , num2))

// Q:5
// function square(num) {
//     for (i=0; i<=num; i++){
//         var sum=0;
//         var j = i*i;
//         sum = j;
//         document.write('Squares Number : '+sum);
//     }
//     document.write("<br><br>The sum of squares for numbers up to and including " +num+ " is " +sum ) ;
// }

// var num = +prompt("Enter a number for Squares :");
// square(num);

// Q6
// function factorial(x) { 
//     if (x === 0) {
//     return 1;
//     }
//     return x * factorial(x-1);
// }
// var factor = +prompt("Enter a Factorial Number ")
// document.write("<br><br>" + factorial(factor) + "<br><br>");

// Q:7
// function counting (startnum,endnum){
//     for (i=startnum; i <= endnum; i++){
//         document.write(i);
//     }
// }
// var startnum = +prompt('Enter a number for Start Counting ');
// var endnum = +prompt('Enter a number for End Counting ');
// document.write("<h2>Counting</h2>");
// document.write("Starting number : " + startnum +"Ending number is : "+endnum);
// counting(startnum,endnum);

//Q:10
// var  word = prompt("Enter your word")
// var drome = "";
// function palindrome(palin,drome){
//     for(var i = palin.length -1 ;i <= 0; i--){
// drome += [i]
//     }
//     if(word === drome){
//         alert( word + " is palindrome word")
//     }
//     else{
//             alert( "This is not a palindrome word")
//     }
// }
// palindrome(word , drome ,i)

//Q:11
// function upper(string){
// var sentence = "the quick brown fox"
// var capitalizedString = (str) => str [0].toUpperCase() + str.slice(1).toLowerCase()
// var word = sentence.split(' ').map(capitalizedString)
// var capitalizeSentence = word.join(' ')
// document.write(sentence + "<br>" + capitalizeSentence)
// }
// upper()


// CH:38-42
// Q:1
// function power(){
//     var a = prompt("Enter the base")
//     var b = prompt("Enter the power")
//     var result = Math.pow(a,b)
//     document.write("The result is " + result)
// }
// power()

// Q:2
// function leapyear(){
//     var year = prompt('Enter any year')
//     if(year%4 ==0){
//         document.write(year + "is a leap year")
//     }else{
//         document.write(year + "is not a leap year")
//     }
// }
// leapyear()

// Q:3
// function calcTriangle(area) {
//     var a = 8
//     var b = 9
//     var c = 10
//     var s = (a + b + c) / 2
//     var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)))
//     document.write(area)
// }
// calcTriangle()

// Q:5
// function index(){
//     var a = "The Quick brown fox jump from the dog"
//     document.write(a.indexOf("brown"))
// }
// index()