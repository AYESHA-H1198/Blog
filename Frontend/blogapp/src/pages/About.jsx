import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='bg-black text-white px-8 py-10'>
      <h1 className='text-5xl font-PlayfairDisplay text-center mb-4'>Everyone has a</h1>
      <h1 className='text-5xl text-center mb-12'>a story to tell.</h1>
      <p className='text-lg text-justify'>
        Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world - without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.
      </p>

      <p className='text-lg text-justify mt-6'>
        We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.
      </p>

      <p className='text-lg text-justify mt-6'>
        Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.
      </p>

      <p className='text-lg text-justify mt-6'>
        Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.
      </p>

      <p className='text-lg text-justify mt-6'>
        Instead of selling ads or selling your data, we’re supported by a growing community of . Dive deeper, into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar — and then
      </p>
                
      <p className='text-lg text-justify mt-6'>
        Share your story.
      </p>

      <div className='mt-10'>
      <Link to='/articles'>
  <button className='text-xl text-white border-b border-t border-white h-20 w-full flex items-center justify-center px-6 mb-4'>
    <span>Start Reading</span>
    <FaArrowRight />
  </button>
</Link>

<Link to='/writing'>
          <button className='text-xl text-white border-b border-t border-white h-20 w-full flex items-center justify-center px-6 mb-4'>
            <span>Start Writing</span>
            <FaArrowRight />
          </button>
        </Link>

        <button className='text-xl text-white border-b border-t border-white h-20 w-full flex items-center justify-center px-6 mb-4'>
          <span>Become A Member</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default About;

