import React from 'react'
import banner from '../images/banner.jpg'

const Header = () => {
  return (
      <section className='relative w-full  pt-[50px]'>
          <div className='w-full  h-[450px] mt-[50px] overflow-hidden rounded-lg '>
      <img src={banner} alt="" className='w-full h-full  object-cover' />
              
          </div>
    </section>
  )
}

export default Header
