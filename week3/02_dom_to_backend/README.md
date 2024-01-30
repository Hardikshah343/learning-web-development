#### Continue the simple HTML app
**Calulate sum**
Now lets say we dont have access to the calculation logic on the frontend (DOM/html)
Lets assume its a hard problem that someone has exposed on a backend server, and we need to hit the backend server and get back the values.

**backend**: we created a simple express server that takes a GET request and query parameters, and returns a sum of values

### fetch() API:


#### The `onInput()` Function
The onInput function is an event handler in JavaScript that gets executed when the value of an input field is changed by the user. This event is triggered dynamically as the user types or modifies the content within the input field. The onInput event is commonly used to perform actions in real-time as the user interacts with the input element.
 

## Debouncing 
Debouncing is a programming practice used to ensure that **time-consuming tasks do not fire so often, making them more inefficient**. In the context of onInput events, debouncing is often applied to delay the execution of certain actions (e.g., sending requests) until after a user has stopped typing for a specific duration.
 
**Implementation:**
The following example demonstrates debouncing in the onInput event to delay the execution of a function that sends a request based on user input.

**Explanation:**

* The debounce function is a generic debounce implementation that takes a function (func) and a delay time (delay).

* Inside the debounce function, a timeout is set to delay the execution of the provided function (func) by the specified delay time (delay).

* The handleInput function is the actual function to be executed when the onInput event occurs. It simulates sending a request (e.g., an AJAX call) based on user input.

**How it works:**

* When a user types in the input field, the onInput event triggers the debounce function.

* The debounce function sets a timeout, and if the user continues typing within the specified delay time, the previous timeout is cleared, and a new one is set.

* After the user stops typing for the specified delay, the handleInput function is executed.

* This ensures that the function associated with the onInput event is not called on every keystroke but rather after the user has stopped typing for a brief moment, reducing unnecessary and potentially resource-intensive calls, such as sending requests.

 
## Throttling vs Rate Limiting
Done at backend.
### Throttling:

* **Definition**: Controls the rate at which a specific action is performed.

* **Purpose**: Ensures a smooth user experience, preventing rapid consecutive actions.

* **Implementation**: Limits the frequency of a particular function within a specified time frame.

### Rate Limiting:

* **Definition**: Controls the number of requests a client can make within a specific time period.

* **Purpose**: Protects server resources, avoids abuse, and maintains fair usage.

* **Implementation**: Typically applied at the server/API level, limiting requests per second or minute.

#### Key Differences:

* Throttling focuses on action frequency; rate limiting focuses on request count.

* Throttling can be applied to various actions; rate limiting is often used at the API level.

* Throttling aims for a smooth user experience; rate limiting protects server resources and enforces fairness.

