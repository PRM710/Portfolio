import React, { useState } from 'react';
import { Modal, Box } from '@mui/material';
import '../styles/Projects.css';

function Projects() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectData = [
    {
      title: 'PRM-PIZZA-COMPLEX',
      images: ['/PizzaComplex.png', '/pizza2.png', '/pizza3.png'],
      description: 'This is a project about a pizza ordering system.',
    },
    {
      title: 'Mega Man Game',
      images: ['/news1.jpeg', '/news2.jpeg', '/news3.jpeg'],
      description: 'This project is based on a Mega Man game.',
    },
    {
      title: 'Mario-Themed Game',
      images: ['/PizzaComplex.png', '/PizzaComplex.png', '/PizzaComplex.png'],
      description: 'A project featuring a Mario-themed game.',
    },
  ];

  const handleImageClick = (image) => {
    setZoomedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setZoomedImage(null);
  };

  return (
    <div className="box2">
      {projectData.map((project, index) => (
        <div key={index} className={`project-row-new ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="project-block-new">
            <img src="/fire.gif" alt="Decorative effect" className="containerimg" />
            <h3>{project.title}</h3>
            <div className="image-row-new">
              {project.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Screenshot of ${project.title}`}
                  className="project-image-new"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
          <p className="project-description-new">{project.description}</p>
        </div>
      ))}

      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        className="modal"
        aria-labelledby="zoomed-image-modal"
        aria-describedby="Displays the zoomed version of the selected project image"
      >
        <Box className="modal-box">
          {zoomedImage && (
            <img src={zoomedImage} alt="Zoomed project view" className="zoomed-image" />
          )}
        </Box>
      </Modal>
      <img src="/nightforest.png" alt="Forest backdrop" className="bottom-image-proj" />
    </div>
  );
}

export default Projects;
