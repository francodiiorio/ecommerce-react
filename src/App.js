import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Cart from './cart/pages/Cart'
import Users from './user/pages/Users';
import MainNavigation from './shared/components/navigation/MainNavigation/MainNavigation';
import ProductDetail from './products/pages/ProductDetail/ProductDetail';
import Products from './products/pages/Products';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/products" element={<Products />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
