const firstName = 'Jim';

const upperCase  = 'Jim'.toUpperCase();

const world = "Hello, World"

//"goodbye, world"

world.replace("Hello", "goodbye").toLowerCase()

// concatenation

const hello = "Hellooooooo";
const world = " worldddddddd";
hello + world;
"Hello, " + "world";

// change a strinf into a number
parseInt("123");


// new to javascript
// string interpolation/ template strings

const name = 'jim';
const template = `Hello ${name}, welcome to the consmos.`

function greeting(name){
	const template = `Hello ${name}, welcome to the cosmos`;
	return template;
}

greeting("Jim");


// for quotes stay consistant with single or double
// / to cancel out quote if you need a tring that contains 
// single or double quotes or wrap string in the quote type not 
// being used the string