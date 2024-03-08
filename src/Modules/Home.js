import React from 'react';
import '../Styles/Home.scss';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="text-content">
        <h1>Paul D. Walker III</h1>
        <h2>Backend Engineer</h2>
      </div>
      <div className='image-content' style={{ backgroundImage: `url('/IMG_9833.JPG')` }} />
    </section>
  );
}

export default Home;