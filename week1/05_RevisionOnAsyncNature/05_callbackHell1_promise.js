/* WAP to log something after 1 sec, and then wait for 2 sec and log another thing */

function toDoAboveTaskUsingPromises(n, toPrint) {
    let r = new Promise(function(resolve) {
        setTimeout(()=>{
            console.log(toPrint);
            resolve;
        }, n);
    })
    return r;
}

let x = toDoAboveTaskUsingPromises(1000, "Hi There");
let y = x.then(toDoAboveTaskUsingPromises(1000, "WOOOW"));
y.then(toDoAboveTaskUsingPromises(7000, "OPS"));