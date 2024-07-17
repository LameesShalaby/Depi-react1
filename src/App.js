import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ProductsList from "./components/ProductsList";
import ProductDetails from "./pages/ProductDetails";
import "./App.css";

function App() {
  const [searchKey, setSearchKey] = useState("");

  return (
    <div className="App">
      <Header searchKey={searchKey} setSearchKey={setSearchKey} />
      <Layout>
        <Routes>
          <Route path="/" element={<ProductsList search={searchKey} />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
