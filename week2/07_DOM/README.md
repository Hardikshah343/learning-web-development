# Document Object Model

You know how a remote control brings a television to life by letting you change channels and do cool things? Well, in the web world, JavaScript is like that remote control for your HTML page, making it active and dynamic. And the secret sauce behind this magic is the DOM – the Document Object Model.

### **What is DOM?**

**A programming interface for web documents**, but is not a programming language.

So, what's this DOM thing? DOM stands for Document Object Model. It's like the behind-the-scenes framework that JavaScript uses to talk to your browser. Imagine it as the language that JavaScript speaks with your web browser to make things happen on your HTML page.
* Represents the page so that programs can change the document structure, style and content.
* DOM is like **tree-like** representation of the web page that gets loaded into the browser.
* DOM represents the document/web page as nodes and objects.
* Without DOM JS wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts.
* Web API used to build websites.

### **Communication with the Browser**

JavaScript and the browser communicate through a set of tools in this magical interface known as the DOM. These tools include properties, methods, and events. It's like having a language to tell your browser what to do and when to do it.

### **Accessing the DOM**

**The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API**

Okay, how do we get our hands on this DOM magic? Well, accessing the DOM is like reaching for that remote control. In JavaScript, you use commands to grab elements from your HTML page, change their content, or even create new elements. It's like giving instructions to your browser using JavaScript.

Example:
```html
<html lang="en">
    <head>
        <script>
            // run this function when the document is loaded
            window.onload = () => {
                const heading = document.createElement("h1");
                const headingText = document.createTextNode("Big heading");
                heading.appendChild(headingText);
                document.body.appendChild(heading);
            };
        </script>
    </head>
    <body></body>
</html>
```

**So DOM represents the web page using a series of objects. The main object is the document object, which in turn houses other objects which also house their own objects and so on.**

### **Possibilities of DOM**

Now, let's talk about the possibilities the DOM opens up. With JavaScript and the DOM, you can:

*   Change the content of your webpage dynamically.

*   Update styles and layout on the fly.

*   Respond to user interactions, like clicks or keyboard inputs.

*   Add or remove elements, making your page super interactive.

### **Independence and Consistency**

DOM doesn't pick sides. It's independent of any particular programming language. This means whether you're using JavaScript, Python, or any other language, the DOM provides a consistent way to interact with your document. It's like a universal remote that works with any TV.

**In a Nutshell:** So, the DOM is your backstage pass to making HTML pages come alive with JavaScript. It's a set of rules and tools that allow you to control, change, and interact with your webpage dynamically. It's like giving your webpage a personality and making it respond to your JavaScript commands.

### **DOM Tree**

The DOM tree, or The Document Object Model tree, is a hierarchical representation of the structure of a web document in the context of web development. It's essentially a way to organize and navigate the elements of an HTML or XML document. 

Example_1:
```html
<html lang = "en">
    <head>
        <title>My Document</title>
    </head>
    <body>
        <h1>Header</h1>
        <p>Paragraph</p>
    </body>
</html>
```
![Alt text](image.png)

**Dot (.) is the operator that allows us to access the object inside the object/Document and so on.**

**When a web browser parses an HTML document, it builds a DOM tree and then uses it to display the document**

Here's a breakdown:

*   **Document Object:** At the top of the tree is the Document Object, representing the entire web document. It has properites and methods which we can use to get information about the document (using dot operator).

*   **HTML Element:** The HTML element comes next, serving as the container for the entire document.

*   **Head and Body Elements:** Within the HTML element, there are two main sections: the Head and the Body. The Head typically contains meta-information, styles, and links to external resources, while the Body holds the primary content visible on the webpage.

*   **Further Nesting:** Each of these main sections may contain further nested elements. For instance, the Head could include elements like title, meta, or link, while the Body could include paragraphs, images, buttons, and other content-related elements.

The DOM tree essentially forms a family tree-like structure, where elements are organized in a hierarchy based on their relationships with each other. Understanding the DOM tree is crucial for web developers because it provides a structured way to interact with and manipulate the content of a webpage using programming languages like JavaScript.

