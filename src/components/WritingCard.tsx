import Image from "next/image"
import cart1 from "../images/cart1.png"
import cart2 from "../images/cart2.png"
import cart3 from "../images/cart3.png"
import cart5 from "../images/cart5.png"
const WritingCard = () => {
    return (
        <div className=" mb-10 md:mb-20">

            <div>
                <h1 className="content-title text-primaryColor text-center">54 exciting writing tools</h1>
                <p className="text-center text-[16px] md:text-[18px] leading-none text-[#B7B8BB] font-inter">AI engines take information from various sources and read</p>

                <p className="text-center text-[16px] md:text-[18px] leading-none text-[#B7B8BB] font-inter">them like a human would do.</p>
            </div>




            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-primaryColor mt-10 md:mt-14 lg:mt-20" >

                <div className="flex gap-3 py-5 px-4 bg-[#282A37] rounded-[8px] ">
                    <div>
                        <Image src={cart1} width={50} height={50} alt="icon" />
                    </div>

                    <div>
                        <h1 className="text-[17px] font-[500] font-inter ">Blog Headlines</h1>
                        <p className="text-[#B7B8BB] text-[15px] mt-2">Write a better blog title with our A.I tool.</p>
                    </div>
                </div>


                <div className="flex gap-3 py-5 px-4 bg-[#282A37] rounded-[8px] ">
                    <div>
                        <Image src={cart2} width={50} height={50} alt="icon" />
                    </div>

                    <div>
                        <h1 className="text-[17px] font-[500] font-inter ">Blog Intros</h1>
                        <p className="text-[#B7B8BB] text-[15px] mt-2">Generate a paragraph of blog content using Blog Intros tool</p>
                    </div>
                </div>


                <div className="flex gap-3 py-5 px-4 bg-[#282A37] rounded-[8px] ">
                    <div>
                        <Image src={cart3} width={50} height={50} alt="icon" />
                    </div>

                    <div>
                        <h1 className="text-[17px] font-[500] font-inter ">Blog Outline</h1>
                        <p className="text-[#B7B8BB] text-[15px] mt-2">Need an attention-grabbing headline for your article?</p>
                    </div>
                </div>


                <div className="flex gap-3 py-5 px-4 bg-[#282A37] rounded-[8px] ">
                    <div>
                        <Image src={cart1} width={50} height={50} alt="icon" />
                    </div>

                    <div>
                        <h1 className="text-[17px] font-[500] font-inter ">Blog Conclusions</h1>
                        <p className="text-[#B7B8BB] text-[15px] mt-2">Write a better conclusions with AI writing tool.</p>
                    </div>
                </div>



                <div className="flex gap-3 py-5 px-4 bg-[#282A37] rounded-[8px] ">
                    <div>
                        <Image src={cart5} width={50} height={50} alt="icon" />
                    </div>

                    <div>
                        <h1 className="text-[17px] font-[500] font-inter ">Content Rewriter</h1>
                        <p className="text-[#B7B8BB] text-[15px] mt-2">Get AI writer to rewrite your sentence in a different way.</p>
                    </div>
                </div>



                <div className="flex gap-3 py-5 px-4 bg-[#282A37] rounded-[8px] ">
                    <div>
                        <Image src={cart2} width={50} height={50} alt="icon" />
                    </div>

                    <div>
                        <h1 className="text-[17px] font-[500] font-inter ">Product Description</h1>
                        <p className="text-[#B7B8BB] text-[15px] mt-2">Need an attention-grabbing headline for your article?</p>
                    </div>
                </div>


                <div className="flex gap-3 py-5 px-4 bg-[#282A37] rounded-[8px] ">
                    <div>
                        <Image src={cart3} width={50} height={50} alt="icon" />
                    </div>

                    <div>
                        <h1 className="text-[17px] font-[500] font-inter ">PAS Copywriting Formula</h1>
                        <p className="text-[#B7B8BB] text-[15px] mt-2">Get AI writer to rewrite your sentence in a different way.</p>
                    </div>
                </div>


                <div className="flex gap-3 py-5 px-4 bg-[#282A37] rounded-[8px] ">
                    <div>
                        <Image src={cart1} width={50} height={50} alt="icon" />
                    </div>

                    <div>
                        <h1 className="text-[17px] font-[500] font-inter ">Company About Us</h1>
                        <p className="text-[#B7B8BB] text-[15px] mt-2">Write a better blog title with our AI tool.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WritingCard