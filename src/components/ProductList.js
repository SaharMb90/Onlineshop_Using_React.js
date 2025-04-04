import React from "react";
import "./ProductTrolley.css";

const mockProducts = [
  {
    id: "1",
    title: "Stylish Watch",
    description: "Waterproof and elegant design",
    image: "https://picsum.photos/200",
    price: 99.99,
  },
  {
    id: "2",
    title: "Leather Bag",
    description: "High-quality leather bag with elegant design",
    image: "https://picsum.photos/200",
    price: 150.0,
  },
];

const ProductList = ({ addToCart, productDetail }) => {
  return (
   <>
      {mockProducts.map((product) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div key={product.id} className="p-4 border rounded shadow">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded"
          />
          <p className="text-gray-700">{product.description}</p>
          <p className="text-lg font-semibold text-blue-600">${product.price}</p>
          <button className="btn" onClick={() => addToCart(product)}>
            Add to Basket
          </button>
          <a className="btn" onClick={() => productDetail(product.id)}>
            Product Detail
          </a>
        </div>
        </div>
      ))}
   </>
  );
};

export default ProductList;
export { mockProducts }; 
