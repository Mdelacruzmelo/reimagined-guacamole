import React from 'react'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import ItemsList from './pages/ItemsList'
import ItemDetails from './pages/ItemDetails'
import PageNotFound from './pages/PageNotFound'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CookiesProvider } from 'react-cookie'

const queryClient = new QueryClient()

const App = () => useRoutes([
  { path: '/', element: <ItemsList /> },
  { path: '/:id', element: <ItemDetails /> },
  { path: '/404', element: <PageNotFound /> },
  { path: '*', element: <PageNotFound /> }
])

const QueryWrapper = () => {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider>
          <App />
        </CookiesProvider>
      </QueryClientProvider>
    </Router>
  )
}

export default QueryWrapper
