'use client';
import { Box } from '@mui/material';
import React, { useRef, useState, useEffect, ReactNode } from 'react';

type FadeInOnViewProps = {
  children: ReactNode;
};

const INTERSECTION_THRESHOLD = 0.1;

const FadeInOnView: React.FC<FadeInOnViewProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true); // active状態にする
          observer.unobserve(entry.target);
        }
      },
      { threshold: INTERSECTION_THRESHOLD } 
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []); 

  return (
    <Box 
      ref={ref}
      sx={{
        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
        opacity: isActive ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out 0.1s, transform 0.5s ease-in-out 0.1s',
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
};

export default FadeInOnView;