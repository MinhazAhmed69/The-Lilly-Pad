import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Reservation from './pages/Reservation'; // Import Reservation Page
import Blog from './pages/Blog'; // Import Blog Page
import Catering from './pages/Catering'; // Import Catering Page
import CateringMenu from './components/CateringMenu'; // Import CateringMenu Component
import { CartProvider } from './components/CartContext'; // Ensure CartContext is provided

function App() {
  const location = useLocation();

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-base-100">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/reservation" element={<Reservation />} /> {/* Reservation Route */}
              <Route path="/blog" element={<Blog />} /> {/* Blog Route */}
              <Route path="/catering" element={<Catering />} /> {/* Catering Route */}
              <Route path="/catering-menu" element={<CateringMenu />} /> {/* Catering Menu Route */}
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;