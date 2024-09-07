"use client";
import React from 'react';
import Image from 'next/image';  
import book from '../../assets/book.png';  
import pc from '../../assets/pc.png';      
import card from '../../assets/card.png';  
import finance from '../../assets/finance.png';  

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 via-white to-purple-500 flex flex-col items-center px-4" id="about">
      <div className="p-8 bg-white shadow-lg rounded-lg border border-gray-300 w-full max-w-screen-xl mt-10">
        <h1 className="text-purple-600 text-6xl w-full mx-auto font-semibold p-4 mb-8 text-center border-b-4 border-blue-500">
          About <span className="text-blue-500">Yoom</span>
        </h1>
        
        <div className="grid grid-cols-8 bg-gradient-to-r from-blue-200 via-white to-purple-200 gap-8 p-6 rounded-lg shadow-lg place-items-center w-full">

          <div className="w-full col-span-5 relative bg-white backdrop-blur-md border border-blue-200 rounded-xl overflow-hidden animate-background">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-800 opacity-80"></div>
            <div className="flex flex-row p-6 relative z-10">
              <Image src={book} alt="book" className="w-auto h-[138px]" />
              <div className="flex flex-col mt-4 ml-4">
                <h2 className="text-2xl font-bold text-white">Learning Resources</h2>
                <p className="text-lg text-white/80">Explore various learning materials to enhance your knowledge.</p>
              </div>
            </div> 
          </div>

          <div className="w-full col-span-3 relative bg-white backdrop-blur-md border border-purple-200 rounded-xl overflow-hidden animate-background">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-800 opacity-80"></div>
            <div className="flex flex-row p-6 relative z-10">
              <Image src={pc} alt="pc" className="w-auto h-[138px]" />
              <div className="flex flex-col mt-4 ml-4">
                <h2 className="text-2xl font-bold text-white">Tech Solutions</h2>
                <p className="text-lg text-white/80">Innovative solutions to tech challenges.</p>
              </div>
            </div> 
          </div>

          <div className="w-full col-span-3 relative bg-white backdrop-blur-md border border-blue-200 rounded-xl overflow-hidden animate-background">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-800 opacity-80"></div>
            <div className="flex flex-row p-6 relative z-10">
              <Image src={card} alt="card" className="w-auto h-[138px]" />
              <div className="flex flex-col mt-4 ml-4">
                <h2 className="text-2xl font-bold text-white">Financial Tools</h2>
                <p className="text-lg text-white/80">Manage your finances with our state-of-the-art tools.</p>
              </div>
            </div> 
          </div>

          <div className="w-full col-span-5 relative bg-white backdrop-blur-md border border-purple-200 rounded-xl overflow-hidden animate-background">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-800 opacity-80"></div>
            <div className="flex flex-row p-6 relative z-10">
              <Image src={finance} alt="finance" className="w-auto h-[138px]" />
              <div className="flex flex-col mt-4 ml-4">
                <h2 className="text-2xl font-bold text-white">Investment Plans</h2>
                <p className="text-lg text-white/80">Choose the right investment plan for your future.</p>
              </div>
            </div> 
          </div>

        </div>
      </div> 
    </div> 
  )
}

export default About;
