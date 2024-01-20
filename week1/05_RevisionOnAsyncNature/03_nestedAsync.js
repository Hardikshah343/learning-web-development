setTimeout(function() {
    console.log("Hello world inside timeout 1.");
    setTimeout(function() {
        console.log("Wooow, inside nested callback.")
    }, 1000);
    console.log("After nested calback");
}, 2000);
console.log("After Calback");