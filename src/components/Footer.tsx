// import React from 'react'

import { logo } from "../assets"
import { footerLinks } from "../constants/constants"
import styles from "../styles"

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex-col justify-start mr-10">
          <img src={logo} alt="logo" className="w-[266px] h-[72px]" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payment easy, reliable and secure</p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div className="flex flex-col ss:my-0 my-4 min-w-[150px] ">
              <h4 className="font-poppins text-white font-medium ">
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links.map((lk, index) => (
                  <li key={lk.name} className={`font-poppins font-normal text-[16px]
                   leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== lk.link.length -1 ? 'mb-4' : 'mb-0' }`}>
                    {lk.name} 
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p  className="font-poppins text-white font-normal ">2026 HooBank. All Rights Reseverd.</p>
        
      </div>
    </section>
  )
}

export default Footer