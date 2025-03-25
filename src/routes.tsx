import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home-index'
import RestaurantPlates from './pages/Restaurant/restaurant-index'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantPlates />} />
  </Routes>
)

export default Rotas
