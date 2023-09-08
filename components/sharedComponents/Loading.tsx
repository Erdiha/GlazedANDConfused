import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';

function Loading({ isLoading, isMobile }: any) {
  console.log('ismobile', isMobile);
  //isMobile && alert('its mobile')
  return (
    <PacmanLoader
      loading={isLoading}
      aria-label='Loading Spinner'
      data-testid='loader'
      color='#ff52a2'
    />
  );
}

export default Loading;
