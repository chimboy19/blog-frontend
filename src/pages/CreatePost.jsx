import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { createBlog} from "@/services/apiBlogs";
import { ToastContainer,toast } from "react-toastify";



const CreatePost = () => {

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState(null)
  

  // const { data: categories, isLoading } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn:get_categories,
  // })

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      toast.success('blog has been created ');
      setTitle("");
      setContent("");
      setCategory("");
      setImage(null);
    },

    onError: (err) => {
      toast.error(err.message)
    }
    
  })
 

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("title",title)
    formData.append("content",content)
    formData.append("category",category)
    formData.append("featured_image", image);
    
    mutation.mutate(formData)
  }



  return (
    <div className="items-center justify-center flex ">
      <div className=" md:px-16 px-8 py-6 flex  flex-col mx-auto my-auto items-center gap-6 w-fit rounded-lg bg-white shadow-xl dark:text-white dark:bg-[#141624]">
        {/* Header */}
        <div className="flex flex-col gap-2 justify-center items-center mb-2">
          <h3 className="font-semibold text-2xl max-sm:text-xl">Create Post</h3>
          <p className="max-sm:text-[14px]">
            Create a new post and share your ideas.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="gap-6 justify-center flex-1"
          action=""
        >
          {/* Title */}
          <div className="py-6">
            <label className="block mb-1 text-sm">Title</label>
            <input
              type="text"
              value={title}
              placeholder="Give your post a title"
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-[#141624] dark:border-[#3B3C4A] h-[40px] w-[400px] max-sm:w-[300px] max-sm:text-[14px] px-3 rounded-md"
            />
          </div>

          {/* Content */}
          <div className="py-6">
            <label className="block mb-1 text-sm">Content</label>
            <textarea
              value={content}
              placeholder="Write your blog post"
              onChange={(e) => setContent(e.target.value)}
              className="border-2 border-[#141624] dark:border-[#3B3C4A] h-[180px] w-[400px] max-sm:w-[300px] max-sm:text-[14px] px-3 py-2 rounded-md text-justify"
            />
          </div>

          {/* Category */}
          <div className="w-full py-6">
            <label className="block mb-1 text-sm">Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-2 border-[#141624] h-[40px] w-full px-3 rounded-md"
            >
              <option value="">Select a category</option>
              <option value="Technology">Technology</option>
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="Sports">Sports</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>

          {/* Featured Image */}
          <div className="w-full py-6">
            <label className="block mb-1 text-sm">Featured Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border-2 border-[#141624] dark:border-[#3B3C4A] h-[40px] w-full max-sm:w-[300px] max-sm:text-[14px] px-2 rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="w-full flex items-center justify-center my-4">
            <button className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md">
              Create post
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default CreatePost;
