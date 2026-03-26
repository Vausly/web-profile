import React from 'react';
import { Newspaper, Video, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: 'Vausly Post',
      description: 'I write a blog to spend my time and share important news and tutorials about game, tech, internet related, or anything else.',
      link: 'https://www.vausly.com'
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: 'Video Creator',
      description: 'Creating engaging & unique gaming content across <a href="https://bit.ly/VauslyCH">YouTube</a>, <a href="https://instagr.am/vausly">Instagram</a>, <a href="https://www.tiktok.com/@vauslyy">TikTok</a>, and <a href="https://fb.me/vausly">Facebook</a>.',
      link: 'https://link.vausly.com'
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: 'Minecraft In-Game Content & Modding',
      description: 'Creating a mods, maps, texture packs, & sharing seeds for Minecraft (discontinued since 2019). I will come back soon with something new. Check minecraft.vausly.com for more!',
      link: 'https://minecraft.vausly.com'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-6 rounded-xl hover:transform hover:scale-105 transition duration-300"
        >
          <div className="mb-4 text-purple-400">{project.icon}</div>
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p
          className="text-gray-300"
          dangerouslySetInnerHTML={{ __html: project.description }}
        ></p>
        </a>
      ))}
    </div>
  );
};

export default Projects;