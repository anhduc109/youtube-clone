import React from "react";

import { Image } from "react-bootstrap";

const VideoItem = ({ video, onVideoSelect, fromHomePage }) => {
  if (fromHomePage === false) {
    return (
      <div className="video-item-div" onClick={() => onVideoSelect(video)}>
        <Image
          className="video-item-img"
          src={video.snippet.thumbnails.medium.url}
          thumbnail
          fluid
        />
        <h6 className="video-item-title">{video.snippet.title}</h6>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className="video-item-div"
          onClick={() => onVideoSelect(video, fromHomePage)}
        >
          <Image src={video.snippet.thumbnails.medium.url} thumbnail fluid />
          <div className="video-item-title">
            <h5>{video.snippet.title}</h5>
            <h6>{video.snippet.channelTitle}</h6>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default VideoItem;
