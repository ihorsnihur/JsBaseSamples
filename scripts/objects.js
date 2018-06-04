var func1 = function () {
    var o1 = Object.create({ x: 1, y: 2 });
    var o2 = Object.create(null);
    var o3 = Object.create(Object.prototype);

    var book = { author: { surname: "Jhon" } };


    var author = book.author; // Get the "author" property of the book.
    var name = author.surname // Get the "surname" property of the author.
    var title = book["main title"] // Get the "main title" property of the book.

    book.edition = 6; // Create an "edition" property of book.
    book["main title"] = "ECMAScript"; // Set the "main title" property.

    // object.property
    // object["property"]

    //in case array we get elem by INDEX
    //in case object [] we use string as property name

}

// inherit() returns a newly created object that inherits properties from the
// prototype object p. It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.
function inherit(p) {
    if (p == null) throw TypeError(); // p must be a non-null object
    if (Object.create) // If Object.create() is defined...
        return Object.create(p); // then just use it.
    var t = typeof p; // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() { }; // Define a dummy constructor function.
    f.prototype = p; // Set its prototype property to p.
    return new f(); // Use f() to create an "heir" of p.
}

var func2 = function () {

    function TestObj1() {
        this.someVal = 100;
    }

    function TestObj2() {
        this.someVal2 = 20;
    }

    var testObj = new TestObj1();
    TestObj2.prototype = testObj;//TestObj1; - wrong
    //we must use object instance
    testObj.someVal = 50;
    var testVal = new TestObj2();
    //testVal.someVal = 50;


    console.log(testVal.someVal);
    console.log(testVal.someVal2);
    console.log(Object.getOwnPropertyNames(testVal));// all own props
    console.log(Object.keys(testVal));//only enumerable
}

var removeProperties = function () {
    //remove property 
    var book = { author: { surname: "Jhon" } };

    delete book.author; // The book object now has no author property.
    delete book["main title"]; // Now 

    var o = { x: 1 }; // o has own property x and inherits property toString
    delete o.x; // Delete x, and return true
    delete o.x; // Do nothing (x doesn't exist), and return true
    delete o.toString; // Do nothing (toString isn't an own property), return true
    delete 1; // Nonsense, but evaluates to true

    delete Object.prototype; // Can't delete; property is non-configurable
    var x = 1; // Declare a global variable
    delete this.x; // Can't delete this property
    function f() { } // Declare a global function
    delete this.f; // Can't delete this property either

}


var testingProperties = function () {
    //1
    var o = { x: 1 }
    "x" in o; // true: o has an own property "x"
    "y" in o; // false: o doesn't have a property "y"
    "toString" in o; // true: o inherits a toString property

    //2
    var o = { x: 1 }
    o.hasOwnProperty("x"); // true: o has an own property x
    o.hasOwnProperty("y"); // false: o doesn't have a property y
    o.hasOwnProperty("toString"); // false: toString is an inherited property

    //3
    var o = inherit({ y: 2 });
    o.x = 1;
    //own property and its enumerable attribute is true - return true in that case
    o.propertyIsEnumerable("x"); // true: o has an own enumerable property x
    o.propertyIsEnumerable("y"); // false: y is inherited, not own
    Object.prototype.propertyIsEnumerable("toString"); // false: not enumerable


    var o = { x: 1 }
    o.x !== undefined; // true: o has a property x
    o.y !== undefined; // false: o doesn't have a property y
    o.toString !== undefined; // true: o inherits a toString property

    //in краще перевіряє чи є пропертя в обєкті
    var o = { x: undefined } // Property is explicitly set to undefined
    o.x !== undefined // false: property exists but is undefined
    o.y !== undefined // false: property doesn't even exist
    "x" in o // true: the property exists
    "y" in o // false: the property doesn't exists
    delete o.x; // Delete the property x
    "x" in o // false: it doesn't exist anymore
}


