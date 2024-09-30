import React from "react";
import TitileSection from "../components/layout/TitleSection.jsx";
import Header from "../components/layout/Header.jsx";
import Footer from "../components/layout/Footer.jsx";

const AboutUsPage = () => {
    return(
        <div>
            <Header />
            <TitileSection title="About us" />
            <div className='lg:h-[550px] flex flex-col p-5 gap-4 mx-10 my-5 md:flex-row'>
                <div className='md:w-6/12 h-[520 px]'>
                    <div className='aspect-video '>
                        <iframe className='h-full w-full rounded-lg'
                                src="https://www.youtube.com/embed/075ndksgS8E"
                                width="100%"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className='md:w-6/12 lg:ml-10 h-full'>
                    <button className='w-[180.58px] h-[41.19px] bg-[#B479D926] rounded-full text-[#B479D9]'>
                        Design your own
                    </button>
                    <div className='flex item-center mt-[10px]'>
                        <h1 className='font-mainTextStyle text-[54px] font-semibold'>Our Story</h1>
                    </div>
                    <div className='lg:w-[520px] font-Poppins font-normal text-[16px]'>
                        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                    </div>
                    <div className='lg:w-[520px] font-Poppins font-normal text-[16px] mt-10'>
                        Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUsPage;
