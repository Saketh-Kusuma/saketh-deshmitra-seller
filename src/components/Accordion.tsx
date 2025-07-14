import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// import icon from '../assets/icons/icon.png';
// import icon1 from '../assets/icons/icon (1).png';
import { MessageCircle } from "lucide-react";
import { Mail } from "lucide-react";
// import { Button } from "./ui/button";
import type { TAccordion } from "@/types/types";



const Accordion = () => {
  const items:TAccordion[] = [
    {
      title: "What makes Deshmitra the right platform for me?",
      content:
        "Deshmitra is designed especially for sellers like you, small traders, wholesalers, manufacturers, and resellers. Whether you're just getting started or already doing business, Deshmitra helps you connect with genuine bulk buyers across India and beyond. We keep it simple, transparent, and seller-first.",
    },
    {
      title: "How does selling on Deshmitra work for a new seller?",
      content:
        " It's easy and beginner-friendly! You sign up, upload your product details with a minimum order quantity (MOQ), and go live. Buyers who want to order in bulk will reach you directly. We support you with logistics, payments, and everything else needed to run smoothly.",
    },
    {
      title: "What's the minimum quantity I need to list on Deshmitra?",
      content:
        "There's no fixed rule. You set your own MOQ, whether it's 5, 10, or 100 units. We know every seller runs differently, so we give you full control over how much you want to sell.",
    },
    {
      title: "What kind of products are allowed on Deshmitra?",
      content:
        "Deshmitra supports a wide variety of wholesale products like clothes, kitchen items, snacks, tools, stationery, packaging materials, and more. As long as your product is legal, safe, and suited for B2B selling, you're good to go.",
    },
    {
      title: "What do I need to register as a seller on Deshmitra?",
      content:
        "You'll just need a PAN card, GSTIN Number, FSSAI Number and Trademark of the Company to get started. The registration is 100% online and takes only a few minutes. If you ever need help, our team is here for you.",
    },
    {
      title:
        "What kind of charges or commissions will I have to pay as a seller on this platform?",
      content:
        "We follow a transparent pricing model. There are no listing or setup fees — you only pay a small commission per successful sale, which varies by product category.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index:number | null) => {
    setOpenIndex(openIndex == index ? null : index);
  };

  return (
    <div className="w-full mt-28 min-h-screen  py-3 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-center font-bold text-3xl md:text-5xl text-[#003956] mb-4">
          Frequently Asked Questions
        </h1>
        <h4 className="text-center text-[#003956] text-xl md:text-3xl px-4 sm:px-8  md:px-16">
          Find answers to common questions about our services, pricing, and
          policies.
        </h4>
      </div>

      <div className="w-[95%] mx-auto">
        {items.map((item, index) => {
          return (
            <div key={index} className="mb-2">
              <button
                className="p-3 sm:p-4 lg:p-[15px] w-full border-b-2 text-xs sm:text-sm 
                md:text-base cursor-pointer font-bold text-left text-blue-950 flex justify-between 
                items-start hover:bg-gray-50 transition-colors"
                onClick={() => handleToggle(index)}
              >
                <span className="pr-2  text-[15px] sm:pr-4 leading-tight">
                  {item.title}
                </span>
                {openIndex === index ? (
                  <FaChevronUp className="flex-shrink-0 text-sm sm:text-base text-blue-600" />
                ) : (
                  <FaChevronDown className="flex-shrink-0 text-sm sm:text-base text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-blue-900 text-sm sm:text-base border-b border-gray-200 bg-gray-50">
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="bg-sky-100 flex justify-center items-center  flex-col rounded-lg shadow-xs shadow-sky-100 
      w-[95%] h-[210px] mx-auto my-10">
        <div className=" flex justify-center flex-col  items-center py-4">
          <h3 className="text-xl xm:text-2xl font-bold text-blue-950">
            Still have questions?{" "}
          </h3>
          <p className=" text-blue-950 xm:px-4 sm:text-blue-950 text-[15px] text-center">
            Can't find the answer you're looking for? Our support team is here
            to help.
          </p>
        </div>
        <div className="flex justify-center  gap-x-4 xs:gap-x-5 ">
          <button className="flex space-x-2.5 px-3 py-2 xs:px-10 xs:py-2 rounded-lg text-white bg-[#003956]">
            <MessageCircle className="hidden sxs:block"/>
            <span>Start Live Chat</span>
          </button>

          <button className="flex space-x-2.5 px-2 py-2 xs:px-5 xs:py-2 rounded-lg border-2
           bg-zinc-100 text-[#003956] border-[#003956]">
            <Mail className="hidden sxs:block"/> <span>Send Email</span>
          </button>

          {/* <Button variant="destructive">
            <span>Contact Support</span>
          </Button> */}
        </div>
      </div>


    </div>
  );
};

export default Accordion;
