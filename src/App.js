import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './products/pages/NewPlace';
import MainNavigation from './shared/components/navigation/MainNavigation/MainNavigation';
import UserPlaces from './user/pages/UserPlaces';
import ProductDetail from './products/pages/ProductDetail/ProductDetail';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/places/:placeId" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
