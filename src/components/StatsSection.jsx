import React from 'react'
import { FaTruck, FaUsers, FaMapMarkedAlt, FaThumbsUp } from 'react-icons/fa'

function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: FaTruck,
      value: "50+",
      label: "Phương tiện"
    },
    {
      id: 2,
      icon: FaUsers,
      value: "100+",
      label: "Nhân viên"
    },
    {
      id: 3,
      icon: FaMapMarkedAlt,
      value: "63",
      label: "Tỉnh thành"
    },
    {
      id: 4,
      icon: FaThumbsUp,
      value: "1000+",
      label: "Khách hàng"
    }
  ]

  return (
    <section className="py-12 sm:py-16 bg-primary text-white">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="inline-block p-3 sm:p-4 bg-white/20 rounded-full mb-3 sm:mb-4">
                <stat.icon size={24} className="sm:text-3xl" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold mb-1 sm:mb-2">{stat.value}</h3>
              <p className="text-base sm:text-xl">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection