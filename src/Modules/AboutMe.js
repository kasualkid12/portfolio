import React, { useEffect } from 'react';
import '../Styles/AboutMe.scss';
import Aos from 'aos';
import 'aos/dist/aos.css'; // Import CSS for animations

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 }); // Initialize AOS
  }, []);

  return (
    <section id="about" className="about-me-container" style={{backgroundImage: `url(/slanted-gradient.svg)`}}>
      <h2 className='title'>Get to know me</h2>
      <div className="about-me-section left" data-aos="fade-right">
        <p>
          Hello! My name is Paul Walker, though you can call me Trey. I'm deeply
          engrossed in the world of Backend Engineering, where I've contributed
          to compelling projects like Kubby Buddy—each offering its own set of
          challenges and learning opportunities.
        </p>
      </div>
      <div className="about-me-section right" data-aos="fade-left">
        <p>
          My tech journey kicked off in 2016 when I built my first computer.
          This experience ignited a profound passion for technology, prompting
          me to share my newfound skills with others keen on assembling their
          own machines. By 2018, I ventured into Software Engineering, embarking
          on a thrilling journey through code and development.
        </p>
      </div>
      <div className="about-me-section left" data-aos="fade-right">
        <p>
          Over time, my interests expanded into the IT realm, leading me to
          create a home lab and explore IT hardware extensively. Yet, in 2022, a
          pivotal realization dawned upon me: Software Engineering was more than
          just an interest; it was my true calling. This epiphany led me to
          pursue an Advanced Residency in Software Engineering at Codesmith,
          where I delved deep into Backend Engineering and discovered my
          professional focus.
        </p>
      </div>
      <div className="about-me-section right" data-aos="fade-left">
        <p>
          A highlight from my time at Codesmith was developing Udemize, a
          project where I engineered server-side logic to interact with ChatGPT
          based on user inputs—a testament to my passion for creating
          intelligent, user-driven solutions.
        </p>
      </div>
      <div className="about-me-section left" data-aos="fade-right">
        <p>
          Beyond the confines of technology, my life is rich with hobbies and
          interests. I'm an avid player of Final Fantasy XIV, engaging in
          high-end raiding for both the challenge and the camaraderie. Cooking
          is another passion of mine, allowing me to explore various cuisines
          and flavors. My downtime is spent enjoying the company of my family
          and immersing myself in the vibrant worlds of anime.
        </p>
      </div>
      <div className="about-me-section right" data-aos="fade-left">
        <p>
          As I forge ahead in my tech journey, I'm keen on embracing new
          challenges, collaborating with fellow enthusiasts, and contributing to
          projects that leave a lasting impact.
        </p>
      </div>
      <div className="about-me-section left" data-aos="fade-right">
        <p>
          I invite you to explore my projects, connect with me on LinkedIn,
          visit my GitHub, or reach out to me directly. Your interest in my
          story is greatly appreciated, and I eagerly anticipate the
          opportunities and adventures that the future of technology holds.
        </p>
      </div>
      <div className="about-me-section right" data-aos="fade-left">
        <p>
          Thank you for taking the time to get to know me. Here's to the
          exciting journey ahead in the ever-evolving landscape of technology.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
