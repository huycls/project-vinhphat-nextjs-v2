import React from 'react'
import { Link } from 'react-router-dom'

function CTASection() {
  return (
    <section className="py-12 sm:py-16 bg-secondary text-white">
      <div className="container px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Bạn cần vận chuyển hàng hóa?</h2>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
          Hãy liên hệ với Vận Tải Vinh Phát ngay hôm nay để được tư vấn và báo giá dịch vụ vận chuyển tốt nhất!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link to="/contact" className="btn bg-white text-secondary hover:bg-gray-100 text-sm sm:text-base">
            Liên hệ ngay
          </Link>
          <a href="tel:0976517499" className="btn bg-primary text-white hover:bg-red-700 text-sm sm:text-base">
            Gọi: 090 803 2431 - 097 651 7499
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection