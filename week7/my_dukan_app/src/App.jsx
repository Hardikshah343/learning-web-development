import "./index.css"
import { RevenueCard } from "./components/RevenueCard";


function App() {

  return (
    <div className="grid p-3 gap-3 md:grid-cols-2 lg:grid-cols-4">
      <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}  />
    </div>
  )
}

export default App
