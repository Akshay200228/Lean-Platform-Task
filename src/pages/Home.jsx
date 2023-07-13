import React from 'react'
import { Aboutus, Hero1, Explore, Community, Testimonial } from '../components'
import styles from '../style'

const Home = () => {
    return (
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero1 />
                <Aboutus />
                <Explore />
                <Community />
                <Testimonial />
                {/* <Status /> */}
            </div>
        </div>
    )
}

export default Home