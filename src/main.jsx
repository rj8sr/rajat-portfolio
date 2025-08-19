import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { ParallaxProvider } from 'react-scroll-parallax'

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>
)
