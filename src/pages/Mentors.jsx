import React, { useEffect } from 'react';
import styles from '../style';
import { motion } from 'framer-motion';
import { mentor10, mentor2, mentor3, mentor4, mentor5, mentor6, mentor7, mentor9 } from '../assets';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const mentorsData = [
  {
    id: 1,
    name: 'Sahil Wagh',
    jobRole: 'Software Developer',
    image: mentor9,
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 2,
    name: 'Pratham Shinde',
    jobRole: 'Manager',
    image: mentor10,
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 3,
    name: 'Deepak',
    jobRole: 'UX Designer',
    image: mentor3,
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 4,
    name: 'Naveen',
    jobRole: 'Architect',
    image: mentor4,
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 5,
    name: 'Sofia',
    jobRole: 'Business Strategist',
    image: mentor5,
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 6,
    name: 'Madhumita',
    jobRole: 'Content Writter',
    image: mentor6,
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 7,
    name: 'Nirmal',
    jobRole: 'Electrical Engineer',
    image: mentor7,
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
  {
    id: 8,
    name: 'Lokesh',
    jobRole: 'Software Engineer',
    image: mentor2,
    socialMedia: {
      twitter: 'https://twitter.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
    },
  },
];

const Mentors = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 90 },
    visible: { opacity: 1, scale: 1, rotateY: 0 },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <section className={`${styles.paddingY} ${styles.paddingX} flex flex-col lg:flex-row bg-white`}>
      <div className="flex-1 mt-20 lg:order-1">
        <h2
          className='text-center text-5xl font-poppins text-[#292F36]'
        >
          Our Mentors
        </h2>
        <div className="flex flex-wrap justify-center mt-10">
          {mentorsData.map((mentor) => (
            <motion.div
              key={mentor.id}
              className="w-full p-2 mb-4 sm:mb-14 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5 }}
            >
              <motion.div className="text-center bg-white shadow-sm rounded-[30px]"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={mentor.image} alt={mentor.name} className="w-full mb-2 rounded-[30px]" loading='lazy' />
                <h3 className="text-lg font-medium text-[#00487C]">{mentor.name}</h3>
                <p className="text-lg text-[#00A896]">{mentor.jobRole}</p>
                <div className="flex justify-center mt-4">
                  {mentor.socialMedia.twitter && (
                    <a href={mentor.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faFacebookF} className="p-2 text-xl rounded-full text-blue hover:text-white hover:bg-blue-800" />
                    </a>
                  )}
                  {mentor.socialMedia.linkedin && (
                    <a href={mentor.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} className="p-2 text-xl rounded-full text-blue hover:text-blue-400 hover:bg-sky-50" />
                    </a>
                  )}
                  {mentor.socialMedia.linkedin && (
                    <a href={mentor.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedinIn} className="p-2 text-xl text-blue hover:text-white hover:bg-blue-900" />
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
