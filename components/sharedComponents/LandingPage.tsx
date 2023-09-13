import ReactPlayer from 'react-player';

const LandingPage: React.FC = () => {
  const videoUrl = '/videos/20230621_110752.mp4';
  const webmVideoUrl = '/videos/20230621_110752.webm'; // WebM format

  return (
    <div className="bg-video absolute inset-0 imgContainer bg-black/30 bg-opacity-20 backdrop-blur-lg flex items-center justify-center">
      <video
        className="bg-video__content w-full h-full object-cover filter  brightness-100"
        autoPlay={true}
        muted
        loop
        playsInline
      >
        <source src={webmVideoUrl} type="video/webm" />
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default LandingPage;
