import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count"

function App() {

  return (
    <>
      <RecoilRoot> {/* -- To mark the scope of Recoil atoms -- */}
      <Count />
      </RecoilRoot>
    </>
  )
}

function Count() {
  console.log("Count re -rendered")
  return <div>
    <CountRenderer />
    <br></br>
    <Button />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return <div>
    <b> Current count is {count}</b>     
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return (<div>
    { isEven ? "It is Even" : null }
  </div>)
}

function Button() {
  // const [count, setCount] = useRecoilState(countAtom)
  const updateCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={()=> { 
      // setCount(count + 1);
      updateCount(count => count + 1);
      }}> Increment </button>
    <button onClick={()=> {
      // setCount(count - 1);
      updateCount(count => count - 1);
    }} > Decrease </button>
  </div>
}

export default App
