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
}



classes();
