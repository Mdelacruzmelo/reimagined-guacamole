import React from 'react'
import { useRoutes } from "react-router-dom";
import ItemsList from './pages/ItemsList'
import ItemDetails from './pages/ItemDetails'
import PageNotFound from './pages/PageNotFound'

const App = () => useRoutes([
  { path: "/", element: <ItemsList /> },
  { path: "/:id", element: <ItemDetails /> },
  { path: "/404", element: <PageNotFound /> },
  { path: "*", element: <PageNotFound /> }
]);

export default App;
