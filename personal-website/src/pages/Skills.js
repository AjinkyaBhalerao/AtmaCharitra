import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Skills.css';

const Skills = () => {
  const data = {
    labels: ['Python', 'Machine Learning', 'Oracle DB', 'SQL', 'Docker', 'React'],
    datasets: [
      {
        data: [90, 85, 85, 80, 75, 70],
        backgroundColor: ['#36A2EB', '#FF6384', '#27CAAE', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="skills">
      <h2>Skills</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default Skills;
