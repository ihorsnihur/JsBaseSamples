//function definition expression 
//function declaration statement


//Example 8 - 1. Defining JavaScript functions
// Print the name and value of each property of o. Return undefined.
function printprops(o) {
    for (var p in o)
        console.log(p + ": " + o[p] + "\n");
}
// Compute the distance between Cartesian points (x1,y1) and (x2,y2).
function distance(x1, y1, x2, y2) {
    var dx = x2 - x1;
    var dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}
// A recursive function (one that calls itself) that computes factorials
// Recall that x! is the product of x and all positive integers less than it.
function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

// This function expression defines a function that squares its argument.
// Note that we assign it to a variable
var square = function (x) { return x * x; }

// Function expressions can include names, which is useful for recursion

var f = function fact(x) { if (x <= 1) return 1; else return x * fact(x - 1); };
// Function expressions can also be used as arguments to other functions:
//data.sort(function(a,b) { return a-b; });

// Function expressions are sometimes defined and immediately invoked:
var tensquared = (function (x) { return x * x; }(10));

//so functions defined with expressions cannot be invoked
//before they are defined.

//1
//function definition expression  
var square = function (x) { return x * x; }

//2
//function declaration statment
function printprops(o) {
    for (var p in o)
        console.log(p + ": " + o[p] + "\n");
}

//hoisted
//1
//unction declaration statements are “hoisted” to the top of the
//enclosing script

//2
//This is not true for functions defined as expressions, 

var definingFunction = function () {
    //2 example
    //in order to invoke a function, you must be able to
    //refer to it, and you can’t refer to a function defined as an expression until it is assigned
    //to a variable. Variable declarations are hoisted (see §3.10.1, but assignments to those
    //variables are not hoisted, so functions defined with expressions cannot be invoked
    //before they are defined.



    //console.log("first call - ", square(5)); - type error, we cann't call function before value(refer to func) will be assigned to variable
    //hoisted only var - devlaration, not assigned value, square is undefined in this place

    var square = function (x) { return x * x; }

    console.log("second call, after definition - ", square(5));


    //1 example 
    //As described in §5.3.2, function declaration statements are “hoisted” to the top of the
    //enclosing script or the enclosing function, so that functions declared in this way may
    //be invoked from code that appears before they are defined. 
    console.log("declaration statment test - ", square2(5));//okey, 
    function square2(x) { return x * x; }

    ///
    //Variable declarations are hoisted (see §3.10.1, but assignments to those
    //variables are not hoisted, so functions defined with expressions cannot be invoked
    //before they are defined

    //Functions with no return value are sometimes called procedures


    //nested function
    // variable scoping rules:
    //they can access the parameters and variables of the function (or functions) they are nested within. 
    function hypotenuse(a, b) {
        function square(x) { return x * x; }
        return Math.sqrt(square(a) + square(b));
    }


    //1 - function declaration statement cannot appear inside of loops, conditionals, or try/catch/finally or with statements.
    //2 -  Function definition expressions may appear anywhere in your JavaScript code.


    //JavaScript functions can be invoked in four ways:
    //• as functions,
    //• as methods
    //• as constructors, and
    //• indirectly through their call() and apply() methods

    //For function invocation in ECMAScript 3 and nonstrict ECMAScript 5, the invocation
    //context (the this value) is the global object. In strict mode, however, the invocation
    //context is undefined

    // Define and invoke a function to determine if we're in strict mode.
    var strict = (function () { return !this; }());


    //
    //A method is nothing more than a JavaScript function that is stored in a property of an object. 
    //o.m(x, y); // m - method of object o


    var calculator = { // An object literal
        operand1: 1,
        operand2: 1,
        add: function () {
            // Note the use of the this keyword to refer to this object.
            this.result = this.operand1 + this.operand2;
        }
    };
    calculator.add(); // A method invocation to compute 1+1.
    calculator.result // => 2


    o["m"](x, y); // Another way to write o.m(x,y).
    a[0](z) // Also a method invocation (assuming a[0] is a function).

    //method - invoke on object, inside method we can use this fot access to properties
    rect.setSize(width, height);
    setRectSize(rect, width, height);
    //Method Chaining



    var o = { // An object o.
        m: function () { // Method m of the object. - has access to this
            var self = this; // Save the this value in a variable.
            console.log(this === o); // Prints "true": this is the object o.
            f(); // Now call the helper function f().
            function f() { // A nested function f - does not have access to this
                console.log(this === o); // "false": this is global or undefined
                console.log(self === o); // "true": self is the outer this value.
            }
        }
    };
    o.m(); // Invoke the method m on the object o

    //function declaration vs function expressions
//1 - експешин можна будь де писати, декларацыю не можна в блоках і віз
//2 - декларацію можнавикористовувати всюда, хойститься і літо і ідентифікатор функції, можна викликати
//а експрешин можна використовувати тільки після присвоєння змінній функції
//3 експрешин може бути іменованим, щоб посилатись на себе по ходу....рекурсивні функції наприклад


}


var functionDeclarationVsFunctionExpressions = function(){

    function funcDeclaration() {
        return 'A function declaration';
    }
    
    var funcExpression = function () {
        return 'A function expression';
    }

    //Similar to the var statement, function declarations are hoisted to the top of other code. Function expressions aren’t hoisted, which allows them to retain a copy of the local variables from the scope where they were defined.

    //benefits of func expression
    // As closures
    // As arguments to other functions
    // As Immediately Invoked Function Expressions (IIFE)

    //Closures are used when you want to give parameters to a function, before that function is executed. 

    
}

//definingFunction();
functionDeclarationVsFunctionExpressions();

