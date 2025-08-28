import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import AdminDashboard from './pages/adminDashboard/AdminDashboard'
import Layout from './components/layout/Layout'
import NotFound from './pages/notFound/NotFound'
import Login from './pages/login/Login'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route 
          path="admin" 
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App