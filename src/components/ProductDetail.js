
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";

// const ProductDetail = ({ productId, addToCart }) => {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "products"));
//         const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         const selectedProduct = productsData.find(p => p.id === productId);
//         setProduct(selectedProduct);
//       } catch (error) {
//         console.error("Error fetching product: ", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (loading) return <p>Loading...</p>;
//   if (!product) return <p>Product not found.</p>;

//   return (
//     <div className="product-detail p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
//       <h2 className="text-xl font-bold">{product.title}</h2>
//       <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded" />
//       <p className="text-gray-700">{product.description}</p>
//       <p className="text-lg font-semibold text-blue-600">${product.price}</p>
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
//         onClick={() => addToCart(product)}
//       >
//         Do Not Add to Cart
//       </button>
//     </div>
//   );
// };
// export default ProductDetail;


import React, { useState } from "react";
import { useParams } from "react-router-dom";
import './productdetail.css';

const ProductDetail = ({ addToCart, products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [reviews, setReviews] = useState([
    { user: "Alice", comment: "Great product!", rating: 5 },
    { user: "Bob", comment: "Pretty decent, but could be better.", rating: 3 },
  ]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(5);

  if (!product) return <p>Product not found.</p>;

  const handleReviewSubmit = () => {
    if (newReview.trim() === "") return;
    setReviews([...reviews, { user: "Guest", comment: newReview, rating: newRating }]);
    setNewReview("");
    setNewRating(5);
  };

  return (
    <div className="product-detail-container">
      <div className="product-info">
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>

      <div className="reviews-section">
        <h3>Reviews & Comments</h3>
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <p className="user">{review.user}</p>
              <p className="rating">⭐ {review.rating}/5</p>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="review-form">
          <h4>Leave a Comment</h4>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            rows="3"
            placeholder="Write your review..."
          ></textarea>
         <div className="star-rating-input">
  {[1, 2, 3, 4, 5].map((rating) => (
    <span
      key={rating}
      className={`star ${newRating >= rating ? "selected" : ""}`}
      onClick={() => setNewRating(rating)}
    >
      ★
    </span>
  ))}
</div>

          <button onClick={handleReviewSubmit}>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
