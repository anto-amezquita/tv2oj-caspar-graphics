import React from 'react';
import { render, useCasparData, FramerMotion } from '@nxtedition/graphics-kit';
import { motion } from 'framer-motion';
import './style.css';

const Bar = ({ height, label, index }) => (
  <motion.div 
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1, transition: { delay: index * 0.5 } }}
    className="bar"
    style={{ height }}
    role="img"
    aria-label={`Bar showing ${label} percent`}
  >
    <span>{label}</span>
  </motion.div>
);

const BarChart = () => {
  const data = useCasparData();

  // Construct array from data assuming `useCasparData` returns an object with properties Bar1 to Bar5
  const bars = Object.keys(data).filter(key => data[key] !== undefined).map((key, index) => ({
    height: `${data[key]}%`,
    label: `${data[key]}%`,
    index
  }));

  return (
    <FramerMotion>
    <div class="screen">
      <div className="bar-chart">
        {bars.map((bar) => (
          <Bar key={bar.index} {...bar} />
        ))}
      </div>
    </div>
    </FramerMotion>
  );
};

render(BarChart);
