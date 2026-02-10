import api from "@/api";
// import { ifError } from "assert";

export async function getBlogs(page) {
    try {
        const response = await api.get(`blog_list?page=${page}`)
        return response.data
    }
    catch (err) {
        throw new Error (err.message)
    }
    
}
export async function getBlog_details(slug) {
    try {
        const response = await api.get(`blog_detail/${slug}`)
        return response.data
    }
    catch (err) {
        throw new Error (err.message)
    }
    
}

export async function updateProfile() {
    try {
        const response = await api.post(`update_profile/`);
        return response.data
    }
    catch (err){
        throw new Error(err.message)
    }


}


export async function registerUser(data) {
  try {
    const response = await api.post(`register_user/`,data);
    return response.data;
  } catch (err) {
      console.log(err)
      if (err.status == 400) {
          throw new Error("username already exists")
      }
    throw new Error(err);
  }
}

export async function signin(data){
    try {
        const response = await api.post(`token/`, data)
        return response.data
     }
    
    catch(err) {
        if ( err.status === 401) {
            throw new Error ('invalid credentials')
            
        }
        throw new Error(err)
    }
}