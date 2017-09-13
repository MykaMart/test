// loops

const arr = [1, 2, 3];
//  changelable  for each array sapce until we've reached the length
//	of the array items and continue adding until length has been reached
for  (let i = 0; i < arr.length; i++){
	console.log(arr[i]);
};

// write a for loop to cycle though arr and print whether
// the number is odd or even

const arr = [1, 2, 3];

for  (let i = 0; i <arr.length; i++){
	if (arr[i]%2 === 0){
		console.log(arr[i] + " is odd");
	} else {
		console.log(arr[i] + " is even");
	};
};

// now write loop that will empty the array, and leave a message
// of each item leacing the array on each iternation of the loop

const arr = [1, 2, 3];

for  (let i = 0; i < arr.length; i){
	let leave = arr[i]
	arr.shift();
	console.log(leave + " is leaving the array");

//or 

const arr = [1, 2, 3];

for  (let i = 0; i < arr.length; i){
	console.log(arr.shift() + " is leaving the array"); //arr.shift performs action and calls to it simultaneously
};



// for (x in y) lets you find a key value pair in an object
const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle){
	console.log(temp + ": " + turtle[temp]);
}



//add cowabunga

const turtle = {
	name: 'marvin',
	age: 102,
	hungry: true
};

for (let temp in turtle){
	turtle[temp] = turtle[temp] + ", Cowabunga!";
// or turtle[temp] += ", Cowabunga!";
	console.log(temp + ": " + turtle[temp]);
}