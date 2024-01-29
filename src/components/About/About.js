import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'tailwindcss/tailwind.css';

const About = () => {
  const [percentages, setPercentages] = useState([90, 80, 83, 95]);

  useEffect(() => {
    // Remove the interval logic as we don't need to increment percentages
    // const interval = setInterval(() => {
    //   setPercentages((prevPercentages) =>
    //     prevPercentages.map((percentage) =>
    //       percentage < 100 ? percentage + 1 : 100
    //     )
    //   );
    // }, 50);

    // Uncomment the line below if you still want to use the interval for some reason
    // return () => clearInterval(interval);
  }, []); // empty dependency array to run the effect only once

  const labels = [
    'Prayer Facility',
    'Experienced Coach',
    'Senior Player',
    'Training Ground',
  ];

  const labeltow = [
    'Amet consectetur. Condimentum dignissim adipiscing .',
    'Amet consectetur. Condimentum dignissim adipiscing .',
    'Amet consectetur. Condimentum dignissim adipiscing .',
    'Amet consectetur. Condimentum dignissim adipiscing .',
  ];

  return (
    <div className='mt-16'>
      <div>
        <div className='text-center border-dashed border border-gray-300 my-4 rounded-xl p-8'>
          <h2 className='sm:text-4xl text-xl font-bold my-8'>Professional Hockeys Club</h2>
          <p className='my-4 text-gray-500 sm:text-lg text-sm'>
            Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat
            
            <br /> Purus urna in sit nullam proin.
          </p>
        </div>
        <div>
          <div className='text-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {percentages.map((percentage, index) => (
                <div
                  key={index}
                  className='flex flex-col items-center lg:p-20 md:p-20 p-20 bg-white flex-auto rounded-lg'
                >
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathColor: index === 0 ? 'red' : index === 1 ? 'blue' : index === 2 ? 'green' : 'yellow',
                      textColor: '#000',
                      trailColor: '#ddd',
                    })}
                  />
                  <h2 className='mt-2 text-xl font-semibold'>{labels[index]}</h2>
                  <p className='mt-2 text-sm'>{labeltow[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
