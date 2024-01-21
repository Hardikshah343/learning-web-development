// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM)
/* Using set inteval */
// setInterval(()=>{
//     const currentDate = new Date();
//     let time = "";
//     console.log("%d:%d::%d", currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
//     console.log("%d:%d::%d", currentDate.getHours()%12 + 1, currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getHours() / 12 == 0 ? "AM" : "PM");
// }, 1000);

/* using set time out */
function printCurrentTime() {
    const currentDate = new Date();
    let time = "";
    console.log("%d:%d::%d", currentDate.getHours(), currentDate.getMinutes(), currentDate.getSeconds());
    console.log("%d:%d::%d", currentDate.getHours()%12 + 1, currentDate.getMinutes(), currentDate.getSeconds(), currentDate.getHours() / 12 == 0 ? "AM" : "PM");
}

function startClock() {
    setTimeout(()=>{
        printCurrentTime();
        startClock();
    }, 1000);
}

startClock();