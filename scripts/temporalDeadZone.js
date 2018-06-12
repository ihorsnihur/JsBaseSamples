var tdz = function () {
    // console.time('var');
    // for (var i = 0; i < 1000000000; i++) { }
    // console.timeEnd('var'); // about 50 ms on my machine

    // console.time('var');
    // for (let j = 0; j < 1000000000; j++) { }
    // console.timeEnd('var'); // about 200 ms on my machine

    // console.time('var');
    // for (var i = 0; i < 1000000000; i++) { }
    // console.timeEnd('var'); // now much slower, around 300 ms

    // console.time('var');
    // let j // this declaration places j in the same scope as i, spreading the TDZ //performance problems
    // for (j = 0; j < 1000000000; j++) { }
    // console.timeEnd('var'); // still 300+ ms



    // console.time('var');
    // { // these extra brackets stop the TDZ performance problem from spreading
    //     let j
    //     for (j = 0; j < 100000000; j++) { }
    // }
    // console.timeEnd('var');


    // console.time('var');
    // for (var i = 0; i < 100000000; i++) { }
    // console.timeEnd('var'); // var performance is fast again! :D


    var messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];

    // for (var i = 0; i < messages.length; i++) {
    //      (function test() {
    //         console.log(messages[i]);
    //     }) ();
        
    // }

    for (var i = 0; i < messages.length; i++) {
        setTimeout(function () {
            console.log(messages[i]);
            console.log(i);
            //when 
        }, i * 1500);
    }

    // console.log("=========");

    // for (let i = 0; i < messages.length; i++) {
    //     setTimeout(function () {
    //         console.log(messages[i]);
    //     }, i * 1500);
    // }
}

tdz();