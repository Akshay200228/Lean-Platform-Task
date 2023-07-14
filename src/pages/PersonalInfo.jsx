import React, { useEffect, useState } from 'react';
import styles from '../style';
import { ArrowRightImg, form } from '../assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';


const PersonalInfo = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    // You can perform validation and submit the data to your backend or perform other actions
    console.log('Profile Image:', profileImage);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('Date of Birth:', dateOfBirth);
    console.log('Category:', category);
    console.log('Sub Category:', subCategory);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className={`${styles.paddingY} ${styles.paddingX} bg-gray-50  mt-14 sm:mt-24`}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: 0 }}
      transition={{ duration: inView ? 0.5 : 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className={`flex flex-col lg:flex-row h-full`}>
        {/* Left side - Profile Image Upload */}
        <div className="flex items-center justify-center lg:w-1/2">
          <label htmlFor="image-upload" className="relative text-[#00487C]">
            <motion.h2
              className="mb-6 text-xl font-sans text-start sm:mb-10 text-[#00487C]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Personal Information :
            </motion.h2>
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="object-cover shadow-2xl mb-4 sm:mb-0 w-72 h-72 sm:w-[522px] sm:h-[430px] rounded-3xl cursor-pointer"

              />
            ) : (
              <motion.div className="flex items-center justify-center shadow-xl w-72 h-72 mb-4 sm:mb-0 sm:w-[522px] sm:h-[430px] rounded-3xl bg-gray-200 cursor-pointer"
                initial={{ x: -100, opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)" }}
                whileTap={{ scale: 0.9 }}

              >
                <img
                  src={form}
                  className="w-72 h-72 sm:w-[522px] sm:h-[430px] rounded-3xl"
                />
              </motion.div>
            )}
            <motion.p
              className='mt-4 mb-6 sm:mb-0 text-[#00487C]'
              initial={{ x: -100, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Upload Photo
            </motion.p>
            <input
              type="file"
              id="image-upload"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </label>
        </div>

        {/* Right side - Personal Info Fields */}
        <motion.div
          className={`flex flex-col justify-center lg:w-1/2 ${styles.paddingX}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-72 sm:w-[566px] p-3 border placeholder-[#00A896] border-[#00A896] rounded-lg focus:outline-none focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-72 sm:w-[566px] p-3 border placeholder-[#00A896] border-[#00A896] rounded-lg focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-72 sm:w-[566px] p-3 border placeholder-[#00A896] border-[#00A896] rounded-lg focus:outline-none focus:border-blue-500"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </motion.div>
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <input
                  type="date"
                  id="dob"
                  className="w-72 sm:w-[566px] p-3 border placeholder-[#00A896] border-[#00A896] rounded-lg focus:outline-none focus:border-blue-500"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </motion.div>
              <hr />
            </form>
          </div>
        </motion.div>
      </div>

      <hr className="my-8 border-t-2 border-gray-300" />

      {/* Areas of Expertise */}
      <div className={`${styles.paddingX} mt-10 sm:mt-24`}>
        <h2
          className="mb-6 text-xl font-sans text-start sm:mb-10 text-[#00487C]"
          data-aos='fade-down' data-aos-delay='100'
        >
          Areas of Expertise:
        </h2>
        <div className="flex flex-col items-start justify-between sm:flex-row">
          <div className="mb-4 sm:mb-0 sm:mr-2" data-aos='fade-right' data-aos-delay='100'>
            <select
              id="category"
              className="w-72 sm:w-[428px] p-3 border border-[#00A896] rounded-lg focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </div>
          <div className="sm:ml-2" data-aos='fade-left' data-aos-delay='100'>
            <select
              id="subcategory"
              className="w-72 sm:w-[428px] p-3 border border-[#00A896] text-[#000000] rounded-lg focus:outline-none"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
              required
            >
              <option value="">Sub Category</option>
              <option value="subCategory1">Sub Category 1</option>
              <option value="subCategory2">Sub Category 2</option>
              <option value="subCategory3">Sub Category 3</option>
            </select>
          </div>
        </div>
      </div>

      {/* Availability  */}
      <div className={`${styles.paddingX} mt-8`}>
        <h2
          className="mb-6 text-xl font-sans text-start sm:mb-10 text-[#00487C]"
          data-aos='fade-right' data-aos-delay='100'
        >
          Availability :
        </h2>
        <div className="flex items-center justify-between">
          <div className="mr-2" data-aos='fade-right' data-aos-delay='100'>
            <select
              id="category"
              className="w-72 sm:w-[428px] p-3 border border-[#00A896] rounded-lg focus:outline-none"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Available Days</option>
              <option value="category1">Days 1</option>
              <option value="category2">Days 2</option>
              <option value="category3">Days 3</option>
            </select>
          </div>
        </div>
      </div>

      {/* About Experience */}
      <div className={`${styles.paddingX} mt-8`}>
        <h2
          className="mb-6 text-xl font-sans text-start sm:mb-10 text-[#00487C]"
          data-aos='fade-right' data-aos-delay='100'
        >
          About Experience:
        </h2>
        <div className="flex items-center justify-between" data-aos='fade-left' data-aos-delay='100'>
          <textarea
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your experience..."
          ></textarea>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="flex items-center px-4 py-2 text-white bg-[#00487C] rounded-lg hover:bg-[#3c6889] focus:outline-none"
            data-aos='zoom-in' data-aos-delay='300'
          >
            Register
            <img src={ArrowRightImg} alt="" className="ml-2" />
          </button>
        </div>

      </div>

    </motion.div>
  );
};

export default PersonalInfo;
