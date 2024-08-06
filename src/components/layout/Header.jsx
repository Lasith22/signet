import React from 'react';
import TwitterIcon from '../../assets/TwitterIcon.svg';
import InstaIcon from '../../assets/InstaIcon.svg';
import FbIcon from '../../assets/FBIcon.svg';
import YouTubeIcon from '../../assets/YouTubeIcon.svg';
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
        <div>Login</div>
      </div>
    </div>
  );
};

export default Header;
