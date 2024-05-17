import React from 'react';
import { render, useCasparData, FramerMotion, useFont } from '@nxtedition/graphics-kit';
import { motion } from 'framer-motion';
import sundryRegular from "./assets/fonts/Sundry-Regular.woff2";
import sundryMedium from "./assets/fonts/Sundry-Medium.woff2";
import './style.css';

const Bar = ({ height, label, index }) => (
  <motion.div 
    initial={{ scaleY: 0 }}
    animate={{ scaleY: 1, transition: { delay: index * 0.15 } }}
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
  const fontRegular = useFont({ src: sundryRegular });
  const fontMedium = useFont({ src: sundryMedium });

  //Construct array from data assuming `useCasparData` returns an object with properties Bar1 to Bar5
  const bars = Object.keys(data)
    .filter(key => data[key] !== undefined && data[key] !== null && data[key] !== '')
    .map((key, index) => ({
      height: `${data[key]}%`,
      label: `${data[key]}%`,
      index
    }));

  return (
    <FramerMotion>
      <main className="screen">
        <motion.div className="bar-chart" style={fontRegular.style}>
          {bars.map((bar) => (
            <Bar key={bar.index} {...bar} />
          ))}
        </motion.div>
      </main>
    </FramerMotion>
  );
};

render(BarChart);
