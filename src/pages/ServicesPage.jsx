import React, { useEffect } from 'react'
import { FaTruck, FaShippingFast, FaWarehouse, FaTools, FaCheck } from 'react-icons/fa'

function ServicesPage() {
  useEffect(() => {
    document.title = 'Dịch vụ - Vận Tải Vinh Phát'
  }, [])

  const services = [
    {
      id: 1,
      icon: FaTruck,
      title: "Vận chuyển hàng hóa",
      description: "Dịch vụ vận chuyển hàng hóa đa dạng, phù hợp với mọi nhu cầu của khách hàng từ hàng nhỏ lẻ đến hàng lớn.",
      features: [
        "Vận chuyển hàng hóa nội thành",
        "Vận chuyển hàng hóa liên tỉnh",
        "Vận chuyển hàng hóa theo yêu cầu",
        "Vận chuyển hàng hóa door-to-door"
      ],
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    // {
    //   id: 2,
    //   icon: FaShippingFast,
    //   title: "Vận chuyển container",
    //   description: "Chuyên vận chuyển container các loại 20ft, 40ft đến mọi tỉnh thành trên cả nước với giá cả cạnh tranh.",
    //   features: [
    //     "Vận chuyển container 20ft, 40ft",
    //     "Vận chuyển container lạnh",
    //     "Vận chuyển container hàng nguy hiểm",
    //     "Vận chuyển container quá khổ, quá tải"
    //   ],
    //   image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    // },
    {
      id: 3,
      icon: FaWarehouse,
      title: "Vận chuyển hàng siêu trường siêu trọng",
      description: "Dịch vụ vận chuyển hàng siêu trường, siêu trọng với đội ngũ nhân viên giàu kinh nghiệm và thiết bị chuyên dụng.",
      features: [
        "Vận chuyển máy móc công nghiệp",
        "Vận chuyển thiết bị xây dựng",
        "Vận chuyển hàng quá khổ, quá tải",
        "Vận chuyển hàng dự án"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      icon: FaTools,
      title: "Cho thuê xe cẩu",
      description: "Dịch vụ Cho thuê xe cẩu các loại từ 1 tấn đến 15 tấn theo giờ, theo ngày hoặc theo tháng.",
      features: [
        "Cho thuê xe cẩu 1-15 tấn",
        "Cho thuê xe đầu kéo",
        "Cho thuê xe theo giờ, ngày, tháng"
      ],
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px]">
        <img 
          src="/images/banner-vinhphat-2.jpg" 
          alt="Our Services" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Dịch vụ</h1>
            <p className="text-base sm:text-lg">Các dịch vụ vận chuyển chuyên nghiệp của Vận Tải Vinh Phát</p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 sm:px-6">
          <h2 className="section-title">Dịch vụ của chúng tôi</h2>
          <p className="section-subtitle">
            Vận Tải Vinh Phát cung cấp đa dạng dịch vụ vận chuyển hàng hóa chuyên nghiệp
          </p>
          
          <div className="space-y-12 sm:space-y-16 mt-8 sm:mt-12">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 !== 0 ? 'md:order-2' : ''}>
                  <div className="p-3 sm:p-4 mb-3 sm:mb-4 text-white bg-primary rounded-full inline-block">
                    <service.icon size={20} className="sm:text-2xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/contact" className="btn btn-primary text-sm sm:text-base">
                    Liên hệ tư vấn
                  </a>
                </div>
                <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section className="py-12 sm:py-16 bg-light">
        <div className="container px-4 sm:px-6">
          <h2 className="section-title">Quy trình làm việc</h2>
          <p className="section-subtitle">
            Quy trình vận chuyển hàng hóa chuyên nghiệp của Vận Tải Vinh Phát
          </p>
          
          <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">1</div>
                <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">Tiếp nhận yêu cầu</h3>
                <p className="text-gray-600 text-sm sm:text-base">Tiếp nhận thông tin yêu cầu vận chuyển từ khách hàng</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">2</div>
                <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">Báo giá</h3>
                <p className="text-gray-600 text-sm sm:text-base">Tư vấn và báo giá dịch vụ vận chuyển phù hợp</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">3</div>
                <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">Ký hợp đồng</h3>
                <p className="text-gray-600 text-sm sm:text-base">Ký kết hợp đồng vận chuyển và xác nhận lịch trình</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center relative">
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">4</div>
                <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-4 mb-2 sm:mb-3">Vận chuyển</h3>
                <p className="text-gray-600 text-sm sm:text-base">Tiến hành vận chuyển hàng hóa đến địa điểm yêu cầu</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="container px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Bạn cần vận chuyển hàng hóa?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">
            Hãy liên hệ với Vận Tải Vinh Phát ngay hôm nay để được tư vấn và báo giá dịch vụ vận chuyển tốt nhất!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-sm sm:text-base">
              Liên hệ ngay
            </a>
            <a href="tel:0976517499" className="btn bg-secondary text-white hover:bg-blue-700 text-sm sm:text-base">
              Gọi: Gọi: 090 803 2431 - 097 651 7499
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage