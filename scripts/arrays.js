//JavaScript arrays may be sparse: the elements need not have contiguous indexes and there may be gaps. 
// zero-based
// untyped
// dynamic
// sparse
// length
// Array.prototype
// array-like object
//Remember that arrays are a specialized kind of object.
//JavaScript converts the numeric array index you specify to a string—the index 1 becomes the string "1"—then uses that string as a property name
//It is helpful to clearly distinguish an array index from an object property name.  - by length
//All indexes are property names, but only property names that are integers between 0 and 232–1 are indexes


var array1 = function () {
    var empty = []; // An array with no elements
    var primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
    var misc = [1.1, true, "a",]; // 3 elements of various types + trailing comma

    var base = 1024;
    var table = [base, base + 1, base + 2, base + 3];
    var b = [[1, { x: 1, y: 2 }], [2, { x: 3, y: 4 }]];

    var count = [1, , 3]; // An array with 3 elements, the middle one undefined.
    var undefs = [, ,]; // An array with 2 elements, both undefined.
    //trailing comma, so [,,] has only two elements, not three.

    var a = new Array();
    var a = new Array(10);
    var a = new Array(5, 4, 3, 2, 1, "testing, testing");
    console.log(a);
}

var readingAndWritingArray = function () {
    var a = ["world"]; // Start with a one-element array
    var value = a[0]; // Read element 0
    a[1] = 3.14; // Write element 1
    i = 2;
    a[i] = 3; // Write element 2
    a[i + 1] = "hello"; // Write element 3
    a[a[i]] = a[0]; // Read elements 0 and 2, write element 3


    a[-1.23] = true; // This creates a property named "-1.23"
    a["1000"] = 0; // This the 1001st element of the array
    a[1.000] // Array index 1. Same as a[1]

    a = [true, false]; // This array has elements at indexes 0 and 1
    a[2] // => undefined. No element at this index.
    a[-1] // => undefined. No property with this name   
}

var sparseArrays = function () {
    a = new Array(5); // No elements, but a.length is 5.
    a = []; // Create an array with no elements and length = 0.
    a[1000] = 0; // Assignment adds one element but sets length to 1001.


    //Arrays that are sufficiently sparse are typically implemented in a slower, more memoryefficient way than dense arrays are, and looking up elements in such an array will take
    //about as much time as regular object property lookup.

    var a1 = [, , ,]; // This array is [undefined, undefined, undefined]
    var a2 = new Array(3); // This array has no values at all
    0 in a1 // => true: a1 has an element with index 0
    0 in a2 // => false: a2 has no element with index 0

    //The omitted element exists in the array and has the value undefined. 

}

var arrayLength = function () {
    //if you assign a value to an array element whose index i is greater than or equal to the array’s current
    //length, the value of the length property is set to i+1.
    a = [1, 2, 3, 4, 5]; // Start with a 5-element array.
    a.length = 3; // a is now [1,2,3].
    a.length = 0; // Delete all elements. a is [].
    a.length = 5; // Length is 5, but no elements, like new Array(5)


    //In ECMAScript 5, you can make the length property of an array read - only with
    //Object.defineProperty()(see §6.7)
    a = [1, 2, 3]; // Start with a 3-element array.
    Object.defineProperty(a, "length", // Make the length property
        { writable: false }); // readonly.
    a.length = 0; // a is unchanged.

    //Similarly, if you make an array element nonconfigurable, it cannot be deleted. If it
    //cannot be deleted, then the length property cannot be set to less than the index of the
    //nonconfigurable element. (See §6.7 and the Object.seal() and Object.freeze() methods in §6.8.3.)
}

var addingAndDeletingArrayElem = function () {
    a = [] // Start with an empty array.
    a[0] = "zero"; // And add elements to it.
    a[1] = "one";

    a = []; // Start with an empty array
    a.push("zero") // Add a value at the end. a = ["zero"]
    a.push("one", "two") // Add two more values. a = ["zero", "one", "two"]
    // or a[a.length]
    unshift()
    a = [1, 2, 3];
    delete a[1]; // a now has no element at index 1
    1 in a // => false: no array index 1 is defined
    a.length // => 3: delete does not affect array length
    //Deleting an array element is similar to (but subtly different than) assigning undefined     to that element
    pop()
    //shift()  the shift() method shifts     all elements down to an index one lower than their current index
    //pop() and shift()     are covered in §7.8 and in the reference section
    // splice()

}


