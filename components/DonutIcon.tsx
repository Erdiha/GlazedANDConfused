import { motion } from 'framer-motion';

const DonutIcon = () => {
  const text = 'Glazed & Confused';
  const colors = [
    '#FF6B6B',
    '#4D96FF',
    '#FFD93D',
    '#FF6B6B',
    '#555',
    '#666',
    '#4D96FF',
    '#888',
    '#FFD93D',
  ]; // More nuanced shades of black, gray, and white

  return (
    <div className='flex justify-center items-center rounded-full  p-2 px-4 border-b-blue-400 border-b-[8px] '>
      <img
        content='cover'
        width={80}
        height={80}
        src='/homerdonut.png'
        alt=''
      />
      {/* <div className='flex flex-col items-center  md:space-x-2'>
        {text.split(' ').map((word, wordIndex) => (
          <div key={wordIndex} className='flex'>
            {Array.from(word).map((char, charIndex) => (
              <motion.p
                key={charIndex}
                initial={{
                  opacity: 0,
                  y: -25,
                  scale: 0.5,
                  color: 'white',
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  x: 2,
                  rotate: Math.random() * 11 - 10,
                  color: colors[Math.floor(Math.random() * colors.length)],
                }}
                transition={{
                  duration: 0.6,
                  delay: (wordIndex * word.length + charIndex) * 0.08,
                  type: 'spring',
                  damping: 10,
                  stiffness: 100,
                }}
                style={{ fontFamily: 'Henny Penny, cursive' }}
                className='md:text-xl text-md tracking-wider'>
                {char}
              </motion.p>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default DonutIcon;
