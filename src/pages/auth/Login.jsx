import React,{ useEffect, useState } from 'react'
import { mainLayoutNoAuth } from '../../layout'
import { useLocation, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { axiosPublic } from '../../lib/axios/axios';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { auth,setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/home";

    useEffect(() => {
      if(auth.accessToken) navigate(from, {replace:true})
    
      
    }, [])
    

    let [credentials, setCredentials] = useState({
        email: '',
        password: ''
      })
      
      const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
      
        setCredentials((prevalue) => {
          return {
            ...prevalue,                
            [name]: value
          }
        })
      }

      const handleSubmit = async (e) => {
        e.preventDefault();

        let payload = {
            email : credentials.email,
            password :credentials.password
        };
        console.log("payload",payload)
        try {

          const { data: fetchLoginResponses, status } = await  axiosPublic.post(`/api/v1/auth/users/login`, payload,
          {
            withCredentials: true,
          }
          );
          if(fetchLoginResponses.message==="login successfully"){
            var decoded = jwt_decode(fetchLoginResponses.accessToken);
            console.log("decoded",decoded)
            const email = decoded?.email ?? decoded.result?.email
            console.log("cat",email)


            let cat =  decoded.result?.user_category.split(",")
             cat = cat.map(Number);
             console.log("cat",cat)

            setAuth({user:email,roles:cat,accessToken:fetchLoginResponses.accessToken})
            

            console.log("auth",cat)
            let value = cat[1]
            if(value===2000){
               localStorage.setItem("token", 'tenant');
              navigate('/home/tenant', {replace:true});

            }
            if(value===3000){
               localStorage.setItem("token",'agent' );
              navigate('/home/agent', {replace:true});

            }
            if(value===4000){
               localStorage.setItem("token",'owner' );
              navigate('/home/owner', {replace:true});

            }
            if(value===5000){
               localStorage.setItem("token",'agent_owner ');
              navigate('/home/agent_owner', {replace:true});

            }

            
            //navigate(from, {replace:true});
            
          }
          
          
        } catch (error) {

          console.log(error)
          
        }
        // hashPassword
        // 1email.jnjc@gmail.com

        // setAuth({user:"cosmas", payload, roles:[2001,2002],accessToken:"accessTokenrefu"})
        // console.log(auth);
        //navigate(from, {replace:true});

        
        // const loginResponse = await loginUser(payload)
        // const {status,data, message} = loginResponse
        // if (status ===200 && message === "authorised")loginUserData(data) 

       


      }
      const loginUserData = (data) => {
        let accessToken =  data.access_token;
        let refreshToken = data.refresh_token;
        localStorage.set("accessToken",data.access_token)
        localStorage.set("refreshToken",data.refresh_token)

      }

      


  return (
    <div class="container">
			
			<form onSubmit={handleSubmit}>
				<div class="row justify-content-md-center">
					<div class="col-xl-8 col-lg-5 col-md-6 col-sm-12">
						<div class="login-screen">
							<div class="login-box">
								{/* <a href="#" class="login-logo">
									<img src="img/logo-dark.png" alt="Le Rouge Admin Dashboard" />
								</a> */}
								<h5>Welcome back,<br />Please Login to your Account.</h5>
								<div class="form-group">
									<input 
                                     type="text"
                                     class="form-control" 
                                     placeholder="Email Address"
                                     onChange={handleChange }
                                     id="email"
                                     name="email"
                                      />
								</div>
								<div class="form-group">
									<input 
                                    type="password" 
                                    class="form-control" 
                                    placeholder="Password" 
                                    id="password"
                                    name="password"
                                    onChange={handleChange }
                                        />
								</div>
								<div class="actions mb-4">
									<div class="custom-control custom-checkbox">
										<input 
                                        type="checkbox" 
                                        class="custom-control-input" 
                                        
                                        />
										<label class="custom-control-label" for="remember_pwd">Remember me</label>
									</div>
									<button type="submit" class="btn btn-primary">Sign In</button>
								</div>
								<div class="forgot-pwd">
									<a class="link" href="forgot-pwd.html">Forgot password?</a>
								</div>
								<hr/>
								<div class="actions align-left">
									<span class="additional-link">New here?</span>
									<a href="signup.html" class="btn btn-dark">Create an Account</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</form>

		</div>
  )
}

export default mainLayoutNoAuth(Login)