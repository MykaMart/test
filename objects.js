// arrays

const arr =[1, 2, 3] // array syntax

arr.length //# of items in array

console.log(arr[0]); // list items couting from 0

arr[1] = 4 // changes value second item in arr array

+=
a = a + 1
-=
a = a - 1
*=
a = a * 1
/=
a = a / 1
%=
a = a%1

//manipulate info in array if const not make it another array

arr[4] = 2

//cannot
arr = {}
arr = 5
arr = "steve"
//cannot

arr.push(7) 				--> //adds number, string, object, additional, array, etc to end of the array
arr.pop() 					--> //removes something from the end of the array
arr.unshift('something') 	--> //adds something to the beginning of the array
arr.shift() 				--> //removes from the begining of the array
arr.reverse() 				--> //flips the array around



// {} objects
const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true,
	1: 2	// never use numbers for properties name them strings
};

turtle.name = 'myrtle the turtle'	--> // changes the value of the proprty
turtle['hungry'] = false			--> // changes the value of the property referencing the string

const bird = {}
bird.name = 'dee';					--> adds prooperties to constant objects


// make two objects with five properties
// access each property in the console

//first object created like the first example

const assassins = {
	title: "Assassin's Creed", 
	franchise: "Assassin's Creed",
	genre: "Stealth",
	released: 2007,
	platform: "Various"
};

const earthbound = {
	Title: "Earthbound", 
	Franchise: "Mother",
	Genre: "RPG",
	Released: 1995,
	Platform: "SNES"
};


//second object created like the second example

const firstPet ={
		Name: "Harry", 
		Type: "Fish", 
		Breed: "Tropical", 
		Color: "Black",
		Adopted: "1985"
}

const firstPet ={
		Name: "Panda", 
		Type: "Cat", 
		Breed: "Tuxedo", 
		Color: "White/Black"
		Adopted: "2006"
}


const assasins = {
	tite: "Assasin's Creed",
	franchise: "Assassin's Creed",
	genre: "Stealth",
	released: 2007,
	platform: "Various"
};
