import React from 'react';
import styles from '../style';

const About = () => {
  return (
    <div className={`${styles.paddingY} flex flex-col lg:flex-row h-screen`}>
      <div className="flex-1 mt-20 lg:order-1">
        <div className="lg:max-w-[500px] lg:mx-auto">
        About
        </div>
      </div>
    </div>
  );
};

export default About;
