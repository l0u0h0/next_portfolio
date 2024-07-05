'use client';

import Image from 'next/image';
import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import Introduce from './Introduce';
import AboutMe from './About';
import Experience from './Experience';
import Skills from './Skill';
import Awards from './Awards';

export default function Content() {
  return (
    <>
      <Introduce />
      <AboutMe />
      <Experience />
      <Skills />
      <Awards />
    </>
  );
}