Example_2:
```html
<!DOCTYPE html>
<html>
    <body>
        <form id="LoginForm" action="/action_page.php">
            First Name: <input type="text" name="fname" value="Donald"><br>
            Last Name: <input type="text" name="lname" value="Duck"><br>
            <input type="submit" value="submit">
        </form>
        <p>Click the "Try it" button to display the number of elements in the form.</p>
        <button onClick="myFunction()">Try it</button>
        <p id="displayspace"></p>

        <script>
            function myFunction() {
                var x = document.getElementById("LoginForm").elements.length;
                var y = document.getElementById("LoginForm").elements[0].value;
                document.getElementById("displayspace").innerHTML = "Found "+x+" elements in the form."+" first name entered is: "+y;
            }
            // creating a new element
            const para = document.createElement("p");
            para.innerText = "This is a pragraph created via DOM.";
            document.body.appendChild(para);
        </script>
    </body>
</html>
```
So here the function `myFunction()` on is called on clicking `Try it` button, which then fetches the element of `HTML->Body->Form` using `document.getElementById("LoginForm")`, so here in whole document it searchs for the id.
And then we use that content to display on an empty paragraph with id "displayspace", using the same technique `document.getElementById("displayspace")`.
Thats how we search and manipulate DOM.
Also we can create a new element and add it to the DOM, using `createElement()` method. Adding it to the proper place or as of now we added it to the end of body using `document.body.appendChild(para)`.


HTMLCollection
----------------------------------------------------------------------
```html
<div id = "first"> Div one </div>
<p> Paragraph one </p>
<div> Div two </div>
<p class="intro"> Paragraph two </p>
<p class="intro"> Paragraph three </p>
<div> Yet another div </div>
<p id="demo"></p>
<div id="myDiv" style="border:1px solid black; padding:8px;">
    <h2 class="example">A heading</h2>
    <p class="example">A paragraph 1.</p>
    <p class="example">A paragraph 2.</p>
</div>
<form id="frm1" action="/action_page.php">
    First name: <input type="text" name="fname" value="Donald"><br>
    Last name: <input type="text" name="lname" value="Duck"><br><br>
    <input type="submit" value="Submit">
</form>
```
### Finding HTML Elements

#### By ID:

To find an HTML element by its ID, you can use the `getElementById` method.
```javascript
var firstDiv = getElementById("first");
```

#### By Tag Name:

To find HTML elements by their tag name, you can use the `getElementsByTagName` method.
```javascript
var divs = document.getElementByTagname("div");
```
Gets all the elements of tag "div".

#### By Class Name:

To find HTML elements by their class name, you can use the `getElementsByClassName` method.
Example_3
```javascript
const x = document.getElementsByClassName("intro");
document.getElementById("demo").innerHTML = 'The first paragraph (index 0) with class="intro" is: '+ x[0].innerHTML;
```
And we also set the `<p id="demo">`, also there are multiple class with name "intro", we used indexing to access the required element.
If the index goes out of bound we will get console error on browser saying particular index is `TypeError: undefined`

#### By CSS Selector:

To find HTML elements using CSS selectors, you can use the `querySelector` or `querySelectorAll` methods.
`querySelectorAll` finds all HTML elements that match a specified CSS selector (id, class names, types, attributes, values of attributes, etc), use the querySelectorAll() method.
And `querySelector` returns the first.
Example_4
```javascript
var paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => paragraph.style.backgroundColor = "green");
var introParagraphs = document.querySelectorAll('p.intro');
introParagraphs.forEach(paragraph => paragraph.style.backgroundColor = "red");
```
Note: **Dot(.)** to access class name from the element. Checkout multiple selectors available 
| Selector | Example | Example description|
| --- | --- | --- |
|#id | 	#firstname 	|Selects the element with id="firstname"|
|.class |	.intro |	Selects all elements with class="intro"|
|element.class| 	p.intro |	Selects only <p> elements with class="intro"|
|* |	* 	| Selects all elements|
|element |	p |	Selects all <p> elements|
|element,element,.. |	div, p |	Selects all <div> elements and all <p> elements|

There are more [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.php), do check out.

