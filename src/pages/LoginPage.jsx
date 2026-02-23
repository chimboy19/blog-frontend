import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useLocation } from "react-router-dom";
import SmallSpinnerText from "@/components_ui/SmallSpinnerText";

import React from 'react'
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signin } from "@/services/apiBlogs";
import { toast,ToastContainer } from "react-toastify";
import SmallSpinner from "@/components_ui/SmallSpinner";
import { useNavigate } from "react-router-dom";
// import SmallSpinnerText from "@/components_ui/SmallSpinnerText";
const LoginPage = () => {


 const { register, handleSubmit, formState } = useForm()
  const { errors } = formState
  const location = useLocation ()
  const navigate = useNavigate()
 
  
  function onSubmit(data) {
    console.log(data)
    mutation.mutate(data)
  }


  const mutation = useMutation({
    mutationFn: (data) => signin(data),
    onSuccess: (response) => {
      localStorage.setItem('access',response.access)
      localStorage.setItem('refresh',response.refresh)
      toast.success('you have successfully login')
      const from = location?.state?.from?.pathname || "/"
      navigate (from,{replace:true})
      
      
    },

    onError: (err) => {
      toast.error(err.message)
    }

  })
  

  return (
    <div>
      <section className="flex justify-center  items-center pt-20 pb-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:px-16 px-8 py-6 flex flex-col mx-auto my-9 
        items-center gap-4 w-fit rounded-lg bg-[#FFFFFF] shadow-xl 
        dark:text-white dark:bg-[#141624]"
        >
          <div className="flex flex-col gap-2 justify-center items-center mb-2">
            <h3 className="font-semibold text-2xl">Signin Form</h3>
            <p>Welcome back! Log in to continue.</p>
          </div>

          <div>
            <Label htmlFor="username" className="p-1 block dark:text-[97989F]">
              Username
            </Label>
            <Input
              type="text"
              id="username"
              placeholder="Enter username"
              {...register("username", { required: "username is required" })}
              className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px] mx-20"
            />
            {errors?.username?.message && (
              <small className=" block text-red-300">
                {errors.username.message}
              </small>
            )}
          </div>

          <div>
            <Label className="p-1" htmlFor="password">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter password"
              {...register("password", { required: "password is required" })}
              className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
            />
            {errors?.password?.message && (
              <small className=" block text-red-300">
                {errors.password.message}
              </small>
            )}
          </div>

          <div className="w-full flex items-center justify-center flex-col my-4">
            <button
              // type="button"
              className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center"
            >
              {mutation.isPending ? (
                <>
                  <SmallSpinner />
                  <SmallSpinnerText text="loging..." />
                </>
              ) : (
                <SmallSpinnerText text="login" />
              )}
            </button>

            <p className="text-[14px] mt-3">
              Don't have an account? <Link to="/signup">signup</Link>
            </p>
          </div>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
}

export default LoginPage
