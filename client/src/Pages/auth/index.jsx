// import React from 'react'
// import { useState } from 'react'
// import Zlogo from '@/assets/Zapyi.png'

// import {  TabsTrigger , TabsContent } from '@radix-ui/react-tabs'
// import { Tabs, TabsList } from '@/components/uI/tabs'
// import { Input  } from '@/components/uI/input'
// // import { Button } from '@/components/uI/button'
// import { Button } from '@/components/uI/button'
// import { toast } from 'sonner'
// import  {apiClient} from '@/lib/api-client'
// import { LOGIN_ROUTE, SIGNUP_ROUTE } from '@/utils/constants'
// import { useNavigate } from 'react-router-dom'
// import { useAppStore } from '@/Store'

// const Auth = () => {

//   const navigate = useNavigate()
//    const [email, setEmail] = useState("")
//    const {setUserInfo} = useAppStore()

//    const [password, setPassword] = useState("");
//    const [confirmPassword, setConfirmPassword] = useState("");

//    const validateSignup = () =>{


//      if(!email.length) {
//         toast.error("Email is required")
//        return false;
//      }

//      if(!password.length){
//       toast.error("password required");
//       return false;
//      }

//      if(password != confirmPassword){
//        toast.error("Password and cofrim password should be same.")
//        return false;
//      }
//      return true;

//    };

//    const validateLogin = () =>{
//     if(!email.length) {
//       toast.error("Email is required")
//      return false;
//    }

//    if(!password.length){
//     toast.error("password required");
//     return false;
//    }


//    return true;

//    }

//    const handleLogin = async () =>{
//       if(validateLogin()){
//         const response = await apiClient.post(
//           LOGIN_ROUTE,
//            {email, password},
//            {withCredentials:true}
//           );

       

//         if(response.data.user.id){
//           setUserInfo(response.data.user)
//           if(response.data.user.profileSetup) navigate("/chat");
//           else navigate("/profile")
//         }
//       }

//    }

//    const handleSignup = async () =>{
//        if(validateSignup()){
//             const response = await apiClient.post(
//               SIGNUP_ROUTE,
//                {email, password},
//                {withCredentials:true}
//         );

//           if(response.status== 201){
//             setUserInfo(response.data.user)
//             navigate("/profile")
//           }
//             console.log(response);
//        }
//    };



//   return (
//     <div className='h-[100vh] w-[100vw] flex items-center justify-center  bg-[#0A0E0F]' >
       
//        <div className="h-[80vh] w-[80vw] bg-[#171B1D] border-2 border-white text-opacity-90 shadow-2xl md:w-[90vw] lg:w-[70vw] xl:[60vw] rounded-3xl grid xl:grid-col-2 ">
        
//         <div className='flex justify-center items-center gap-16'>

       
//         <div className='flex flex-col gap-16 items-center justify-center'>
          
//           <div className='flex items-center justify-center flex-col'>
//             <div className='flex items-center justify-center'></div>
//               <h1 className='text-5xl font-bold md:text-6xl text-white'>Welcome</h1>
    
//                <p className='font-medium text-center text-white opacity-75'>Fill in the detial to get started with the best chat app </p>
           
//                </div>



//                <div className='flex items-center justify-center w-full'>
                 
//                  <Tabs className='3/4' defaultValue='login'>

//                   <TabsList className='flex bg-transparent rounded-none w-full'>
//                       <TabsTrigger value='login'
//                         className='data-[state=active]:bg-transparent  text-white text-opacity-90 border-b-2 rounded-none w-[300px] data-[state=active]:text-[#48cdc9] data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 translate-all duration-300 '
//                       >Login
//                       </TabsTrigger>




//                       <TabsTrigger value='signup'
//                         className='data-[state=active]:bg-transparent  text-white text-opacity-90 border-b-2 rounded-none w-[300px] data-[state=active]:text-[#48cdc9] data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 translate-all duration-300'
                      
//                       >Singup</TabsTrigger>
//                   </TabsList>

//                   <TabsContent className='flex flex-col gap-5 mt-10' value='login'> 
//                       <Input 
//                        placeholder="Email" 
//                        type="email"
//                        className="rounded-full p-6 opacity-85" 
//                        value={email}
//                        onChange={(e) =>setEmail(e.target.value) }

//                      />
//                       <Input 
//                        placeholder="Paasword" 
//                        type="password"
//                        className="rounded-full p-6 opacity-85" 
//                        value={password}
//                        onChange={(e) =>setPassword(e.target.value) }

//                      />
                     
//                       <Button className="rounded-full p-6  bg-[#007AFF] text-white"
//                        onClick={handleLogin}>Login</Button>

//                    </TabsContent>


//                    {/* signup part  */}

//                   <TabsContent className='flex flex-col gap-5 ' value='signup'> 
                  
                    
//                   <Input 
//                        placeholder="Email" 
//                        type="email"
//                        className="rounded-full p-6 opacity-85" 
//                        value={email}
//                        onChange={(e) =>setEmail(e.target.value) }

//                      />
//                       <Input 
//                        placeholder="Paasword" 
//                        type="password"
//                        className="rounded-full p-6 opacity-85" 
//                        value={password}
//                        onChange={(e) =>setPassword(e.target.value) }

//                      />
//                       <Input 
//                        placeholder="Confrim Paasword" 
//                        type="password"
//                        className="rounded-full p-6 opacity-85" 
//                        value={confirmPassword}
//                        onChange={(e) =>setConfirmPassword(e.target.value) }

