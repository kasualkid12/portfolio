import React, { useState, useEffect, useRef } from 'react';
import '../Styles/Testamonials.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonialsData = [
  {
    id: 1,
    name: 'Ching-Yuan Lai',
    role: 'Software Engineer',
    photo: 'https://via.placeholder.com/100',
    testimonial:
      "Trey is a critical thinker and a super genius full-stack engineer. His ability to analyze complex problems and devise effective solutions is unparalleled. Trey's proficiency in both front-end and back-end development allows him to seamlessly integrate diverse technologies, creating robust and efficient systems. Beyond his technical skills, he is a collaborative team player who brings out the best in his colleagues, fostering an environment of learning and growth. His proactive approach to tackling challenges and his commitment to continuous improvement make him an asset to any organization. Trey consistently goes above and beyond, ensuring project success while pushing the boundaries of what's technically possible.",
  },
  {
    id: 2,
    name: 'Steve Lemlek',
    role: 'Software Engineer',
    photo: 'https://via.placeholder.com/100',
    testimonial:
      "Trey is an outstanding software engineer and leader. He played a pivotal role in our project, where he created a robust testing framework and CI/CD pipeline, ensuring the high quality and efficiency of our product development. As our team leader, Trey consistently kept us on track and focused on our goals. His ability to navigate complex challenges and maintain a clear sense of direction was invaluable. In addition, Trey's expertise was crucial in architecting our containerized SQL database, which greatly enhanced our data management capabilities. Trey's contributions to our team were instrumental, and I highly recommend him for any project. He's a talented engineer and a natural leader who brings excellence to every aspect of his work.",
  },
  {
    id: 3,
    name: 'William Reilly',
    role: 'Software Engineer',
    photo: 'https://via.placeholder.com/100',
    testimonial:
      "Paul's exceptional skills as a team member had a profound impact on our project, especially in the realms of CI/CD and containerized database management. His dedication and expertise were invaluable in keeping us motivated and on track to meet deadlines. As a critical contributor and a great leader within our team, Paul's expertise in streamlining development processes through effective CI/CD practices played a crucial role in enhancing our project's efficiency and scalability. His knowledge and experience in containerization technologies allowed us to establish a robust and flexible database infrastructure, leading to improved resource utilization and simplified deployment.",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null); // To track the previous testimonial
  const [direction, setDirection] = useState('left'); // 'left' or 'right'
  const length = testimonialsData.length;

  const slideInterval = useRef(null);

  useEffect(() => {
    startSlideTimer();

    return () => {
      pauseSlideTimer();
    };
  }, [current, length]);

  const startSlideTimer = () => {
    pauseSlideTimer(); // Clear any existing intervals
    slideInterval.current = setInterval(() => {
      handleNext();
    }, 5000); // Change testimonial every 5 seconds
  };

  const pauseSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  const handleNext = () => {
    setDirection('left');
    setPrev(current);
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const handlePrev = () => {
    setDirection('right');
    setPrev(current);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Helper to determine the slide classes
  const getSlideClass = (index) => {
    if (index === current) {
      return `testimonial active slide-in-${direction}`;
    }
    if (index === prev) {
      return `testimonial slide-out-${direction}`;
    }
    return 'testimonial';
  };

  return (
    <div
      className="testimonials-container"
      onMouseEnter={pauseSlideTimer} // Pause on hover
      onMouseLeave={startSlideTimer} // Resume on mouse leave
    >
      {testimonialsData.map((testimonial, index) => (
        <div key={testimonial.id} className={getSlideClass(index)}>
          {(index === current || index === prev) && (
            <div className="testimonial-content">
              <img
                src={testimonial.photo}
                alt={`${testimonial.name}'s photo`}
                className="testimonial-photo"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-text">"{testimonial.testimonial}"</p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        className="nav-button prev"
        onClick={handlePrev}
        aria-label="Previous Testimonial"
      >
        <FaArrowLeft />
      </button>
      <button
        className="nav-button next"
        onClick={handleNext}
        aria-label="Next Testimonial"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Testimonials;
