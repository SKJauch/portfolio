import React from 'react';
import '../style/Body.css';

const styles = {
  headerStyle: {
    background: 'red',
  },
  headingStyle: {
    fontSize: '100px',
  },
};

export default function About() {
  return (
    
    <div>
      <h1>About Me</h1>
      <p>
        I am a full stack developer with education from the University of Texas at Austin and a background in Psychology and Law Enforcement.  I am 36 years old and travel around in my camper with my two cats, spending most of my time in Texas and Colorado.
      </p>
    </div>
  );
}