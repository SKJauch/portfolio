import React from 'react';
import '../style/Body.css';

const styles = {
  sectionStyles: {
    background: 'lavender',
  },
};

export default function Home() {
  return (
    <section style={styles.sectionStyles} className="header">
    <div>
      <h1>Portfolio</h1>
      <p>
        Here are a few examples of my work
        
      </p>
    </div>
    <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
    </section>
  );
}