import React, { useEffect } from 'react'
import { Aboutus, Hero1, Explore, Community, Testimonial } from '../components'
import styles from '../style'

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={`${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Hero1 />
                <Aboutus />
                <Explore />
                <Community />
                <Testimonial />
            </div>
        </div>
    )
}

export default Home