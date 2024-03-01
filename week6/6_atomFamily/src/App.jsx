import { RecoilRoot, useRecoilState} from "recoil";
import { todosAtomFamily } from "./atoms"

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
    </RecoilRoot>
  )
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      <h1> {todo.title} </h1>
      <h3>{todo.description}</h3>
      <br />
    </>
  )
}
export default App
