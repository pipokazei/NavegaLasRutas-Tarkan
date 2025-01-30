import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "./components/pages/cart/Cart";
import { Checkout } from "./components/pages/checkout/Checkout";
import { Home } from "./components/pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/products/:name" element={<ItemListContainer />} />
        <Route path="/product/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
