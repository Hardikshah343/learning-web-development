# Routing

Before React, 
Websites were built like each feature is a separate (html css js) file, so whenever user hits a link on the page a request for the page is sent to server.
Meanwhile a blank white screen is visible. So when server responds the with the requested page (html, css, js) the page is loaded and is visible.
Known as Hard Reload.

**1. Single Page Application**
But with react, whole website is a single page application. So when the website is requested the whole website or single react application is returned.
So when a page inside is requested, the page is already available and is rendered at the same time, no new request needs to be sent.

**2. Client Side bundle**
So these two are basically same things just terms used to receive JS+HTML+CSS as a bundle.

**3. Client Side routing**
And when links are clicked instead of sending request to server, client has the code and can search for page within the code. Thats called routing.
/application/homepage
/application/messages

These are **routes**.
So if the user is at some link then he will see a particular react component, and when route changes a different react component will render.

Now, **How to do routing in React?**
There are many frameworks to do so.
Most popular one **react-router-dom** [please install it]

```jsx
function App() {
    return (
        <BrowserRoute>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRoute>
    )
}
```
Check out: `1_reactRoute`
Here, Dashboard and Landing are react components.
<BrowserRoute>, <Routes> and <Route> are syntax for routing.

Now in order to redirect a page we have many ways out of react.
Eg. window.location.href = "/"; 
But problem with this is browser thinks it as a new request and will again ask for new pages or bundle.

So in react we use a hook called `useNavigate()`.
Note: `useNavigate()` must be inside <BrowserRoute>.


### Lazy Loading
Now instead of giving the whole website as a bundle to user, why not when the user goes to a page x than a related bundle of page x should be given to user.

**Suspense API is used when asynchronous component fetching or asynchronous data fetching is to be done**
That is the data is not yet received, but react wants to render something so thats when we use suspense.


# Prop Drilling 
State management eg useState
Where do you think one should put/manage state at?
1. Keep everything at the top level (kind of global variable)
2. Keep everything as low as possible (at the LCA of children that need a state)  [LCA: Lowest Common Ancester]

**Try to push state as low as possible, because as state changes all the children re-renders**

But if you have a prop or state that we keep passing down the chain of heirarchy, is called prop drilling.
Even if just the next child doesnt need the prop, still it will have to carry it forward.
Hence it is anti pattern and brings unmanageble or unappealing code.

**Prop Drilling doesn't mean that parent re-renders children. It means the syntactic uneasiness when writing code**



# Context API
Helps fix the prop drilling.
`https://react.dev/learn/passing-data-deeply-with-context`
If you use the context api, you are pushing your state management outside the core react component.

Check out `2_propDrilling`
 

Now here what we did was created a variable using ContextAPI, and wrapped the variable over the parent (GCA) using `Variable.Provider` and prop as `value={count}`
Now whichever child needed the state, it simple creates a local variable/reference using `useContext`

Ideally the middle child who does not require the state will not initialize or use context state, so whenever the context state updates the middle child should not update.
But it is not the case using ContextAPI.

So **Why do we use Context API?**
1. To make rendering more performance efficient ? **No**
2. To make syntax cleaner and get rid of prop drilling ? **Absolutely**

So what to make performance efficient?
Use **State Management Libraries**


# State management Libraries

A cleaner way to store the state of your app.
Until now, the cleanest thing you can do is use the Context API. It lets you teleport the state.

But there are better solutions that get rid of the problems that Context Api has of unnecessary re-renders.

There are a few well known State Management Libraries eg. **Recoil**, **Zustand**, **Redux**, etc

## Recoil
A state management library for React. 

In Recoil, instead of state there is a concept of an **atom** to store the state.
An atom can be defined outside the component.
Can be teleported to any component.

`npm install recoil`

Things to learn in Recoil
* RecoilRoot
* atom  --> same as useState()
* useRecoilState --> get the state and setter function ege [count, setCount]
* useRecoilValue --> to get the state variable eg count
* useSetRecoilState --> to get the setter function eg setCount
* selector

So when do we use `useState` and when `atom`
When need state to be global, prop drilling required, etc use cases is where we use atom.
Else if scope is inside the same component then simply use `useState`

Selectors basically have a get function that takes a argument `get` which has access to various atom elements and return the state which depends on these atoms by doing some logic.

# Recoil Deep Dive

Things to learn
1. Even for using recoil hooks, all the components should be wrapped inside the RecoilRoot. That is not just the components but also the recoil hooks need to be wrapped inside.
2. All key of atoms must be unique. If not unquie the last defined atom overlaps all.
3. Selectors is derived from other atoms kind of logic over atoms and return a value
4. Selector is better than  use memo because if in future a new component is dependend on these values we can use the same selector there.


# atomFamily
Problem: Sometimes you need more than one atom for your use case.
For example: Creating a todo application

Create a component that takes a todo id as input, renders the TODO
You need to store the Todo in an atom (can not use `useState`)
All the TODOs can be hardcoded as a variable.

Each component needs to have its own atom created dynamically at run time. --> Using AtomFamily

Atom family basically takes a input and returns a atom state back based on input.
Note if input remains same same atom is returned and not a new one. So input is mapped with a single atom.

# Selector Family
In our TODO application if you are supposed to get TODOs from a server.

Check out Suspense, ErrorBoundary.