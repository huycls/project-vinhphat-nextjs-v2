import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function ClientsSection() {
  const clients = [
    {
      id: 1,
      name: "Client 1",
      logo: "/images/service-1.jpg"
    },
    {
      id: 2,
      name: "Client 2",
      logo: "/images/service-2.jpg"
    },
    {
      id: 3,
      name: "Client 3",
      logo: "/images/service-3.jpg"
    },
    {
      id: 4,
      name: "Client 4",
      logo: "/images/service-4.jpg"
    },
    {
      id: 5,
      name: "Client 5",
      logo: "/images/service-5.jpg"
    },
    {
      id: 6,
      name: "Client 6",
      logo: "/images/service-6.jpg"
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">Một số hình ảnh thực tế</h2>
        <p className="text-base sm:text-lg text-center text-gray-600 mb-8 sm:mb-12">
          Vận Tải Vinh Phát tự hào là đối tác vận chuyển tin cậy của nhiều doanh nghiệp lớn
        </p>
        
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="clients-swiper mt-8 sm:mt-12"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="flex items-center justify-center h-24 sm:h-32 bg-gray-100 rounded-lg">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ClientsSection