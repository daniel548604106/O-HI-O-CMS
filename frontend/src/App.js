import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./pages/Products/Index.js";
import Product from "./pages/Products/Product.js";
import ProductEdit from "./pages/Products/Edit.js";
import React, { useRef } from "react";

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Router>
        <Route path={`/products`} exact>
          <Products />
        </Route>
        <Route path={`/products/:id`} exact>
          <Product />
        </Route>
        <Route path={`/products/:id/edit`} exact>
          <ProductEdit />
        </Route>
      </Router>
    </>
  );
}
