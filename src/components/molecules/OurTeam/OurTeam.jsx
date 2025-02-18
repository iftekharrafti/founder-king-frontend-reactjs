import React from 'react';
import TeamMemberCard from '../../atoms/TeamMemberCard/TeamMemberCard';

const OurTeam = () => {
  const team = [
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
      name: 'John Smith',
      role: 'CEO & Founder',
      linkedIn: '#',
      twitter: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
      name: 'Sarah Johnson',
      role: 'CTO',
      linkedIn: '#',
      twitter: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
      name: 'Michael Chen',
      role: 'Head of Design',
      linkedIn: '#',
      twitter: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956',
      name: 'Emily Williams',
      role: 'Head of Marketing',
      linkedIn: '#',
      twitter: '#'
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 
      to-purple-600 bg-clip-text text-transparent">
        Meet Our Team
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default OurTeam;