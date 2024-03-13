import React, { useEffect } from 'react';
import '../Styles/Projects.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS is imported

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Project One',
    description:
      'Brief description of Project One. Highlighting key features and technologies used.',
    imageUrl: '/stock-image.jpg',
    direction: 'fade-right',
    projectUrl: '',
  },
  {
    id: 2,
    title: 'Project Two',
    description:
      'Overview of Project Two, showcasing the challenges faced and solutions provided.',
    imageUrl: '/stock-image.jpg',
    direction: 'fade-left',
    projectUrl: '',
  },
  {
    id: 3,
    title: 'Project Three',
    description:
      'Summary of Project Three, focusing on its impact and the skills honed during development.',
    imageUrl: '/stock-image.jpg',
    direction: 'fade-right',
    projectUrl: '',
  },
];

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const handleProjectClick = (url) => {
    // Simple redirect to project URL
    window.location.href = url;
  };

  return (
    <section
      id="projects"
      className="projects-container"
      style={{ backgroundImage: `url(/slanted-gradient-reversed.svg)` }}
    >
      <h2 className="title">Check Out My Work</h2>
      {projects.map((project) => (
        <div
          key={project.id}
          className="project"
          data-aos={project.direction}
          onClick={() => handleProjectClick(project.projectUrl)}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="project-image"
          />
          <div className="project-description">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
