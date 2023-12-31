import React from 'react';
import '../style/Body.css';

const styles = {
  sectionStyles: {
    background: 'lavender',
  },
};

export default function About() {
  return (
    
    <section style={styles.sectionStyles} className="header">
      <h1>About Me</h1>
      <p>
        I am a full stack developer with education from the University of Texas at Austin and a background in Psychology and Law Enforcement.  I am 36 years old and travel around in my camper with my two cats, spending most of my time in Texas and Colorado.
      </p>
    </section>
  );
}