var iteratingArray = function () {

    var keys = Object.keys(o);     //  Get  an  array  of  property  names  for  object  o
    var values = []                            //  Store  matching  property  values  in  this  array
    for (var i = 0; i < keys.length; i++) {    //  For  each  index  in  the  array        
        var key = keys[i];                                    //  Get  the  key  at  that  index        
        values[i] = o[key];                                  //  Store  the  value  in  the  values  array
    }

    for (var i = 0, len = keys.length; i < len; i++) {
        //  loop  body  remains  the  same}
    }

    for (var i = 0; i < a.length; i++) {
        if (!a[i]) continue; // Skip null, undefined, and nonexistent elements
        // loop body here
    }

    for (var i = 0; i < a.length; i++) {
        if (a[i] === undefined) continue; // Skip undefined + nonexistent elements
        // loop body here
    }

    for (var i = 0; i < a.length; i++) {
        if (!(i in a)) continue; // Skip nonexistent elements
        // loop body here
    }

    for (var index in sparseArray) {
        var value = sparseArray[index];
        // Now do something with index and value
    }

    for (var i in a) {
        if (!a.hasOwnProperty(i)) continue; // Skip inherited properties
        // loop body here
    }

    for (var i in a) {
        // Skip i if it is not a non-negative integer
        if (String(Math.floor(Math.abs(Number(i)))) !== i) continue;
    }

    var data = [1, 2, 3, 4, 5]; // This is the array we want to iterate
    var sumOfSquares = 0; // We want to compute the sum of the squares of data
    data.forEach(function (x) { // Pass each element of data to this function
        sumOfSquares += x * x; // add up the squares
    });
    // sumOfSquares // =>55 : 1+4+9+16+25
}

