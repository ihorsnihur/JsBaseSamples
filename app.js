var forInArrayTest = function () {

    var arr1 = [1, 4, 88, 90];

    for (const key in arr1) {
        //if (arr1.hasOwnProperty(key)) 
        {
            const element = arr1[key];
            console.log(element);
        }
    }
}

var forInForSimpleForEach = function () {

    var obj = { prop1: "some val", prop2: "some other val" };
    var objProp = { prop4: "some val4", prop5: "some other val5" };

    // var obj = Object.create(objStart);
    obj.prototype = Object.create(objProp);// не до інстанса!!!!!!!!!!!! Це має бути ІДЕНТИФІКАТОР класу, функції!!!!!!!!!!
    //  obj.prototype = objProp;

    var keys = [];
    var key;
    console.log("============== for in with - hasOwnProperty");
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            // keys.push(key);
            console.log(key);
        }
    }

    console.log("============== for in without - hasOwnProperty");
    for (key in obj) {
        // keys.push(key);
        console.log(key);
    }
    console.log("============== Object.keys");
    console.log(Object.keys(obj))

    var props = Object.keys(obj);
    for (let i = 0; i < props.length; i++) {
        // const element = obj[key];
        console.log(props[i]);
    }

    console.log("forEach");
    Object.keys(obj).forEach((key) => {
        console.log("For Each Key: ", key)
        console.log("For Each Value: ", obj[key])
    })
}

var forInForSimpleForEachAndObjects = function (){
    var Person = function(name) {
        this.name = name;
        this.canTalk = true;
        this.greet = function() {
            if (this.canTalk) {
                console.log('Привет, я ' + this.name);
            }
        };
    };
    
    var Employee = function(name, title) {
        this.name = name;
        this.title = title;
        this.greet = function() {
            if (this.canTalk) {
                console.log('Привет, я ' + this.name + ', ' + this.title);
            }
        };
    };

    Employee.prototype = new Person();
    var obj = new Employee("EmpName", "Emp title");

    console.log("============== for in without - hasOwnProperty");
    for (key in obj) {
        // keys.push(key);
        console.log(key);
    }

    console.log("============== for in with - hasOwnProperty");
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }

    console.log("============== forEach");
    Object.keys(obj).forEach((key) => {
        console.log("For Each Key: ", key)
        // console.log("For Each Value: ", obj[key])
    })
}

var func4 = function (){

    function convert(array){
        var obj = {}
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            obj[element[0]] = element[1];
        }
        return obj;
    }

    function convertLol(array){
        var obj = {}
        for (const key in array) {
            if (array.hasOwnProperty(key)) {
                const element = array[key];
                obj[element[0]] = element[1];   
            }
        }
        return obj;
    }

    function convertReduce(array){    
        return mass.reduce(function(obj, current) {
            obj[current[0]] = current[1]
            return obj;
          }, {});
    }
    
    var mass = [["a", 1], ["b", 2]];

    var obj = convert(mass);
    var obj2 = convertReduce(mass);
    var obj3 = convertLol(mass);
    console.log(obj);
    console.log(obj2);
    console.log(obj3);
}

func4();
// func3();