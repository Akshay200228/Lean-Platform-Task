import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from '../style';
import { ArrowRightImg, community } from '../assets';

const Community = () => {
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

  return (
    <section id="Community" className={`${styles.paddingX} ${styles.flexCenter} mb-20 sm:mb-10 bg-gray-50 `}>
      <motion.div
        className="flex flex-col items-center justify-center sm:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        ref={ref}
      >
        <motion.div className="p-4 ss:p-14 ss:w-1/2 sm:h-auto" variants={itemVariants}>
          <motion.img
            src={community}
            alt="Random image"
            className="border rounded-[70px] shadow-xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <motion.div className={`${styles.paddingX} p-4 sm:w-1/2`} variants={itemVariants}>
          <h2 className="text-sm font-medium sm:text-6xl ss:text-6xl text-start">
            Join Our Community of Mentors
          </h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Becoming a mentor on Mentor Hub is quick and easy. Follow these simple steps to get started.
            <motion.button
              className="flex items-center mt-6 justify-center w-[200px] h-[55px] sm:w-[125px] sm:h-[75px] py-4 px-6 bg-[#00487C] rounded-[18px] font-poppins font-medium text-base text-[#fff] border outline-none shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              Learn More
              <img src={ArrowRightImg} alt="" className="ml-2" />
            </motion.button>
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Community;
