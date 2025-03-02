import React from 'react'
import { FaTruck, FaShippingFast, FaWarehouse, FaTools } from 'react-icons/fa'
import ServiceCard from './ServiceCard'

function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: FaTruck,
      title: "Vận chuyển hàng hóa",
      description: "Dịch vụ vận chuyển hàng hóa đa dạng, phù hợp với mọi nhu cầu của khách hàng từ hàng nhỏ lẻ đến hàng container.",
      link: "/services"
    },
    // {
    //   id: 2,
    //   icon: FaShippingFast,
    //   title: "Vận chuyển container",
    //   description: "Chuyên vận chuyển container các loại 20ft, 40ft đến mọi tỉnh thành trên cả nước với giá cả cạnh tranh.",
    //   link: "/services"
    // },
    {
      id: 3,
      icon: FaWarehouse,
      title: "Vận chuyển hàng siêu trường siêu trọng",
      description: "Dịch vụ vận chuyển hàng siêu trường, siêu trọng với đội ngũ nhân viên giàu kinh nghiệm và thiết bị chuyên dụng.",
      link: "/services"
    },
    {
      id: 4,
      icon: FaTools,
      title: "Cho thuê xe cẩu",
      description: "Dịch vụ Cho thuê xe cẩu các loại từ 1 tấn đến 15 tấn, xe container theo giờ, theo ngày hoặc theo tháng.",
      link: "/services"
    }
  ]

  return (
    <section className="py-12 sm:py-16">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Dịch vụ của chúng tôi</h2>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-12">
          Vận Tải Vinh Phát cung cấp đa dạng dịch vụ vận chuyển hàng hóa chuyên nghiệp
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection