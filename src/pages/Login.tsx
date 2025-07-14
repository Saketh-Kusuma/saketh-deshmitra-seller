import React, { useState } from "react";

import india_flag_icon from "../assets/india_flag_icon.svg";
import large_screen_logo from "../assets/large_screen_logo.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<number | string>('');


  type FormData = {
    email: string;
    phNo: number;
  };


  const navigate = useNavigate();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

const onsubmit = (data:FormData) =>{

  alert(data)
  console.log(data);
   navigate("/OTPPage")

}


  

  return (
    <div className="flex font-poppins min-h-screen w-screen overflow-hidden">
      {/* 60% Gradient Panel */}
      <div
        className="relative w-full md:w-[55%] xmd:w-[60%] overflow-hidden lg:w-[60%] xlg:w-[63%] xl:w-[65%]  xxl:w-[70%] 2xl:w-[72%]
         border-2 border-red-700 flex-col 
      md:flex-row flex items-center justify-center bg-white"
      >
        {/* Top‑left green blur */}
        <div
          className="absolute -top-36 -left-36 w-96 h-96 rounded-full filter blur-3xl opacity-20"
          style={{ backgroundColor: "#003956" }}
        />
        {/* Bottom‑left orange blur */}
        <div
          className="absolute -bottom-32 -left-16 w-[30rem] h-[30rem] rounded-full filter blur-3xl opacity-70"
          style={{ backgroundColor: "#FFD8A6" }}
        />

        {/* Right side blue gradient blur */}
        <div
          className="absolute -top-20 -right-32 overflow-hidden w-96 h-[55rem] rounded-full filter blur-3xl opacity-38"
          style={{
            background: "linear-gradient(135deg, #C8D9E6 0%, #9CBBD1 100%)",
          }}
        />
        <div className="relative text-center px-8">
          {/* <h1 className="inline-flex text-5xl font-extrabold">
            <span className="text-blue-900">DESH</span>
            <span className="text-orange-500">MITRA</span>
            <svg
              className="ml-1 w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C12 2 13.5 7 18 8C18 8 15 13 12 14C9 13 6 8 6 8C10.5 7 12 2 12 2Z"
                fill="#4CAF50"
              />
            </svg>
          </h1> */}

          <div className="max-w-[100vw]  flex justify-center items-center text-center">
            <img
              src={large_screen_logo}
              className="text-center w-[16rem] xs:w-[22rem] xm:w-[22rem] 
          md:w-[19rem] xmd:w-[20rem] lg:w-[25rem] xl:w-[30rem]"
              alt=""
            />
          </div>
          <p className="mt-4 text-xl hidden md:block lg:text-3xl font-medium text-[#003956]">
            Sell better. Deliver faster.
            <br />
            Grow bigger.
          </p>
        </div>


{/* Small Screen */}
        <div className="flex md:hidden mt-14">
          <form
                onSubmit={handleSubmit(onsubmit)}
            style={{ boxShadow: "0 25px 50px -12px rgba(0, 57, 86, 0.41)" }}
            className="bg-white shadow-2xl relative w-72  2sxs:w-80 xs:w-96 p-8 xs:p-12 xm:p-15 rounded-3xl shadow-5xl "
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold  text-[#003956] mb-6 text-center">
              Login
            </h2>
            {/* Email */}
            <label className="block mb-4">
              <span className="text-gray-600">Email ID</span>
              <input
                {...register("email", {
                  required: true,
                  maxLength: {
                    value: 80,
                    message:
                      "The maximum email length shoudl not exceed 70 characters",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "The minimum email length shoudl not exceed 70 characters",
                  },
                })}
                type="email"
                placeholder="Enter Email ID"
                className="mt-1 block w-full  px-4 py-2 placeholder:text-sm border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              {errors.email && (
                <p role="alert" className="text-[#FFDF19] text-sm">
                  {errors.email.message}
                </p>
              )}
            </label>
            {/* Phone */}
            <label className="block mb-6">
              <span className="text-gray-600">Phone Number</span>
              <div className="mt-1 flex">
                <div
                  className="flex items-center justify-center px-4 border border-r-0 border-gray-300 
                           rounded-l-lg bg-gray-100 text-gray-700"
                >
                  <img
                    src={india_flag_icon}
                    alt="India Flag"
                    className="mr-1 w-4 h-4"
                  />
                  +91
                </div>
                <input
                  {...register("phNo", {
                    required: true,
                    maxLength: {
                      value: 15,
                      message: "Phone Number should not exceed 15 digits",
                    },
                    minLength: {
                      value: 10,
                      message: "Phone Number should be at least 10 digits",
                    },
                  })}
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="block w-full px-3 py-2 border placeholder:text-sm border-gray-300 rounded-r-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </label>
            {/* Send OTP */}
            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold rounded-lg
                       bg-gradient-to-r from-orange-400 to-orange-500
                       hover:from-orange-500 hover:to-orange-600
                       text-white transition"
            >
              Send OTP
            </button>
            {/* Login link */}
            {/* <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </p> */}
          </form>
        </div>
      </div>

      {/* 30% White Panel with Card */}

      {/* Large Screen */}
      <div
        className="md:w-[45%] xmd:w-[40%]  w-0 hidden md:flex lg:w-[40%] xlg:w-[37%] xl:w-[35%]
       xxl:w-[30%] 2xl:w-[28%] items-center justify-start bg-white"
      >
        <form
          onSubmit={handleSubmit(onsubmit)}
          style={{ boxShadow: "0 25px 50px -12px  rgba(0, 57, 86, 0.41)" }}
          className="bg-white md:ml-5 xmd:ml-0 relative md:p-10 flex flex-col justify-center 
           lg:p-15 md:right-14 lg:right-20 rounded-3xl space-y-6 lg:space-y-8 xl:space-y-8
           shadow-2xl  md:w-[26rem] lg:h-[30rem]
          lg:w-[28rem] xl:w-[28rem]"
        >
          <h2 className="text-5xl font-bold text-[#003956] mb-6 text-center">
            Login
          </h2>

          {/* Email */}
          <label className="block">
            <span className="text-gray-600">Email ID</span>
            <input
             {...register("email", {
                  required: true,
                  maxLength: {
                    value: 80,
                    message:
                      "The maximum email length shoudl not exceed 70 characters",
                  },
                  minLength: {
                    value: 6,
                    message:
                      "The minimum email length shoudl not exceed 70 characters",
                  },
                })}
              type="email"
              placeholder="Enter Email ID"
              className="mt-1 block w-full px-4 py-2 placeholder:text-xs lg:placeholder:text-sm border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </label>

          {/* Phone */}
          <label className="block">
            <span className="text-gray-600">Phone Number</span>
            <div className="mt-1 flex space-x-2">
              <div
                className="flex items-center space-x-1.5 justify-center text-center w-28 border-[1px]  border-gray-300 
                           rounded-lg  text-gray-700"
              >
                <img
                  src={india_flag_icon}
                  alt="India Flag"
                  className="w-6 h-6"
                />
                <span>+91</span>
              </div>
              <input
                {...register("phNo", {
                    required: true,
                    maxLength: {
                      value: 15,
                      message: "Phone Number should not exceed 15 digits",
                    },
                    minLength: {
                      value: 10,
                      message: "Phone Number should be at least 10 digits",
                    },
                  })}
                type="tel"
                placeholder="Enter Phone Number"
                className="block w-full px-4 py-2 border placeholder:text-xs lg:placeholder:text-sm border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </div>
          </label>

          {/* Send OTP */}
          <button
            type="submit"
            className="w-full py-3 font-semibold rounded-lg
                       bg-gradient-to-r from-orange-400 to-orange-500
                       hover:from-orange-500 hover:to-orange-600
                       text-white transition"
          >
            Send OTP
          </button>
          {/* Login link */}
          {/* <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Log in
            </a>
          </p> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
