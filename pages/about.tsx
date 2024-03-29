import React from 'react';
import { aboutUsCardInfo } from '@/components/data/texts';
import SharedContainer from '@/components/sharedComponents/SharedContainer';

function About() {
  return (
    <div className="flex flex-col w-full min-h-screen  relative md:justify-center md:items-center  bg-black/10 truck  ">
      <div className="w-full h-full  backdrop-blur-sm flex  justify-center items-center md:text-3xl  flex-col md:pt-60  pt-32 pb-10">
        <SharedContainer images={aboutUsCardInfo} whatComp="aboutus" />
      </div>
    </div>
  );
}

export default About;
