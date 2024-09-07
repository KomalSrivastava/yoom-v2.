import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'Lead Developer',
    image: '/images/fruits.jpg',
    linkedin: 'https://www.linkedin.com/in/alicejohnson',
    github: 'https://github.com/alicejohnson',
    twitter: 'https://twitter.com/alicejohnson',
    profile: '#alice-johnson-profile',
  },
  {
    name: 'Bob Smith',
    role: 'Frontend Developer',
    image: '/images/fruits.jpg',
    linkedin: 'https://www.linkedin.com/in/bobsmith',
    github: 'https://github.com/bobsmith',
    twitter: 'https://twitter.com/bobsmith',
    profile: '#bob-smith-profile',
  },
  {
    name: 'Charlie Brown',
    role: 'Backend Developer',
    image: '/images/fruits.jpg',
    linkedin: 'https://www.linkedin.com/in/charliebrown',
    github: 'https://github.com/charliebrown',
    twitter: 'https://twitter.com/charliebrown',
    profile: '#charlie-brown-profile',
  },
  {
    name: 'Dana White',
    role: 'UI/UX Designer',
    image: '/images/fruits.jpg',
    linkedin: 'https://www.linkedin.com/in/danawhite',
    github: 'https://github.com/danawhite',
    twitter: 'https://twitter.com/danawhite',
    profile: '#dana-white-profile',
  },
];

const TeamPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-700">Get to know the talented individuals behind our project.</p>
      </header>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <a
            href={member.profile}
            key={member.name}
            className="w-full group"
          >
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform group-hover:scale-105">
              <Image
                src={member.image}
                alt={member.name}
                width={500}  // Ensure the width and height are consistent
                height={400}
                layout="responsive" // Use responsive layout
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-90 flex flex-col items-center justify-center transition-opacity duration-300 ease-in-out p-6">
                <h2 className="text-white text-xl font-semibold mb-2 transition-transform transform group-hover:translate-y-[-5px]">
                  {member.name}
                </h2>
                <p className="text-white text-lg mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-300"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-300"
                    >
                      <FaTwitter className="text-xl" />
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
