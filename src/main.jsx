import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './Router/MainRoutes'
import AuthProvider from './Auth/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-worSans'>
      <QueryClientProvider  client={queryClient}>
      <AuthProvider>
      <RouterProvider router={MainRoutes}></RouterProvider>
      </AuthProvider>
      </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