```javascript
// can pass multiple selects as well 
const matches = document.querySelectorAll("p.intro, p.subheading");
const element = document.getElementById("myDiv");
const list = element.querySelectorAll(".example");
document.getElementById("demo2").innerHTML = list.length;
```
Example_5
Lets do a tricky one. Where we say get all elements where `div` is parent of `p`.
```javascript
const nodeList = document.querySelectorAll("div > p");
for(let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.backgroundColor = "purple";
    nodeList[i].style.color = "white";
}
```

#### By HTML Object Collections:

To find HTML elements using HTML collections, you can use methods like `getElementsByName` or `getElementsByName` in specific cases.

These methods provide different ways to locate and interact with HTML elements in a document using JavaScript. Choose the appropriate method based on your specific needs and the structure of your HTML document.

Example_6
```javascript
const x = document.forms["frm1"];
let text = "";
for(let i = 0; i < x.length; i++) {
    text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;
```
### Some other elements:
Example_7
* document.anchors
* document.body
* document.documentElement
* document.embeds
* document.forms
* document.head
* document.images
* document.links
* document.scripts
* document.title

### Difference Between HTMLCollection and NodeList:

Both HTMLCollections and NodeLists are collections of nodes in the Document Object Model (DOM) provided by JavaScript, but they have some key differences:

#### HTMLCollection:

1.  **Live Collection:**

*   **Live:** An HTMLCollection is live, meaning it is automatically updated when the underlying document changes. If elements are added or removed, the HTMLCollection is automatically updated to reflect these changes.

2.  **Accessing Elements:**

*   **By Index:** Elements in an HTMLCollection can be accessed using numerical indices, similar to an array. Also can be accessed using their name and id.

3.  **Methods:**

*   **Limited Methods:** HTMLCollections have a more limited set of methods compared to NodeLists.

4.  **Specific to Elements:**

*   **Element-Specific:** HTMLCollections are typically used for collections of HTML elements, such as those returned by `getElementsByTagName` or `getElementsByClassName`.

#### NodeList:

1.  **Live or Static:**

*   **Live or Static:** A NodeList can be live or static. If it's obtained using `querySelectorAll`, it's static and won't automatically update. If it's obtained by other means, like `childNodes`, it might be live.

2.  **Accessing Elements:**

*   **By Index or forEach:** Like HTMLCollection, you can access elements by index. Additionally, NodeList supports the `forEach` method for iteration.

3.  **Methods:**

*   **Richer Set of Methods:** NodeLists typically have a broader set of methods compared to HTMLCollections.

4.  **Not Limited to Elements:**

*   **Node-Oriented:** NodeLists can include various types of nodes, not just HTML elements. They might include text nodes, comment nodes, etc.

#### Practical Considerations:

*   **Common Methods:**

*   For general purpose, when using methods like `querySelectorAll`, you will get a NodeList.

*   **Live vs. Static:**

*   If you need a live collection that automatically updates, an HTMLCollection might be suitable.
*   If you want a static collection that won't change, or if you need a broader range of methods, a NodeList might be preferable.

*   **Usage:**

*   HTMLCollections are often associated with specific methods like `getElementsByClassName` or `getElementsByTagName`.
*   NodeLists are often the result of more generic methods like `querySelectorAll` or properties like `childNodes`.

In summary, the choice between HTMLCollection and NodeList depends on your specific needs, especially regarding the liveliness of the collection and the methods you require for manipulation.


### **Changing HTML Elements**

Changing HTML elements dynamically is a fundamental aspect of web development, and JavaScript provides several methods to achieve this. Here are some commonly used methods for changing HTML elements:

1.  **`innerHTML`:** Changes the HTML content (including tags) of an element.
Example: `document.getElementById("p1").innerHTML = "New paragraph text generated;`

2.  **`textContent`:** Changes the text content of an element, excluding HTML tags.
Example: `element.textContent = new text;`

3.  **`setAttribute`:** Sets the value of an attribute on an element.
Example: `element.setAttribute(attribute, value);`

4. **`attribute`:** Change the attribute value of an HTML element.
Example: Lets say original image was a .gif file, but now we want to change it to a .jpg file.
`document.getElementById("image").src = "newImage.jpg;`

