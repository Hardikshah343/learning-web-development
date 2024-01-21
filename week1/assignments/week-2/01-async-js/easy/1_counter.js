/* Set Interval to increment counter after every 1 sec */

function CountToN(n) {
    counter = 0;
    const counterId = setInterval(()=>{ 
        counter++; 
        console.log(counter);    
        if(counter >= n) 
            clearInterval(counterId);
    }, 1000);
}

CountToN(3);