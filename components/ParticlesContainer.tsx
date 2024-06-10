'use client';

import dynamic from 'next/dynamic';
import React from 'react'
import { useMediaQuery } from 'react-responsive';
const Particles = dynamic(() => import("./Particles"), { ssr: false });

const ParticlesContainer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const quantity = isMobile ? 60 : 200;

    return (
    <Particles quantity={quantity} className='md:absolute fixed inset-0 -z-10 animate-fade-in'/>
  )
}

export default ParticlesContainer