'use client'
import Image from "next/image"
import GradientButton from "./GradientButton"
import contentFrame from "../images/content-frame.png"

const Content = () => {
  return (
    <div className="relative my-20 flex flex-col justify-center lg:items-center gap-y-10 lg:gap-x-48 w-full lg:flex-row">

        <div className="border text-primaryColor p-4 bg-primaryColor rounded-[7px] md:rounded-[12px]">
            <h1 className="text-darkColor font-semibold font-inter">Results</h1>
            <p className="text-[#818488] content-peragrap">Here what our AI came up with.</p>

            
            <div className="mt-5 ml-2">
                <p className="content-peragrap text-darkColor font-inter">Pain: You are an e-commerce business, and you</p>
                <p className="content-peragrap text-darkColor font-inter"> want to sell your products all over the country,</p>
                <p className="content-peragrap text-darkColor font-inter">but you are confused about how to handle sales tax.</p>

                <p className="content-peragrap text-darkColor font-inter mt-3">Agitate: You have no idea how much sales tax to</p>
                <p className="content-peragrap text-darkColor font-inter">charge your customers in each state.</p>

                <p className="content-peragrap text-darkColor font-inter mt-3">Solution: Use TaxSol, our full stack sales tax ...</p>
                <p className="content-peragrap text-darkColor font-inter">solution, to manage your sales tax for you!</p>

                <p className="content-peragrap text-darkColor font-inter mt-9">Pain: e-commerce business owners are </p>
                <p className="content-peragrap text-darkColor font-inter">struggling to keep up with the ever changing</p>
                <p className="content-peragrap text-darkColor font-inter">sales tax laws</p>
                
                <p className="content-peragrap text-darkColor font-inter mt-3">Agitate: Sales tax is a complicated, confusing</p>
            </div>

            <div className="absolute top-[30%] hidden lg:block  ">
                <Image className="h-[260px]" src={contentFrame} width={500} height={300} alt="frame"/>
            </div>
        </div>



        <div className="">
            <h1 className="content-title text-primaryColor leading-none">Create content efficiently</h1>
            <h1 className="content-title text-primaryColor leading-none">and quickly with great AI</h1>
            <h1 className="content-title text-primaryColor leading-none">writing tools</h1>


            <p className="text-[16px] md:text-[18px] text-secondaryColor font-inter mt-6 md:mt-8 right-site-peragrap">150k+ users. No Credit Card Required. Pro designs and </p>

            <p className="text-[16px] md:text-[18px] text-secondaryColor font-inter right-site-peragrap">writing at no cost. Start for free. Ai Writer Tool | Generate</p>
            <p className="text-[16px] md:text-[18px] text-secondaryColor font-inter right-site-peragrap">text for ecom, social media, website, sales, blogs etc.</p>

            <div className="mt-6 md:mt-8">
                <GradientButton>tart 14 Days Free Tria</GradientButton>
            </div>
        </div>

    </div>
  )
}

export default Content