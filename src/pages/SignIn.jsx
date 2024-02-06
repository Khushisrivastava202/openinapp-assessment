
import google from "../assets/google-icon 1.png";
import apple from "../assets/apple 1.png";

import logo from "../assets/logo3.png"
import { IoLogoDiscord } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin,  } from "react-icons/fa";
import { BsGithub, } from 'react-icons/bs';
import { UserAuth } from '../components/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";




const  SignIn=()=> {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/home');
    }
  }, [user, navigate]);
  
  return (
    <div className="flex flex-col sm:flex-row justify-between bg-[#F5F5F5] items-center w-full relative ">
        <div className="flex h-[70px] sm:h-[80px] sm:min-h-screen w-full sm:w-[75%] bg-[#615EE6] ">
        <div className="ml-10 mt-3 w-10 h-10 sm:w-20 sm:h-20 sm:mt-12 sm:ml-12 ">
  <img src={logo} alt="logo" className="rounded-full" />
</div>

          <div className=" sm:flex sm:justify-center sm:items-center sm:ml-[15%] ml-2 mt-2 ">
            <h1 className=" text-white sm:font-bold text-[2rem] md:text-[3rem] lg:text-[4.5rem] clipped-opposite">
              Base
            </h1>
          </div>
          <div className="fixed flex justify-center items-center sm:justify-start sm:items-center sm:ml-[13%] w-full h-auto bottom-0 mb-16  ">
            <div className="flex gap-x-6  ">

            
            <a href="#" target="_blank" className="sm:text-white text-gray-500 text-2xl sm:text-4xl">
            <BsGithub />
          </a>
          
          <a href="#" target="_blank" className="sm:text-white text-gray-500 text-2xl sm:text-4xl">
            <AiFillTwitterCircle/>
          </a>
          <a href="#" target="_blank" className="sm:text-white text-gray-500 text-2xl sm:text-4xl">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" className="sm:text-white  text-gray-500 text-2xl sm:text-4xl">
            <IoLogoDiscord />
          </a>

            </div>
          </div>
        </div>
        <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center">
          <div className="flex flex-col justify-center gap-4 " >
            <div className="flex flex-col justify-between items-start px-6 gap-2">
              <h2 className="text-[36px] sm:text-[36px] text-black font-bold mb-1 ">
                Sign In
              </h2>
              <p className="text-[16px] font-lato  text-black">
                Sign in to your account
              </p>
            </div>
            <div className="flex justify-center items-center gap-[10px]">
              <button
                className="text-[12px] text-[#858585] w-[180px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 "
                onClick={handleGoogleSignIn}
              >
                <div className="flex justify-between items-center ">
                  <img
                    src={google}
                    alt="google"
                    className="w-[14px] h-[14px]"
                    
                  />
                  Sign in with Google
                </div>
              </button>


             
              <button className="text-[12px] text-[#858585] w-[170px] sm:w-[180px] rounded-lg bg-white h-[40px] px-6 ">
                <div className="flex justify-between items-center">
                  <img src={apple} alt="google" className="w-[16px] h-[16px]" />
                  Sign in with Apple
                </div>
              </button>
            </div>
            <div className="flex bg-white rounded-2xl flex-col items-center mx-auto">
              <form className="flex flex-col text-black px-10 py-6 gap-4">
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Email Address
                  </h1>
                  <input
                    className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Email..."
                  />
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <h1 className="text-[16px] font-lato leading-[19.2px]">
                    Password
                  </h1>
                  <input
                    className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                    placeholder="Password..."
                  />
                </div>
                <p className="text-blue-500 cursor-pointer">
                  Forgot password?
                </p>
                <button className="bg-[#615EE6] rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white">
                  Sign In
                </button>
              </form>
            </div>
            <p className="mx-auto">
              Don’t have an account?{" "}
              <span className="text-blue-500 cursor-pointer">
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
  )
}
// }
export default SignIn
