import ReactPlayer from 'react-player'; // or 'react-player/vimeo' or 'react-player/file'

const LandingPage: React.FC = () => {
  const videoUrl = '20230621_110752.mp4'; // Replace with your video URL

  return (
    <div className='bg-video absolute inset-0 imgContainer bg-black/50 bg-opacity-20 backdrop-blur-lg flex items-center justify-center'>
      <video
        className='bg-video__content w-full h-full object-cover filter  brightness-100'
        autoPlay={true}
        muted
        loop>
        <source src={videoUrl} type='video/mp4' />
      </video>
    </div>
  );
};

export default LandingPage;
