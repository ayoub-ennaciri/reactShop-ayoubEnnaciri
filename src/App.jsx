import { Route, Routes } from "react-router-dom"
import Product from "./pages/productPage"
import { Home } from "./pages/home"
import { About } from "./pages/about"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about/" element={<About/>} />
    </Routes>
  )
}

export default App