4.  **`style`:** Modifies the inline styles of an element.
Example: `element.style.property = new style`

5.  **`classList`:** Provides methods to add, remove, or toggle CSS classes on an element.

6.  **`appendChild`:**  Adds a new child element to an existing element.

7.  **`removeChild`:** Removes a child element from its parent.

8.  **`setAttribute`:** Sets or changes the value of an attribute on an HTML element.

Example_8

These methods provide a diverse set of tools for us —developers to manipulate HTML elements dynamically, whether it's updating content, changing styles, or modifying attributes. The choice of method depends on the specific requirement and the nature of the change you want to apply.

### Dynamic HTML Content

* `document.write()` writes directly to the HTML output stream
**Note: Never use document.write() after the document is loaded. It will overwrite the document.**
Example_8
* The **`setAttribute()`** method sets a new value to an attribute.
If the attribute does not exist, it is created first.
Yet on the same time if there are multiple attributes then setAttribute may overwrite all to just the one.
`element.setAttribute("style", "background-color:red,");` vs `element.style.backgroundColor="red";`

### Adding HTML Elements:

1.  **`createElement` Method:** Creates a new HTML element.

2.  **`appendChild` Method:** Appends a new child element to an existing element.

3.  **`insertBefore` Method:** Inserts a new element before a specified existing element.

4.   **`innerHTML` Property:** Sets or gets the HTML content inside an element.

5.  **`insertAdjacentHTML` Method:** Inserts HTML into a specified position relative to the element.

Example_9

### Deleting HTML Elements:

1.  **`removeChild` Method:** Removes a child element from its parent.

2.  **`remove` Method (Modern Browsers):** Removes the element itself.

3.  **`replaceChild` Method:** Replaces a child element with a new element.

4.  **`innerHTML` Property (Setting to an Empty String):** Sets the HTML content inside an element to an empty string, effectively removing its content.

5.  **`outerHTML` Property:** Replaces an element with its HTML content.

Example_10

Query Selectors
------------------------------------------------------------------------

Query Selectors allows developers to select and manipulate HTML elements in a document using CSS-like syntax. They provide a powerful and flexible way to target specific elements based on various criteria, such as element type, class, ID, or attribute.

Here are some common examples of using Query Selectors:

*   **Selecting by Element Type:**

*   **Selecting by Class Name:**

*   **Selecting by ID:**

*   **Selecting by Attribute:**

*   **Combining Selectors:**

Query Selectors return either a NodeList (for `querySelectorAll`) or a single element (for `querySelector`). NodeList is a collection of nodes, which can be iterated through using methods like `forEach`.

In summary, Query Selectors provide a concise and versatile way to interact with HTML elements in a document, making it easier for developers to manipulate the content and structure of a webpage dynamically.

DOM Node & Methods
------------------------------------------------------------------------------

The DOM (Document Object Model) is a programming interface that represents the structure of a document as a tree of objects, where each object corresponds to a part of the document. A DOM Node is a fundamental interface in the DOM hierarchy, representing a generic node in the tree structure. All elements, attributes, and text content in an HTML or XML document are nodes.

Here are some key points about DOM Nodes and their methods:

![Alt text](image-1.png)

### Key Points:
Example_11

1.  **Node Types:**

*   Nodes can have different types, such as elements, text nodes, attributes, comments, etc.

*   The `node.nodeType` property is used to determine the type of a node.

2.  **Hierarchy:**

*   Nodes are organized in a hierarchical structure, forming a tree.

*   The `node.parentNode` property allows you to access the parent node of a given node.

*   The `node.childNodes` property provides a NodeList of child nodes.

3.  **Traversal:**

*   The `node.nextSibling` and `node.previousSibling` properties allow traversal to adjacent nodes.

*   The `node.firstChild` and `node.lastChild` properties give access to the first and last child nodes.

**Note: A common error in DOM processing is to expect an element node to contain text.**
Ways to access the first element.
```html
<title id="demo">DOM Tutorial</title>
myTitle = document.getElementById("demo").innerHTML;
myTitle = document.getElementById("demo").firstChild.nodeValues;
myTitle = document.getElementById("demo").childNodes[0].nodeValue;
```
### Types Of Nodes

