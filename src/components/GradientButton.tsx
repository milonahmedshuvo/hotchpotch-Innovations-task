'use client'

const GradientButton = ({children}: {children:React.ReactNode}) => {
    return (
        <button
            className="gradientButtonText rounded-[5px] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] px-4 py-2 text-white font-medium hover:opacity-90 focus:outline-none font-inter navberTextStype"
        >
            {children}
        </button>
    )
}

export default GradientButton