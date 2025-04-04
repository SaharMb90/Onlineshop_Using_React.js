import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Sidebar from "./Sidebar";
import "./Home.css";

const Home = ({ addToCart, productDetail,products }) => {
  console.log(typeof addToCart);

  return (
    <div className="home-container">

      <Sidebar />
      <div className="main-content">
        <div className="product-list">
          {products.map((product) => (
            <ProductList
              key={product.id}
              product={product}
              addToCart={addToCart}
              productDetail={productDetail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
