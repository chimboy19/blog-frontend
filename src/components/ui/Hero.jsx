import React from 'react'
import pic from '../../images/profile.jpeg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="px-9 py-9 w-full flex flex-col items-center justify-center gap-4 bg-[#F6F6F7] dark:bg-[#242535] rounded-md">
      <div className="flex gap-4">
        <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
          <img
            src={pic}
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
        </div>

        <span>
          <p className="text-[18px] text-[#181A2A] dark:text-white">
           john doe
          </p>
          <p className="text-[14px] text-[#696A75] font-thin dark:text-[#BABABF]">
           collabrator and editor
          </p>
        </span>

        
          {/* <span>
            <HiPencilAlt
              className="dark:text-white text-2xl cursor-pointer"
              
            />
          </span> */}
        
      </div>

      <p className="text-[#3B3C4A] text-[16px] max-md:leading-[2rem] lg:leading-normal lg:mx-[200px] text-center dark:text-[#BABABF]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut in repudiandae maxime exercitationem accusantium at voluptatum qui perferendis quam, laboriosam, fugiat minima unde ipsum? Sint fuga aperiam est corporis amet.
      </p>

      <div className="flex gap-4 justify-center items-center text-white text-xl">
        <div className="w-[40px] h-[40px] rounded-lg bg-[#696A75] flex justify-center items-center">
          <FaInstagram />
        </div>
        <div className="w-[40px] h-[40px] rounded-lg bg-[#696A75] flex justify-center items-center">
          <FaFacebookF />
        </div>
        <div className="w-[40px] h-[40px] rounded-lg bg-[#696A75] flex justify-center items-center">
          <BsTwitterX />
        </div>
        <div className="w-[40px] h-[40px] rounded-lg bg-[#696A75] flex justify-center items-center">
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}

export default Hero
