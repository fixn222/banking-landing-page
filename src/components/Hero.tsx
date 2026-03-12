// import React from 'react'
import styles from '../styles'
import { discount, robot } from '../assets'
import GetStart from './GetStart'

const Hero = () => {
  return (
    <section id='home' className={`${styles.paddingY}
    flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `} >
        <div className='flex flex-row items-center py-[6px] rounded-[10px] px-4 bg-discount-gradient mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]' />

          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20$</span> Discount for {' '}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold 
          ss:leading-[100px] leading-[75px] ss:text-[72px] text-[52px] text-white'>
            The Next <br className='sm:block hidden' /> {' '}
            <span className='text-gradient'>
              Generation
            </span>{" "} <br />
            
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStart />
          </div>
        </div>

        <h1 className='font-poppins font-semibold 
       ss:leading-[100px] leading-[75px] ss:text-[68px] text-[52px] text-white w-full'>
        Paymment Method.
       </h1>
       <p className={`${styles.paragraph} max-w-[470px] mt-5`} >Our team of experts uses a methodology to 
        identify the credit cards most likely to fit 
        your needs . We examin annual 
        percentage rates , annual fees
       </p>

      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className='absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient'></div>
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStart />
      </div>
    </section>
  )
}

export default Hero