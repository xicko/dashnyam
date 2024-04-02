"use client";

import React from 'react'
import Particles from '@components/particles'
import MediaQuery from "react-responsive";

const ParticlesContainer = () => {
    const isMobile = MediaQuery({ query: "(max-width: 768px)" });

    const quantity = isMobile ? 100 : 300;
    return (
    <Particles quantity={quantity} className="md:absolute fixed inset-0 -z-10 animate-fade-in"/>
  )
}

export default ParticlesContainer