var enumerateProperties = function () {

    var o = { x: 1, y: 2, z: 3 }; // Three enumerable own properties
    o.propertyIsEnumerable("toString") // => false: not enumerable
    for (p in o) // Loop through the properties
        console.log(p); // Prints x, y, and z, but not toString

    for (p in o) {
        if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
    }

    for (p in o) {
        if (typeof o[p] === "function") continue; // Skip methods
    }

    function extend(o, p) {
        for (prop in p) { // For all props in p.
            o[prop] = p[prop]; // Add the property to o.
        }
        return o;
    }

    function merge(o, p) {
        for (prop in p) { // For all props in p.
            if (o.hasOwnProperty[prop]) continue; // Except those already in o.
            o[prop] = p[prop]; // Add the property to o.
        }
        return o;
    }

    function restrict(o, p) {
        for (prop in o) { // For all props in o
            if (!(prop in p)) delete o[prop]; // Delete if not in p
        }
        return o;
    }

    function subtract(o, p) {
        for (prop in p) { // For all props in p
            delete o[prop]; // Delete from o (deleting a
            // nonexistent prop is harmless)
        }
        return o;
    }

    function union(o, p) { return extend(extend({}, o), p); }

    function intersection(o, p) { return restrict(extend({}, o), p); }

    function keys(o) {
        if (typeof o !== "object") throw TypeError(); // Object argument required
        var result = []; // The array we will return
        for (var prop in o) { // For all enumerable properties
            if (o.hasOwnProperty(prop)) // If it is an own property
                result.push(prop); // add it to the array.
        }
        return result; // Return the array.
    }

    function ConvertArrToObj(mass) {
        if (mass == null) throw TypeError();
        // if (typeof mass !== "Array" ) throw TypeError();
        if (!Array.isArray(mass)) throw TypeError();

        var o = {};
        for (let index = 0; index < mass.length; index++) {
            const element = mass[index];
            o[element[0]] = element[1]
        }
        return o;
    }

    var mass = new Array();
    var mass2 = [];
    mass.push(["a", 2]);
    mass.push(["b", 3]);
    mass.push(["c", 52]);
    console.log(mass);
    console.log(typeof mass);// чого вертає object
    console.log(Array.isArray(mass));
    console.log(Array.isArray(mass2));
    console.log(Array.isArray([]));
    // [["a", 2], ["b", 3]]

    var o = ConvertArrToObj(mass);
    console.log(o);
    for (const key in o) {
        if (o.hasOwnProperty(key)) {
            const element = o[key];
            console.log(key, element);
        }
    }
}


var propGetAndSet = function () {


    var p = {
        // x and y are regular read-write data properties.
        x: 1.0,
        y: 1.0,
        // r is a read-write accessor property with getter and setter.
        // Don't forget to put a comma after accessor methods.
        get r() { return Math.sqrt(this.x * this.x + this.y * this.y); },
        set r(newvalue) {
            var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
            var ratio = newvalue / oldvalue;
            this.x *= ratio;//this - refer to the object!!!
            this.y *= ratio;
        },
        // theta is a read-only accessor property with getter only.
        get theta() { return Math.atan2(this.y, this.x); }
    };

    // This object generates strictly increasing serial numbers
    var serialnum = {
        // This data property holds the next serial number.
        // The $ in the property name hints that it is a private property.
        $n: 0,
        // Return the current value and increment it
        get next() { return this.$n++; },
        // Set a new value of n, but only if it is larger than current
        set next(n) {
            if (n >= this.$n) this.$n = n;
            else throw "serial number can only be set to a larger value";
        }
    };

    // This object has accessor properties that return random numbers.
    // The expression "random.octet", for example, yields a random number
    // between 0 and 255 each time it is evaluated.
    var random = {
        get octet() { return Math.floor(Math.random() * 256); },
        get uint16() { return Math.floor(Math.random() * 65536); },
        get int16() { return Math.floor(Math.random() * 65536) - 32768; }
    };

}

