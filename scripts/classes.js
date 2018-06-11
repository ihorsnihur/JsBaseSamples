//Class declarations are not hoisted 
// class declarations and class expressions.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
};

var classes = function () {
    let cp = new ColorPoint(25, 8, 'green');
    cp.toString(); // '(25, 8) in green'

    console.log(cp instanceof ColorPoint); // true
    console.log(cp instanceof Point); // true

    let inst = new MyClass();
    console.log(inst.getClassName()); // Me
    // console.log(Me.name); // ReferenceError: Me is not defined

    //constructor, static methods, prototype methods  
    class Foo {
        constructor(prop) {
            this.prop = prop;
        }
        static staticMethod() {
            return 'classy';
        }
        prototypeMethod() {
            return 'prototypical';
        }
    }
    let foo = new Foo(123);


    //Computed method names  


    class MyClass {
        get prop() {
            return 'getter';
        }
        set prop(value) {
            console.log('setter: ' + value);
        }
    }

    class Foo {
        myMethod() { }
    }

    class Foo {
        ['my' + 'Method']() { }
    }

    const m = 'myMethod';
    class Foo {
        [m]() { }
    }

    class IterableClass {
        [Symbol.iterator]() {
            //···
        }
    }


    //Generator methods  
    class IterableArguments {
        constructor(...args) {
            this.args = args;
        }
        *[Symbol.iterator]() {
            for (let arg of this.args) {
                yield arg;
            }
        }
    }

    for (let x of new IterableArguments('hello', 'world')) {
        console.log(x);
    }
    // Output:
    // hello
    // world


    //Subclassing  
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }

    class ColorPoint extends Point {
        constructor(x, y, color) {
            super(x, y); // (A)
            this.color = color;
        }
        toString() {
            return super.toString() + ' in ' + this.color; // (B)
        }
    }
    //Point is a base class, because it doesn’t have an extends clause.
    //ColorPoint is a derived class.
    //super() - constructor, super.method()

    //The prototype of a subclass is the superclass


    class Foo {
        static classMethod() {
            return 'hello';
        }
    }

    // class Bar extends Foo {
    // }
    // Bar.classMethod(); // 'hello'


    class Bar extends Foo {
        static classMethod() {
            return super.classMethod() + ', too';
        }
    }
    Bar.classMethod(); // 'hello, too'

    //Super-constructor calls 
    //In a derived class, you must call super() before you can use this:
    class Foo { }

    class Bar extends Foo {
        constructor(num) {
            let tmp = num * 2; // OK
            this.num = num; // ReferenceError
            super();//should be first line
            this.num = num; // OK
        }
    }

    //Implicitly leaving a derived constructor without calling super() also causes an error:
    class Foo { }

    class Bar extends Foo {
        constructor() {
            //super() must be called
        }
    }

    let bar = new Bar(); // ReferenceError


    //Overriding the result of a constructor  
    class Foo {
        constructor() {
            return Object.create(null);
        }
    }
    console.log(new Foo() instanceof Foo); // false
    //In other words: you don’t have to call super() in a derived constructor if you override the result in this manner.


    //Default constructors for classes

    //Subclassing built-in constructors
    class MyError extends Error {    
    }
    throw new MyError('Something happened!');

    


}



classes();
