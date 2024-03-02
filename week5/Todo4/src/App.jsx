import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [title, setTitle] = useState("Hi, who are you?")

  function changeTitle() {
    setTitle("Hello agent "+Math.floor(Math.random() * 100));
  }

  return ( <div>
      <button onClick={changeTitle}>Click Me</button>
      <Header title={title}></Header>
      <Header title="Update profile 1"></Header>
      <Header title="Update profile 2"></Header>
      <Header title="Update profile 3"></Header>
      <Header title="Update profile 4"></Header>
      <Header title="Update profile 5"></Header>
      <Header title="Update profile 6"></Header>
    </div>
  )
}
/* One way */
// const Header = React.memo(function Header({title}) {
//   return <div>
//     {title}
//   </div>
// });
/* Second Way */
function header({title}) {
  return <div>
    {title}
  </div>
}
const Header = memo(header);


export default App
