import React from 'react'
import { Aboutus, Hero1, Explore, Community, Mentors } from '../components'
import styles from '../style'

const Home = () => {
    return (
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero1 />
                <Aboutus />
                <Explore />
                <Community />
                <Mentors />
                {/* <Status /> */}
            </div>
        </div>
    )
}

export default Home