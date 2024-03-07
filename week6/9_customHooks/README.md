# What are hooks?
Hooks are a feature introduces in React 16.8 that allow you to use `state and other react features` without writing `a class`. 
They are functions that let you "hook into" `React state` and `lifecycle` features from function components.

Class based components example: (before hooks)
```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
```

Functional Components (now)
```jsx
import React, { useState } from "react"
function MyComponent() {
    const [count, setCount] = useState(0);
    
    const incrementCount = () => {
        setCount(count + 1);
    }

    return <div>
        <p>{count}</p>
        <button onClick={incrementCount}>Increment</button>
    </div>
}
```

### Lifecycle events
The events that happens on a particular trigger point lets say first time the component is rendered,etc.

Using Class (before)
```jsx
class MyComponent extends React.Component {
    componentDidMount() {
        // perform setup or data fetching here
    }
    componentWillUnmount() {
        // Clean up eg. remove event listeners or cancel subscription
    }

    render() {
        // Render UI 
    }
}
```

Using functional (now)
```jsx
import React, { useState, useEffect } from "react";

function MyComponent() {
    useEffect(() => {
        //Perform setup or data fetching here

        return () => {
            // Cleanup code (similar to componentWillUnmount)
        };
    }, []);

    //Render UI
}
```
Note: return() is basically unmount code, that gets executed if the component is removed or unmounted from DOM.



### Most commonly used hooks in React
1. useState
2. useEffect
3. useMemo
4. useCallback

These hooks are provided to you by the React library

But you can also create your own hooks

# Custom Hooks

`Hooks` that you create yourself, so other people can use them are called custom hooks.

A `custom hook` is effectively a function, but with the following properties -
1. Uses another hook internally (useState, useEffect, another custom hook)
2. Starts with `use`

A few good examples of this can be
1. Data fetching hooks
2. Browser functionality related hooks - useOnlineStatus, useWindowSize, useMousePosition
3. Performance/Timer based - useInterval, useDebounce


1. Data fetching hook
```jsx
/* Data fetching as a customHook */
function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, []);

  return todos;
}
function App() {
    const todos = useTodos();
    ...
}
```
We can even do fetching data after n secs, n given as input.


## useSwr: React hook for data fetching
swr is a popular React library that creates a lot of these hooks for you, and you can use it directly.

```jsx
import useSWR from 'swr';

// const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcher = async function (url) {
  const data = await fetch(url);
  const json = await data.json();
  return json;
}

function Profile() {
  const { data, error, isLoading } = useSWR('https://sum-server.100xdevs/todos', fetcher);

  if (error) return <div>failed to load </div>
  if (isLoading) return <div> Loading ... </div>
  return <div> hello, you have {data.todos.length} todos! </div>
}
```

# Browser functionality related hooks

## `useIsOnline` hook 
Create a hook that returns true or false based on whether the user is currently online.

Two ways to do it:
1. `window.navigator.onLine` returns `true` or `false` based on whether the user is online.
2. You can attach the following event listeners to listen to whether the user is online or not
```js
window.addEventListener('online', () => console.log('Became online'));
window.addEventListener('offline', () => console.log('Became offline'));
```

## `useMousePointer` hook
Create a hook that returns you the current mouse pointer position

Given:
`window.addEventListener('mousemove', handleMouseMove);` will trigger the `handleMouseMove` function anytime the mouse pointed is moved.

## `useDimentions` hook
Create a hook that returns you the current width and height of the browser screen

Given:
`window.addEventListener('resize', updateSize);` will trigger the update size



**Important**
# Performance/Timer based

## useInterval
Create a hook that runs a certain callback function every n seconds

## useDebounce
Create a hook that debounces a value given
1. The value that needs to be debounced
2. The interval at which the value should be debounced
