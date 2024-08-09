import React from 'react';
import MainLogo from '../../assets/MainLogo2.svg';
import TwitterIcon from '../../assets/TwitterIcon2.svg';
import InstaIcon from '../../assets/InstaIcon2.svg';
import FbIcon from '../../assets/FbIcon2.svg';
const Footer = () => {
  return (
    <div className="bg-[#000000] py-10 px-10">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-start">
          <img src={MainLogo} alt="" />
          <h1 className="font-robotoSlab text-[#FFFFFF] text-[22px] font-medium mb-3">
            Social Media
          </h1>
          <div className="flex items-center gap-3">
            <img src={TwitterIcon} alt="" />
            <img src={FbIcon} alt="" />
            <img src={InstaIcon} alt="" />
          </div>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="font-robotoSlab text-[#FFFFFF] text-[22px] font-medium">
              Company
            </h1>
            <div className="flex flex-col gap-2">
              <h1 className="font-poppins text-[#B5B5B5] text-[20px] font-medium">
                Home
              </h1>
              <h1 className="font-poppins text-[#B5B5B5] text-[20px] font-medium">
                Collection
              </h1>
              <h1 className="font-poppins text-[#B5B5B5] text-[20px] font-medium">
                About Us
              </h1>
              <h1 className="font-poppins text-[#B5B5B5] text-[20px] font-medium">
                Contact Us
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="font-robotoSlab text-[#FFFFFF] text-[22px] font-medium">
              STAY UP TO DATE
            </h1>
            <div className="flex items-center border border-gray-400 rounded-l-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 text-[#FFFFFF] bg-[#000000] outline-none"
              />
              <button className="px-6 py-2 bg-[#B5B5B5] text-[#000000] font-semibold font-poppins">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
