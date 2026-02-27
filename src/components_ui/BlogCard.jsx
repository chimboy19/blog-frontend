import React from "react";
import Badge from "@/components/ui/badge";
// import thumbnail from "../images/r and django.png";
import CardFooter from "@/components/ui/CardFooter";
import { Link } from "react-router-dom";
import { BaseUrl } from "@/api";

const BlogCard = ({ blog }) => {
    return (
      <div className="px-4 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 shadow-md mt-[50px] ">
        <div className="w-full overflow-hidden h-[200px] rounded md ">
          <img src={`${BaseUrl}${blog.featured_image}`} alt="" className="w-full h-full rounded-lg " />
        </div>
        <Badge blog={blog} />
        <Link to={`blog_detail/${blog.slug}`}>
          <h3 className="font-semibold leading-normal text-[#181A2A] mb-0 dark:text-white">
            {blog.title}
          </h3>
        </Link>

        <CardFooter blog={ blog} />
      </div>
    );
};

export default BlogCard;
