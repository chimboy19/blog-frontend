import React from 'react'
import { Button } from "@/components/ui/button";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './components_ui/AppLayout';
import HomePage from './pages/HomePage';
import BlogDetails from './pages/BlogDetails';
import SignupPage from './pages/SignUpPage';
import CreatePost from './pages/createPost';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components_ui/ProtectedRoute';
import ProfilePage from './pages/ProfilePage';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';



const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="blog_detail/:slug" element={<BlogDetails />}></Route>
            {/* <Route path="profile" element={<ProfilePage />}></Route> */}
            <Route path="signup" element={<SignupPage />}></Route>
            <Route
              path="CreatePost"
              element={
                <ProtectedRoute>
                  <CreatePost />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="login" element={<LoginPage />}></Route>
          </Route>
        </Routes>
    
      </BrowserRouter>
      <ToastContainer/>
    </QueryClientProvider>
  );
}

export default App
