import React, { useState, useEffect } from "react";
import './App.css'
import axios from "axios"

function App() {
  const [render, setRender] = useState(true);
  const {todos, loading} = useTodos(5);
  const { isonline } = useIsOnline();
  const mousePointer = useMousePointer();
  const currentDimention = useDimentions();
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 3000);

  /* Unmounting component */
  useEffect(()=> {
    setTimeout(()=> {
      console.log("Timeout");
      setRender(r => !r);
    }, 3000);
  }, []);

  return (
    <div>
      <MyComponentX />
      <MyComponent />      
      <br />
      {render ? <MyComponentLife /> : <div />}
      {render ? <MyComponentLifeNow /> : <div />}
      <br />
      <TodoWithoutCustomHook />
      <br />
      <p>WIth custom hook cleaner syntax </p>
      {loading ? "Loading..." : todos.map(todo => <Track todo={todo} />)}
      { isonline ? <h1>Yes I am online</h1> : <h1> OOps I am offline.</h1>}
      <h1> Your mouse position is {mousePointer.x} {mousePointer.y} </h1>
      <h1> Your window dimentions are Width: {currentDimention.w} and Height: {currentDimention.h} </h1>
      <h1> Current Count is {count} </h1>
      <SerchBar />
    </div>
  )
}

function MyComponentX() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  }

  return <div>
    <p>{count}</p>
    <button onClick={incrementCount}>Increment</button>
  </div>
}

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

class MyComponentLife extends React.Component {
  componentDidMount() {
      console.log("Component mounted before");
  }
  componentWillUnmount() {
      console.log("Component unmounted before");
  }

  render() {
    return <div>
        From Inside my component life before
      </div>
  }
}

function MyComponentLifeNow() {
    useEffect(() => {
        console.log("Component mounted react now");

        return () => {
          console.log("Component unmounted react now");
        };
    }, []);

    //Render UI
    return <div>
      From Inside my component life now
    </div>

}

/* Data fetching without custom hook */
function TodoWithoutCustomHook() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, []);

  return (
    <>
      <>Todos without custom hooks</>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({todo}) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

/* Data fetching as a customHook */
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    const value = setInterval(()=> {
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {        
          setTodos(res.data.todos);
          setLoading(false);
        })
      }, n * 1000);

    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {        
        setTodos(res.data.todos);
        setLoading(false);
      });
    /* Whenever n changes this will restart, so multiple intervals will start
    So when n changes we want to clear previous interval */
    return () => {
      console.log("Use todos Interval cleared");
      clearInterval(value);
    }  
  }, [n]); /* Given n is a state variable */

  return {todos, loading};
}

function useIsOnline() {
  const [isonline, setIsOnline] = useState(true);

  // useEffect(() => {
  //   const val = setInterval(() => {
  //     const val = window.navigator.onLine;      
  //     setIsonline(val);
  //   }, 3000); /* After every 3 sec check for online status */

  //   return () => {
  //     console.log("Isonline interval cleared");
  //     clearInterval(val);
  //   }
  // }, []);

  useEffect(() => {
    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));

    return () => {
      window.addEventListener('online', () => setIsOnline(true));
      window.addEventListener('offline', () => setIsOnline(false));
    }
  }, [])

  return {isonline};
}

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => { /* unmount */
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

function useDimentions() {
  const [currentDimention, setCurrentDimention] = useState({w: window.innerWidth, h:window.innerHeight});

  const updateSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setCurrentDimention({
      w: width, h: height
    });    
  }
  useEffect(()=>{
    window.addEventListener('resize', updateSize);
    return () => {
      window.addEventListener('resize', updateSize);
    }
  }, []);

  return currentDimention;
}

function useInterval(callbackFunction, timeinMSec) {
  
  useEffect(() => {
    const x = setInterval(callbackFunction, timeinMSec);

    return () => clearInterval(x);
  }, [callbackFunction, timeinMSec]);
}

function SerchBar () {
  const [inputValue, setInputValue] = useState('');
  const debounceValue = useDebounce(inputValue, 1000); /* In milli seconds */

  useEffect(() => {
    console.log("Searching for a value");
  }, [debounceValue])

  return (
    <input
      type="text"
      value={inputValue}
      onChange = {(e) => setInputValue(e.target.value)}
      placeholder="Search ..."
    />
  )
}

function useDebounce(inputValue, timeinMSec) {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const x = setTimeout(() => {
      console.log("Timer ended");
      setDebouncedValue(inputValue);
    }, timeinMSec);

    return () => {
      clearTimeout(x);
    }
  }, [inputValue, timeinMSec]);
  
  return debouncedValue;
}

export default App

