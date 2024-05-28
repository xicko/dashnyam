import React, { useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importing hook to detect if component is in view

// Defining Props interface for the StatsCounter component
interface StatsCounterProps {
  from: number; // Starting value for the counter
  to: number; // Ending value for the counter
  textprefix?: string;
  textsuffix?: string;
}

// Functional component for displaying a counter with animation
const StatsCounter: React.FC<StatsCounterProps> = ({ from, to, textprefix, textsuffix }) => {
  // Creating a reference for the span element that will display the counter value
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  // Using the useInView hook to detect if the component is in view
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is in view
    triggerOnce: true, // Only trigger animation once
  });

  // useEffect hook to handle animation when component enters view or props change
  useEffect(() => {
    // Check if component is in view and the reference to the span element exists
    if (inView && nodeRef.current) {
      // Get the reference to the span element
      const node = nodeRef.current;

      // Start an animation from the 'from' value to the 'to' value using Framer Motion
      const controls = animate(from, to, {
        duration: 2.5, // Animation duration in seconds
        onUpdate: (value) => {
          // Update the text content of the span element with the current animated value
          if (node) {
            node.textContent = value.toFixed(0); // Update counter value without decimal places
          }
        },
      });

      // Return a cleanup function to stop the animation when component unmounts or animation is no longer needed
      return () => controls.stop();
    }
  }, [from, to, inView]); // Depend on 'from', 'to', and 'inView' to trigger useEffect when they change

  // Render the component
  return (
    <div>
      {textprefix}
      <span
        className='whitespace-nowrap'
        ref={(el) => {
          ref(el); // Set the intersection observer reference
          nodeRef.current = el; // Set the counter value reference
        }}
      >
        {/* 
          Display the counter value if the component is in view
          This allows the initial value to be displayed before the component enters view
        */}
        {inView ? <span ref={nodeRef}>{from}</span> : null}
      </span> {textsuffix}
    </div>
  );
};

export default StatsCounter; // Export the StatsCounter component