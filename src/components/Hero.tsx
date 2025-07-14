// import heroImg from "../assets/heroImg.png";

// const Hero = () => {
//   return (
//     <div
//       className="flex flex-col border-2 select-none w-screen  h-[42rem] xm:h-[46rem]
//     sm:pb-24 sm:h-[68rem] 
//    lg:h-[45rem] lg:justify-around items-center lg:flex-row"
//     >
//       {/* left box for hero image */}
//       <div
//         className="order-2 lg:order-1  xs:mt-6 lg:mt-0 object-cover md:flex md:justify-center
//        md:items-center lg:items-center
//        text-center 
//       hero-image w-full lg:w-[44%] sm:h-full"
//       >
//         <img
//           src={heroImg}
//           className="h-full w-full lg:h-[50%] xl:h-[55%] xxl:h-[60%] 2xl:h-[65%] md:w-[95%] lg:w-[100%]
//         2xl:w-[95%]"
//           alt=""
//         />
//       </div>

//       {/* right box for content */}
//       <div
//         className="order-1 lg:order-2   sm:p-5 h-[20rem] xs:h-[18rem] sm:h-5/6 p-2 w-full lg:w-[48%] lg:flex 
//       lg:justify-center lg:flex-col lg:items-center"
//       >
//         <div className="space-y-2 h-auto  lg:w-full">
//           <div
//             className="text-4xl  w-[100%] text-wrap flex flex-col lg:flex-wrap space-y-3 lg:flex-row
//         xs:space-x-10 lg:space-x-5  sm:text-[40px] xm:text-left md:text-[50px] lg:text-[35px] xl:text-[45px] xxl:text-[55px]
//          font-poppins text-[#003956]"
//           >
//             <span className="font-extrabold">Sell Big.</span>
//             <span className="font-extrabold">Start Easy.</span>{" "}
//             <span className="font-extrabold">Reach India.</span>
//           </div>

//           <p className="font-poppins xm:text-left text-[12px] font-bold xl:font-normal xs:text-[14px] sm:text-[20px] lg:text-[18px] xxl:text-[24px] text-[#003956]">
//             Start your online business today. List your products, connect with
//             crores of customers, boost sales, build trust, and grow your brand
//             across the country.
//           </p>
//         </div>

//         <div className="flex mt-6 sm:mt-12 flex-row gap-2 justify-evenly sm:justify-between lg:w-full items-center">
//           <button
//             className="bg-[linear-gradient(90deg,#F77B1D_0%,#FFA35D_100%)] shadow-2xl hover:shadow-3xl w-32 sm:w-[48%]
//              hover:bg-orange-600 text-white font-semibold cursor-pointer
//              py-2 px-1 sm:py-4 sm:px-8 xxl:py-5 xl:px-10 xl:text-sm text-xs rounded-lg transition-colors duration-200 "
//           >
//             Start Selling Now
//           </button>

//           <button
//             className="bg-white hover:bg-orange-50 text-xs xl:text-sm w-36 sm:w-[48%] text-orange-500 font-semibold
//                 py-2 px-1 sm:py-3 sm:px-8 xxl:py-5 xl:px-10 cursor-pointer rounded-lg border-2 border-orange-500 hover:border-orange-600 
//                 transition-all duration-200 
//             flex items-center justify-center gap-1 sm:gap-2"
//           >
//             <svg
//               className="w-5 h-5 hidden sm:block"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d="M8 5v14l11-7z" />
//             </svg>
//             Watch Demo
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;



//New Code:



import heroImg from "../assets/heroImg.png";


const DeshMitraLanding = () => {
  return (
    <div className="min-h-[25vh] md:min-h-[35vh] lg:h-[80vh]  text-gray-900">
   

      {/* Hero Section */}
      <section className="container font-poppins mx-auto px-6 0 lg:h-full py-16  flex flex-col lg:flex-row  items-center">
        <div className="order-1 w-full lg:w-1/2 2xl:h-full 2xl:flex 2xl:justify-center 2xl:flex-col 
         lg:order-2 mt-8 lg:mt-0 lg:space-x-5 ">
          <h1 className="text-5xl lg:text-4xl xl:text-6xl font-extrabold leading-tight text-[#003956] mb-3">
            Sell Big. <br className='lg:hidden'/>
            Start Easy. <br className=''/>
            Reach India.
          </h1>
          <p className="text-base lg:text-xl xl:text-2xl text-[#003956] mb-8">
            Start your online business today. List your products, connect with crores of customers, and grow your brand across the country.
          </p>
          <div className="flex flex-row gap-3 xs:gap-5 lg:mt-5 ">
            <button className="px-2 xs:px-3 py-2 md:px-6 md:py-2 lg:py-3 2xl:py-3 2xl:px-28  bg-gradient-to-r
             from-orange-400 to-orange-600 text-white font-semibold text-[15px] rounded-lg shadow-lg lg:w-1/2
              hover:from-orange-500 hover:to-orange-700 transition">
              Start Selling Now
            </button>
            <button className="px-2 xs:px-3 py-2 md:px-6 md:py-2 lg:py-3 2xl:py-3 2xl:px-28 border-2 text-[15px] lg:w-1/2
             border-orange-500 text-orange-500 flex justify-center items-center 
             font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition">
             
             <svg
              className="w-5 h-5 hidden sm:block"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg> Watch Demo
            </button>
          </div>
        </div>


        <div className="w-full order-2  lg:mr-3.5 mt-16 lg:mt-1 lg:order-1 h-56 xs:h-64 xm:h-96 sm:h-auto lg:w-1/2 
         2xl:h-full 2xl:flex 2xl:justify-center 2xl:flex-col">
          <img
            className="w-full h-auto"
            src={heroImg}
            alt="E-commerce illustration"
          />
        </div>
      </section>


    </div>
  );
};

export default DeshMitraLanding;