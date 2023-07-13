import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../style';
import { ArrowRightImg } from '../assets';

const Explore = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting);
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = [
    {
      title: 'Business and Entrepreneurship',
      description:
        'Dive into the world of business and entrepreneurship. Our mentors in this area can provide valuable insights on topics like business strategy, marketing, finance, startups, leadership, and innovation',
    },
    {
      title: 'Arts and Creativity',
      description:
        "Unleash your creative potential with our mentors in the arts and creativity. Whether you're passionate about visual arts, writing, music, photography, or performing arts, our mentors can provide you with the necessary guidance and inspiration.",
    },
    {
      title: 'Technology',
      description:
        'Enhance your skills in the ever-evolving field of technology. Our technology mentors can guide you in areas such as software development, web design, data science, cybersecurity, artificial intelligence, and more',
    },
  ];

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="explore"
      ref={sectionRef}
      className={`${styles.paddingX} px-8 md:px-20 lg:px-32 py-16 md:py-32 lg:py-48`}
    >
      <div>
        <h2 className="mb-4 sm:mb-14 text-2xl sm:text-[48px] font-bold text-[#292F36] text-center">
          Explore Diverse Mentorship Areas
        </h2>
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="mb-2 text-[20px] font-bold text-center text-[#00487C]">{card.title}</h3>
              <p className="text-[#1E1E1E] text-[16px]">{card.description}</p>
              <button className="flex mt-4 mx-auto items-center text-xl text-[#00487C] transition-all gap-x-3 hover:gap-x-5">
                Read more <img src={ArrowRightImg} alt="" />
              </button>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="flex items-center justify-center w-[260px] h-[55px] sm:w-[260px] sm:h-[75px] py-4 px-6 bg-[#00487C] rounded-[18px] font-poppins font-medium text-base text-[#fff] border outline-none shadow-xl">
            Find Your Mentor
            <img src={ArrowRightImg} alt="" className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Explore;
