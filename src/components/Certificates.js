import React from 'react';
import '../styles/certificates.css';

export default function Certificates() {
  const projects = [
    {
      img: '/blockchainbasics.png', // Replace with your project image path
      title:'Blockchain Basics',
      description: 'I completed a certification course on blockchain basics, where I gained foundational knowledge about blockchain technology, its principles, and applications. The course covered topics such as decentralized networks, smart contracts, and cryptocurrency fundamentals, equipping me with essential skills to understand and engage with this transformative technology.',
    },
    {
      img: '/JavaCerti.png', // Replace with your project image path
      title: 'Java',
      description: 'I completed a certification course on Java, where I learned the fundamentals of object-oriented programming and software development. The course covered key concepts such as classes, inheritance, polymorphism, and exception handling. This training provided me with a solid foundation to build robust applications and enhance my programming skills.',
    },
    {
      img: '/SQLcerti.png', // Replace with your project image path
      title: 'SQL',
      description: 'I completed a certification course on SQL, where I learned the fundamentals of database management and data manipulation. The course covered essential topics such as querying databases, data retrieval, and basic database design. This training equipped me with the skills to efficiently manage and analyze data using SQL.',
    },
    {
      img: '/TataCrucible.png', // Replace with your project image path
      title: 'Tata Crucible',
      description: 'I participated in the Tata Crucible quiz, a prestigious national-level business quiz competition. This experience challenged my knowledge and critical thinking skills across various subjects, including business, current affairs, and general knowledge. Engaging in this competitive environment enhanced my analytical abilities and allowed me to connect with fellow quiz enthusiasts.',
    },
    // Add more projects as needed
  ];

  return (
    <div className="box1">
      {projects.map((project, index) => (
        <div className={`project-container ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <img src={project.img} alt={project.title} className="project-image" />
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
      <img src="/certiback.jpg" className="bottom-image" alt="Decorative Background" />
    </div>
  );
}
