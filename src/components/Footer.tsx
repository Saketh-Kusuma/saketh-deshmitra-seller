import React from "react";
import icon1 from "../assets/footer-logo.svg";
import instagram from "../assets/span.svg";
import facebook from "../assets/span (1).svg";
import linkedin from "../assets/span (2).svg";
import twitter from "../assets/span (3).svg";
import seller from "../assets/Frame.svg";
import analytics from "../assets/Frame (1).svg";
import invemtory from "../assets/Frame (2).svg";
import order from "../assets/Frame (3).svg";
import payment from "../assets/Frame (4).svg";
import support from "../assets/Frame (5).svg";
import help from "../assets/Frame (6).svg";
import chat from "../assets/Frame (7).svg";
import contact from "../assets/Frame (8).svg";
import call from "../assets/Frame (9).svg";

const Footer = () => {
  return (
    <div className="w-screen grid h-[360px] grid-flow-col grid-rows-3 bg-[#003956] font-poppins md:grid-flow-row md:grid-cols-2 md:grid-rows-2 md:min-h-full md:px-[60px] xlg:px-[100px] md:py-[75px] lg:h-[404px]">
      <div className="flex flex-col gap-4 ps-[10px] pe-[10px] pt-[25px] xlg:gap-6">
        <div className="md:w-[250px] md:h-[40px] lg:w-[300px] lg:h-[40px]">
          <img
            src={icon1}
            height="20px"
            width="150px"
            className="md:w-full md:h-full"
          />
        </div>
        <div className="font-normal text-[10px] text-[#D1D5DB] lg:text-[12px] xlg:text-[16px] lg:text-[14px] xlg:leading-[26px] xlg:w-[525px]">
          Empowering sellers to reach global markets through our comprehensive
          B2B platform. Connect, sell, and grow your business with confidence.
        </div>
        <div className="flex flex-row gap-4">
          <a className="w-[26px] h-[24px] lg:w-[40px] lg:h-[40px]">
            <img src={linkedin} />
          </a>
          <a className="w-[26px] h-[24px] lg:w-[40px] lg:h-[40px]">
            <img src={twitter} />
          </a>
          <a className="w-[26px] h-[24px] lg:w-[40px] lg:h-[40px]">
            <img src={facebook} />
          </a>
          <a className="w-[26px] h-[24px] lg:w-[40px] lg:h-[40px]">
            <img src={instagram} />
          </a>
        </div>
      </div>
      <div className="grid grid-flow-col grid-cols-2 ps-[10px] pe-[10px] pt-[50px] mb-[10px] md:ps-[80px] xlg:pt-[30px]">
        <div className="flex flex-col gap-2 xlg:gap-5 xlg:w-[525px]">
          <span className="text-nowrap text-[12px] font-semibold text-white xlg:text-[18px] lg:text-[16px]">
            Seller Tools
          </span>
          <div className="flex flex-col gap-2 xlg:gap-3">
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={seller}
              />
              <span className="text-nowrap text-[10px] text-nowrap text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                Seller Dashboard
              </span>
            </a>
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={analytics}
              />
              <span className="text-nowrap text-[10px] text-nowrap text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                Analytics
              </span>
            </a>
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={invemtory}
              />
              <span className="text-nowrap text-[10px] text-nowrap text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                Inventory Management
              </span>
            </a>
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={order}
              />
              <span className="text-nowrap text-[10px] text-nowrap text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                Order Fulfillment
              </span>
            </a>
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={payment}
              />
              <span className="text-nowrap text-[10px] text-nowrap text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                Payment Solutions
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:ps-[40px] xlg:gap-5 justify-center xlg:w-[220px]">
          <span className="text-nowrap text-[12px] text-white text-start font-semibold xlg:text-[18px]">
            Support
          </span>
          <div className="flex flex-col gap-2 xlg:gap-3">
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={support}
              />
              <span className="text-nowrap text-[10px] text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                24/7 Support
              </span>
            </a>
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={help}
              />
              <span className="text-nowrap text-[10px] text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                Help Center
              </span>
            </a>
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={chat}
              />
              <span className="text-nowrap text-[10px] text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                Live Chat
              </span>
            </a>
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={contact}
              />
              <span className="text-nowrap text-[10px] text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                Contact Us
              </span>
            </a>
            <a className="flex gap-1">
              <img
                className="w-[11px] mt-[2.5px] h-[10px] xlg:w-[18px] xlg:h-[16px] lg:h-[14px]"
                src={call}
              />
              <span className="text-nowrap text-[10px] text-[#D1D5DB] xlg:text-[16px] lg:text-[14px]">
                Call Support
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="p-[10px] flex flex-col justify-end md:col-span-2 md:pt-[100px] md:justify-end lg:pt-[150px] lg:pb-[150px]">
        <hr className="w-[300px] border-t border-[#374151] mx-auto md:w-full ps-[20px] pe-[20px]" />
        <div className="flex flex-col gap-3">
          <div className="md:flex flex-row justify-between items-end gap-16">
            <span className="text-[8px] text-[#9CA3AF] xlg:text-[14px] lg:text-[12px]">
              © 2025 Akdenar Products. All rights reserved.
            </span>
            <div className="flex flex-row gap-1 text-[#9CA3AF] text-[8px] md:gap-4 xlg:text-[14px] lg:text-[12px]">
              <a>Privacy Policy</a>
              <a>Terms of Service</a>
              <a>Seller Agreement</a>
              <a>Cookie Policy</a>
              <a>Security</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
