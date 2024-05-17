import React, { useEffect } from 'react';
import Aos from 'aos';
import '../Styles/Home.scss';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section id="home" className="home-section">
      <div className="text-content">
        <h1 data-aos="fade-right">Paul D. Walker III</h1>
        <h2 data-aos="fade-right">Backend Engineer</h2>
      </div>
      <div
        className="image-content"
        data-aos="fade-left"
        style={{ backgroundImage: `url('/IMG_9833.webp')` }}
      />
    </section>
  );
}

export default Home;
