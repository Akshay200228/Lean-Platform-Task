import React, { useState } from 'react';

const CategoryForm = ({ onSubmit }) => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(category, subCategory);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
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
        <label htmlFor="subCategory">Sub Category:</label>
        <select
          id="subCategory"
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default CategoryForm;
