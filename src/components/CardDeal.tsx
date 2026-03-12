// import React from 'react'
import styles, { layout } from '../styles'
import Button from './Button'
import { card } from '../assets'

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>find a better card deal in few easy steps. <br className='sm:block hidden ' /></h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
          Corrupti sit explicabo esse nemo rem
          dignissimos maxime voluptate quia aut quidem,
          cupiditate optio non dicta iusto mollitia beatae
          error itaque. Natus.</p>
        <Button styles='mt-10 rounded-[10px]' text='Get Started' />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%] ' />
      </div>
    </section>
  )
}

export default CardDeal