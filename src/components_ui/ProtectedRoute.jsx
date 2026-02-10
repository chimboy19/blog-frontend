import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { Navigate, useLocation } from 'react-router-dom'
// import { LoaderCircle } from 'lucide-react'
import api from '@/api'

const ProtectedRoute = ({ children }) => {

    const [isAuthorized, setisAuthorized] = useState(null)
    const location=useLocation()


    useEffect(function () {
        authorize().catch(() => setisAuthorized(false))
    }, [])
    

    function refreshToken() {
        const refresh = localStorage.getItem("refresh")
        
        try {
            const response = api.post("token_refresh/", { refresh });

            if (response.status === 200) {
                
                localStorage.setItem("access", response.data.access)
                setisAuthorized(true)
            }
            else {
                setisAuthorized(false)
            }

        
        }
        catch (err) {
            setisAuthorized(false)

        }
        
    }


        
    async function authorize() {
           const token = localStorage.getItem("access");
           if (!token) {
             setisAuthorized(false);
             return;
           }
           const decodeToken = jwtDecode(token);
           const expireDate = decodeToken.exp;
           const currentTme = Date.now() / 1000;

           if (currentTme > expireDate) {
             await refreshToken();
           } else {
             setisAuthorized(true);
           }
         }   


            if (isAuthorized == null) {
                return <Spinner />
            }
            return (
                <>
                    {isAuthorized ? children : <Navigate to="/login" state={{from:location}}replace />}
                </>
            )
        }
    

export default ProtectedRoute
