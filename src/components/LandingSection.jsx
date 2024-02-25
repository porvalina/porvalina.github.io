import React from 'react';
import avatar from '../images/avatar.png';

export default () => (
  <section id="landing">
    <div className='container'>
      <div className= 'heroContainer'>
        <h1 className='heroName'>Alina Porval</h1>
        <p className='heroRole'>Front End Developer</p>
        <p className='heroDesc'>"I enjoy making websites that look good and are easy to use. 
          I'm not afraid to try new things because I love learning and facing challenges. 
          With my past work experience, I know how to handle all parts of projects well." </p>
      </div>
      <img className='avatar' src={avatar} alt="Avatar" />
    </div>
  </section>
);