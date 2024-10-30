import React, { useCallback, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Cart from './cart/pages/Cart'
import Users from './user/pages/Users';
import MainNavigation from './shared/components/navigation/MainNavigation/MainNavigation';
import ProductDetail from './products/pages/ProductDetail/ProductDetail';
import Products from './products/pages/Products';
import Register from './auth/pages/Register/Register';
import Auth from './auth/pages/Auth/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  const login = useCallback(() => {
    setIsLogged(true)
  }, []);

  const logout = useCallback(() => {
    setIsLogged(false)
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged: isLogged, login: login, logout: logout }}>
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:userId/cart" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
