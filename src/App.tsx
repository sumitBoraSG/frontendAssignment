import Home from './features/Home/Home'
import NotFoundPage from './features/NotFoundPage/NotFoundPage'
import ProductDetails from './features/ProductDetails/ProductDetails';
import LoginPage from './features/Auth/Login/Login'
import RegisterPage from './features/Auth/Register/Register'
import './App.css'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
      
    </Routes>
  )
}

export default App;

