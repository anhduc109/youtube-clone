import React from "react";

const VideoDetail = ({ video }) => {
  if (!video)
    return (
      <div>
        <h4>Trending</h4>
      </div>
    );

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="iframe-div">
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
          src={videoSrc}
        ></iframe>
      </div>
      <div>
        <h4>
          {video.snippet.title} by {video.snippet.channelTitle}
        </h4>
        <h5>{video.snippet.channelTitle}</h5>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
