import React from 'react';
import TwitterIcon from '../../assets/TwitterIcon.svg';
import InstaIcon from '../../assets/InstaIcon.svg';
import FbIcon from '../../assets/FBIcon.svg';
import YouTubeIcon from '../../assets/YouTubeIcon.svg';
import StarIcon from '../../assets/StartIcon.svg';
import CartIcon from '../../assets/CartIcon.svg';
import IconSearch from '../../assets/IconSearch.svg';
import MainLogo from '../../assets/MainLogo.svg';
const Header = () => {
  return (
    <div>
      {/* logos and login and signup buttons */}
      <div className="flex justify-between items-center mx-10 my-5">
        <div className="flex justify-between items-center gap-5">
          <img src={TwitterIcon} alt="" />
          <img src={FbIcon} alt="" />
          <img src={InstaIcon} alt="" />
          <img src={YouTubeIcon} alt="" />
        </div>

        {/* butons */}
        <div className="flex justify-between items-center gap-8">
          <button className="text-[#000000] font-bold text-[15px] font-mainTextStyle">
            Login
          </button>
          <button className="text-[#FFFFFF] font-bold text-[15px] font-mainTextStyle h-[32px] flex items-center justify-center w-[95px] rounded-[7px] bg-[#000000] ">
            Sign Up
          </button>
        </div>
      </div>

      {/* navigations and main logo and search bar */}
      <div className="flex justify-between items-center mx-10 my-8">
        {/* Home,collections etc */}
        <div className="flex justify-between items-center gap-4">
          <h1 className="font-mainTextStyle font-bold text-[14px] text-[#000000]">
            HOME
          </h1>
          <h1 className="font-mainTextStyle font-bold text-[14px] text-[#000000]">
            COLLECTION
          </h1>
          <h1 className="font-mainTextStyle font-bold text-[14px] text-[#000000]">
            ABOUT
          </h1>
          <h1 className="font-mainTextStyle font-bold text-[14px] text-[#000000]">
            CONTACT
          </h1>
        </div>

        {/* Main Logo */}
        <img src={MainLogo} alt="" />
        {/* search bar and other icons */}
        <div className="flex justify-between">
          {/* search bar */}
          <div className="flex justify-start items-center w-[260px] h-[52px] p-4 rounded-[12px] gap-3 border-[#EEEEEE] border-2">
            <img src={IconSearch} alt="My icon" />
            <h1 class="font-medium text-[15px] leading-[16px] text-[#9B9B9B] font-mainTextStyle">
              Search...
            </h1>
          </div>
          <img src={StarIcon} alt="" />
          <img src={CartIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
