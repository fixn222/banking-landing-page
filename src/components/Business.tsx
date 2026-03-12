// import React from 'react'

import { features } from "../constants/constants"
import styles, { layout } from "../styles"
import Button from "./Button"
// import FeaturCard from "./FeaturCard.tsx"

interface  props {
  id : string 
  icon : string
  title : string 
  content : string
  index : number
}
const FeaturCard = ({icon , title ,content , index } : props)=> {
   
  return(
   <div className={`flex flex-row p-6 rounded-[20px]
    ${index !== features.length -1 ? 'mb-6' : 'mb-0' } feature-card` }>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} object-contain bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[24px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
   </div>
  )
  
}


const Business = () =>  (

  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2} >You do the business <br className="sm:block hidden " /> we'll handle the money. </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit 
        card, you can improve your financial life 
        by building creadit, earning rewards and saving money
        . but with hundreds of credit cards on the market.
      </p>
      <Button styles='mt-10' text='Get Started' />
    </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature , index)=>(
          <FeaturCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
  </section>
    
  )

export default Business