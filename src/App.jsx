import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
    <div className="social-button">
      <div className="social-button-content">
        <a href="tel:0976517499" className="call-icon" rel="nofollow">
           <img src="/images/call-icon.jpg" alt="Facebook Messenger" className='ml-1' />
          <div className="animated alo-circle"></div>
          <div className="animated alo-circle-fill  "></div>
          <span>Hotline: 097 651 7499</span>
        </a>
        <a target="_blank"
          href="https://m.facebook.com/profile.php?id=100037351275727&tsid=0.7994128125801672&source=result"
          classNames="mes">
          <img src="/images/messenger-icon.jpg" alt="Facebook Messenger" className='ml-1 mt-1' />
          <div className="animated alo-circle"></div>
          <div className="animated alo-circle-fill"></div>
          <span>Nhắn tin Facebook</span>
        </a>
        <a href="http://zalo.me/0908032431" className="zalo" target="_blank">
          <img
            src="https://cdn.glitch.com/4c33b3fa-3a9b-45fd-be9b-7815d4cc481a%2FIMG_20210120_231501.jpg?v=1611159327528"
            alt="zalo"
            className='ml-1' />
          <div className="animated alo-circle"></div>
          <div className="animated alo-circle-fill"></div>
          <span>Zalo: 0908.032.431</span>
        </a>
      </div>
      </div>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App