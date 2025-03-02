import React, { useEffect } from 'react'
import { FaCheck, FaAward, FaTrophy, FaMedal } from 'react-icons/fa'

function AboutPage() {
  useEffect(() => {
    document.title = 'Giới thiệu - Vận Tải Vinh Phát'
  }, [])

  const values = [
    {
      id: 1,
      icon: FaAward,
      title: "Chất lượng",
      description: "Chúng tôi cam kết cung cấp dịch vụ vận chuyển chất lượng cao, đảm bảo an toàn và đúng thời gian."
    },
    {
      id: 2,
      icon: FaTrophy,
      title: "Chuyên nghiệp",
      description: "Đội ngũ nhân viên được đào tạo chuyên nghiệp, tận tâm và luôn sẵn sàng hỗ trợ khách hàng."
    },
    {
      id: 3,
      icon: FaMedal,
      title: "Uy tín",
      description: "Xây dựng niềm tin với khách hàng thông qua sự minh bạch, trung thực và đáng tin cậy trong mọi giao dịch."
    }
  ]

  return (
    <div className="pt-16 sm:pt-20">
      {/* Hero Section */}
      <section className="relative h-[250px] sm:h-[300px] md:h-[400px]">
        <img 
          src="/images/banner-vinhphat-2.jpg" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">Giới thiệu</h1>
            <p className="text-base sm:text-lg">Tìm hiểu thêm về Vận Tải Vinh Phát</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Về Vận Tải Vinh Phát</h2>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Vận Tải Vinh Phát là đơn vị chuyên cung cấp dịch vụ vận chuyển hàng hóa chuyên nghiệp, an toàn và nhanh chóng trên toàn quốc. 
                Với nhiều năm kinh nghiệm trong ngành vận tải, chúng tôi tự hào mang đến cho khách hàng dịch vụ vận chuyển tối ưu với chi phí hợp lý nhất.
              </p>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">
                Chúng tôi sở hữu đội xe đa dạng từ xe tải nhỏ đến container, xe đầu kéo, sẵn sàng đáp ứng mọi nhu cầu vận chuyển của khách hàng.
                Đội ngũ tài xế giàu kinh nghiệm, am hiểu tuyến đường và luôn đặt sự an toàn lên hàng đầu.
              </p>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Với phương châm "Uy tín - Chất lượng - Chuyên nghiệp", Vận Tải Vinh Phát cam kết mang đến cho khách hàng trải nghiệm dịch vụ tốt nhất,
                góp phần vào sự thành công trong kinh doanh của quý khách hàng.
              </p>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Tại sao chọn chúng tôi?</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Đội xe đa dạng, hiện đại, đáp ứng mọi nhu cầu vận chuyển</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Đội ngũ nhân viên chuyên nghiệp, tận tâm</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Dịch vụ vận chuyển 24/7, kể cả ngày lễ</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Giá cả cạnh tranh, minh bạch</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>An toàn hàng hóa tuyệt đối</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                  <span>Hỗ trợ khách hàng tận tâm, 24/7</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Vận Tải Vinh Phát" 
                className="rounded-lg shadow-md w-full h-auto mb-4 sm:mb-6"
              />
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <img 
                  src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Vận Tải Vinh Phát" 
                  className="rounded-lg shadow-md w-full h-36 sm:h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Vận Tải Vinh Phát" 
                  className="rounded-lg shadow-md w-full h-36 sm:h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 bg-light">
        <div className="container px-4 sm:px-6">
          <h2 className="section-title">Giá trị cốt lõi</h2>
          <p className="section-subtitle">
            Những giá trị định hướng mọi hoạt động của Vận Tải Vinh Phát
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {values.map((value) => (
              <div key={value.id} className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center">
                <div className="inline-block p-3 sm:p-4 bg-primary/10 text-primary rounded-full mb-4 sm:mb-6">
                  <value.icon size={24} className="sm:text-3xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-12 sm:py-16">
        <div className="container px-4 sm:px-6">
          <h2 className="section-title">Lịch sử phát triển</h2>
          <p className="section-subtitle">
            Hành trình phát triển của Vận Tải Vinh Phát qua các năm
          </p>
          
          <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
            <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 border-l-2 border-primary">
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full -translate-x-1/2"></div>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">2015 - Thành lập công ty</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Vận Tải Vinh Phát được thành lập với đội xe ban đầu gồm 5 xe tải, chuyên vận chuyển hàng hóa trong nội thành TP. Hồ Chí Minh.
                </p>
              </div>
            </div>
            
            <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 border-l-2 border-primary">
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full -translate-x-1/2"></div>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">2017 - Mở rộng dịch vụ</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Mở rộng dịch vụ vận chuyển hàng hóa đến các tỉnh thành lân cận, tăng cường đội xe lên 15 xe các loại.
                </p>
              </div>
            </div>
            
            <div className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 border-l-2 border-primary">
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full -translate-x-1/2"></div>
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">2019 - Phát triển mạnh mẽ</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Đầu tư thêm xe container, xe đầu kéo, mở rộng dịch vụ vận chuyển hàng hóa toàn quốc.
                </p>
              </div>
            </div>
            
            <div className="relative pl-6 sm:pl-8">
              <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full -translate-x-1/2"></div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">2023 - Hiện tại</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Vận Tải Vinh Phát sở hữu đội xe hơn 50 xe các loại, cung cấp đa dạng dịch vụ vận chuyển hàng hóa trên toàn quốc, 
                  trở thành đối tác vận chuyển tin cậy của nhiều doanh nghiệp lớn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage