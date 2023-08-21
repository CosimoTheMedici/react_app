import React from 'react'
import jwt_decode from "jwt-decode";
import useAuth from './useAuth';
import { axiosPublic } from '../lib/axios/axios';


const useRefreshToken = () => {
     const { setAuth } = useAuth();
     const refresh = async () => {
       
        const {data} = await axiosPublic.get(`/api/v1/auth/refresh/token`,
        {
         withCredentials: true,
       });
        var decoded = jwt_decode(data.accessToken);
        console.log("decoded decoded",decoded)
        
        //setAuth({user:email,roles:cat,accessToken:fetchLoginResponses.accessToken})
        setAuth(prev =>{
            console.log("JSON.stringify(prev)",JSON.stringify(prev));
            console.log("data.accessToken",data.accessToken);
            let cat = decoded.user_category.split(",");
             cat = cat.map(Number)

            return{...prev,accessToken:data.accessToken,user:decoded.email,roles:cat}
        });
        return data;
     }
  return refresh
}

export default useRefreshToken