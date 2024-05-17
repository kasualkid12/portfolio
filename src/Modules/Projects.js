import React, { useEffect } from 'react';
import '../Styles/Projects.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS is imported

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Kubby Buddy',
    description:
      'Kubby Buddy is your container management pal, allowing you to view, start, stop, and delete your containers. I built out the CI/CD of the app utilizing Husky and CircleCI, while using Jest to build out the tests.',
    imageUrl: '/Kubby-Buddy.webp',
    direction: 'fade-right',
    projectUrl: 'https://www.kubbybuddy.com',
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

  return (
    <section
      id="projects"
      className="projects"
      style={{ backgroundImage: `url(/slanted-gradient-reversed.svg)` }}
    >
      <h2 className="title">Check Out My Work</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <a
            href={project.projectUrl ? project.projectUrl : undefined}
            key={project.id}
            className="project"
            data-aos={project.direction}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security measure for opening links in a new tab
            style={{ textDecoration: 'none', color: 'inherit' }} // Removes default link styling
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
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
