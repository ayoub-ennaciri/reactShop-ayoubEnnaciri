import { Route, Routes } from "react-router-dom"
import Product from "./pages/productPage"
import { BannerCard } from "./components/bannerCard"


function App() {

  return (
    <Routes>
      {/* <Route path="/" element={<Product/>} /> */}
      <Route path="/" element={<BannerCard/>} />

    </Routes>
  )
}

export default App
