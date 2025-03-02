import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 py-4'}`}>
      <div className="container">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <Link to="/" className="flex items-center">
              <div className="h-12 sm:h-16 flex items-center font-bold text-xl text-primary">
                <img src="images/vinh-phat-logo.png" alt="Logo" className="h-12 sm:h-16" />
              </div>
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="p-2 sm:hidden" 
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center">
              <div className="p-2 mr-3 text-white bg-primary rounded-full">
                <FaPhone />
              </div>
              <div>
                <p className="text-sm text-gray-500">Hotline</p>
                <a href="tel:0976517499" className="font-bold text-dark">097 651 7499</a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-2 mr-3 text-white bg-primary rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:quangvinhxecau@gmail.com" className="font-bold text-dark">quangvinhxecau@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden sm:block'}`}>
          <ul className="flex flex-col sm:flex-row sm:justify-center sm:space-x-8">
            <li>
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `block py-2 font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`
                }
                onClick={closeMenu}
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  `block py-2 font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`
                }
                onClick={closeMenu}
              >
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({isActive}) => 
                  `block py-2 font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`
                }
                onClick={closeMenu}
              >
                Dịch vụ
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({isActive}) => 
                  `block py-2 font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-dark hover:text-primary'}`
                }
                onClick={closeMenu}
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header