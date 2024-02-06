// Function to simulate downloading data
function downloadData(callback) {
    setTimeout(function() {
        console.log("Data downloaded");
        callback("Downloaded Data");
    }, 1000);
}

// Function to simulate processing the downloaded data
function processData(data, callback) {
    setTimeout(function() {
        console.log("Data processed");
        callback("Processed " + data);
    }, 1000);
}

// Initiating the process
downloadData(function(downloadedData) {
    processData(downloadedData, function(processedData) {
        console.log("Final result: " + processedData);
    });
});