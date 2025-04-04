import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import icons
import "./Header.css";

const Header = ({ isAuthenticated, userEmail, handleSignOut }) => {

  
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  return (
    <div className="header-background">
      <header className="header">
        {/* Menu button for mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <h1 className="logo">Logo</h1>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <FaSearch className="search-icon" />
        </div>


      </header>
      {/* Navbar */}
      <nav className="nav-links">
        <div className="nav-item" onMouseEnter={() => handleMouseEnter("home")} onMouseLeave={handleMouseLeave}>
         
          {hoveredItem === "home" && (
            <div className="dropdown-menu">
              <Link to="/about">About Us</Link>
              <Link to="/news">Latest News</Link>
            </div>
          )}
        </div>

       
        <div className="nav-item" onMouseEnter={() => handleMouseEnter("spells")} onMouseLeave={handleMouseLeave}>
          <Link to="/productdetail">Health & Lifestyle</Link>
          {hoveredItem === "spells" && (
            <div className="dropdown-menu">
            
              <Link to="/productdetail">Personal Care</Link>
              <Link to="/productdetail">Beauty & Hair</Link>
              <Link to="/spells/love">Travel</Link>
              <Link to="/spells/love"> Gaming consoles</Link>
              <Link to="/spells/love">Fitness</Link>
             
              <Link to="/spells/love">Pets</Link>
              <Link to="/spells/love">Personal Care</Link>
              <Link to="/spells/protection">Beauty & Hair</Link>
              <Link to="/spells/love">Travel</Link>
              <Link to="/spells/love"> Gaming consoles</Link>
              <Link to="/spells/love">Fitness</Link>
             
              <Link to="/spells/love">Pets</Link>
              <Link to="/spells/love">Personal Care</Link>
              <Link to="/spells/protection">Beauty & Hair</Link>
              <Link to="/spells/love">Travel</Link>
              <Link to="/spells/love"> Gaming consoles</Link>
              <Link to="/spells/love">Fitness</Link>
             
              <Link to="/spells/love">Pets</Link>
              <Link to="/spells/love">Personal Care</Link>
              <Link to="/spells/protection">Beauty & Hair</Link>
              <Link to="/spells/love">Travel</Link>
              <Link to="/spells/love"> Gaming consoles</Link>
              <Link to="/spells/love">Fitness</Link>
             
              <Link to="/spells/love">Pets</Link>
            </div>
          )}
        </div>
        
        {/* Skincare Dropdown */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("skincare")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/skincare">Skincare</Link>
          {hoveredItem === "skincare" && (
            <div className="dropdown-menu">
              <Link to="/skincare/cleansers">Cleansers</Link>
              <Link to="/skincare/moisturizers">Moisturizers</Link>
              <Link to="/skincare/serums">Serums</Link>
              <Link to="/skincare/sunscreen">Sunscreen</Link>
              <Link to="/skincare/masks">Face Masks</Link>
              <Link to="/skincare/cleansers">Cleansers</Link>
              <Link to="/skincare/moisturizers">Moisturizers</Link>
              <Link to="/skincare/serums">Serums</Link>
              <Link to="/skincare/sunscreen">Sunscreen</Link>
              <Link to="/skincare/masks">Face Masks</Link>
              <Link to="/skincare/cleansers">Cleansers</Link>
              <Link to="/skincare/moisturizers">Moisturizers</Link>
              <Link to="/skincare/serums">Serums</Link>
              <Link to="/skincare/sunscreen">Sunscreen</Link>
              <Link to="/skincare/masks">Face Masks</Link>
              <Link to="/skincare/cleansers">Cleansers</Link>
              <Link to="/skincare/moisturizers">Moisturizers</Link>
              <Link to="/skincare/serums">Serums</Link>
              <Link to="/skincare/sunscreen">Sunscreen</Link>
              <Link to="/skincare/masks">Face Masks</Link>
            </div>
          )}
        </div>

        {/* Home & Garden Dropdown */}
        <div
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("homegarden")}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/home-garden">Home & Garden</Link>
          {hoveredItem === "homegarden" && (
            <div className="dropdown-menu">
              <Link to="/home-garden/furniture">Furniture</Link>
              <Link to="/home-garden/lighting">Lighting</Link>
              <Link to="/home-garden/decor">Decor</Link>
              <Link to="/home-garden/plants">Indoor Plants</Link>
              <Link to="/home-garden/tools">Gardening Tools</Link>
            </div>
          )}
        </div>


        <div className="nav-item" onMouseEnter={() => handleMouseEnter("contact")} onMouseLeave={handleMouseLeave}>
          <Link to="/contact">Contact Me</Link>
        </div>

        {isAuthenticated ? (
          <div className="nav-item user-menu" onMouseEnter={() => handleMouseEnter("user")} onMouseLeave={handleMouseLeave}>
            <span className="user-welcome">Hello, {userEmail}</span>
            {hoveredItem === "user" && (
              <div className="dropdown-menu">
                <Link to="/profile">Profile Info</Link>
                <Link to="/trolley">My Basket</Link>
                <button onClick={handleSignOut}>Sign Out</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
