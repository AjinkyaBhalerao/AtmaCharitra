import React, { useState } from 'react';
import Modal from 'react-modal';
import './Projects.css';

const Projects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-item" onClick={openModal}>
        <h3>Chatbot Development and Deployment</h3>
        <p>Implemented sentence transformers language models...</p>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Chatbot Development and Deployment</h2>
        <p>Detailed project description...</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Projects;
