


import large_screen_logo from "../assets/large_screen_logo.svg";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"



const Login: React.FC = ({phone_number = '9051046984'}) => {

 
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
    background: 'linear-gradient(135deg, #C8D9E6 0%, #9CBBD1 100%)'
  }}
/>
        <div className="relative text-center px-8">
      

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

        <div className="flex md:hidden mt-14">
          <form
            style={{ boxShadow: "0 25px 50px -12px rgba(0, 57, 86, 0.41)" }}
            className="bg-white h-[28rem] shadow-2xl relative w-72 space-y-4 
            2sxs:w-80 xs:w-96 p-8 xs:p-12 xm:p-15 flex justify-center items-center flex-col rounded-3xl shadow-5xl "
          >
            <h2 className="text-3xl sm:text-[32px] lg:text-5xl font-extrabold  text-[#003956] mb-6 text-center">
         OTP Verification
            </h2>
<p className="text-[18px] sm:text-[20px] w-full text-[#003956] text-center">{`OTP has been sent to ${phone_number}`}</p>


<div className="w-64 h-12 xs:w-full flex justify-around items-center">
<InputOTP maxLength={6} className="w-full " pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup className="flex space-x-1 xs:space-x-2">
        <InputOTPSlot className="rounded-md p-2 xs:p-3" index={0} />
        <InputOTPSlot className="rounded-md p-2 xs:p-3" index={1} />
        <InputOTPSlot className="rounded-md p-2 xs:p-3" index={2} />
        <InputOTPSlot className="rounded-md p-2 xs:p-3" index={3} />
        <InputOTPSlot className="rounded-md p-2 xs:p-3" index={4} />
        <InputOTPSlot className="rounded-md p-2 xs:p-3" index={5} />
      </InputOTPGroup>
    </InputOTP>
      </div>


<div className="text-center space-y-7">
       <div className="timer w-full text-center mt-5 text-3xl font-bold">{`00.26`}</div>

       <div className="text-sm w-full text-center flex  space-x-2.5 justify-center items-center">
        <span className="font-light">Not received OTP?</span>
         <span className="underline cursor-pointer text-[#0093DE]">Resend Now</span>
       </div>
       </div>


          </form>
        </div>
      </div>

      {/* 30% White Panel with Card */}
      <div className="md:w-[45%] xmd:w-[40%]  w-0 hidden md:flex lg:w-[40%] xlg:w-[37%] xl:w-[35%]
       xxl:w-[30%] 2xl:w-[28%] items-center justify-start bg-white">
        <form
          style={{ boxShadow: "0 25px 50px -12px  rgba(0, 57, 86, 0.41)" }}
          className="bg-white md:ml-5 xmd:ml-0 relative md:p-10 flex flex-col justify-center 
           lg:p-15 md:right-14 lg:right-20 rounded-3xl space-y-6 lg:space-y-8 xl:space-y-12
           shadow-2xl  md:w-[21rem] xxmd:w-[24rem] xxmd:h-[24rem] lg:h-[28rem] xl:h-[30rem]
          lg:w-[28rem] sxxl:w-[30rem]  xl:w-[32rem] "
        >
          <h2 className="text-3xl lg:text-4xl xxl:text-4xl font-bold text-[#003956] mb-2 text-center">
              OTP Verification
          </h2>

<p className="text-lg  text-[#003956] text-center">{`OTP has been sent to ${phone_number}`}</p>

<div className="w-full  flex justify-center items-center">
<InputOTP maxLength={6} className="w-full mx-auto " pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup className="flex space-x-2.5">
        <InputOTPSlot className="rounded-md p-5 border-[1px] border-gray-300" index={0} />
        <InputOTPSlot className="rounded-md p-5 border-[1px] border-gray-300" index={1} />
        <InputOTPSlot className="rounded-md p-5 border-[1px] border-gray-300" index={2} />
        <InputOTPSlot className="rounded-md p-5 border-[1px] border-gray-300" index={3} />
        <InputOTPSlot className="rounded-md p-5 border-[1px] border-gray-300" index={4} />
        <InputOTPSlot className="rounded-md p-5 border-[1px] border-gray-300" index={5} />
      </InputOTPGroup>
    </InputOTP>
    </div>
       

<div className="text-center space-y-3.5">
       <div className="timer w-full text-center mt-5 text-3xl font-bold">{`00.26`}</div>

       <div className="text-[15px] w-full text-center flex space-x-2.5 justify-center items-center">
        <span className="font-light">Not received OTP?</span>
         <span className="underline cursor-pointer text-[#0093DE]">Resend Now</span>
       </div>
       </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
