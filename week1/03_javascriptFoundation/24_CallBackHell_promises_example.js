// Function to simulate downloading data, now returns a Promise
function downloadData() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Data downloaded");
            resolve("Downloaded Data");
        }, 1000);
    });
}

// Function to simulate processing the downloaded data, now returns a Promise
function processData(data) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Data processed");
            resolve("Processed " + data);
        }, 1000);
    });
}

// Using Promises to handle the asynchronous operations
downloadData()
    .then(processData)
    .then(function(finalResult) {
        console.log("Final result: " + finalResult);
    })
    .catch(function(error) {
        console.error("An error occurred:", error);
    });