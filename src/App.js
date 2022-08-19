import React from 'react'
import { useRoutes } from "react-router-dom";

import ItemsList from './pages/ItemsList'
import ItemDetails from './pages/ItemDetails'
import './App.css';

const App = () => useRoutes([
  { path: "/", element: <ItemsList /> },
  { path: "/:id", element: <ItemDetails /> }
]);

export default App;
