import React, { useState } from 'react';
import styles from '../style';
import { form } from '../assets';
import { Textarea } from '@material-tailwind/react';
// import { CategoryForm } from '../components';

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

  return (
    <div className={`${styles.paddingY} ${styles.paddingX} bg-gray-50  mt-14 sm:mt-24`}>
      <div className={`flex flex-col lg:flex-row h-full`}>
        {/* Left side - Profile Image Upload */}
        <div className="flex items-center justify-center lg:w-1/2">
          <label htmlFor="image-upload" className="relative text-[#00487C]">
            <h2 className="mb-6 text-2xl font-bold text-start sm:mb-10 text-[#00487C]">Personal Information :</h2>
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="object-cover shadow-2xl mb-4 sm:mb-0 w-72 h-72 sm:w-[522px] sm:h-[430px] rounded-3xl cursor-pointer"
              />
            ) : (
              <div className="flex items-center justify-center shadow-xl w-72 h-72 mb-4 sm:mb-0 sm:w-[522px] sm:h-[430px] rounded-3xl bg-gray-200 cursor-pointer">
                <img
                  src={form}
                  className="w-72 h-72 sm:w-[522px] sm:h-[430px] rounded-3xl"
                />
              </div>
            )}
            <p className='mt-4 mb-6 sm:mb-0 text-[#00487C]'>Upload Photo</p>
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
        <div className={`flex flex-col justify-center lg:w-1/2 ${styles.paddingX}`}>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="w-72 sm:w-[566px] p-3 border placeholder-[#00A896] border-[#00A896] rounded-lg focus:outline-none focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-72 sm:w-[566px] p-3 border placeholder-[#00A896] border-[#00A896] rounded-lg focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-72 sm:w-[566px] p-3 border placeholder-[#00A896] border-[#00A896] rounded-lg focus:outline-none focus:border-blue-500"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="date"
                  id="dob"
                  className="w-72 sm:w-[566px] p-3 border placeholder-[#00A896] border-[#00A896] rounded-lg focus:outline-none focus:border-blue-500"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
              </div>
              <hr />
            </form>
          </div>
        </div>
      </div>
      <hr className="my-8 border-t-2 border-gray-300" />
      {/* Areas of Expertise */}
      <div className={`${styles.paddingX} mt-10 sm:mt-24`}>
        <h2 className="mb-6 text-2xl font-bold text-start sm:mb-10 text-[#00487C]">Areas of Expertise :</h2>
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <select
              id="category"
              className="w-32 sm:w-[428px] p-3 border border-[#00A896] rounded-lg focus:outline-none"
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
          <div>
            <select
              id="subcategory"
              className="w-32 sm:w-[428px] p-3 border border-[#00A896] text-[#000000] rounded-lg focus:outline-none"
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
        <h2 className="mb-6 text-2xl font-bold text-start sm:mb-10 text-[#00487C]">Availability :</h2>
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <select
              id="category"
              className="w-32 sm:w-[428px] p-3 border border-[#00A896] rounded-lg focus:outline-none"
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
        <h2 className="mb-6 text-2xl font-bold text-start sm:mb-10 text-[#00487C]">About Experience:</h2>
        <div className="flex items-center justify-between">
          <div className="mr-2">
            <Textarea
              id="experience"
              className="w-[300px] h-32 sm:w-[1164px] sm:h-[228px] p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500 bg-white"
              placeholder="Enter your experience"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PersonalInfo;
