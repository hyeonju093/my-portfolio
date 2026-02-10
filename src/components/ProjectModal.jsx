import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ isOpen, project, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>&times;</button>

                <div className="modal-image-wrapper">
                    <img src={project.image} alt={project.title} />
                </div>

                <div className="modal-body">
                    <h2 className="modal-title">{project.title}</h2>

                    <div className="modal-tech-stack">
                        {project.techStack && project.techStack.map((tech, index) => (
                            <span key={index} className="tech-badge">{tech}</span>
                        ))}
                    </div>

                    <p className="modal-desc">{project.detailDescription}</p>

                    <div className="modal-footer">
                        <a href={project.link} target='_blank' rel="noreferrer" className="modal-github-btn">
                            Github 바로가기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;