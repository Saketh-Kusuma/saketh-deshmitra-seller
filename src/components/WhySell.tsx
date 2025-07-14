
//     import { FaUsers, FaShippingFast, FaBolt, FaHeadset } from 'react-icons/fa';

// const WhySell = () => {


// const sellingPoints = [
//   {
//     title: 'Large Customer Base',
//     description:
//       'Access millions of active buyers across multiple channels. Reach customers you never thought possible with our extensive network.',
//     subheading: '10M+ Active Buyers',
//     icon: <FaUsers className="text-white text-xl" />,
//   },
//   {
//     title: 'Easy Logistics',
//     description:
//       'Streamlined shipping and fulfillment process. We handle the complexity so you can focus on what matters most – your products.',
//     subheading: '24h Processing Time',
//     icon: <FaShippingFast className="text-white text-xl" />,
//   },
//   {
//     title: 'Fast Payouts',
//     description:
//       'Get paid quickly with our lightning-fast payout system. No more waiting weeks for your earnings - receive funds in days.',
//     subheading: '2-3 Business Days',
//     icon: <FaBolt className="text-white text-xl" />,
//   },
//   {
//     title: 'Onboarding Support',
//     description:
//       'Get paid quickly with our lightning-fast payout system. No more waiting weeks for your earnings - receive funds in days.',
//     subheading: '24/7 Support Available',
//     icon: <FaHeadset className="text-white text-xl" />,
//   },
// ];



//   return (
//     <div className="h-[140vh] text-center bg-gray-500 w-full">

//         <div className="space-y-4">
//       <h1 className="text-5xl font-bold">Why Sell With Us?</h1>
//       <p className="text-sm">
//         Start your online business today. List your products, connect with
//         crores of customers, and grow your brand across the country.
//       </p>
//       </div>


//       <div className="cards mt-3 bg-red-400 w-full text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
//      gap-5 gap-x-56 xxl:gap-x-64 lg:gap-y-2 lg:px-64 place-items-center">
// {

//     sellingPoints?.map((item,index) =>



// (

//     <div className="h-[22rem] w-[18rem] lg:h-[18rem] lg:w-[16rem] text-[#003956] flex flex-col justify-center items-center 
//     space-y-2.5 bg-[#E7F7FF] rounded-xl">

// <div className="h-10 w-10 rounded-full bg-green-700 text-white flex justify-center items-center">{item.icon}</div>
// <h3 className="text-[14px] font-bold text-[#003956]">{item.title}</h3>
// <p className="text-[12px] text-[#003956]">{item.description}</p>
// <p className="text-[#003956] font-bold">{item.subheading}</p>


//     </div>

// )

//     )
// }


//       </div>
//     </div>
//   );
// };

// export default WhySell;



//New code:



import { FaUsers, FaShippingFast, FaBolt, FaHeadset } from 'react-icons/fa';

import type {TSellingPoints} from '../types/types'

const sellingPoints:TSellingPoints[] = [
  {
    title: 'Large Customer Base',
    description:
      'Access millions of active buyers across multiple channels. Reach customers you never thought possible with our extensive network.',
      subheadingBold:'10M+',
    subheading: 'Active Buyers',
    icon: <FaUsers className="text-white text-xl" />,
    className:'lg:hidden xl:block'
  },
  {
    title: 'Easy Logistics',
    description:
      'Streamlined shipping and fulfillment process. We handle the complexity so you can focus on what matters most - your products.',
      subheadingBold:'24h',
    subheading: 'Processing Time',
    icon: <FaShippingFast className="text-white text-xl" />,
    className:''
  },
  {
    title: 'Fast Payouts',
    description:
      'Get paid quickly with our lightning-fast payout system. No more waiting weeks for your earnings - receive funds in days.',
      subheadingBold:'2-3',
    subheading: 'Business Days',
    icon: <FaBolt className="text-white text-xl" />,
    className:''
  },
  {
    title: 'Onboarding Support',
    description:
      'Dedicated onboarding help to get you up and running fast. Our team guides you through every step.',
      subheadingBold:'24/7',
    subheading: 'Support Available',
    icon: <FaHeadset className="text-white text-xl" />,
    className:''
  },
];





export default function WhySell() {
  return (
    <section className="bg-gray-50 text-center py-16 sm:mt-60 md:mt-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
          Why Sell With Us?
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Start your online business today. List your products, connect with crores of customers,
          and grow your brand across the country.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 text-[#035884] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sellingPoints.map((item, idx) => (
          <div
            key={idx}
            className={`w-full max-w-sm mx-auto bg-white ${item.className} text-[#035884] rounded-2xl p-6 flex flex-col items-center space-y-4 shadow-lg`}
          >
            <div className="h-12 w-12 rounded-full bg-green-600 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#035884]">
              {item.title}
            </h3>
            <p className="text-sm sm:text-base h-20 sm:h-40 lg:h-32 text-[#035884]">{item.description}</p>

            <div className="flex justify-center items-center space-x-3.5">
            <span className="text-[#035884] text-[24px] font-bold">{item.subheadingBold}</span>
            <span className="font-medium text-[16px] text-[#035884]">{item.subheading}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
