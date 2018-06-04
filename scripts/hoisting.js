//The scope of a variable is the region of your program source code in which it is defined.
//Function parameters also count as local variables and are defined only within the body of the function
//Variables declared in funct are local variables and have local scope
//A global variable has global scope; it is defined everywhere in your JavaScript code. 

//local variable without VAR cat override/hide global variable
scope = "global"; // Declare a global variable, even without var.
function checkscope2() {
    scope = "local"; // Oops! We just changed the global variable.
    myscope = "local"; // This implicitly declares a new global variable.
    return [scope, myscope]; // Return two values.
}
checkscope2() // => ["local", "local"]: has side effects!
scope // => "local": global variable has changed.
myscope // => "local": global namespace cluttered up.



var scope = "global scope"; // A global variable
function checkscope() {
    var scope = "local scope"; // A local variable
    function nested() {
        var scope = "nested scope"; // A nested scope of local variables
        return scope; // Return the value in scope here
    }
    return nested();
}
checkscope() // => "nested scope

//function scope: variables are visible within the function in which they are defined and
//within any functions that are nested within that function.

function test(o) {
    var i = 0; // i is defined throughout function
    if (typeof o == "object") {
        var j = 0; // j is defined everywhere, not just block
        for (var k = 0; k < 10; k++) { // k is defined everywhere, not just loop
            console.log(k); // print numbers 0 through 9
        }
        console.log(k); // k is still defined: prints 10
    }
    console.log(j); // j is defined, but may not be initialized
}

//Curiously, this means that variables are even visible before they are declared. 
//This feature is HOISTED  to the top of the function
//ONLY declaration are hoisting
//but not any associated assignments

//vaiable is not actually initialized until the var statement is executed

var scope = "global";
function f() {
    console.log(scope); // Prints "undefined", not "global"
    var scope = "local"; // Variable initialized here, but defined everywhere
    console.log(scope); // Prints "local"
}
//scope in function HOISTED(only declaration), but not initialize in first line

function f() {
    var scope; // Local variable is declared at the top of the function
    console.log(scope); // It exists here, but still has "undefined" value
    scope = "local"; // Now we initialize it and give it a value
    console.log(scope); // And here it has the value we expect
}


//Since JavaScript does not have block scope, some programmers make
//a point of declaring all their variables at the top of the function
