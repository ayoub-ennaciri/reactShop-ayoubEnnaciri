import { Route, Routes } from "react-router-dom"
import Product from "./pages/productPage"
import { Home } from "./pages/home"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  )
}

export default App
