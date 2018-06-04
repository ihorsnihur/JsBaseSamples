//In ECMAScript 5 strict mode (§5.7.3), it is also an error to assign a value to an undeclared variable.
//test = 5;//without declaration - error in strict mode

// этот код будет работать по современному стандарту ES5

//reserved in strict mode:
//implements let private public yield interface package protected static

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Strict_mode
//https://ru.stackoverflow.com/questions/435546/%D0%A7%D1%82%D0%BE-%D0%B7%D0%BD%D0%B0%D1%87%D0%B8%D1%82-use-strict

"use strict";
//1 - не можна створити випадково змінну, не декларовані змінні не можна юзати
// mistypedVaraible = 17;//ReferenceError: mistypedVaraible is not defined
// console.log(mistypedVaraible);

//2 присвоєння яке закінчиться помилкою заборонене, екзепшин 
//read only prop
// var obj1 = {}; 
// Object.defineProperty(obj1, "x", { value: 42, writable: false }); 
// obj1.x = 9; // TypeError: Cannot assign to read only property 'x' of object

//only getter prop
// var obj2 = { get x() { return 17; } }; 
// obj2.x = 5; //TypeError: Cannot set property x of #<Object> which has only a getter


// Присвоение нового свойства non-extensible объекту 
// var fixed = {};
// Object.preventExtensions(fixed); 
// fixed.newProp = "ohai"; // TypeError: Cannot add property newProp, object is not extensible

// NaN -- глобальная переменная, защищённая от записи in strict mode


//3) проперті які е можна видаляти, буде езепшин при видалення 
// delete Object.prototype;

//4) не моуть повторюватись імена проперть, в звичайному моді буде значення присвоєне те яке останнє 
// var o = { p: 1, p: 2 }; // !!! синтаксическая ошибка - нема помилки, дивно, мала би бути
// console.log(o.p);

//Эти предыдущие аргументы всё ещё доступны через arguments[i], так что они не полностью потеряны. 

//5) аргументи в функцію мають бути унікальні, в звичайному моді остання назва перекриває попередні 
// function sum(a, a, c) { //SyntaxError: Duplicate parameter name not allowed in this context
//    "use strict"; 
//   return a + b + c; // ошибка, если код был запущен 
// } 

//6) заборонено 8 кову систему числення  
// var sum = 015 + // SyntaxError: Octal literals are not allowed in strict mode.
//     197 + 142;

//7) не можна використовувати with.
// var x = 17; with (obj) { // SyntaxError: Strict mode code may not include a with statement
//     // Если код не в строгом режиме, то будет ли x ссылаться на переменную var x, или  
//     // на свойство obj.x? Предугадать без запуска кода невозможно,   
//     // следовательно такой код не может быть эффективно оптимизирован
//     x;
// }

//9)  ключевые слова eval и arguments не могут быть переопределены или изменены. 

//10)Во-вторых, в строгом режиме поля объекта arguments не связаны с проименованными аргументами функции, а являются их продублированными копиями значений. 

//11) Во-первых, в строгом режиме зарезервирован для использования следующий список ключевых слов:
// implements, interface, let, package, private, protected, public, static и yield. 

//12) Запитати Вову
//в строгом режиме запрещается объявление функций глубже самого верхнего уровня скрипта или функции.
if (true) {
    function f() { } // !!! синтаксическая ошибка  
    f();

}

for (var i = 0; i < 5; i++) {
    function f2() { } // !!! синтаксическая ошибка 
    f2();
}

function baz() { // верно 
    function eit() { } // тоже верно 
} 

