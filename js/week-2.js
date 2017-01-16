//Task 1

var a = 3;
var b = 5;
var c;

alert(
    "var a = " + a + ";" + "\n" +
    "var b = " + b + ";" + "\n" +
    "var c;" + "\n" +
    "----------" + "\n" +
    "a + b = " + (a + b) + "\n" +
    "a - b = " + (a - b) + "\n" +
    "a * b = " + (a * b) + "\n" +
    "a / b = " + (a / b) + "\n" +
    "a % b = " + (a % b) + "\n" +
    "a += b: " + (a += b) + "\n" +
    "a -= b: " + (a -= b) + "\n" +
    "a *= b: " + (a *= b) + "\n" +
    "a /= b: " + (a /= b) + "\n" +
    "a %= b: " + (a %= b) + "\n" +
    "a == b: " + (a == b) + "\n" +
    "a != b: " + (a != b) + "\n" +
    "a > b: " + (a > b) + "\n" +
    "a < b: " + (a < b) + "\n" +
    "!a && !c: " + ((!a) && (!c)) + "\n" +
    "!a || !c: " + ((!a) || (!c)) + "\n"
);



//Task 2

var first_name = "Amy";
var last_name = "Allen";
var email = "alle0283@algonquinlive.com";
var output = "My name is " + first_name + " " + last_name + ". You can contact me at " + email + ".";
alert(output);



//Task 3
var evenOdd;

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];

var sum = numbers[0] + numbers[4];
if (sum % 2 === 0) {
   evenOdd = "even";
} else {
    evenOdd = "odd";
}

alert(
    numbers[0] + " + " + numbers[4] + " = " + sum + "\n" +
    "This is an " + evenOdd + " number."
);