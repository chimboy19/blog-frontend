import { BaseUrl } from '@/api';
import { formatDate } from '@/services/formatDate';
// import thumbnail from '../../images/profile.jpeg'
// import React from 'react'
const CardFooter = ({blog}) => {
  return (
    <div className="flex items-center gap=4 ">
      <span className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={`${BaseUrl}${blog.author.profile_picture}`}
            className="c rounded-full w-full h-full object-cover"
          />
        </div>

        <small className="text-[#97989F] text-[12px] font-semibold">
        {blog.author.username}
        </small>
      </span>

      <small className="text-[#97989F] px-3 text-[12px] font-semibold ml-3">
       {formatDate(blog.published_date)}
      </small>
    </div>
  );
}

export default CardFooter
