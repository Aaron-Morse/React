import { useState, createContext } from "react";
import Header from "./components/header/Header";
import ProductPage from "./components/productpage/ProductPage";
import "./App.css";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <ProductPage />
      </CartContext.Provider>
    </div>
  );
}

export default App;
