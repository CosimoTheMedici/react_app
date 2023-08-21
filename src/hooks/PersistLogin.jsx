import React, { useEffect } from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

const PersistLogin = () => {
    const [isLoading,setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const {auth } = useAuth();

    useEffect(() => {
      const verifyRefreshToken = async () => {
        console.log("herec we go get refreshtoken")
        try {
            await refresh();
            console.log("meee")

        } catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false);

        }
      }
      !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, []);

    useEffect(() => {
     //console.log(`isLoading:${isLoading}`);
     //console.log(`aT:${JSON.stringify(auth?.accessToken)}`)
    }, [isLoading])
    
    
  return (
    <>
    { isLoading
       ? console.log("loading")
       : <Outlet /> 
        }
    </>
  )
}

export default PersistLogin