import React from 'react';
import Spline from '@splinetool/react-spline';
import ContactForm from '../components/ContactForm';
import styles from '../style';

const Contact = () => {
  return (
    <div className={`${styles.paddingY} flex flex-col lg:flex-row h-screen`}>
      <div 
        className="flex-1 lg:order-2"
        data-aos='fade-left' data-aos-delay='500'
      >
        <Spline scene="https://prod.spline.design/pXCMJVRC9ixKeQ63/scene.splinecode" />
      </div>
      <div className="flex-1 mt-20 lg:order-1">
        <div className="lg:max-w-[500px] lg:mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
