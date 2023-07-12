import React from 'react'
import { Features, Aboutus, Hero1, Status, Testimonials } from '../components'
import styles from '../style'

const Home = () => {
    return (
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero1 />
                <Aboutus />
                {/* <Testimonials /> */}
                {/* <Status /> */}
                {/* <Features /> */}
            </div>
        </div>
    )
}

export default Home