// Code goes here

var program = function(){
    
    var createWorker = function() {
  
    var workCount = 0;
  
    var task1 = function() {
      workCount += 1;
      console.log("task1" + workCount)
    }
  
    var task2 = function() {
      workCount += 1;
      console.log("task2" + workCount)
    }
  
    return {
      job1: task1,
      job2: task2
    }
  };
  
  var worker = createWorker();
  worker.job1();
  worker.job2();
  worker.job2();
  worker.job2();
  
  
  
  
  
  var work = function() {
    console.log("Work");
  };
  
  //work();
  
  var doWork = function(f) {
  
    console.log("Start");
  
    try {
  
      f();
  
    } catch (e) {
      console.log(ex);
    }
  
    console.log("End");
  };
  
  
  }
  
  
  //program();
  
  //doWork(work);

  var arrayTest = function(){
    //всі масиви, всі цикли, проходження

    var arr1 = [5,55, "test string", true, false, 105];
    var arr2 = ["test 1", "test 2", "test 3"];
    var arr3 = new Array();
    arr3.push("e1");
    arr3.push("e2");
    arr3.push("e3");

    console.log("for in loop example:");
    for(var a in arr1){
        console.log(arr1[a]);
    }

    
    console.log("");
    console.log("for of loop example:");
    for (const iterator of arr3) {
        console.log(iterator);
    }

    console.log("");
    console.log("for loop example:");
    for (let index = 0; index < arr3.length; index++) {
        console.log(arr3[index]);
    }  

    whileTest(arr3);

    doWhileTest(arr3);

    function whileTest(arr) {
        console.log("");
        console.log("while loop example:");
        var index = 0;
        while (index < arr.length) {
            console.log(arr[index++]);
        }
    }

    function doWhileTest(arr) {
        console.log("");
        console.log("do while loop example:");
        index = 0;
        do {
            console.log(arr[index++]);
        } while (index < arr.length);
    }
  }


  var study2 = function() {
    
    var obj1 = [];
    var obj2 = {};
    
    // console.log(Array.isArray(obj1));
    // console.log(Array.isArray(obj2));
    
    // console.log(obj1 instanceof Array);
    // console.log(obj2 instanceof Array);
    
    // console.log(Object.prototype.toString.call( obj1 ) === '[object Array]');
    // console.log(Object.prototype.toString.call( obj2 ) === '[object Array]');
    
    //console.log(obj1.prototype.toString()  === '[object Array]');

    // for(var d in Object.keys(obj1))
      //console.log(Object.keys(obj1));

      // for(var d in obj1)
      //   console.log(d);

      // let d = 44;
      // let d2 = "3";
      // let d3 = [];
      // let d4 = {};

      // console.log(typeof(d));
      // console.log(typeof(d2));
      // var type = typeof(d3);
      // console.log(type);
      // console.log(typeof(d3));
      // var isArray = d3 instanceof Array;
      // console.log("Is array =  " + isArray);
      // console.log(typeof(d4));

      // console.log(d3.prototype);// let d3 = []  - does not has prototype


      ////////////
      // let undef;
      // console.log(undef);
      // undef = null;
      // console.log(undef);

      ////
      // function testFunc(){
      //   //let newValu = 44;
      //   var newValu = 44;
      //   return newValu;
      // }

      // console.log(testFunc());
      // console.log(newValu);//як вова робив так що ця змінна доступна була...

    }

'use strict' 
    var objectTest3 = function(){

      //літералом
      let person = {
        name: "Jon",
        age: 32,
        partTime: false,
        speak2: function() { 
          console.log("Mawwwww")
        }
      };

      person.sex = "boy";
      person.speak = function() { 
        console.log("Say Vaf Vaf")
      }

      // console.log(person);
      // console.log(person.name);
      // console.log(person.sex);
      console.log(person.speak());
      console.log(person.speak2());
    }

    var objectTest = function(){
      function Cat(){
        this.name = 'Don';
        this.color = 'Red'
      }

      function Cat2(){
        this.color = 'Red'
      }

      function Cat3(name, color){
        this.name = name;
        this.color = color;
      }

      // var obj = new Cat();
      // console.log(obj);

      var obj2 = Cat2();//буз new це буде відноситись до глобального скоупу чи шось таке, до window обджекту
      //по ходу new створює скоуп
      console.log(obj2);
      // console.log(window.color);

      var cat = new Cat3('Jon', 'White');//конструктор
      console.log(cat);

      var cat2 = Object.create(Object.prototype,
      {
        name:{
          value: 'Kol',
          enumerable:true,
          writable:true,
          configurable:true
        },
        color:{
          value: 'White',
          enumerable:true,
          writable:true,
          configurable:true
        },
      });
      console.log(cat2);
    }

    var objectTest2 = function (){
      var a = {
        x: 10,
        calculate: function (z) {
          return this.x + this.y + z;
        }
      };
       
      var b = {
        y: 20,
        __proto__: a
      };
       
      var c = {
        y: 30,
        __proto__: a
      };
       
      // call the inherited method
      console.log(b.calculate(30)); // 60
      console.log(c.calculate(40)); // 80
    }
    
//console.log(window.color);
//'u1se strict' - дозволяє уникнути застарілої логіки в джава скріпті
  // якщо врайтабл фолс поставити то в стрікт моді буде ерора при спробі змінити значення!!!!!

  //Object.freeze(cat.name)// made prop read only!!!
  //study4();
  objectTest2();