/* WAP to log something after 1 sec, and then wait for 2 sec and log another thing */

function toDoAboveTask() {
    setTimeout(()=>{
        console.log("This is logged after 1 sec.");
        setTimeout(()=>{
            console.log("This will log after 2 sec the first was logged.");
        }, 2000);
    }, 1000);
}

console.log("Now lets start: ");
toDoAboveTask();

/* Now imagine to do above for logging something after 3 sec of 2nd log. */
/* Hence we have Promises() */