In the DOM (Document Object Model), nodes represent different parts of an HTML or XML document, forming a tree structure. There are various types of nodes, each serving a specific purpose. Here are the common types of nodes in the DOM:


1.  **Element Nodes:**

*   **Description:** Represent HTML or XML elements.

*   **Access:** Accessed using methods like `getElementById`, `getElementsByTagName`, or `querySelector`.

*   Example: The `<div>` element is an example of an element node.

2.  **Attribute Nodes:** [deprecated]

*   **Description:** Represent attributes of an HTML or XML element.

*   **Access:** Attributes can be accessed through the `attributes` property of an element node.

*   Example: In this example, `src` and `alt` are attribute nodes of the `<img>` element.

3.  **Text Nodes:**

*   **Description:** Contain the text content within an HTML or XML element.

*   **Access:** Accessed through the `textContent` or `innerText` property of an element node.

*   Example: The text "This is a text node" is a text node within the `<p>` element.

4.  **Comment Nodes:**

*   **Description:** Represent comments within the HTML or XML document.

*   **Access:** Accessed through the `comment` property of a comment node.

*   Example: The content within `<!--` and `-->` is a comment node.

5.  **Document Node:**

*   **Description:** Represents the entire document.

*   **Access:** The document node is the entry point for accessing the DOM tree.

*   Example: The `<html>` element serves as the document node in this example.

6.  **Document Type Node:**

*   **Description:** Represents the document type declaration.

*   **Access:** Accessed through the `doctype` property of the document node.

*   Example: The `<!DOCTYPE html>` declaration is a document type node.

DOM Events
--------------------------------------------------------------

DOM events are interactions or occurrences that take place in a web page, such as a user clicking a button, pressing a key, resizing the browser window, or the content of an input field changing. The HTML DOM (Document Object Model) allows JavaScript to respond to these events, enabling developers to create interactive and dynamic web applications. Here's an overview of DOM events and how JavaScript can react to them:

Example_12

#### Key Concepts:

1.  **Event Types:**

*   Events can be triggered by various actions, such as mouse clicks (`click`), keyboard presses (`keydown`, `keyup`), form submissions (`submit`), document loading (`load`), and more.

2.  **Event Targets:**

*   Events are associated with specific HTML elements, known as event targets. For example, a `click` event might be associated with a button, and a `change` event might be associated with a form input.

3.  **Event Handlers:**

*   JavaScript can respond to events by using event handlers. Event handlers are functions that get executed when a specific event occurs.

#### Reacting to Events:

1.  **Inline Event Handlers:**

*   You can define event handlers directly within HTML elements using inline attributes like `onclick`, `onmouseover`, etc.

2.  **DOM Level 0 Event Handling:**

*   You can assign event handlers directly to JavaScript properties of DOM elements.

3.  **DOM Level 2 Event Handling:**

*   The `addEventListener` method is used to attach event handlers to elements. This method provides more flexibility and allows multiple handlers for the same event.

4.  **Event Object:**

*   Event handlers typically receive an event object that provides information about the event, such as the target element, mouse coordinates, key codes, etc.

#### Common Events:

1.  **Click Event:**

*   Triggered when a mouse button is clicked.

2.  **Keydown and Keyup Events:**

*   Fired when a key on the keyboard is pressed or released.

3.  **Submit Event:**

*   Triggered when a form is submitted.

4.  **Change Event:**

*   Fired when the value of an input field changes.

5.  **Load Event:**

*   Occurs when a resource (like an image or script) and the entire page have finished loading.

#### Example:

In this example, a click event handler is attached to a button using the `addEventListener` method. When the button is clicked, an alert is displayed.

Understanding DOM events and how to handle them is crucial for creating interactive and responsive web applications. Developers use events to capture user actions and trigger appropriate JavaScript functionality in response.

The `onload` and `onunload` functions:
------------------------------------------------------------------------------------------------------------------

