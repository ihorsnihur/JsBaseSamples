var varTest;// undefined

varTest = 5//in strict mode - error - use without declaration

//properties created with var cannot be deleted.
//var in body of function - local variable, scoped to a function
//var in top-level code - global scope - global variable - props of global obj

//As described in §3.10.1, variables are defined throughout the script
//or function in which they are declared—their declaration is “hoisted” up to the start
//of the script or function. 

//Initialization, however, occurs at the location of the var statement, and the value of the variable is undefined before that point in the code.

//Змінна обявлена через ВАР доступна в всьому локальному скоупі, навіть якщо вона обявлена в кінці скоупу
//Значення отримує змінна тільки після стрічки var test = 5;

//var in for/for-in - also are hoisted, just like variables declared outside of a loop
// for (var i = 0; i < 10; i++) console.log(i);
// for (var i = 0, j = 10; i < 10; i++ , j--) console.log(i * j);
//for(var i in o) console.log(i);

//CONST

//Constants are like variables except that assignments to them are ignored (attempting to alter a constant does not cause an error) and attempts to redeclare them cause errors
// const pi = 3.14; // Define a constant and give it a value.
// pi = 4; // Any future assignments to it are silently ignored.
// const pi = 4; // It is an error to redeclare a constant.
// var pi = 4; // This is also an error

//The const keyword behaves much like the var keyword: there is no block scope, and
//constants are hoisted to the top of the enclosing function definition.

//const - like variable, reasigning are ignored, hoisted to the top, no block scope


//LET
// added in js 1.7
// for block scope!!!
// щоб не було хойстінгу, обмежитти скоуп змінної
//The let keyword can be used in four ways:
//• as a variable declaration like var;
//• in a for or for/in loop, as a substitute for var;
//• as a block statement, to define new variables and explicitly delimit their scope; and
//• to define variables that are scoped to a single expression.

//var - function scope, доступна в всій функції
//let - block scope, обявлена в for or for-in змінна не буде доступна поза його межами

function oddsums(n) {
    //console.log(total);//reference error  !!!!!!!!!!!!!!!
    //total виходить не хойститься
    let total = 0, result = []; // Defined throughout the function
    for (let x = 1; x <= n; x++) { // x is only defined in the loop
        let odd = 2 * x - 1; // odd only defined in this loop
        total += odd;
        result.push(total);
    }
    // Using x or odd here would cause a ReferenceError
    return result;
}
oddsums(5);

//Variables declared with var exist throughout the function in which they are declared,
//but they are not initialized until the var statement actually runs. 

    //Запитати за цей шмат Вову ..... я тестив то вище Let змінну не можна юзати...
//Variables declared with let are similar: if you attempt to use
//a variable before its let statement (but within the same block as the let statement), the
//variable will exist but its value will be undefined.


//================
//It is important to understand that the variable initializer expressions of a let block are
//not part of the block and are interpreted in the outer scope. 
//обвявлена в блоці змінна Лет ініціалізується вище
// let x = 1, y = 2;
//     let(x = x + 1, y = x + 2) //ЗАПИТАТИ ВОВУ!!!
// { // Note that we're shadowing variables
//     console.log(x + y); // Prints 5
// };
// console.log(x + y); // Prints 3

// let x=1, y=2;
// console.log(let (x=x+1,y=x+2) x+y); // Prints 5

//270 сторінка