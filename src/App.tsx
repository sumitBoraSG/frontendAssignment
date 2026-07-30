import Home from './features/Home/Home'
import NotFoundPage from './features/NotFoundPage/NotFoundPage'
import ProductPage from './features/ProductDetails/ProductPage.tsx';
import LoginPage from './features/Auth/Login/Login'
import RegisterPage from './features/Auth/Register/Register'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './scrollToTop.tsx';

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
      
    </Routes>
    </>
  )
}

export default App;