var propertyAttributes = function () {
    //written, enumerated, and configured -  ECMAScript 5 API 
    //The four attributes of a data property are value, writable,
    //enumerable, and configurable.
    //So the four attributes of an accessor property are get, set, enumerable, and configurable

    // Returns {value: 1, writable:true, enumerable:true, configurable:true}
    Object.getOwnPropertyDescriptor({ x: 1 }, "x");
    // Now query the octet property of the random object defined above.
    // Returns { get: /*func*/, set:undefined, enumerable:true, configurable:true}
    Object.getOwnPropertyDescriptor(random, "octet");
    // Returns undefined for inherited properties and properties that don't exist.
    Object.getOwnPropertyDescriptor({}, "x"); // undefined, no such prop
    Object.getOwnPropertyDescriptor({}, "toString"); // undefined, inherited

    ///////////

    var o = {}; // Start with no properties at all
    // Add a nonenumerable data property x with value 1.
    Object.defineProperty(o, "x", {
        value: 1,
        writable: true,
        enumerable: false,
        configurable: true
    });
    // Check that the property is there but is nonenumerable
    o.x; // => 1
    Object.keys(o) // => []
    // Now modify the property x so that it is read-only
    Object.defineProperty(o, "x", { writable: false });
    // Try to change the value of the property
    o.x = 2; // Fails silently or throws TypeError in strict mode
    o.x // => 1
    // The property is still configurable, so we can change its value like this:
    Object.defineProperty(o, "x", { value: 2 });
    o.x // => 2
    // Now change x from a data property to an accessor property
    Object.defineProperty(o, "x", { get: function () { return 0; } });
    o.x // => 0


    var p = Object.defineProperties({}, {
        x: { value: 1, writable: true, enumerable: true, configurable: true },
        y: { value: 1, writable: true, enumerable: true, configurable: true },
        r: {
            get: function () { return Math.sqrt(this.x * this.x + this.y * this.y) },
            enumerable: true,
            configurable: true
        }
    });


    /*
* Add a nonenumerable extend() method to Object.prototype.
* This method extends the object on which it is called by copying properties
* from the object passed as its argument. All property attributes are
* copied, not just the property value. All own properties (even non-
* enumerable ones) of the argument object are copied unless a property
* with the same name already exists in the target object.
*/
    Object.defineProperty(Object.prototype,
        "extend", // Define Object.prototype.extend
        {
            writable: true,
            enumerable: false, // Make it nonenumerable
            configurable: true,
            value: function (o) { // Its value is this function
                // Get all own props, even nonenumerable ones
                var names = Object.getOwnPropertyNames(o);
                // Loop through them
                for (var i = 0; i < names.length; i++) {
                    // Skip props already in this object
                    if (names[i] in this) continue;
                    // Get property description from o
                    var desc = Object.getOwnPropertyDescriptor(o, names[i]);
                    // Use it to create property on this
                    Object.defineProperty(this, names[i], desc);
                }
            }
        });

    //API for querying and setting getters and setters. 
    //__lookupGetter__() and __lookupSetter__()

    //And __defineGetter__() and __defineSetter__() define a getter or
    //setter: pass the property name first and the getter or setter method second.

}


var objectAttributes = function () {
    //prototype, class, and extensible attributes

    //objects created from object literals use Object.prototype as their prototype.
    //Objects created with new use the value of the prototype property of their constructor function as their prototype.
    //And objects created with Object.create() use the first argument to that function (which may be null) as their prototype.

    //Objects created with a new expression usually inherit a constructor property that refers to the constructor function used to create the object.

    Object.getPrototypeOf();
    o.constructor.prototype

    var p = { x: 1 }; // Define a prototype object.
    var o = Object.create(p); // Create an object with that prototype.
    p.isPrototypeOf(o) // => true: o inherits from p
    Object.prototype.isPrototypeOf(o) // => true: p inherits from Object.prototype
    //instanceof

    //class
    function classof(o) {
        if (o === null) return "Null";
        if (o === undefined) return "Undefined";
        return Object.prototype.toString.call(o).slice(8, -1);
    }

    //Objects created through object literals or by Object.create have a class attribute of “Object”.


    classof(null) // => "Null"
    classof(1) // => "Number"
    classof("") // => "String"
    classof(false) // => "Boolean"
    classof({}) // => "Object"
    classof([]) // => "Array"
    classof(/./) // => "Regexp"
    classof(new Date()) // => "Date"
    classof(window) // => "Window" (a client-side host object)
    function f() { }; // Define a custom constructor
    classof(new f()); // => "Object


    // Create a sealed object with a frozen prototype and a nonenumerable property
    var o = Object.seal(
            Object.create(
            Object.freeze({x:1}), {y: {value: 2, writable: true}}));

            //Object.preventExtensions()
            //Object.isExtensible()
            //Object.seal()  - non extensible and non configurable
            //Object.freeze() - non extensible and non configurable, read only

}


var serializingObjects = function(){

    o = {x:1, y:{z:[false,null,""]}}; // Define a test object
s = JSON.stringify(o); // s is '{"x":1,"y":{"z":[false,null,""]}}'
p = JSON.parse(s); // p is a deep copy of o

//NaN, Infinity, and -Infinity are serialized to null.  
//Function, RegExp, and Error objects and the undefined value cannot be serialized or restored. 
//JSON.stringify() serializes only the enumerable own properties of an object
}

var objectMethods = function(){

}
//As discussed earlier, all JavaScript objects (except those explicitly created without a
//prototype) inherit properties from Object.prototype.

hasOwnProperty()
propertyIsEnumerable()
isPrototypeOf() 
Object.create()
Object.getPrototypeOf()
toString() 
toLocaleString() //The Date and Number classes define customized versions of toLocaleString()
JSON.stringify() 
valueOf() //, but it is called when JavaScript needs to convert an object to some primitive type other than a string—typically, a number. J
Date.valueOf()


//home work
//convert [["a", 2], ["b", 3]] to object
//enumerateProperties();
objectMethods();