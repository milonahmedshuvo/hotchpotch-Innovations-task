'use client'
import Image from 'next/image'
import logo1 from '../images/Logo1.png'
import logo2 from '../images/Logo2.png'
import logo3 from '../images/Logo3.png'
import logo4 from '../images/Logo4.png'
import logo5 from '../images/Logo5.png'
import logo6 from '../images/Logo6.png'
// import logo7 from '../images/Logo7.png'
import logo8 from '../images/Logo8.png'

const CustomersPay = () => {
  return (
    <div className="mt-20 mb-28">
        <p className="customers-pays-title text-secondaryColor text-center">Trusted by nearly 5000+ paying customers</p>

        <div className="w-full md:w-[75%] grid grid-cols-2 md:grid-cols-4 mx-auto place-items-center gap-y-5 mt-12">
           <Image src={logo1} width={150} height={150} alt='logo1'/>
           <Image src={logo2} width={150} height={150} alt='logo1'/>
           <Image src={logo3} width={150} height={150} alt='logo1'/>
           <Image src={logo4} width={150} height={150} alt='logo1'/>
           <Image src={logo5} width={150} height={150} alt='logo1'/>
           <Image src={logo6} width={150} height={150} alt='logo1'/>
           <Image src={logo2} width={150} height={150} alt='logo1'/>
           <Image src={logo8} width={150} height={150} alt='logo1'/>
        </div>
    </div>
  )
}

export default CustomersPay