var arrayMethods = function () {

    var a = [1, 2, 3]; // Create a new array with these three elements
    a.join(); // => "1,2,3"
    a.join(" "); // => "1 2 3"
    a.join(""); // => "123"
    var b = new Array(10); // An array of length 10 with no elements
    b.join('-') // => '---------': a string of 9 hyphens


    String.split()


    var a = [1, 2, 3];
    a.reverse().join() // => "3,2,1" and a is now [3,2,1]


    var a = new Array("banana", "cherry", "apple");
    a.sort();
    var s = a.join(", "); // s == "apple, banana, cherry


    var a = [33, 4, 1111, 222];
    a.sort(); // Alphabetical order: 1111, 222, 33, 4
    a.sort(function (a, b) { // Numerical order: 4, 33, 222, 1111
        return a - b; // Returns &lt; 0, 0, or &gt; 0, depending on order
    });
    a.sort(function (a, b) { return b - a }); // Reverse numerical order



    a = ['ant', 'Bug', 'cat', 'Dog']
    a.sort(); // case-sensitive sort: ['Bug','Dog','ant',cat']
    a.sort(function (s, t) { // Case-insensitive sort
        var a = s.toLowerCase();
        var b = t.toLowerCase();
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }); // => ['ant','Bug','cat','Dog']


    var a = [1, 2, 3];
    a.concat(4, 5) // Returns [1,2,3,4,5]
    a.concat([4, 5]); // Returns [1,2,3,4,5]
    a.concat([4, 5], [6, 7]) // Returns [1,2,3,4,5,6,7]
    a.concat(4, [5, [6, 7]]) // Returns [1,2,3,4,5,[6,7]]


    var a = [1, 2, 3, 4, 5];
    a.slice(0, 3); // Returns [1,2,3]
    a.slice(3); // Returns [4,5]
    a.slice(1, -1); // Returns [2,3,4]
    a.slice(-3, -2); // Returns [3]



    var a = [1, 2, 3, 4, 5, 6, 7, 8];
    a.splice(4); // Returns [5,6,7,8]; a is [1,2,3,4]
    a.splice(1, 2); // Returns [2,3]; a is [1,4]
    a.splice(1, 1); // Returns [4]; a is [1]

    var a = [1, 2, 3, 4, 5];
    a.splice(2, 0, 'a', 'b'); // Returns []; a is [1,2,'a','b',3,4,5]
    a.splice(2, 2, [1, 2], 3); // Returns ['a','b']; a is [1,2,[1,2],3,3,4,5]

    var stack = []; // stack: []
    stack.push(1, 2); // stack: [1,2] Returns 2
    stack.pop(); // stack: [1] Returns 2
    stack.push(3); // stack: [1,3] Returns 2
    stack.pop(); // stack: [1] Returns 3
    stack.push([4, 5]); // stack: [1,[4,5]] Returns 2
    stack.pop() // stack: [1] Returns [4,5]
    stack.pop(); // stack: [] Returns 1

    var a = []; // a:[]
    a.unshift(1); // a:[1] Returns: 1
    a.unshift(22); // a:[22,1] Returns: 2
    a.shift(); // a:[1] Returns: 22
    a.unshift(3, [4, 5]); // a:[3,[4,5],1] Returns: 3
    a.shift(); // a:[[4,5],1] Returns: 3
    a.shift(); // a:[1] Returns: [4,5]
    a.shift(); // a:[] Returns: 1


    [1, 2, 3].toString() // Yields '1,2,3'
    ["a", "b", "c"].toString() // Yields 'a,b,c'
    [1, [2, 'c']].toString() // Yields '1,2,c'

    //ECMAScript 5
    //If the array is sparse, the function you pass is not invoked for nonexistent
    //elements. 

    //In most cases, the function you supply is invoked with three arguments: the
    //value of the array element, the index of the array element, and the array itself. 

    //None of the ECMAScript 5 array methods modify the array on which they are invoked.

    //As described above, you pass the function as the first argument to
    //forEach(). forEach() then invokes your function with three arguments: the value of the
    //array element, the index of the array element, and the array itself.

    var data = [1, 2, 3, 4, 5]; // An array to sum
    // Compute the sum of the array elements
    var sum = 0; // Start at 0
    data.forEach(function (value) { sum += value; }); // Add each value to sum
    sum // => 15
    // Now increment each array element
    data.forEach(function (v, i, a) { a[i] = v + 1; });
    data // => [2,3,4,5,6]

    //Note that forEach() does not provide a way to terminate iteration before all elements
    //have been passed to the function. That is, there is no equivalent of the break statement
    //you can use with a regular for loop.

    function foreach(a, f, t) {
        try { a.forEach(f, t); }
        catch (e) {
            if (e === foreach.break) return;
            else throw e;
        }
    }
    foreach.break = new Error("StopIteration");

    //map
    a = [1, 2, 3];
    b = a.map(function (x) { return x * x; }); // b is [1, 4, 9]

    //filter
    a = [5, 4, 3, 2, 1];
    smallvalues = a.filter(function (x) { return x < 3 }); // [2, 1]
    everyother = a.filter(function (x, i) { return i % 2 == 0 }); // [5, 3, 1]

    //Note that filter() skips missing elements in sparse arrays, and that its return value is
    //always dense. To close the gaps in a sparse array, you can do this:
    var dense = sparse.filter(function () { return true; });

    //And to close gaps and remove undefined and null elements you can use filter like this:
    a = a.filter(function (x) { return x !== undefined && x != null; });




    a = [1, 2, 3, 4, 5];
    a.every(function (x) { return x < 10; }) // => true: all values < 10.
    a.every(function (x) { return x % 2 === 0; }) // => false: not all values even.



    a = [1, 2, 3, 4, 5];
    a.some(function (x) { return x % 2 === 0; }) // => true a has some even numbers.
    a.some(isNaN) // => false: a has no non-numbers.



    var a = [1, 2, 3, 4, 5]
    var sum = a.reduce(function (x, y) { return x + y }, 0); // Sum of values
    var product = a.reduce(function (x, y) { return x * y }, 1); // Product of values
    var max = a.reduce(function (x, y) { return (x > y) ? x : y; }); // Largest value

    //reduce() takes two arguments.
    //The first is the function that performs the reduction operation.
    //The second (optional) argument is an initial value to pass to the function.

    //When you invoke reduce() like this with no initial
    //value, it uses the first element of the array as the initial value.


    //reduceRight() works just like reduce(), except that it processes the array from highest
    //index to lowest (right-to-left), rather than from lowest to highest.

    var a = [2, 3, 4]
    // Compute 2^(3^4). Exponentiation has right-to-left precedence
    var big = a.reduceRight(function (accumulator, value) {
        return Math.pow(value, accumulator);
    });



    var objects = [{ x: 1 }, { y: 2 }, { z: 3 }];
    var merged = objects.reduce(union); // => {x:1, y:2, z:3}



    var objects = [{ x: 1, a: 1 }, { y: 2, a: 2 }, { z: 3, a: 3 }];
    var leftunion = objects.reduce(union); // {x:1, y:2, z:3, a:1}
    var rightunion = objects.reduceRight(union); // {x:1, y:2, z:3, a:3}


    a = [0, 1, 2, 1, 0];
    a.indexOf(1) // => 1: a[1] is 1
    a.lastIndexOf(1) // => 3: a[3] is 1
    a.indexOf(3) // => -1: no element has value 3


    // Find all occurrences of a value x in an array a and return an array
    // of matching indexes
    function findall(a, x) {
        var results = [], // The array of indexes we'll return
            len = a.length, // The length of the array to be searched
            pos = 0; // The position to search from
        while (pos < len) { // While more elements to search...
            pos = a.indexOf(x, pos); // Search
            if (pos === -1) break; // If nothing found, we're done.
            results.push(pos); // Otherwise, store index in array
            pos = pos + 1; // And start next search at next element
        }
        return results; // Return array of indexes
    }



}
var arrayType = function () {
    // ECMAScript 5
    Array.isArray([]) // => true
    Array.isArray({}) // => false

    //The typeof operator does not help here: it returns “object” for arrays
    //(and for all objects other than functions)
    //The instanceof operator works in simple cases:
    [] instanceof Array // => true
            ({}) instanceof Array // => false


    //for ecmaScript 3 - EcmaScript 5 do the same - Array.isArray()
    var isArray = Function.isArray || function (o) {
        return typeof o === "object" &&
            Object.prototype.toString.call(o) === "[object Array]";
    };

}

