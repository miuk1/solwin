import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './components/Home/Home.tsx'
import Slots from './components/Slots/Slots.tsx'
import LoginForm from './components/Login/Login.tsx'
import Dashboard from './components/Dashboard/Dashboard.tsx'
import SolWin from './components/SolWinSlot/SolWin.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="slots" element={<Slots />} />
      <Route path="login" element={<LoginForm />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="solwin" element={<SolWin />} />
    </Route>,
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
