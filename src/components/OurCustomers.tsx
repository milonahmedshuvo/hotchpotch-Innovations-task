import Image from "next/image"
import man from '../images/man1.png'
import linkedin from '../images/linkedin.png'
const OurCustomers = () => {
    return (
          <div> 
            <div>
                <h1 className="content-title text-primaryColor text-center">What our customers say</h1>
                <p className="text-center text-[16px] md:text-[18px] leading-none text-[#B7B8BB] font-inter">AI engines take information from various sources and read</p>

                <p className="text-center text-[16px] md:text-[18px] leading-none text-[#B7B8BB] font-inter">them like a human would do.</p>
            </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 my-16">


            <div className="bg-primaryColor h-fit pl-3 pt-4 pb-4 pr-6 rounded-[6px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full">
                            <Image src={man} width={50} height={40} alt="man" />
                        </div>

                        <div>
                            <h1 className="text-[16px] font-inter font-[600] text-[#12141D]">Darrell Steward</h1>
                            <p className="text-[text-[#B7B8BB]]">@darrels</p>
                        </div>
                    </div>

                    <Image src={linkedin} width={20} height={20} alt="social" />
                </div>

                <p className="text-[#12141D] font-inter mt-4">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.<span className="text-[#0EA5E9]"> #another</span>
                </p>
            </div>




            <div className="bg-primaryColor h-fit pl-3 pt-4 pb-4 pr-6 rounded-[6px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full">
                            <Image src={man} width={50} height={40} alt="man" />
                        </div>

                        <div>
                            <h1 className="text-[16px] font-inter font-[600] text-[#12141D]">Leslie Alexander</h1>
                            <p className="text-[text-[#B7B8BB]]">@darrels</p>
                        </div>
                    </div>

                    <Image src={linkedin} width={20} height={20} alt="social" />
                </div>

                <p className="text-[#12141D] font-inter mt-4">Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users. <span className="text-[#0EA5E9]">#postcrafts</span> </p>
            </div>



            <div className="bg-primaryColor h-fit pl-3 pt-4 pb-4 pr-6 rounded-[6px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full">
                            <Image src={man} width={50} height={40} alt="man" />
                        </div>

                        <div>
                            <h1 className="text-[16px] font-inter font-[600] text-[#12141D]">Jenny Wilson</h1>
                            <p className="text-[text-[#B7B8BB]]">@darrels</p>
                        </div>
                    </div>

                    <Image src={linkedin} width={20} height={20} alt="social" />
                </div>

                <p className="text-[#12141D] font-inter mt-4">Finally, Ive found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.

                    <span className="text-[#0EA5E9]"> #postcrafts</span> </p>
            </div>

            <div className="bg-primaryColor h-fit pl-3 pt-4 pb-4 pr-6 rounded-[6px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full">
                            <Image src={man} width={50} height={40} alt="man" />
                        </div>

                        <div>
                            <h1 className="text-[16px] font-inter font-[600] text-[#12141D]">Kristin Watson</h1>
                            <p className="text-[text-[#B7B8BB]]">@darrels</p>
                        </div>
                    </div>

                    <Image src={linkedin} width={20} height={20} alt="social" />
                </div>

                <p className="text-[#12141D] font-inter mt-4">Finally, Ive found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.
                    <span className="text-[#0EA5E9]">  #postcrafts </span> </p>
            </div>





            <div className="bg-primaryColor h-fit pl-3 pt-4 pb-4 pr-6 rounded-[6px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full">
                            <Image src={man} width={50} height={40} alt="man" />
                        </div>

                        <div>
                            <h1 className="text-[16px] font-inter font-[600] text-[#12141D]">Guy Hawkins</h1>
                            <p className="text-[text-[#B7B8BB]]">@darrels</p>
                        </div>
                    </div>

                    <Image src={linkedin} width={20} height={20} alt="social" />
                </div>

                <p className="text-[#12141D] font-inter mt-4">This is a top quality product. No need to think twice before making it live on web.

                    <span className="text-[#0EA5E9]">#make_it_fast </span> </p>
            </div>

            <div className="bg-primaryColor h-fit pl-3 pt-4 pb-4 pr-6 rounded-[6px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full">
                            <Image src={man} width={50} height={40} alt="man" />
                        </div>

                        <div>
                            <h1 className="text-[16px] font-inter font-[600] text-[#12141D]">Marvin McKinney</h1>
                            <p className="text-[text-[#B7B8BB]]">@darrels</p>
                        </div>
                    </div>

                    <Image src={linkedin} width={20} height={20} alt="social" />
                </div>

                <p className="text-[#12141D] font-inter mt-4">With Postcrafts, its quicker with the customer, the customer is more ensured of getting exactly what they ordered, and Im all for the efficiency.
                    #dev #tools

                    <span className="text-[#0EA5E9]">#dev #tools </span> </p>
            </div>

            <div className="bg-primaryColor h-fit pl-3 pt-4 pb-4 pr-6 rounded-[6px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full">
                            <Image src={man} width={50} height={40} alt="man" />
                        </div>

                        <div>
                            <h1 className="text-[16px] font-inter font-[600] text-[#12141D]">Annette Black</h1>
                            <p className="text-[text-[#B7B8BB]]">@darrels</p>
                        </div>
                    </div>

                    <Image src={linkedin} width={20} height={20} alt="social" />
                </div>

                <p className="text-[#12141D] font-inter mt-4">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.


                    <span className="text-[#0EA5E9]">  #another </span> </p>
            </div>

            <div className="bg-primaryColor h-fit pl-3 pt-4 pb-4 pr-6 rounded-[6px]">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="rounded-full">
                            <Image src={man} width={50} height={40} alt="man" />
                        </div>

                        <div>
                            <h1 className="text-[16px] font-inter font-[600] text-[#12141D]">Floyd Miles</h1>
                            <p className="text-[text-[#B7B8BB]]">@darrels</p>
                        </div>
                    </div>

                    <Image src={linkedin} width={20} height={20} alt="social" />
                </div>

                <p className="text-[#12141D] font-inter mt-4">My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.


                    <span className="text-[#0EA5E9]">  #another </span> </p>
            </div>


            



        </div>

        </div>
    )
}

export default OurCustomers