import { useState } from 'react'
import MyRoutes from "./routes/MyRoutes";

function App() {
  const [count, setCount] = useState(0)

  return <MyRoutes />;
}

export default App
