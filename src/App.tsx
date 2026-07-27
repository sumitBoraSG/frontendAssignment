import Home from './features/Home/Home'
import NotFoundPage from './features/NotFoundPage/NotFoundPage'
import './App.css'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App;

