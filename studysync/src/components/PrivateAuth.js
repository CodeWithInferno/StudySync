// PublicRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PublicRoute = ({ path, element: Element, ...props }) => {
  const { auth } = useAuth();

  return auth ? <Navigate to="/" /> : <Route path={path} element={<Element />} {...props} />;
};

export default PublicRoute;
