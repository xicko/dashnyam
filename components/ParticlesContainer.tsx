'use client';

import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Particles from '@components/Particles';

const ParticlesContainer = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const quantity = isMobile ? 60 : 200;

    return (
    <Particles quantity={quantity} className='md:absolute fixed inset-0 -z-10 animate-fade-in'/>
  )
}

export default ParticlesContainer