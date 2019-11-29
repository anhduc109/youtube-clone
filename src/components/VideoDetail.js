import React from 'react';

import {Paper, Typography} from '@material-ui/core';

const VideoDetail = ({video}) => {
    if(!video) return <div style={{textAlign: 'center'}}><h1>Let's search something</h1></div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation={6} style={{height: '70%'}}>
                <iframe frameBorder ="0" height="100%" width="100%" title="Video Player" src={videoSrc}></iframe>
            </Paper>
            <Paper elevation={6} style={{padding: '15px'}}>
                <Typography variant="h4">{video.snippet.title} by {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;