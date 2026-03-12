// import React from 'react'
import {
  NavBar,
  Hero,
  Billing,
  Business,
  CTA,
  CardDeal,
  Footer,
  Stats,
  Testimonials,
  Client
} from './components/index.ts'

import styles from './styles.ts'

const App = () => {
  return (
<div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
  )
}

export default App