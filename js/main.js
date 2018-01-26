// alerts are annoying, lets use console.log
console.log('Welcome');
/*This will now log to your console */



// Creae a function that updates a DOM element
function change(){
  // the function body - this is where stuff will happen
  document.getElementById('foo').innerHTML = 'Welcome';
}

// Basic data types in Javascript
var name= 'Lucille'; //Store a string in a variable
var numberOfWidgets = 10; //number
var isCodingCool = true;// boolean
console.log(name); //log the value of a var to the console

// store an array in a variable
var characters = [50, true, 'Lucille','Michael Bluth','Tobias', 10, 9];
console.log(characters[0]);

/*
Create some variables, store some data in them,
output them to the console
*/
var teams = ['Eagles','Lakers','Sixers','Fyers'];
var players = ['Wentz','Foles','JMills','Alshon'];
console.log(teams[0]);
console.log(players[0]);
// Multi-dimensional array
var meat = ['ham','bologna','turkey'];
var fruit = ['oranges','apples','grapes'];
var food = [meat, fruit];
console.log(food[1][0]); // this logs 'oranges' to the console

//var food = [['ham'], ['oranges']]; // could also be written like this

// Object:
var user = {
  firstName: 'Lucille',
  age: 40,
  lastName: 'Bluth',
  hasHair: true,
  'has-feet': true,
};
// access properties of our user Object using a dot notation
console.log(user.firstName); // this will log 'Lucille'
// we can also access properties on objects using bracket notation
console.log(user['firstName']); // this will also log Lucille to the console
console.log(user['has-feet']); // NEED to use square bracket

var num1 = 100;
var num2 = 50;
console.log('the result is' + (num1 - num2));
var string = 'num1';
var strings= 'num2';
alert (string + ' '+ strings);
var me = {
  firstName: 'Ralph',
  lastName: 'Lewis',
  fingerCount: 10,
  hasEyes: true,
  interests: ['sports','music','news','animals']
};
console.log(me.interests);
