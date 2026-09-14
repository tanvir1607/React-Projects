import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.tsx'
import Banner from './components/Banner.tsx'
import Technologies from './components/Technologies.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <Technologies />
    <Footer />
  </StrictMode>,
)
