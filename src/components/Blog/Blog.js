import React from 'react';
import img1 from '../../assets/11.png';
//Clients Question pagess
const Blog = () => {
  return (
    <div>
      <div className="text-center mt-10 border-dashed border border-gray-300">
        <h2 className="sm:text-4xl text-2xl font-bold mt-2">Clients Question</h2>
        <p className="text-gray-500 mt-2 sm:text-lg  text-sm">
          Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis
          placerat dolor.
          <br /> Purus urna in sit nullam proin.{' '}
        </p>
      </div>
      <div className="sm:flex border mt-9">
        <img src={img1} alt="1" className="p-4" />
        <div className='sm:m-0 m-4'>
          <div className="mt-6 p-3">
            <h2 className='text-xl font-bold '>Our Equipment</h2>
            <br/>
            <p className='flex sm:gap-96 text-gray-500'>Dolor sit amet consectetur. Ut urna diam quis sagittis.
            <br /> Elit elit enim sagittis turpis in magna.
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </div>
              </p>
          </div>
          <hr />
          <p className="text-xl font-bold flex justify-between p-3">
            Hockey Training
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </p>
          <hr />
          <p className='text-xl font-bold flex justify-between p-3'>
            Private Lessons
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </p>
          
          <hr/>
          <p className='text-xl font-bold flex justify-between p-3'>
          Ski Touring
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </p>
          <hr/>
          <p className='text-xl font-bold flex justify-between p-3'>
          Booking
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </p>
          <hr/>
          <p className='text-xl font-bold flex justify-between p-3'>
          Pricings
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </p>
          <hr/>
          
        </div>
      </div>
    </div>
  );
};

export default Blog;
