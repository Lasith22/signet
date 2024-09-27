import React from 'react';
import { Card } from 'antd';
import Customer1 from '../../assets/Customer1.svg';
import Customer2 from '../../assets/Customer2.svg';
import Customer3 from '../../assets/Customer3.svg';

const CustomerStories = () => {
  return (
    <div className="my-10 flex flex-col jus tify-center items-center">
      <h1 className="font-mainTextStyle text-[#000000] text-[48px] font-bold">
        What People Are Saying
      </h1>
      <h1 className="font-mainTextStyle text-[#7E7E7E] text-[18px] font-medium mt-2">
        We provide support for more than 15K+ Businesses.
      </h1>

      <div className="my-10 mx-20 grid grid-cols-3 justify-between gap-10 ">
        <Card className="p-4 shadow-md">
          <div className="flex gap-5">
            <img src={Customer1} alt="" />
            <div className="border-b border-dashed border-b-[#F3BB2E]">
              <h1 className="font-mainTextStyle text-[#000000] text-[18px] font-bold">
                Dean D.{' '}
                <span className="text-[#7E7E7E] font-medium text-[15px] ">
                  Director
                </span>{' '}
              </h1>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="font-mainTextStyle text-[#000000] text-[20px] font-medium">
              “ Great quality products - Flags, programs for exceptional
              capacities, birthday, and occasion welcome are largely still
              mainstream on paper.”
            </h1>
          </div>
        </Card>
        <Card className="p-4 shadow-md">
          <div className="flex gap-5">
            <img src={Customer2} alt="" />
            <div className="border-b border-dashed border-b-[#F3BB2E]">
              <h1 className="font-mainTextStyle text-[#000000] text-[18px] font-bold">
                Dean D.{' '}
                <span className="text-[#7E7E7E] font-medium text-[15px] ">
                  Director
                </span>{' '}
              </h1>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="font-mainTextStyle text-[#000000] text-[20px] font-medium">
              “ Best services ever - Flags, programs for exceptional capacities,
              birthday, and are largely still mainstream on paper occasion
              welcome.”
            </h1>
          </div>
        </Card>
        <Card className="p-4 shadow-md">
          <div className="flex gap-5">
            <img src={Customer3} alt="" />
            <div className="border-b border-dashed border-b-[#F3BB2E]">
              <h1 className="font-mainTextStyle text-[#000000] text-[18px] font-bold">
                Dean D.{' '}
                <span className="text-[#7E7E7E] font-medium text-[15px] ">
                  Director
                </span>{' '}
              </h1>
            </div>
          </div>
          <div className="mt-3">
            <h1 className="font-mainTextStyle text-[#000000] text-[20px] font-medium">
              “ Top noth support - Flags, programs for, birthday, and occasion
              welcome are largely still mainstream on paper exceptional
              capacities.”
            </h1>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CustomerStories;
