import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaYoutube } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white pt-12 sm:pt-16 pb-6">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">VẬN TẢI Vinh Phát</h3>
            <p className="mb-4 text-sm sm:text-base">Chuyên cung cấp dịch vụ vận chuyển hàng hóa chuyên nghiệp, an toàn và nhanh chóng trên toàn quốc.</p>
            {/* <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-primary hover:bg-red-700 p-2 rounded-full transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" className="bg-primary hover:bg-red-700 p-2 rounded-full transition-colors duration-300">
                <FaYoutube />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors duration-300 text-sm sm:text-base">Trang chủ</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors duration-300 text-sm sm:text-base">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-300 text-sm sm:text-base">Dịch vụ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors duration-300 text-sm sm:text-base">Liên hệ</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-300 text-sm sm:text-base">Vận chuyển hàng hóa</Link>
              </li>
              {/* <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-300 text-sm sm:text-base">Vận chuyển container</Link>
              </li> */}
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-300 text-sm sm:text-base">Vận chuyển hàng siêu trường siêu trọng</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors duration-300 text-sm sm:text-base">Cho thuê xe cẩu</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex">
                <FaMapMarkerAlt className="mt-1 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">54, Tân Hoà II, phường Hiệp Phú, quận 9, Tp.HCM</span>
              </li>
              <li className="flex">
                <FaPhone className="mt-1 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">090 803 2431 - 097 651 7499</span>
              </li>
              <li className="flex">
                <FaEnvelope className="mt-1 mr-3 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base">vantaivinhphat@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-700 text-center">
          <p className="text-sm sm:text-base">&copy; {currentYear} Vận Tải Vinh Phát. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer