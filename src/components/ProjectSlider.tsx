'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";

interface Project {
    title: string;
    period: string;
    description: string;
    detailDescription: string;
    image: string;
    tags: string[];
    link: string;
}

interface ProjectSliderProps {
    projectList: Project[];
}

export default function ProjectSlider({ projectList }: ProjectSliderProps) {
    const [currentIdx, setCurrentIdx] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleViewMore = (project) => {
        setSelectedProject(project);
        setIsOpen(true);
    };

    const nextProject = () => {
        setCurrentIdx((prev) => (prev === projectList.length - 1 ? 0 : prev + 1));
    };

    const prevProject = () => {
        setCurrentIdx((prev) => (prev === 0 ? projectList.length - 1 : prev - 1));
    };

    return (
        <>
            <div className="project-slider">
                <button className="arrow prev" onClick={prevProject}>
                    &lt;
                </button>

                <div className="project-card">
                    <div className="project-image-container">
                        <Image
                        src={projectList[currentIdx].image}
                        alt={projectList[currentIdx].title}
                        width={600}
                        height={400}
                        className="project-image"
                        />
                    </div>

                    <div className="project-info">
                        <h4>{projectList[currentIdx].title}</h4>
                        <span className="project-period">
                            {projectList[currentIdx].period}
                        </span>
                        <p className="project-desc">
                            {projectList[currentIdx].description}
                        </p>
                        <div className="project-tags">
                            {projectList[currentIdx].tags.map((tag) => (
                                <span key={tag} className="project-tag">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                        <div className="button-group">
                            <button
                                className="btn-more"
                                onClick={() => handleViewMore(projectList[currentIdx])}
                            >
                                View More
                            </button>
                        </div>
                    </div>
                </div>

                <button className="arrow next" onClick={nextProject}>
                &gt;
                </button>
            </div>

            <ProjectModal
                isOpen={isOpen}
                project={selectedProject}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}