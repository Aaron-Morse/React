import { useState, createContext } from "react";
import Header from "./components/header/Header";
import ProductPage from "./components/productpage/ProductPage";
import "./App.css";

export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, setProducts }}>
        <Header />
        <ProductPage />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
