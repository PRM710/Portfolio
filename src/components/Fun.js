import React, { useState } from 'react';
import Fun from './Fun'; // Importing the Fun component

function Projects() {
  const [projectData] = useState([
    {
      title: 'Zelda',
      description: 'This is a very long description of Project 1 that goes beyond 100 characters to make sure the Read More and Show Less functionality is triggered correctly. It should show the full description when clicked.',
      gif: '/6jdk.gif',
    },
    {
      title: 'Megaman',
      description: 'Another long description for Project 2, providing enough text so that it exceeds the limit and triggers the Read More button. This project involves working with modern web technologies and design principles.',
      gif: '/megaman.gif',
    },
    {
      title: 'Super Mario Bros',
      description: 'A detailed description for Project 3 that includes various technologies and use cases. This description is also long enough to trigger the Read More and Show Less functionality, ensuring the toggle works properly.',
      gif: '/5S5q.gif',
    },
  ]);

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleExpandToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the current card
    }
  };

  return (
    <div className="box2">
      <div className="card-container">
        {projectData.map((project, index) => (
          <ExpandableCard
            key={index}
            project={project}
            isExpanded={expandedIndex === index}
            onToggle={() => handleExpandToggle(index)}
          />
        ))}
      </div>
      <Fun /> {/* Adding the Fun component here */}
    </div>
  );
}

function ExpandableCard({ project, isExpanded, onToggle }) {
  return (
    <Card className="card" onClick={onToggle}>
      <img src={project.gif} alt={project.title} className="card-gif" />
      <CardContent>
        <Typography variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography
          variant="body2"
          className={`description ${isExpanded ? 'expanded' : ''}`}
        >
          {project.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Projects;