The `onload` and `onunload` events are part of the HTML DOM (Document Object Model) and are used to execute JavaScript code when a document or a page finishes loading (`onload`) or unloading (`onunload`). These events are commonly used to perform actions when a user enters or leaves a webpage.

### `onload` Event:

The `onload` event is triggered when a document or a webpage has finished loading. This event is often used to ensure that all resources, such as images and scripts, have been fully loaded before executing specific JavaScript code.

Example:

In this example, the `onload` event is used to display an alert when the page has finished loading.

### `onunload` Event:

The `onunload` event is triggered just before a document or a webpage is about to be unloaded, such as when the user navigates away from the page or closes the browser tab. This event is often used to perform cleanup tasks or prompt the user for confirmation before leaving the page.

Example:

In this example, the `onunload` event is used to display an alert just before the page is unloaded.

These events play a crucial role in managing the lifecycle of a web page and allow developers to execute code at specific points during the page's existence.

DOM Event Listeners
--------------------------------------------------------------------------------

DOM Event Listeners provide a more flexible and powerful way to handle events compared to traditional event attributes (e.g., `onclick`). Event Listeners allow you to attach multiple event handlers to a single event, making your code more modular and easier to maintain.

Example_13

#### Using `addEventListener`:

The `addEventListener` method is used to attach an event listener to an HTML element. It takes three parameters: the event type, the function to be executed when the event occurs, and an optional third parameter indicating whether the event should be captured during the event propagation phase.

#### Syntax:

*   **`eventType`**: A string representing the type of event (e.g., "click", "keydown", "change").

*   **`eventHandler`**: A function that will be called when the event occurs.

*   **`useCapture`**: (Optional) A boolean value indicating whether to use the capturing phase (`true`) or the bubbling phase (`false`, default).

#### Example of Multiple Event Listeners:

Here's a code snippet demonstrating the use of multiple event listeners on a button. In this example, we have a button that changes its color and displays a message when clicked, and it resets to its default state when the mouse leaves it:

In this example:

*   Clicking the button changes its color to green and triggers an alert.

*   Hovering over the button changes its color to yellow.

*   Moving the mouse away from the button resets its color to the default state.

Using multiple event listeners allows you to handle different aspects of user interaction separately, promoting cleaner and more organized code.

Event Bubbling & Event Capturing
----------------------------------------------------------------------------------------------------------
Two ways of event propogarion in the HTML DOM - bubbling and capturing.
**Event Propogation is a way of defining the element order when an event occurs. If you have a `<p>` element inside a `<div>` element, and the user clicks on the `<p>` element, which elements "click" event should be handled first?**

Event bubbling and event capturing are two phases of event propagation in the HTML DOM. When an event occurs on an HTML element, it goes through these two phases:

1.  **Event Capturing (Capture Phase):**

*   In this phase, the event travels from the root of the DOM tree to the target element.

*   Event handlers attached with `useCapture` set to `true` are triggered during this phase.

2.  **Event Bubbling (Bubbling Phase):**

*   In this phase, the event travels from the target element back up to the root of the DOM tree.

*   Event handlers attached without specifying `useCapture` or with `useCapture` set to `false` are triggered during this phase.

Example_14

### Example of Event Capturing:

In the following example, we have a nested set of div elements, and we attach event listeners to the document capturing phase (`useCapture` set to `true`). When you click on the innermost div, you'll see that the event handlers for the capturing phase are triggered from the root to the target:

When you click on the "Inner" div, you'll see in the console that the capturing phase event handlers are triggered in the order: Outer Capturing, Middle Capturing, Inner Capturing.

### Example of Event Bubbling:

In this example, event listeners are attached without specifying `useCapture` or with `useCapture` set to `false`. When you click on the innermost div, the event handlers are triggered in the bubbling phase from the target back up to the root:

When you click on the "Inner" div, you'll see in the console that the bubbling phase event handlers are triggered in the order: Inner Bubbling, Middle Bubbling, Outer Bubbling.

In practice, event bubbling is more commonly used, and the `useCapture` parameter is often omitted or set to `false` when attaching event listeners. Event capturing is less commonly used and is mainly applicable in specific scenarios where capturing is explicitly needed.