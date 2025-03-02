import React, { useEffect } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

function ContactPage() {
  useEffect(() => {
    document.title = 'Liên hệ - Vận Tải Vinh Phát'
  }, [])

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px]">
        <img 
          src="/images/banner-vinhphat-2.jpg" 
          alt="Contact Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Liên hệ</h1>
            <p className="text-base sm:text-lg">Liên hệ với chúng tôi để được tư vấn và báo giá dịch vụ</p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 -mt-16 sm:-mt-20 relative z-10">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="p-3 sm:p-4 mb-3 sm:mb-4 text-white bg-primary rounded-full inline-block">
                <FaMapMarkerAlt size={18} className="sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Địa chỉ</h3>
              <p className="text-gray-600 text-sm sm:text-base">54, Tân Hoà II, phường Hiệp Phú, quận 9, Tp.HCM</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="p-3 sm:p-4 mb-3 sm:mb-4 text-white bg-primary rounded-full inline-block">
                <FaPhone size={18} className="sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Điện thoại</h3>
              <p className="text-gray-600 text-sm sm:text-base">090 803 2431 - 097 651 7499</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="p-3 sm:p-4 mb-3 sm:mb-4 text-white bg-primary rounded-full inline-block">
                <FaEnvelope size={18} className="sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Email</h3>
              <p className="text-gray-600 text-sm sm:text-base">quangvinhxecau@gmail.com</p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center">
              <div className="p-3 sm:p-4 mb-3 sm:mb-4 text-white bg-primary rounded-full inline-block">
                <FaClock size={18} className="sm:text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Giờ làm việc</h3>
              <p className="text-gray-600 text-sm sm:text-base">Tất cả các ngày trong tuần</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-8">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Gửi tin nhắn cho chúng tôi</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Hãy điền thông tin vào form bên dưới, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
              </p>
              <form className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Họ và tên</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Số điện thoại</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Tiêu đề</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                    placeholder="Nhập tiêu đề"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">Nội dung</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                    placeholder="Nhập nội dung"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary text-sm sm:text-base">Gửi tin nhắn</button>
              </form>
            </div>
            
            {/* Map */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Bản đồ</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Vận Tải Vinh Phát tọa lạc tại vị trí thuận lợi, dễ dàng tiếp cận từ nhiều hướng.
              </p>
              <div className="h-[300px] sm:h-[400px] bg-gray-200 rounded-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4607055549704!2d106.78333435017605!3d10.85252119223194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276c5564aee5%3A0xe9e90755d7316c54!2zNTQgxJAuIFTDom4gSMOyYSAyLCBQaMaw4budbmcgVMOibiBQaMO6LCBRdeG6rW4gOSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1610402213512!5m2!1sen!2s" 
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
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-light">
        <div className="container px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Câu hỏi thường gặp</h2>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Những câu hỏi thường gặp về dịch vụ vận chuyển của Vận Tải Vinh Phát
          </p>
          
          <div className="max-w-3xl mx-auto mt-8 sm:mt-12 space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Làm thế nào để đặt dịch vụ vận chuyển?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Bạn có thể đặt dịch vụ vận chuyển bằng cách gọi điện thoại đến hotline 0908 061 888, 
                gửi email đến vantaivinhphat@gmail.com hoặc điền form liên hệ trên website.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Chi phí vận chuyển được tính như thế nào?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Chi phí vận chuyển được tính dựa trên nhiều yếu tố như loại hàng hóa, khối lượng, kích thước, 
                quãng đường vận chuyển và dịch vụ đi kèm. Vui lòng liên hệ với chúng tôi để được báo giá chi tiết.
              </p>
            </div>
            
            {/* <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Thời gian vận chuyển mất bao lâu?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Thời gian vận chuyển phụ thuộc vào quãng đường và loại hàng hóa. Đối với vận chuyển nội thành, 
                thời gian thường từ 1-3 giờ. Đối với vận chuyển liên tỉnh, thời gian từ 1-3 ngày tùy theo khoảng cách.
              </p>
            </div> */}
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Vận Tải Vinh Phát có vận chuyển hàng hóa quốc tế không?</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Hiện tại, Vận Tải Vinh Phát chỉ cung cấp dịch vụ vận chuyển hàng hóa trong nước. 
                Chúng tôi đang trong quá trình mở rộng dịch vụ ra thị trường quốc tế.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage