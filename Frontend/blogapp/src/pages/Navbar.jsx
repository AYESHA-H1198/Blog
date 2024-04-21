// Header.js
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="top-0 w-full h-20 shadow-md z-[100] bg-white">
        <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
          <Link to='/'>
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/blogger-icon.png"
              alt=""
              width={100}
              height={100}
              className="w-16 h-16"
            />
          </Link>
          <div>
            <ul className="hidden md:flex items-center">
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <NavLink to='/' activeClassName="border-b border-gray">Home</NavLink>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <NavLink to='/about' activeClassName="border-b border-gray">About</NavLink>
              </li>
              <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                <NavLink to='/articles' activeClassName="border-b border-gray">Articles</NavLink>
              </li>
            </ul>
            <div onClick={handleNav} className="md:hidden">
              <AiOutlineMenu size="20" />
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div
          className={`${
            nav
              ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
              : ''
          }`}
        >
          <div
            className={`${
              nav
                ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
                : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }`}
          >
            <div className="flex w-full items-center justify-between">
              <Link to='/' onClick={closeNav}>
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/blogger-icon.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-16 h-16"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <li className="py-4"><NavLink to='/' onClick={closeNav}>Home</NavLink></li>
                <li className="py-4"><NavLink to='/about' onClick={closeNav}>About</NavLink></li>
                <li className="py-4"><NavLink to='/articles' onClick={closeNav}>Articles</NavLink></li>
              </ul>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
