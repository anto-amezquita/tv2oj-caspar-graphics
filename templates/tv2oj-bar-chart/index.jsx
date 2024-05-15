import React from 'react'
import { render, useCasparData, FramerMotion } from '@nxtedition/graphics-kit' 
import { motion } from 'framer-motion';
import './style.css'

const BarChart = () => {
  // Extract the bar data using useCasparData
  const { Bar1, Bar2, Bar3, Bar4, Bar5 } = useCasparData();

  // Construct an array from the retrieved data for easy mapping
  const data = [
    { height: `${Bar1}%`, label: `${Bar1}%` },
    { height: `${Bar2}%`, label: `${Bar2}%` },
    { height: `${Bar3}%`, label: `${Bar3}%` },
    { height: `${Bar4}%`, label: `${Bar4}%` },
    { height: `${Bar5}%`, label: `${Bar5}%` },
  ];

  return (
    <FramerMotion>
    <div className="bar-chart">
      {data.map((bar, index) => (
        <motion.div initial={{scaleY:0}} animate={{scaleY:1, transition:{delay: index*0.5}}} key={index} className="bar" style={{ height: bar.height }}>
          <span>{bar.label}</span>
        </motion.div>
      ))}
    </div>
    </FramerMotion>
  );
};

render(BarChart)