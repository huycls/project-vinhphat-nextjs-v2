import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function Hero() {
  const slides = [
    {
      id: 1,
      image: "/images/banner-vinhphat.png",
      title: "Dịch vụ vận tải hàng hóa chuyên nghiệp",
      description: "Vận Tải Vinh Phát cung cấp dịch vụ vận chuyển hàng hóa an toàn, nhanh chóng trên toàn quốc"
    },
    {
      id: 2,
      image: "/images/banner-vinhphat-2.jpg",
      title: "Đội xe hiện đại, đa dạng",
      description: "Sở hữu đội xe cẩu phục vụ mọi nhu cầu vận chuyển"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Giải pháp vận chuyển tối ưu",
      description: "Tư vấn và cung cấp giải pháp vận chuyển tối ưu, tiết kiệm chi phí cho khách hàng"
    }
  ]

  return (
    <div className="relative pt-20">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container text-center text-white px-4">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto">{slide.description}</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/services" className="btn btn-primary text-sm sm:text-base">Dịch vụ của chúng tôi</Link>
                    <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-sm sm:text-base">Liên hệ ngay</Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Hero