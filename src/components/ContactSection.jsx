import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

function ContactSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Liên hệ với chúng tôi</h2>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-12">
          Hãy liên hệ với chúng tôi để được tư vấn và báo giá dịch vụ vận chuyển
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div>
            <form className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2 text-sm sm:text-base">Họ và tên</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                    placeholder="Nhập họ và tên"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2 text-sm sm:text-base">Số điện thoại</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>
              <div className="mb-4 sm:mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm sm:text-base">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  placeholder="Nhập địa chỉ email"
                />
              </div>
              <div className="mb-4 sm:mb-6">
                <label htmlFor="subject" className="block text-gray-700 mb-2 text-sm sm:text-base">Tiêu đề</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  placeholder="Nhập tiêu đề"
                />
              </div>
              <div className="mb-4 sm:mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2 text-sm sm:text-base">Nội dung</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                  placeholder="Nhập nội dung"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-full text-sm sm:text-base">Gửi tin nhắn</button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Thông tin liên hệ</h3>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex">
                  <div className="p-2 sm:p-3 bg-primary/10 text-primary rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaMapMarkerAlt size={18} className="sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Địa chỉ</h4>
                    <p className="text-gray-600 text-sm sm:text-base">54, Tân Hoà II, phường Hiệp Phú, quận 9, Tp.HCM</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="p-2 sm:p-3 bg-primary/10 text-primary rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaPhone size={18} className="sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Điện thoại</h4>
                    <p className="text-gray-600 text-sm sm:text-base">090 803 2431 - 097 651 7499</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="p-2 sm:p-3 bg-primary/10 text-primary rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaEnvelope size={18} className="sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base">quangvinhxecau@gmail.com</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="p-2 sm:p-3 bg-primary/10 text-primary rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaClock size={18} className="sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base sm:text-lg mb-1">Giờ làm việc</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Thứ 2 - Thứ 7: 8:00 - 17:30</p>
                    <p className="text-gray-600 text-sm sm:text-base">Chủ nhật: Nghỉ</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Bản đồ</h3>
              <div className="h-[250px] sm:h-[300px] bg-gray-200 rounded-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5177580045246!2d106.69916857469967!3d10.771594089387621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40a3b49e59%3A0xa1bd14e483a602db!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1682328175505!5m2!1svi!2s" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection