counter = 0;

function counterToN(n) {
    counter++;
    console.log(counter);
    if(counter < n) 
        setTimeout(counterToN, 1000, n);
    return;
}

counterToN(10);

