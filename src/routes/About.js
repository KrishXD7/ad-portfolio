import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';
import photographerImage from '../adityesh/Adityesh.jpg'

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <p>
          Hi there! I'm Adityesh, a passionate photographer with a love for capturing the beauty in everyday moments. Born and raised in Kolkata, I've always been drawn to the stories that unfold around us. Currently, I'm pursuing a Bachelor of Business Administration in International Business at Narsee Monjee Institute for Management Studies, where I'm learning to blend creativity with strategic thinking.

When I'm not behind the lens, you'll find me exploring new places, seeking inspiration from diverse cultures, or simply enjoying a good cup of coffee. My photography is all about capturing genuine emotions and telling unique stories. I believe that every picture has a tale to tell, and I'm excited to share my journey with you. Let's create something beautiful together!
          </p>
        </div>
        <div className="about-image">
          <img src={photographerImage} alt="Photographer" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
