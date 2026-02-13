import { Route, Routes } from "react-router-dom"
import Product from "./pages/productPage"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Contact } from "./pages/contact"
import Details from "./pages/productPage/modules/details"
import { ProductCard } from "./components/productCard"
import Collapse from "./pages/test"
import { Shop } from "./pages/shop"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about/" element={<About/>} />
      <Route path="/contact/" element={<Contact/>} />
      <Route path="/details/" element={<Details/>} />
      <Route path="/id/" element={<ProductCard/>} />
      <Route path="/test/" element={<Collapse/>} />
      <Route path="/shop/:id" element={<Shop/>} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  )
}

export default App

