import React, { useState } from 'react';
import { Card, CardContent, Typography, Modal, Box } from '@mui/material';
import '../styles/Projects.css';

function Projects() {
  const [projectData] = useState([
    {
      title: 'Zelda',
      description: 'This is a very long description of Project 1 that goes beyond 100 characters to make sure the Read More and Show Less functionality is triggered correctly. It should show the full description when clicked.',
      img: '/PizzaComplex.png',
      outputImages: ['/zelda1.png', '/zelda2.png', '/zelda3.png'], // Add output images for Zelda
    },
    {
      title: 'Megaman',
      description: 'Another long description for Project 2, providing enough text so that it exceeds the limit and triggers the Read More button. This project involves working with modern web technologies and design principles.',
      gif: '/megaman.gif',
      outputImages: ['/megaman1.png', '/megaman2.png', '/megaman3.png'], // Add output images for Megaman
    },
    {
      title: 'Super Mario Bros',
      description: 'A detailed description for Project 3 that includes various technologies and use cases. This description is also long enough to trigger the Read More and Show Less functionality, ensuring the toggle works properly.',
      gif: '/5S5q.gif',
      outputImages: ['/mario1.png', '/mario2.png', '/mario3.png'], // Add output images for Mario
    },
  ]);

  const [expandedIndex, setExpandedIndex] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null); // To handle zoomed image
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility

  const handleExpandToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // Collapse if already expanded
    } else {
      setExpandedIndex(index); // Expand the current card
    }
  };

  const handleImageClick = (image) => {
    setZoomedImage(image); // Set the clicked image to zoom
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setZoomedImage(null); // Clear the zoomed image
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
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {/* Modal to display zoomed image */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        className="modal"
      >
        <Box className="modal-box">
          {zoomedImage && (
            <img src={zoomedImage} alt="Zoomed" className="zoomed-image" />
          )}
        </Box>
      </Modal>
    </div>
  );
}

function ExpandableCard({ project, isExpanded, onToggle, onImageClick }) {
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

        {/* Conditionally render output images when card is expanded */}
        {isExpanded && (
          <div className="output-images">
            {project.outputImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Output ${index + 1}`}
                className="output-image"
                onClick={() => onImageClick(image)} // Click handler for zooming
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default Projects;
