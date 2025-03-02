import React from 'react'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'

function AboutSection() {
  const features = [
    "Đội ngũ nhân viên chuyên nghiệp",
    "Đội xe hiện đại, đa dạng",
    "Dịch vụ vận chuyển 24/7",
    "Giá cả cạnh tranh",
    "An toàn hàng hóa tuyệt đối",
    "Hỗ trợ khách hàng tận tâm"
  ]

  return (
    <section className="py-12 sm:py-16 bg-light">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Về Vận Tải Vinh Phát</h2>
            <p className="text-gray-600 mb-4 sm:mb-6">
              Vận Tải Vinh Phát là đơn vị chuyên cung cấp dịch vụ vận chuyển hàng hóa chuyên nghiệp, an toàn và nhanh chóng trên toàn quốc. 
              Với nhiều năm kinh nghiệm trong ngành vận tải, chúng tôi tự hào mang đến cho khách hàng dịch vụ vận chuyển tối ưu với chi phí hợp lý nhất.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6">
              Chúng tôi sở hữu đội xe đa dạng từ xe tải nhỏ, xe đầu kéo, sẵn sàng đáp ứng mọi nhu cầu vận chuyển của khách hàng.
            </p>
            <ul className="mb-6 sm:mb-8 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <FaCheck className="text-primary mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary text-sm sm:text-base">
              Tìm hiểu thêm
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 md:mt-0">
            <img 
              src="/images/service-1.jpg" 
              alt="Vận Tải Vinh Phát" 
              className="rounded-lg shadow-md h-40 sm:h-64 object-cover w-full"
            />
            <img 
              src="/images/service-3.jpg" 
              alt="Vận Tải Vinh Phát" 
              className="rounded-lg shadow-md h-40 sm:h-64 object-cover w-full mt-4 sm:mt-8"
            />
            <img 
              src="/images/service-5.jpg" 
              alt="Vận Tải Vinh Phát" 
              className="rounded-lg shadow-md h-40 sm:h-64 object-cover w-full"
            />
            <img 
              src="/images/service-6.jpg" 
              alt="Vận Tải Vinh Phát" 
              className="rounded-lg shadow-md h-40 sm:h-64 object-cover w-full mt-4 sm:mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection