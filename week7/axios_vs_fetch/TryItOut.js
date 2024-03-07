const axios = require("axios");

/* Fetch */ 
function fetchDemo() {
    fetch("https://sum-server.100xdevs.com/todos")
        .then(async response => {
            const json = await response.json();
            // response json is a promise so we have to await
            console.log(json.todos.length);
        });
}

fetchDemo();

/* Axios */
async function axiosDemo() {
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data.todos.length); // no need to convert axios does it for us
}

axiosDemo();

/* Trying out POST method */
async function fetchPost() {
    const reponse = await fetch("https://sum-server.100xdevs.com/todos", {
        method: "PUT",
        headers: {
            "Authorization" : "Bearer"
        },
        body: {
            username: "Hello",
            password: "World",
        }
    });
    const json = await reponse.json();
    console.log(json.todos.length);
}

fetchPost();

/* Axios * Check documentation for various ways */
