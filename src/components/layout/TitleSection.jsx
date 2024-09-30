import React from "react";
import {Breadcrumb} from "antd";
import Alerts from "../common/alert/alerts.jsx";

const TitleSection = ({title}) => {
    return(
        <div className="item-center bg-[#F5F5F5] h-[223px] flex flex-col items-center justify-center">
            <h1 className="font-mainTextStyle text-[40px] font-bold">
                {title}
            </h1>
            <Breadcrumb className='font-medium text-[15px] font-sans'
                separator="-"
                items={[
                    {
                        title: <a href="/">Home</a>,
                        className: 'text-[#7E7E7E]'
                    },
                    {
                        title: 'About us',
                    },
                ]}
            />

        </div>
    )
}

export default TitleSection
