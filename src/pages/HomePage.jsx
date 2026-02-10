import React, { useState } from 'react'
import Header from '@/components_ui/Header'
import BlogContainer from '@/components_ui/BlogContainer'
import { getBlogs } from '@/services/apiBlogs';
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import PagePagenation from "@/components_ui/PagePagenation"

const HomePage = () => {
  const [Page, setPage] = useState(1)
  const numberofBlogsPerPage=3

  const {isPending,isError,error,data}= useQuery({
    queryKey: ["blogs",Page],
    queryFn: () => getBlogs(Page),
    placeholderData: keepPreviousData,
  });

  // console.log(blogs)
  const blogs = data?.results || []
  const numOfPages = Math.ceil(data?.count / numberofBlogsPerPage)
  
  console.log(numOfPages)


  function handleSetPage(val) {
    setPage(val)
    
  }

  function increasePageValue() {
    setPage((curr)=> curr +1)
  }
  
  function decreasePageValue() {
    setPage((curr) => curr - 1);
  }

  return (
      <>
          <Header />
      <BlogContainer isPending={isPending} blogs={ blogs} />
      <PagePagenation
        Page={Page}
        numOfPages={numOfPages}
        handleSetPage={handleSetPage}
        increasePageValue={increasePageValue}
        decreasePageValue={decreasePageValue}
      />
    </>
  )
}

export default HomePage
