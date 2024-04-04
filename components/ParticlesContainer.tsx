"use client";

import React from 'react'
import Particles from '@components/particles'
import { useMediaQuery } from "react-responsive";

const ParticlesContainer = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const quantity = isMobile ? 60 : 300;

    return (
    <Particles quantity={quantity} className="md:fixed fixed inset-0 -z-10 animate-fade-in"/>
  )
}

export default ParticlesContainer