'use client';

import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import AboutMe from './About';
import Experience from './Experience';
import Skills from './Skill';
import Awards from './Awards';
import Introduce from './Introduce';

export default function ProfileContainer() {
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
