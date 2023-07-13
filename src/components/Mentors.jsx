import React from 'react';
import { motion, useSpring  } from 'framer-motion';
import { avatar1, avatar2, avatar3 } from '../assets';
import { useInView } from 'react-intersection-observer';

const Mentors = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mentors = [
    {
      id: 1,
      name: 'Malini Sindhu',
      place: 'Chennai, India',
      description: "Being a mentor on Mentor Hub has been an incredibly rewarding experience. I've had the opportunity to share my knowledge and guide aspiring professionals in their career journeys.",
      profileImage: avatar1,
    },
    {
      id: 2,
      name: 'Archana Nair',
      place: 'Kerala, India',
      description: "Mentor Hub has exceeded my expectations. The platform's user-friendly design and comprehensive profile customization options have allowed me to showcase my expertise and build credibility with mentees.",
      profileImage: avatar2,
    },
    {
      id: 3,
      name: 'Deepak Dinesh',
      place: 'Chennai, India',
      description: "As a mentor on Mentor Hub, I've been able to connect with mentees from around the world, bridging geographical boundaries. The platform's robust search functionality and categorization have made it easy for mentees to find me based on their specific needs.",
      profileImage: avatar3,
    },
  ];

  return (
    <section ref={ref} className="flex justify-center">
      <div className="bg-[#ffffff] border rounded-[50px] shadow-xl px-10 py-20 mb-10">
        <h2 className="mb-4 text-5xl text-center font-poppins">Hear from Our Mentors</h2>
        <div className="flex flex-wrap justify-between">
          {mentors.map((mentor) => {
            const springProps = useSpring({
              x: 0,
              scale: 1,
              opacity: 1,
              transition: { type: 'spring', stiffness: 100 },
            });

            return (
              <motion.div
                key={mentor.id}
                className="w-full p-4 mb-4 sm:w-1/2 lg:w-[370px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: 0 }}
                transition={{ duration: inView ? 0.5 : 0, delay: mentor.id * 0.4 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="p-4 hover:bg-[#F0F4F8] transition-colors duration-300 rounded-lg">
                  <div className="flex items-center mb-4">
                    <motion.img
                      src={mentor.profileImage}
                      alt={mentor.name}
                      className="w-16 h-16 mr-4 rounded-full"
                      drag
                      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                      dragElastic={0.8}
                      {...springProps}
                    />
                    <div>
                      <h3 className="mb-2 text-lg font-bold text-[#00487C]">{mentor.name}</h3>
                      <h3 className="mb-2 text-base font-bold text-[#00A896]">{mentor.place}</h3>
                    </div>
                  </div>
                  <p className="font-sans text-[#1E1E1E]">"{mentor.description}"</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
