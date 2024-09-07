import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Shivam',
    role: 'Lead Developer',
    image: '/images/Shivam.jpg',
    linkedin: 'https://www.linkedin.com/in/alicejohnson',
    github: 'https://github.com/alicejohnson',
    twitter: 'https://twitter.com/alicejohnson',
    profile: '#alice-johnson-profile',
  },
  {
    name: 'Shivansh',
    role: 'Ai/Ml',
    image: '/images/shivansh.jpg',
    linkedin: 'https://www.linkedin.com/in/bobsmith',
    github: 'https://github.com/bobsmith',
    twitter: 'https://twitter.com/bobsmith',
    profile: '#bob-smith-profile',
  },
  {
    name: 'Vansh',
    role: 'Backend Developer',
    image: '/images/vansh.jpg',
    linkedin: 'https://www.linkedin.com/in/charliebrown',
    github: 'https://github.com/charliebrown',
    twitter: 'https://twitter.com/charliebrown',
    profile: '#charlie-brown-profile',
  },
  {
    name: 'Komal',
    role: 'Frontend Developer',
    image: '/images/Komal.jpg',
    linkedin: 'https://www.linkedin.com/in/danawhite',
    github: 'https://github.com/danawhite',
    twitter: 'https://twitter.com/danawhite',
    profile: '#dana-white-profile',
  },
];

const TeamPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 flex flex-col items-center">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-700">Get to know the talented individuals behind our project.</p>
      </header>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {teamMembers.map((member) => (
          <a
            href={member.profile}
            key={member.name}
            className="w-full max-w-xs mx-auto group"
          >
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform group-hover:scale-105 h-96"> {/* Increased height */}
              <Image
                src={member.image}
                alt={member.name}
                width={400}  // Adjusted width
                height={400} // Increased height
                layout="responsive"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gray-600 opacity-0 group-hover:opacity-90 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out p-4">
                <h2 className="text-white text-lg font-semibold mb-1 transition-transform transform group-hover:translate-y-[-5px]">
                  {member.name}
                </h2>
                <p className="text-white text-sm mb-2">{member.role}</p>
                <div className="flex space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-300"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-300"
                    >
                      <FaTwitter className="text-lg" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
