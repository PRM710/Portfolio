import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import '../styles/Projects.css';

function Projects() {
  const [zoomedImage, setZoomedImage] = useState(null); // To handle zoomed image
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal visibility

  const projectData = [
    {
      title: 'PDF-QUERYING-SYSTEM',
      images: ['/ai1.png', '/ai2.png', '/ai3.png'],
      description: 'The application processes user questions by sending them to a backend server, which responds with answers extracted from the PDF content uploaded by user',
    },
    {
      title: 'PRM-PIZZA-COMPLEX',
      images: ['/PizzaComplex.png', '/pizza2.png', '/pizza3.png'],
      description: 'This is a simple frontend for a pizza website',
    },
    {
      title: 'News-portal',
      images: ['/news1.jpeg', '/news2.jpeg', '/news3.jpeg'],
      description: "This Website is for live updates about the ongoing news",
    },
    {
      title: 'Shopping Plaza',
      images: ['/web1.png', '/web2.png', '/web3.png'],
      description: 'A Basic shopping website',
    },
  ];

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
      {/* Project blocks with images and descriptions in zigzag format */}
      {projectData.map((project, index) => (
        <div key={index} className={`project-row-new ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="project-block-new">
            <img src="/fire.gif" alt="" className="containerimg" />
            <h3>{project.title}</h3> {/* Display project title */}
            <div className="image-row-new">
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Preview of ${project.title} - ${imgIndex + 1}`}
                  className="project-image-new"
                  onClick={() => handleImageClick(image)} // Handle image click for zooming
                />
              ))}
            </div>
          </div>
          <p className="project-description-new">{project.description}</p>
        </div>
      ))}

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
      <img src="/nightforest.png" alt="" className="bottom-image-proj" />
      <div className="more">*I DO HAVE MORE PROJECTS, I WILL UPLOAD SOON...*</div>
    </div>
  );
}

export default Projects;
