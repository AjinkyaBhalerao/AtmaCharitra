import React from 'react';
import './Education.css';

const Education = () => (
  <div className="education">
    <h2>Education</h2>
    <div className="timeline">
      <div className="education-entry">
        <h3>Ecole Centrale de Marseille</h3>
        <p>Mastère Spécialisé (Data Science) (Sept 2023 – Present)</p>
        <p>Relevant coursework: Data Structures and Algorithms, Statistics, Deep Learning...</p>
      </div>
      <div className="education-entry">
        <h3>Mahindra University</h3>
        <p>Bachelor of Technology (CSE) (Aug 2020 – Present)</p>
        <p>Relevant coursework: Data Structures, Theory of Computation...</p>
      </div>
    </div>
  </div>
);

export default Education;
