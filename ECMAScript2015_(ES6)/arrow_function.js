/*
    docs: https://freetuts.net/arrow-function-trong-es6-606.html
*/

/**
 * Arrow Function
 * 
 * Two default ways to define the function:
 * 
 * 1.
 * function Name(var1, var2){
 *  
 * }
 * 
 * 2.
 * var Name = function(var1, var2){
 *  
 * }
 * 
 * Define a function using '=>', this is new syntax have been added in ES6
 * var functionName = (var1, var2) => {
 *  
 * }
 */

var hello_world = (input_string) => {
    console.log(input_string)
}

hello_world('hello world')

// ----- single command case:
var say_my_name = (name) => console.log(name)

say_my_name('Heisenberg')

// ----- with 1 argument we can define following
var hello = name => console.log("hello " + name)

hello('daniel nguyen\n\n\n')

// ----- some ex about arrow function in ES6
var array = ["index1", 'index2', 'index3']

array.map(function(val, key){
    // console.log(`${key} : ${val}`) => position : value

    console.log(val.toUpperCase()) // UPPERCASE but is not still save
    array[key] = val.toUpperCase() // you must add this line to save UPPERCASE value in each position
})

console.log(array)
console.log('\n\n\n')

// refactory using arrow function
var array2 = ['index1', 'index2', 'index3']

array2.map((val, key) => {console.log(`${key} : ${val}`)})
console.log(array2)
console.log('\n\n\n')


// set time out
setTimeout(() => console.log('3s'), 3000)
console.log('\n\n\n')
