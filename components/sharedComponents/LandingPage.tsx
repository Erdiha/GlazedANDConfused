import Image from 'next/image';
import bgImage from '../../public/truck photo 1.jpg';
import BrowserDetection from '../BrowserDetection';

const LandingPage: React.FC = () => {
  const videoUrl = '/videos/20230621_110752.mp4';
  const webmVideoUrl = '/videos/20230621_110752.webm'; // WebM format
  const browserType = BrowserDetection();
  return (
    <div className="bg-video absolute inset-0 imgContainer bg-black/30 bg-opacity-20 backdrop-blur-lg flex items-center justify-center">
      {browserType === 'Safari' ? (
        <Image
          fill
          src={bgImage}
          loading='eager'
          alt={'bg image'}
          objectFit="cover"
          style={{
            backdropFilter: 'blur(10px) saturation(0.5)',
          }}
        />
      ) : (
        <video
          className="bg-video__content w-full h-full object-cover filter  brightness-100"
          autoPlay={true}
          muted
          loop
          preload="none" 
          playsInline
        >
          <source src={webmVideoUrl} type="video/webm" />
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default LandingPage;
