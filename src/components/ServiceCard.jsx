import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCard({ icon: Icon, title, description, link }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 h-full">
      <div className="p-3 sm:p-4 mb-3 sm:mb-4 text-white bg-primary rounded-full inline-block">
        <Icon size={20} className="sm:text-2xl" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{description}</p>
      <Link to={link} className="text-primary font-medium hover:underline text-sm sm:text-base">
        Tìm hiểu thêm
      </Link>
    </div>
  )
}

export default ServiceCard