import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Trolley from './components/Trolley';
import Contact from './components/ContactMe';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProfileInfo from './components/ProfileInfo';
import ProductDetail from './components/ProductDetail';
import './App.css';

const mockProducts = [
  {
    id: "1",
    title: "Stylish Watch",
    description: "Waterproof and elegant design",
    image: "https://picsum.photos/400/300",
    price: 99.99,
  },
  {
    id: "2",
    title: "Leather Bag",
    description: "High-quality leather bag with elegant design",
    image: "https://picsum.photos/400/300",
    price: 150.0,
  }
];

function App() {
  const [trolley, setTrolley] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      setTrolley((prevTrolley) => [...prevTrolley, product]);
    }
  };

  const productDetail = (id) => {
    navigate(`/product/${id}`);
  };

  const completePurchase = () => {
    if (trolley.length > 0) {
      setPurchaseHistory((prevHistory) => [...prevHistory, ...trolley]);
      setTrolley([]);
      alert("Purchase complete!");
    }
  };

  return (
    <div className="App">
      <Header 
        isAuthenticated={isAuthenticated} 
        userEmail={userEmail} 
      />
      <main>
      
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} productDetail={productDetail} products={mockProducts} />} />
          <Route path="/trolley" element={<Trolley trolley={trolley} completePurchase={completePurchase} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/product/:id" 
            element={<ProductDetail addToCart={addToCart} products={mockProducts} />} 
          />
          <Route 
            path="/login" 
            element={
              <Login 
                setIsAuthenticated={setIsAuthenticated} 
                setUserEmail={setUserEmail} 
                setUserPassword={setUserPassword} 
              />
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProfileInfo 
                userEmail={userEmail} 
                userPassword={userPassword} 
                purchaseHistory={purchaseHistory} 
              />
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
