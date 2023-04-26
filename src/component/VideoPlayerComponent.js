import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./style.css";

const VideoPlayerComponent = (props) => {
  const { data, isPlaying } = props;
  

  

  return (
    <div className="playerWrapper">
      <ReactPlayer
        width="90vw"
        height="100vh"
        volume={1}
        muted={true}
        pip
        url={data.videoUrl}
        playing={isPlaying}
        controls
        style={{ margin: "auto" }}
      />
    </div>
  );
};

export default VideoPlayerComponent;
