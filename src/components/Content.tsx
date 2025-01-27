'use client'
import Image from "next/image"
import GradientButton from "./GradientButton"
import contentFrame from "../images/content-frame.png"

const Content = () => {
  return (
    <div className=" my-20 px-10 md:px-20 flex flex-col justify-center md:items-center gap-y-10 lg:gap-x-48 w-full md:flex-row">

        <div className=" relative border w-full md:w-1/2 text-primaryColor pl-4 pt-5 pr-5 pb-1 bg-primaryColor rounded-[7px] md:rounded-[12px]">
            <h1 className="text-darkColor font-semibold font-inter">Results</h1>
            <p className="text-[#818488] content-peragrap">Here what our AI came up with.</p>

            
            <div className="mt-6 ml-2">
                <p className="content-peragrap text-darkColor font-inter">Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales business, and you want to sell your products all over tax.</p>
                
                <p className="content-peragrap text-darkColor font-inter mt-3">Agitate: You have no idea how much sales tax to charge your customers in each state. charge your customers in each state.</p>
                

                <p className="content-peragrap text-darkColor font-inter mt-3">Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax solution, to manage your sales tax for you! for you! ...</p>
                

                <p className="content-peragrap text-darkColor font-inter mt-9">Pain: e-commerce business owners are struggling to keep up with the ever changing sales tax owners are struggling to keep up with the ever laws </p>
                
                <p className="content-peragrap text-darkColor font-inter mt-3">Agitate: Sales tax is a complicated, confusing</p>
            </div>

            <div className="absolute top-[24%] right-[-200px] hidden lg:block  ">
                <Image className="h-[260px]" src={contentFrame} width={500} height={300} alt="frame"/>
            </div>
        </div>



        <div className="w-full md:w-1/2">
            <h1 className="content-title text-primaryColor leading-none">Create content efficiently</h1>
            <h1 className="content-title text-primaryColor leading-none">and quickly with great AI</h1>
            <h1 className="content-title text-primaryColor leading-none">writing tools</h1>


            <p className="text-[16px] md:text-[18px] text-[#B7B8BB] font-inter mt-6 md:mt-8 right-site-peragrap">150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.</p>


            <div className="mt-6 md:mt-8">
                <GradientButton>tart 14 Days Free Tria</GradientButton>
            </div>
        </div>

    </div>
  )
}

export default Content