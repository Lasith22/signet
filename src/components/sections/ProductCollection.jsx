import React from 'react';
import Product1 from '../../assets/Product1.png';
import Product2 from '../../assets/Product2.png';
import Product3 from '../../assets/Product3.png';
import Product4 from '../../assets/Product4.png';
import Product5 from '../../assets/Product5.png';
import Product6 from '../../assets/Product6.png';
import Product7 from '../../assets/Product7.png';

const ProductCollection = () => {
  return (
    <div className="py-20 px-8 bg-gradient-to-t from-[#B7B7B7] to-transparent">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-mainTextStyle text-[#000000] text-[48px] font-bold">
          Our Picks for you
        </h1>
        <p>
          Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec
          eturlagix adipiscing eliet, cowec tetopak
        </p>
      </div>

      {/* All the products section */}
      <div className="grid grid-cols-4 grid-rows-2 mt-10 gap-x-3 gap-y-8">
        <div className="flex flex-col justify-center items-center">
          <img
            src={Product1}
            className="w-[330px] h-[440px] object-cover rounded-[12px]"
            alt="Product 1"
          />
          <div className="flex flex-col items-center justify-center gap-2 mt-5">
            <h1 className="font-mainTextStyle font-bold text-[18px]">
              Premium Crewneck Sweatshirt
            </h1>
            <h1 className="text-[#2EBB77] font-mainTextStyle font-bold text-[16px]">
              $29.00{' '}
              <span className="text-[#9B9B9B] text-[13px] line-through font-medium">
                $39.00
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={Product2}
            className="w-[330px] h-[440px] object-cover rounded-[12px]"
            alt="Product 2"
          />
          <div className="flex flex-col items-center justify-center gap-2 mt-5">
            <h1 className="font-mainTextStyle font-bold text-[18px]">
              Premium Crewneck Sweatshirt
            </h1>
            <h1 className="text-[#2EBB77] font-mainTextStyle font-bold text-[16px]">
              $29.00{' '}
              <span className="text-[#9B9B9B] text-[13px] line-through font-medium">
                $399.00
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={Product3}
            className="w-[330px] h-[440px] object-cover rounded-[12px]"
            alt="Product 3"
          />
          <div className="flex flex-col items-center justify-center gap-2 mt-5">
            <h1 className="font-mainTextStyle font-bold text-[18px]">
              Premium Crewneck Sweatshirt
            </h1>
            <h1 className="text-[#2EBB77] font-mainTextStyle font-bold text-[16px]">
              $29.00{' '}
              <span className="text-[#9B9B9B] text-[13px] line-through font-medium">
                $39.00
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={Product4}
            className="w-[330px] h-[440px] object-cover rounded-[12px]"
            alt="Product 4"
          />
          <div className="flex flex-col items-center justify-center gap-2 mt-5">
            <h1 className="font-mainTextStyle font-bold text-[18px]">
              Premium Crewneck Sweatshirt
            </h1>
            <h1 className="text-[#2EBB77] font-mainTextStyle font-bold text-[16px]">
              $29.00{' '}
              <span className="text-[#9B9B9B] text-[13px] line-through font-medium">
                $39.00
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={Product5}
            className="w-[330px] h-[440px] object-cover rounded-[12px]"
            alt="Product 5"
          />
          <div className="flex flex-col items-center justify-center gap-2 mt-5">
            <h1 className="font-mainTextStyle font-bold text-[18px]">
              Premium Crewneck Sweatshirt
            </h1>
            <h1 className="text-[#2EBB77] font-mainTextStyle font-bold text-[16px]">
              $29.00{' '}
              <span className="text-[#9B9B9B] text-[13px] line-through font-medium">
                $39.00
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={Product6}
            className="w-[330px] h-[440px] object-cover rounded-[12px]"
            alt="Product 6"
          />
          <div className="flex flex-col items-center justify-center gap-2 mt-5">
            <h1 className="font-mainTextStyle font-bold text-[18px]">
              Premium Crewneck Sweatshirt
            </h1>
            <h1 className="text-[#2EBB77] font-mainTextStyle font-bold text-[16px]">
              $29.00{' '}
              <span className="text-[#9B9B9B] text-[13px] line-through font-medium">
                $39.00
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={Product7}
            className="w-[330px] h-[440px] object-cover rounded-[12px]"
            alt="Product 7"
          />
          <div className="flex flex-col items-center justify-center gap-2 mt-5">
            <h1 className="font-mainTextStyle font-bold text-[18px]">
              Premium Crewneck Sweatshirt
            </h1>
            <h1 className="text-[#2EBB77] font-mainTextStyle font-bold text-[16px]">
              $29.00{' '}
              <span className="text-[#9B9B9B] text-[13px] line-through font-medium">
                $39.00
              </span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <img
            src={Product3}
            className="w-[330px] h-[440px] object-cover rounded-[12px]"
            alt="Product 3"
          />
          <div className="flex flex-col items-center justify-center gap-2 mt-5">
            <h1 className="font-mainTextStyle font-bold text-[18px]">
              Premium Crewneck Sweatshirt
            </h1>
            <h1 className="text-[#2EBB77] font-mainTextStyle font-bold text-[16px]">
              $29.00{' '}
              <span className="text-[#9B9B9B] text-[13px] line-through font-medium">
                $39.00
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCollection;
