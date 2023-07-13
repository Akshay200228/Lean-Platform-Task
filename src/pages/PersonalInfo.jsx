import React, { useState } from 'react';
import styles from '../style';
import { form } from '../assets';

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
    <div className={`${styles.paddingY} ${styles.paddingX} mt-14 sm:mt-24`}>
      <h2 className="mb-6 text-2xl font-bold text-center sm:mb-10">Personal Information</h2>
      <div className={`flex flex-col lg:flex-row h-full`}>
        {/* Left side - Profile Image Upload */}
        <div className="flex items-center justify-center lg:w-1/2">
          <label htmlFor="image-upload" className="relative text-[#00487C]">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="object-cover shadow-2xl mb-4 sm:mb-0 w-72 h-72 sm:w-[522px] sm:h-[430px] rounded-3xl cursor-pointer"
              />
            ) : (
              <div className="flex items-center justify-center w-72 h-72 mb-4 sm:mb-0 sm:w-[422px] sm:h-[430px] rounded-3xl bg-gray-200 cursor-pointer">
                <img
                  src={form}
                  className="w-72 h-72 sm:w-[522px] sm:h-[430px] shadow-2xl"
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
              <div className="flex mb-4">
                <div className="mr-2">
                  <label htmlFor="category" className="text-gray-800">Category</label>
                  <select
                    id="category"
                    className="w-32 sm:w-[200px] p-3 border border-gray-300 rounded-lg focus:outline-none"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="subcategory" className="text-gray-800">Sub Category</label>
                  <select
                    id="subcategory"
                    className="w-32 sm:w-[200px] p-3 border border-gray-300 rounded-lg focus:outline-none"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    required
                  >
                    <option value="">Select Sub Category</option>
                    <option value="subCategory1">Sub Category 1</option>
                    <option value="subCategory2">Sub Category 2</option>
                    <option value="subCategory3">Sub Category 3</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
