import { Route, Routes } from "react-router-dom"
import Product from "./pages/productPage"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Product/>} />
    </Routes>
  )
}

export default App
