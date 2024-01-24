import React from 'react';
import img1 from '../../assets/2.png';
import img2 from '../../assets/3.png';
import img3 from '../../assets/4.png';

const Page = () => {
    //Program Sections:.............//
  return (
    <div className='mt-6'>
      <div className="space-y-5">
        <div className="text-center border-dashed border border-gray-300 sm:space-y-">
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            Program Sections
          </h2>
          <p className="text-gray-500 mt-6 sm:text-lg text-sm sm:p-5">
            Dit amet consectetur. Condimentum dignissim adipiscing aliquam
            turpis placerat dolor.
            <br /> Purus urna in sit nullam proin.
          </p>
        </div>
        <div className="grid sm:grid-cols-2   gap-6 sm:m-0 m-4 ">
          <div className="text-white relative">
            <div className="absolute inset-0  bg-black opacity-50 rounded-2xl"></div>
            <img src={img1} alt="1" className="w-full" />

            <div className=" absolute sm:top-20 top-0 m-4 p-4">
              <h2 className="text-xl sm:text-4xl font-bold">Junior Program</h2>
              <p className="sm:text-lg text-sm hidden sm:block sm:mt-4">
                Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit
                elit
                <br />
                enim sagittis turpis in magna. Id et sed euismod natoque
                <br />
                amet nunc morbi nulla.
                <br /> Tortor congue sed et in.
              </p>
              <p className="sm:text-lg text-sm block sm:hidden mt-4">
                Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit
                elit
              </p>
              <p className="bg-red-500 w-32 p-2 rounded-lg hover:bg-red-400 cursor-pointer text-white font-bold mt-4">
                Register Now!
              </p>
            </div>
          </div>

          <div className="relative text-white">
            <div className="absolute inset-0  bg-black opacity-50 rounded-2xl"></div>

            <img src={img2} alt="1" className="w-full" />
            <div className=" absolute sm:top-20 top-0 m-4 p-4">
              <h2 className="text-xl sm:text-4xl font-bold">
                Teenager Program
              </h2>
              <p className="sm:text-lg text-sm hidden sm:block sm:mt-4">
                Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit
                elit
                <br />
                enim sagittis turpis in magna. Id et sed euismod natoque
                <br />
                amet nunc morbi nulla.
                <br /> Tortor congue sed et in.
              </p>
              <p className="sm:text-lg text-sm block sm:hidden mt-4 ">
                Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit
                elit
              </p>
              <p className="bg-red-500 w-32 p-2 rounded-lg hover:bg-red-400 cursor-pointer text-white font-bold mt-4">
                Register Now!
              </p>
            </div>
          </div>
        </div>

        <div className=" relative sm:m-0 m-4 h-[180px]sm:h-auto">
        <div className="absolute inset-0  bg-black opacity-50 rounded-2xl"></div>

          <img src={img3} alt="3" className="w-full object-cover h-[180px] sm:h-auto rounded-xl " />
          <div className=" absolute sm:top-60 top-0 m-4 sm:p-11 p-4 text-white ">
              <h2 className="text-xl sm:text-4xl font-bold">
              Professional Program              </h2>
              <p className="sm:text-lg text-sm hidden sm:block sm:mt-4">
                Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit
                elit
                <br />
                enim sagittis turpis in magna. Id et sed euismod natoque
                <br />
                amet nunc morbi nulla.
                <br /> Tortor congue sed et in.
              </p>
              <p className="sm:text-lg text-sm block sm:hidden mt-4 ">
                Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit
                elit
              </p>
              <p className="bg-red-500 w-32 p-2 rounded-lg hover:bg-red-400 cursor-pointer text-white font-bold sm:mt-4 mt-2">
                Register Now!
              </p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Page;
