import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaQuoteLeft } from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/pagination'

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      position: "Giám đốc Công ty XYZ",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      quote: "Tôi đã sử dụng dịch vụ vận chuyển của Vinh Phát trong nhiều năm và luôn hài lòng với chất lượng dịch vụ. Đội ngũ nhân viên chuyên nghiệp, tận tâm và luôn đảm bảo hàng hóa được vận chuyển an toàn, đúng thời gian."
    },
    {
      id: 2,
      name: "Trần Thị B",
      position: "Quản lý Logistics Công ty ABC",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      quote: "Vận Tải Vinh Phát là đối tác vận chuyển đáng tin cậy của chúng tôi. Họ luôn đáp ứng nhanh chóng mọi yêu cầu vận chuyển, kể cả những đơn hàng gấp. Giá cả hợp lý và dịch vụ chuyên nghiệp."
    },
    {
      id: 3,
      name: "Lê Văn C",
      position: "Chủ cửa hàng nội thất",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      quote: "Tôi rất hài lòng với dịch vụ vận chuyển hàng hóa của Vinh Phát. Họ luôn đảm bảo hàng hóa của tôi được vận chuyển an toàn, không bị hư hỏng. Đặc biệt là đội ngũ tài xế rất thân thiện và nhiệt tình."
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-light">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Khách hàng nói gì về chúng tôi</h2>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-12">
          Sự hài lòng của khách hàng là thước đo thành công của chúng tôi
        </p>
        
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: false,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="testimonials-swiper mt-8 sm:mt-12 pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md h-full flex flex-col">
                <FaQuoteLeft className="text-primary text-3xl sm:text-4xl mb-3 sm:mb-4" />
                <p className="text-gray-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mr-3 sm:mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialsSection