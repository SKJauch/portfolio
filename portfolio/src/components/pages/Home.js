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
      <h1>Home Page</h1>
      <p>
        Wecome to my site!  Please look around and contact me to work together!
      </p>
    </section>
  );
}