//                      />
                            
//                             <Button className="rounded-full p-6 text-white bg-[#007AFF]"
//                        onClick={handleSignup}>Signup</Button>
                  
//                    </TabsContent>

//                  </Tabs>

//                </div>

//         </div>
                   
             
//              {/* LOGO SIDE  */}


//           {/* <div className="hidden xl:flex  justify-center items-center w-[700px]  ">
//             <div className='flex flex-col leading-3 w-[80%]   '>

          
//             <img src={Zlogo} alt="bacground " className='object-cover w-full ' />
//             <h1 className='text-white text-4xl text-center mb-12 leading-23'>zapyi  <nav className=' text-sm'>By Zynixx</nav> </h1>
           

//             </div>
//           </div> */}
//           </div>
//        </div>


//     </div>
//   )
// }

// export default Auth





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Tabs, TabsList } from '@/components/uI/tabs';
import { Input } from '@/components/uI/input';
import { Button } from '@/components/uI/button';
import { apiClient } from '@/lib/api-client';
import { LOGIN_ROUTE, SIGNUP_ROUTE } from '@/utils/constants';
import { useAppStore } from '@/Store';

const Auth = () => {
  const navigate = useNavigate();
  const { setUserInfo } = useAppStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const validateSignup = () => {
  //   if (!email.length) {
  //     toast.error('Email is required');
  //     return false;
  //   }

  //   if (!password.length) {
  //     toast.error('Password is required');
  //     return false;
  //   }

  //   if (password !== confirmPassword) {
  //     toast.error('Password and confirm password should be the same.');
  //     return false;
  //   }

  //   return true;
  // };

  const validateSignup = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email.length) {
      toast.error('Email is required');
      return false;
    }
  
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
  
    if (!password.length) {
      toast.error('Password is required');
      return false;
    }
  
    if (password !== confirmPassword) {
      toast.error('Password and confirm password should be the same.');
      return false;
    }
  
    return true;
  };
  

  // const validateLogin = () => {
  //   if (!email.length) {
  //     toast.error('Email is required');
  //     return false;
  //   }

  //   if (!password.length) {
  //     toast.error('Password is required');
  //     return false;
  //   }

  //   return true;
  // };

  const validateLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!email.length) {
      toast.error('Email is required');
      return false;
    }
  
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
  
    if (!password.length) {
      toast.error('Password is required');
      return false;
    }
  
    return true;
  };

  const handleLogin = async () => {
    if (validateLogin()) {
      try {
        const response = await apiClient.post(
          LOGIN_ROUTE,
          { email, password },
          { withCredentials: true }
        );

        if (response.data.user && response.data.user.id) {
          setUserInfo(response.data.user);
          if (response.data.user.profileSetup) {
            navigate('/chat');
          } else {
            navigate('/profile');
          }
        } else {
          toast.error('Login failed. User information is missing.');
        }
      } catch (error) {
        console.error('Login error:', error.response?.data || error.message || error);
     

        toast.error('An error occurred during login. Please try again.');
      }
    }
  };

  const handleSignup = async () => {
    if (validateSignup()) {
      try {
        const response = await apiClient.post(
          SIGNUP_ROUTE,
          { email, password },
          { withCredentials: true }
        );

        if (response.status === 201) {
          setUserInfo(response.data.user);
          navigate('/profile');
        } else {
          toast.error('Signup failed.');
        }
      } catch (error) {
        console.error('Signup error:', error.response?.data || error.message || error);
       

        // toast.error('An error occurred during signup. Please try again.');
      }
    }
  };

  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center bg-[#0A0E0F]'>
      <div className="h-[80vh] w-[80vw] bg-[#171B1D] border-2 border-white text-opacity-90 shadow-2xl md:w-[90vw] lg:w-[70vw] xl:[60vw] rounded-3xl grid xl:grid-col-2">
        <div className='flex justify-center items-center gap-16'>
          <div className='flex flex-col gap-16 items-center justify-center'>
            <div className='flex items-center justify-center flex-col'>
              <h1 className='text-5xl font-bold md:text-6xl text-white'>Welcome</h1>
              <p className='font-medium text-center text-white opacity-75'>Fill in the details to get started with the best chat app</p>
            </div>

            <div className='flex items-center justify-center w-full'>
              <Tabs className='w-3/4' defaultValue='login'>
                <TabsList className='flex bg-transparent rounded-none w-full'>
                  <TabsTrigger value='login' className='data-[state=active]:bg-transparent text-white text-opacity-90 border-b-2 rounded-none w-[300px] data-[state=active]:text-[#48cdc9] data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 translate-all duration-300'>
                    Login
                  </TabsTrigger>
                  <TabsTrigger value='signup' className='data-[state=active]:bg-transparent text-white text-opacity-90 border-b-2 rounded-none w-[300px] data-[state=active]:text-[#48cdc9] data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 translate-all duration-300'>
                    Signup
                  </TabsTrigger>
                </TabsList>

                <TabsContent className='flex flex-col gap-5 mt-10' value='login'>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6 opacity-85"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6 opacity-85"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6 bg-[#007AFF] text-white" onClick={handleLogin}>Login</Button>
                </TabsContent>

                <TabsContent className='flex flex-col gap-5' value='signup'>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="rounded-full p-6 opacity-85"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    className="rounded-full p-6 opacity-85"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    className="rounded-full p-6 opacity-85"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <Button className="rounded-full p-6 text-white bg-[#007AFF]" onClick={handleSignup}>Signup</Button>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
