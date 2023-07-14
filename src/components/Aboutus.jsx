import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../style';
import { ArrowRightImg, about } from '../assets';

const Aboutus = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.pageX - centerX;
    const mouseY = event.pageY - centerY;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id='Testimonials' className={`${styles.paddingX} ${styles.flexCenter} mt-20 pt-20 sm:pt-0 sm:mt-20 bg-gray-50 `}>
      <motion.div
        className="flex flex-col items-center justify-center sm:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        ref={ref}
      >
        <motion.div className="p-4 sm:w-1/2" variants={itemVariants}>
          <h2 className="text-3xl font-bold text-center">About Us</h2>
          <p className={`${styles.paddingX} mt-4 text-lg text-gray-600 text-start`}>
            We are a team of passionate developers who love to create amazing websites and apps. We have years of experience in web development and design, and we always strive to deliver the best quality and customer satisfaction.
            <motion.button
              className="flex items-center mt-4 justify-center h-[55px] w-[200px] sm:h-[75px] py-4 px-6 bg-[#00487C] rounded-[18px] font-poppins font-medium text-base text-[#fff] border outline-none shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <img src={ArrowRightImg} alt="" className="ml-2" />
            </motion.button>
          </p>
        </motion.div>
        <motion.div
          className="p-4 ss:p-14 ss:w-1/2 sm:h-auto"
          variants={itemVariants}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.img
            src={about}
            alt="Random image"
            className="border shadow-lg rounded-tr-[150px] rounded-bl-[150px] ss:rounded-tr-[100px] sm:rounded-tr-[350px] ss:rounded-bl-[100px] sm:rounded-bl-[350px]"
            style={{
              rotateX,
              rotateY,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Aboutus;
