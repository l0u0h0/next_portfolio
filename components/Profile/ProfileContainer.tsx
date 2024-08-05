'use client';

import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';
import AboutMe from './About';
import Experience from './Experience';
import Skills from './Skill';
import Awards from './Awards';

export default function ProfileContainer() {
  return (
    <>
      <AboutMe />
      <Experience />
      <Skills />
      <Awards />
    </>
  );
}
