import Badge from "@/components/ui/Badge";
import BlogWriter from "@/components_ui/BlogWriter";
// import banner from "../images/blogdetails.webp";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBlog_details } from "@/services/apiBlogs";
import Spinner from "@/components_ui/Spinner";
import { BaseUrl } from "@/api";

const BlogDetails = () => {
  const { slug } = useParams()
  
  const {isPending,isError,error,data:blog,} = useQuery({
     
    queryKey: ["blogs", slug],
    queryFn:()=>getBlog_details(slug)
  }

  )

  
  if (isPending) {
    return <Spinner/>
  }

  console.log(blog)

  return (
    <div className="w-full py-6 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 2xl:px-60">
      <Badge blog={blog} />

      <div className="flex justify-between items-center gap-4  ">
        <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
          {blog.title}
        </h2>

        {/* <span className="flex justify-between items-center gap-2">
            <HiPencilAlt
             
              className="dark:text-white text-3xl cursor-pointer"
            />

            <MdDelete
              onClick={handleDeleteBlog}
              className="dark:text-white text-3xl cursor-pointer"
            />
          </span> */}
      </div>

      <BlogWriter blog={blog} />

      <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm pt-10">
        <img className="w-full h-full object-cover rounded-sm" src={`${BaseUrl}${blog.featured_image}`} />
      </div>
      <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
       {blog.content}
      </p>
    </div>
  );
};

export default BlogDetails;
