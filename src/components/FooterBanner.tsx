

const FooterBanner = () => {
    return (
        <div className=" mt-5 md:mt-32 mb-10 bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] py-6 px-10 flex justify-between items-center rounded-md">

            <div>
                <h1 className="content-title-footer text-primaryColor leading-none">It will help you improve your writing</h1>
                <h1 className="content-title-footer text-primaryColor leading-none"> & bring ideas more c learly.</h1>
            </div>


            <button
                className="gradientButtonText rounded-[5px]  px-4 py-2 bg-white text-[#12141D] font-medium hover:opacity-90 focus:outline-none font-inter navberTextStype"
            >
                Get Started Free
            </button>

        </div>
    )
}

export default FooterBanner