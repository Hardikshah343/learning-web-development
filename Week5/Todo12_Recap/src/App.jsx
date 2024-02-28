import { useEffect, useState, useMemo, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});
  const divRef = useRef();

  useEffect(()=>{
    setExchange1Data({income: 100});
    setExchange2Data({income: 100});
  }, [])
 
  useEffect(() => {
    setTimeout(() => {
      setBankData({
        returns: 100
      });
    }, 5000);
  });

  useEffect(()=>{
    setTimeout(()=>{
      divRef.current.innerHTML = "Hah using ref updated values";
    }, 3000);
  })

  // lets say this is a expensive operation and should not re calculate again ana again.
  // As bank data will be received after 5 sec it will rerendered. Unless.
  const exchangeIncome = useMemo(() => {
    console.log("Use memo got rendered.")
    return exchange1Data.income + exchange2Data.income; 
  }, [exchange1Data, exchange2Data]);
   
  const incomeTax = (bankData.returns + exchangeIncome) * 0.3;

  return (
    <div>
      <button onClick={()=> {setCount(count+1); }}>Current count is {count}</button>
      <h1> hi there, your income tax returns are {incomeTax} </h1>
      <div ref={divRef}>Hello World</div>
    </div>
  )
}

export default App
