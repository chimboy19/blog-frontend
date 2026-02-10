import React from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CreatePost = () => {
  return (
    <div className="items-center justify-center flex">
      <div className=" md:px-16 px-8 py-6 flex flex-col mx-auto my-auto items-center gap-6 w-fit rounded-lg bg-white shadow-xl dark:text-white dark:bg-[#141624]">
        {/* Header */}
        <div className="flex flex-col gap-2 justify-center items-center mb-2">
          <h3 className="font-semibold text-2xl max-sm:text-xl">Create Post</h3>
          <p className="max-sm:text-[14px]">
            Create a new post and share your ideas.
          </p>
        </div>

        {/* Title */}
        <div>
          <label className="block mb-1 text-sm">Title</label>
          <input
            type="text"
            placeholder="Give your post a title"
            className="border-2 border-[#141624] dark:border-[#3B3C4A] h-[40px] w-[400px] max-sm:w-[300px] max-sm:text-[14px] px-3 rounded-md"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block mb-1 text-sm">Content</label>
          <textarea
            placeholder="Write your blog post"
            className="border-2 border-[#141624] dark:border-[#3B3C4A] h-[180px] w-[400px] max-sm:w-[300px] max-sm:text-[14px] px-3 py-2 rounded-md text-justify"
          />
        </div>

        {/* Category */}
        <div className="w-full">
          <label className="block mb-1 text-sm">Category</label>
          <select className="border-2 border-[#141624] dark:border-[#3B3C4A] h-[40px] w-full max-sm:w-[300px] max-sm:text-[14px] px-3 rounded-md bg-transparent">
            <option value="">Select a category</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Fullstack</option>
            <option>Web3</option>
            <option>Design</option>
          </select>
        </div>

        {/* Featured Image */}
        <div className="w-full">
          <label className="block mb-1 text-sm">Featured Image</label>
          <input
            type="file"
            className="border-2 border-[#141624] dark:border-[#3B3C4A] h-[40px] w-full max-sm:w-[300px] max-sm:text-[14px] px-2 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="w-full flex items-center justify-center my-4">
          <button className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md">
            Create post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
