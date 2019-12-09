//----------- Part 1
// variable and declare variable
var username = 100
var __username
var __username90 = 'daniel nguyen'

__username = 2.4

//----------- Part 2
// operator
var a = 20
var b = 5
var c = a + b	// 25
var d = a - b	// 15
var e = a * b	// 100
var f = a / b	// 4
var g = 22 % b	// 2

//console.log(a++) - get recent value (a = 20) and add 1
++b		// - add 1 and get value (a = 6)
//similar with --

//----------- Part 3
// assignment operator (toan tu gan)
var a_2 = 12
var b_2 = a_2 	// b_2 = 12
b_2 += a_2 	// b_2 = 24 (b_2 = b2 + a_2)
b_2 -= a_2	// b_2 = 12
b_2 *= a_2	// b_2 = 144
b_2 /= a_2	// b_2 = 12
b_2 %= a_2	// b_2 = 0

//----------- Part 4
// relationship operator
var a_3  = 12;
var b_3 = 20;
var c_3 = a == b; // False
var d_3 = a > b;  // False
var e_3 = a >= b; // False
var f_3 = a < b;  // True
var g_3 = a <= b; // False
var h_3 = a != b; // True


//----------- Part 5
// logical operator
var a_4 = false;
var b_4 = true;
var c_4 = a && b; // TRUE
var d_4 = a || b; // TRUE
var e_4 = !a;	  // TRUE
var f_4 = !b;	  // FALSE


//----------- Part 6
// equal operator (NOTE)
// we can do the following:
var a_5 = 12		// number
a_5 = '12'		// string
b_5 = 12		// number

var bool1_5 = a_5 == b_5		// true, both value of them is 12
var bool2_5 = a_5 === b_5		// false, string type and number type


//----------- Part 7
// condition
// (condition is similar with others languague)

//----------- Part 8
// switch case
// (switch case is similar with others languague)


//----------- Part 9
// function
function check_the_result(a, b) {
    if (a == b)
        return 'dung roi ban oi'
    else
        return 'sai roi ban oi'
}

// function with default value
function check_the_messages(message) {
    message = message || 'don\'t have any message'
    return message
}


//----------- Part 10
// local var and global
// is similar with others languague


//----------- Part 11
// setTimeout and setInterval

// console will log 'hello world' after 3s
/*
var helloworld = setTimeout(function() {
    console.log('hello world')	// statement
    clearTimeout(helloworld)	// clear timeout
}, 3000)
*/

// interval function is similar timeout but it is infinity loops.
// log 'hello earth' every 2s
/*
var helloearth = setInterval(function() {
    console.log('hello earth')
    clearInterval(helloearth)	// log 1 times and exit function
},2000)
*/


//----------- Part 11
// loop, while, do - while, break and continue
// is similar with others languague

//return value to console