var arrayLikeObject = function () {

    //• The length property is automatically updated as new elements are added to the list.
    //• Setting length to a smaller value truncates the array.
    //• Arrays inherit useful methods from Array.prototype.
    //• Arrays have a class attribute of “Array”


    // array-like object - you cannot directly invoke array methods on them or expect special behavior from the
    // length property


    var a = {}; // Start with a regular empty object
    // Add properties to make it "array-like"
    var i = 0;
    while (i < 10) {
        a[i] = i * i;
        i++;
    }
    a.length = i;
    // Now iterate through it as if it were a real array
    var total = 0;
    for (var j = 0; j < a.length; j++)
        total += a[j];



    // Determine if o is an array-like object.
    // Strings and functions have numeric length properties, but are
    // excluded by the typeof test. In client-side JavaScript, DOM text
    // nodes have a numeric length property, and may need to be excluded
    // with an additional o.nodeType != 3 test.
    function isArrayLike(o) {
        if (o && // o is not null, undefined, etc.
            typeof o === "object" && // o is an object
            isFinite(o.length) && // o.length is a finite number
            o.length >= 0 && // o.length is non-negative
            o.length === Math.floor(o.length) && // o.length is an integer
            o.length < 4294967296) // o.length < 2^32
            return true; // Then o is array-like
        else
            return false; // Otherwise it is not
    }


    //array like object - You can invoke them indirectly using the Function.call method, however:

    var a = { "0": "a", "1": "b", "2": "c", length: 3 }; // An array-like object
    Array.prototype.join.call(a, "+") // => "a+b+c"
    Array.prototype.slice.call(a, 0) // => ["a","b","c"]: true array copy
    Array.prototype.map.call(a, function (x) {
        return x.toUpperCase();
    }) // => ["A","B","C"]


    var a = { "0": "a", "1": "b", "2": "c", length: 3 }; // An array-like object
    Array.join(a, "+")
    Array.slice(a, 0)
    Array.map(a, function (x) { return x.toUpperCase(); })

    //You can write code like this to ensure that the functions you need
    //exist before you use them:
    // in some browser these methods could be unexist
    Array.join = Array.join || function (a, sep) {
        return Array.prototype.join.call(a, sep);
    };
    Array.slice = Array.slice || function (a, from, to) {
        return Array.prototype.slice.call(a, from, to);
    };
    Array.map = Array.map || function (a, f, thisArg) {
        return Array.prototype.map.call(a, f, thisArg);
    }
}

var stringAsArray = function () {
    var s = test;
    s.charAt(0) // => "t"
    s[1] // => "e"

    // string - read only array behave
    //Array.isArray() for string - false
    //typeof for string - string
    //charAt() or [] for get elem

    //aaray like object - we can apply generic array methods to them

    s = "JavaScript"
    Array.prototype.join.call(s, " ") // => "J a v a S c r i p t"
    Array.prototype.filter.call(s, // Filter the characters of the string
        function (x) {
            return x.match(/[^aeiou]/); // Only match nonvowels
        }).join("") // => "JvScrpt"


        //Keep in mind that strings are immutable values
        //Array methods like push(), sort(), reverse(), and splice() modify an array in place and do not work on strings.

}



iteratingArray();
