import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const WritingPage = () => {
  const [content, setContent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic for saving content
    console.log('Content:', content);
    setSubmitted(true); // Set submitted state to true on form submission
  };

  return (
    <div className='bg-black text-white min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-PlayfairDisplay text-center mb-8'>Start Writing</h1>
      <form onSubmit={handleSubmit} className='w-full max-w-lg'>
        <textarea
          value={content}
          onChange={handleInputChange}
          className='w-full h-60 bg-gray-800 text-white p-4 rounded mb-6'
          placeholder='Write your content here...'
          required
        ></textarea>
        <div className='flex justify-center'>
          <button type='submit' className='text-xl text-white border-b border-t border-white h-12 px-6 rounded'>
            Save Content <FaArrowRight className='ml-2' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default WritingPage;





