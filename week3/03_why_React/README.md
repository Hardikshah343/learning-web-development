### DOM manipulation
So websites like linkedIn, when we scroll down, new Items get pushed to the DOM. So it is a **heavily dynamic website**.
Now to create a heavyyy dynamic website is very difficult. So to little bit simplify this React was introduced.
So with DOM manipulation, as we scroll requests goes back to backend, backend sends data and returns new posts which are then added to the page/DOM manipulation.
So without refreshing the page even when notification comes it page should update, is what DOM manipulation is used for.
Similarly for a chat website all the new messages appending down the chat is done by DOM manipulation.
So HTML is injected to the website via DOM as some action like scroll, click, hover,etc are done without refresing the page.

**But DOM manipulation is very hard to write as a developer. Making dynamic websites, with the primitives that DOM provides you is very hard**
Like `document.createElement`, `document.appendChild`, `element.setAttribute`, `element.children`, etc.

Check out `01_todo_using_DOM_manipulation`

**The Current Approach faces Several Challenges:**
 

* **Difficulty in Adding and Removing Elements:**
The process of adding and removing elements becomes intricate with the existing setup. Direct manipulation of the DOM for such operations can lead to complex and error-prone code.

* **Lack of Central State:**
The absence of a centralized state management system poses issues. With each function managing its own state, maintaining consistency across the application becomes challenging.

* **Integration with a Server:**
If there is a server where these todos are stored, the current structure lacks a mechanism to seamlessly integrate with it. Handling data from an external server requires a more organized approach.

* **Mobile App Updates:**
Imagine updating a TODO item from a mobile app. When the updated list of TODOs arrives on the frontend, there is no provision for efficiently updating the DOM. The current structure lacks functions for updating or removing existing TODOs.

#### **Problems with this approach**
* **VeryHard to add and remove elements**
* No central **`State`**

**What do we mean by State?**
When we refer to state in the context of our todo application, we are essentially talking about the current representation of the todo data within the application. In a more structured format, the state might look something like this:
```json
[
    {
        id:1,
        title: "go to Gym",
        description: "Go to gym from 7-9 PM"
    },
    {
        id:2,
        title: "go to Gym",
        description: "Go to gym from 7-9 PM"
    },
]
```

A scenario where the todo we created will fail.
* what if there is a server where these todos are put/placed (may be a DB)
* what if you update a todo from your mobile app.
* You will get back the new array of TODOs on the frontend.
* **How will you update the DOM then?** You only have a `addTodo()` and not `updateTodo()` or `removeTodo()`.

**So what if we can write a function that takes this state as an input and creates the output on the right, that is much more powerful than our original approach**

So this is how **React** works, it takes in the **state** amd creates the elements based on current state.
If the state changes it will adapt and reconcile based on the current state.
So state is just a variable storing structure of the application (related to what to display maybe) .

#### Given a State input to a `function` should generate/renders/overwrite the elements.
* clear the previous elements.
* generate new elements based on current state

checkout `02_todo_basedOnState_DOM`
Here we created a backend that returns the **state** having random number of todo list each time it is called, and we load those states every 2 seconds.

**Better approach would have been**
Dont clear the DOM upfront/every 2 sec, update it based on what has changed.
Because if nothing has changed we still cleared everything and then again updated.
* **So caluclate the difference from previous to current**, and update only that specific element.


**But how does it calculate what all has changed?, Has a todo been marked as complete? Has a todo been removed from the backend?**
Remembering the old todos in a variable (Virtual DOM)

Checkout `03_differencialUpdate`

**What is the easiest way to create a dynamic frontend website?**
* **Update a state variable**
* **Delegate the task of figuring out diff to a hefty function**
* **Tell the hefty function how to add, update and remove elements** 

Now we can do all this simply by using **React**. React doesnt reinitialised everything. It remembers the old data in Virtual dom, and then updates only the changes.

### Virtual DOM
The concept of a Virtual DOM comes into play when dealing with efficient updates to the actual DOM. 
The Virtual DOM is a lightweight copy of the actual DOM. When updates are made to the state of an application, a new Virtual DOM is created with the changes. This Virtual DOM is then compared with the previous Virtual DOM to identify the differences (known as "diffing").
 
**In the context of a todo application:**

* **State Changes:** If a todo has been marked as complete or removed from the backend, the state of the application changes.

* **Virtual DOM Comparison:** The new state is used to create a new Virtual DOM. This new Virtual DOM is compared with the previous Virtual DOM.

* **Identifying Changes:** The difference between the new and previous Virtual DOMs is determined. For example, if a todo has been marked as complete, the corresponding element in the Virtual DOM is updated to reflect this change.

* **Efficient Updates:** Instead of clearing the entire parent element and re-rendering everything, the Virtual DOM helps identify specifically what has changed.

* **Selective DOM Manipulation:** Only the elements that have changed are manipulated in the actual DOM. This process is more efficient than a naive approach of clearing and re-rendering the entire DOM.
         

By employing a Virtual DOM, React optimizes the process of updating the actual DOM, leading to better performance and a smoother user experience. This mechanism is a key feature of React and contributes to its popularity for building dynamic and responsive web applications.

 

# REACT

Recognizing the intricacies involved, React, a JavaScript library, emerged as a powerful solution. React abstracts away much of the manual DOM manipulation complexity, providing developers with a declarative and component-based approach to building user interfaces. This abstraction not only enhances code readability and maintainability but also simplifies the creation of dynamic and interactive web applications.


In the folder where you want to setup react, run:
```terminal
$ npm create vite@latest
> project_Name : reactIntro
> variant: react
> framework: javascript
$ npm install
$ npm run dev
```
vite gives kind of boilerplate for react.