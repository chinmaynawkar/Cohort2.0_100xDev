/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
   //creating a promise box
    let p = new Promise((resolve) => {
        //setting a timer to open box after n seconds
        setTimeout(() => {
            // open with message 
            resolve();


        },n * 1000);
    });
   
    return p;
}

module.exports = wait;
