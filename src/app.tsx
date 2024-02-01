import { useState } from "react"

const App = () => {
  const [count, setCount] = useState<number>(0)
  
  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount((prev) => prev + 1)}>Plus</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Minus</button>
    </div>
  )
}

export default App
