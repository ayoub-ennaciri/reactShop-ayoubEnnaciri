import { Route, Routes } from "react-router-dom"
import Product from "./pages/productPage"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import Details from "./pages/productPage/modules/details"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about/" element={<About/>} />
      <Route path="/contact/" element={<Contact/>} />
      <Route path="/details/" element={<Details/>} />
    </Routes>
  )
}

export default App
