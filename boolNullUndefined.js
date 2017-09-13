// Boolean

let doorsOpen = true;

doorsOpen = false;

// changes the variable

doorsOpen = !doorsOpen;

// shows the value of the variable

!doorsOpen

1 > 2
1 < 2
1 >= 2
1 <= 2

1 == 1

//triple equals is the moe strict, even compares data type
1 === 1


// conditionals

let a = 1;

if(1>2){
	console.log(a + ' is > 2');
} else{
	console.log(a + " is less than 2");
}

if (a > 2){
	// some code;
} else if (a === 2){
	// some code;
} else {
	// some code;
}

// && (and) operator an || (or) operator

// With &&, bost must be true
5 === 5 && 10 === 10 && 4 ==== 4 --> // evaluates to true
5 === 4 && 10 === 10             --> // evaluates to false

// With ||, one must be true
5 === 5 || 4 > 6  --> // evaluates to true
5 === 4 || 10 < 9 --> // evaluates to false

null || 5 --> //if the first doesn't have a value than go with the second (IF first, ELSE Second

const input(); //null /undefined value
const username = input || "bdshbfhe";

// >username
// >"bdshbfhe"

const input = 'jim'
const username = input || "bdshbfhe"

// >jim
// >"bdshbfhe"


const null === null --> // evaluates to true






