import React from 'react';
import blog from '../Assets/blog.jpg';

const Home = () => {
  return (
    <div className='bg-black h-screen flex justify-center items-center'>
      <div
        className="bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url(${blog})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
         
        </div>
      </div>
    </div>
  );
};

export default Home;

