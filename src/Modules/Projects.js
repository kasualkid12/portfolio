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
      'Kubby Buddy is your container management pal, allowing you to view, start, stop, and delete your containers. I developed the CI/CD pipeline with Husky and CircleCI and implemented testing with Jest',
    imageUrl: '/Kubby-Buddy.webp',
    projectUrl: 'https://www.kubbybuddy.com',
  },
  // {
  //   id: 2,
  //   title: 'Project Three',
  //   description:
  //     'Summary of Project Three, focusing on its impact and the skills honed during development.',
  //   imageUrl: '/stock-image.jpg',
  //   projectUrl: '',
  // },
  {
    id: 3,
    title: 'Study With Me',
    description:
      'Study with Me is a project designed to provide users with a personalized study dashboard. I focused extensively on developing the backend and database using Express.js and MongoDB, ensuring robust user customization',
    imageUrl:
      'https://raw.githubusercontent.com/PFA-Crew/Study-With-Me/dev/assets/Dec-06-2023%2011-13-25.gif',
    projectUrl: 'https://github.com/PFA-Crew/Study-With-Me',
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
        {projects.map((project, i) => (
          <a
            href={project.projectUrl ? project.projectUrl : undefined}
            key={project.id}
            className="project"
            data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
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
