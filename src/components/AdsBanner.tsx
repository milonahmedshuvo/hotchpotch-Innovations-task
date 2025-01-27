'use client'
import Image from "next/image"
import GradientButton from "./GradientButton"
import icon from '../images/Icon.png'


const AdsBanner = () => {
    return (
        <div className=" mt-16 border-b border-gray-500 pb-20">
            <h1 className="heading text-center text-secondaryColor leading-none m-0">Write better</h1>
            <h1 className="heading text-center text-secondaryColor leading-none m-0">content for your</h1>
            <div className="flex items-center justify-center">
                <h1 className="heading text-center text-transparent leading-none m-0 bg-clip-text bg-gradient-to-r from-[#FFC947] to-[#FC6739] relative inline-block">
                    Facebook Ads
                    <span className="absolute left-0 right-0 bottom-[-2px] h-[2px] bg-gradient-to-r from-[#FFC947] to-[#FC6739]"></span>
                </h1>
            </div>


            <p className=" text-center mt-6 text-[16px] md:text-[18px] text-secondaryColor font-inter">Artificial intelligence writting tool helps you create blogs,</p>
            
            <p className="text-center text-[16px] md:text-[18px] leading-none text-secondaryColor font-inter">social media websites and much more.</p>

            <div className="flex justify-center mt-6 md:mt-9">
            <GradientButton>Start 14 Days Free Trial</GradientButton>
            </div>

           <div className="flex justify-center items-center mt-2 gap-2">
            <div>
            <Image src={icon} width={14} height={40} alt="icon"/>
            </div>
           <p className="text-center text-primaryColor text-sm">Watch A Demo</p>
           </div>

        </div>
    )
}

export default AdsBanner