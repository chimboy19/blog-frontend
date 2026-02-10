import React from 'react'

const Badge = ({blog}) => {
  return (
    <div>
      <span className=' bg-[#4B6BFB] py-[3px] px-2 text-[12px]  font-semibold text-[#ffffff]'>{ blog?.category}</span>
    </div>
  )
}

export default Badge
