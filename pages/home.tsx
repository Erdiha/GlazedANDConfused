import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Image from 'next/image';
import ReactPlayer from 'react-player';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const handleNavbarItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  useEffect(() => {
    const applyAnimation = () => {
      const spans: any = document.querySelectorAll('.glazed-confused span');
      spans.forEach((span: any, index: number) => {
        span.style.setProperty('--delay', index.toString());
      });
    };

    applyAnimation();
  }, []);

  const text = [
    'G',
    'l',
    'a',
    'z',
    'e',
    'd',
    ' ',
    '&',
    ' ',
    'C',
    'o',
    'n',
    'f',
    'u',
    's',
    'e',
    'd',
  ];

  return (
    <div className='flex flex-col h-screen text-pink-100 justify-center items-center'>
      <div className='navbar w-screen justify-center flex items-center'>
        <h1
          className='glazed-confused gap-2 self-center justify-center items-center'
          style={{ height: '10%', width: '100%' }}>
          {text.map((letter, index) => (
            <span
              key={index}
              style={{
                color: letter === '&' ? '#ff00ff' : 'black',
                justifySelf: 'center',
                fontSize: '2rem',
              }}>
              {letter}
            </span>
          ))}
        </h1>
      </div>

      <main className='flex-1 container mx-auto '>
        <section id='features' className='py-8'>
          <div className=''>
            <ReactPlayer  url='/20230621_110752.mp4' controls={true}/>
          </div>
        </section>
      </main>

      <footer className='fixed bottom-0 flex justify-center items-center w-full border shadow-xl'>
        <Navbar />
      </footer>
    </div>
  );
};

export default HomePage;
