import React, { useState } from 'react'
import img1 from '../../assets/1.png'
import img2 from '../../assets/pexels-lynda-sanchez-1770650.jpg'
import img3 from '../../assets/pexels-tony-schnagl-6468958.jpg'

const sldierData =[
    {
        src:img1,
    },
    {
        src:img2,
    },
    {
        src:img3
    }
]



const Hero = () => {
    const [currentCard,setCurrentCard]=useState(0)
    const nextCard=()=>{
        const newIndex=(currentCard +1)%sldierData.length;
        setCurrentCard(newIndex)
    }
    const prevCard =()=>{
        const  newIndex=(currentCard -1 + sldierData.length)%sldierData.length;
        setCurrentCard(newIndex)
    }
  
  return (
    <div className='sm:relative'>

   
    <div className='sm:m-0 m-4 relative'>
      <div >
        <img src={sldierData[currentCard].src} alt='' className='w-full object-cover sm:h-[700px] h-[300px] rounded-xl' />
      </div>
      <div className='flex gap-4 absolute bottom-9 sm:left-5 left-28 '>
      <div className='bg-black w-8 rounded-full text-center'>

      
      <button onClick={prevCard}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"className='text-white ' />
</svg>
</button>
</div>
<div className='bg-black w-8 rounded-full text-center'>


      <button onClick={nextCard}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"className='text-white ' />
</svg>
</button>
</div>
</div>

    </div>
    <div className='bg-black sm:m-0 m-4 text-white p-4 sm:w-1/3  rounded-xl sm:absolute bottom-10 sm:left-[950px]'>
    <h2 className='font-bold sm:text-xl '>Meet all the heroes from the field</h2>
    <p className='text-gray-400 mt-1 '>Dit amet consectetur. Condimentum dignissim adipiscing aliquam  turpis placerat dolor. Purus urna in sit nullam proin. </p>
</div>
</div>
  )
}

export default Hero