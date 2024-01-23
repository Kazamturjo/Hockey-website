import React, { useState } from 'react';
// import imgNav from '../../assets/Group 40071 (2).png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex items-center justify-between bg-transparent sm:h-32 p-4 md:p-6'>
      <div className='flex items-center'>
        {/* <img
          src={imgNav}
          alt='nav'
          className='w-12 h-12 object-contain mr-3'
        /> */}
        <p className='text-base-color text-3xl font-mulish font-extrabold'>
          <span>Hockey</span>
          <span className='text-orange-500  text-2xl '>
            {' '}
            '
          </span>
          s
        </p>
      </div>
      <div className='sm:hidden '>
        <button
          onClick={toggleMenu}
          className='text-black focus:outline-none '
        >
          {isMenuOpen ? (
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
          ) : (
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden mt-2 bg-white text-black p-4 absolute top-20 rounded left-10 z-10 cursor-pointer`}
      >
        <p className='mb-2 hover:text-orange-500'>Home</p>
        <p className='mb-2 hover:text-orange-500'>About</p>
        <p className='mb-2 hover:text-orange-500'>Pages</p>
        <p className='mb-2 hover:text-orange-500'>Blog</p>
        <p className='hover:text-orange-500'>Contact</p>
      </div>
      <div className='hidden md:flex items-center gap-x-11 '>
        <p className='hover:text-orange-500 cursor-pointer'>Home</p>
        <p className='hover:text-orange-500 cursor-pointer'>About</p>
        <p className='hover:text-orange-500 cursor-pointer'>Pages</p>
        <p className='hover:text-orange-500 cursor-pointer'>Blog</p>
        <p className='hover:text-orange-500 cursor-pointer'>Contact</p>
      </div>

      <div className='flex gap-4 items-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

       <div className='bg-red-600 w-24 h-11 text-center rounded-xl '>
           <p className=' mt-2  text-white font-bold hover:bg-red-900 cursor-pointer'>Get ticket</p>
       </div>
      </div>
    </div>
  );
};

export default Navbar;