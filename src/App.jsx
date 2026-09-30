import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import About from './pages/About.jsx'
import Reservations from './pages/Reservations.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import OrderOnline from './pages/OrderOnline.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter><Layout><Routes>
      <Route path="/" element={<Home />} /><Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} /><Route path="/reservations" element={<Reservations />} />
      <Route path="/gallery" element={<Gallery />} /><Route path="/contact" element={<Contact />} />
      <Route path="/order" element={<OrderOnline />} />
    </Routes></Layout></BrowserRouter>
  )
}

export default App
