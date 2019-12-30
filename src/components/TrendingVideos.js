import React from "react";

import VideoItem from "./VideoItem";

const TrendingVideos = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video, id) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={id}
      video={video}
      fromHomePage={true}
    />
  ));
  return (
    <div>
      <h4>Music Video</h4>
      {listOfVideos}
    </div>
  );
};

export default TrendingVideos;
