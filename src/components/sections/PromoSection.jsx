import React from 'react';
import PromoIcon1 from '../../assets/PromoImage1.png';
import PromoImage2 from '../../assets/PromoImage2.png';
import PromoImage from '../../assets/PromoImage.png';
import PromoImage3 from '../../assets/PromoImage3.png';
import WhiteArrow from '../../assets/ArrowWhite.svg';
import BlackArrow from '../../assets/ArrowBlack.svg';
const PromoSection = () => {
  return (
    <div className="grid grid-cols-7 bg-gray-400 bg-opacity-15">
      <div className="col-span-2">
        <img src={PromoIcon1} className="max-w-full h-auto" />
      </div>
      <div className="flex flex-col justify-center text-center col-span-3">
        <h1 className="font-mainTextStyle text-[#000000] text-[48px] font-bold">
          Enjoy up your vacations <span>in the best T-shirts </span>
        </h1>
        <h1 className="font-mainTextStyle text-[#7E7E7E] text-[20px] font-medium">
          T-shirts that keep you moving.
        </h1>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="w-[151px] h-[48px] flex items-center justify-center gap-2 bg-[#2EBB77] text-[#FFFFFF] text-[15px] font-bold rounded-[12px]">
            Shop Now <img src={WhiteArrow} alt="" />
          </button>
          <button className="w-[151px] h-[48px] flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#000000] text-[15px] font-bold rounded-[12px]">
            Contact Us <img src={BlackArrow} alt="" />
          </button>
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-center space-y-6">
        {/* First Image */}
        <div className=" relative">
          <img
            src={PromoImage2}
            alt="Model 1"
            className="w-[250px] h-[228px] object-cover rounded-lg  absolute "
          />

          {/* Second Image */}
          <img
            src={PromoImage}
            alt="Model 2"
            className="w-[268px] h-[189px] object-cover rounded-lg  ml-20 mt-20 "
          />
        </div>

        {/* Third Image */}
        <img
          src={PromoImage3}
          alt="Model 3"
          className="w-[183px] h-[183px] object-cover rounded-lg mt-40 "
        />
      </div>
    </div>
  );
};

export default PromoSection;
