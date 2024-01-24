import React from 'react';
import img1 from '../../assets/5.png';
import img2 from '../../assets/6.png';
import img3 from '../../assets/7.png';
import img4 from '../../assets/8.png';
import img5 from '../../assets/9.png';
import img6 from '../../assets/10.png';

const Product = () => {
  return (
    <div className="mt-16">
      <div className="text-center border-dotted border border-gray-300 space-y-5">
        <h2 className="sm:text-4xl text-2xl font-bold mt-6">Our New Products</h2>
        <p className="text-gray-500 p-5 sm:text-lg text-sm">
          Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis
          placerat <br /> dolor. Purus urna in sit nullam proin.{' '}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 cursor-pointer xl:grid-cols-2 gap-5 m-4 sm:m-4 ">
        {[img1, img2, img3, img4, img5, img6].map((img, index) => (
          <div
            key={index}
            className="border mt-8 sm:flex md: items-center sm:w-full rounded-lg"
          >
            <div className="w-full sm:w-auto ">
              <img
                src={img}
                alt={`Product ${index + 1}`}
                className="mx-auto sm:mx-0 p-4 w-full"
              />
            </div>
            <div className="pl-4 ">
              <div className="flex gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>5.00</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <p>20</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <p>200</p>
              </div>
              <h2 className="text-lg font-bold mt-2">World Cup Flags Football</h2>
              <p className="text-gray-500 mt-2">
                Dolor sit amet consectetur. Ut urna diam quis sagittis.{' '}
              </p>
              <p className="text-red-500 font-bold mt-2 flex gap-2">Price: $22.00 
              <div className='flex gap-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-500">
              
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
<p className='text-gray-500'>Delivery fee: Free</p>
</div> </p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Product;
