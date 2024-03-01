import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Landing = lazy(() => import('./pages/Landing'))


function App() {
  
  return (
    <>
    <div>      
      <BrowserRouter>
        <AppBar />
        <Routes>    
          <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>}></Route>
        </Routes>
      </BrowserRouter>  
    </div>
    </>
  )
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome to Routes </h1>
      <div>
        <button onClick={() => {
          // window.location.href = "/";
          navigate("/");
        }}>Landing</button>
        <button onClick={()=>{
          // window.location.href = "/dashboard";
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
    </>
)}

export default App
