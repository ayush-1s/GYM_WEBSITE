
import React from 'react';
import styled from 'styled-components';

const VideoPage = () => {
  return (
    <VideoContainer>
      <Iframe
        src="https://www.youtube.com/embed/HpM6bRZY4Hc"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></Iframe>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export default VideoPage;
