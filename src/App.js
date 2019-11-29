import React from 'react';
import './App.css';

import { Grid } from '@material-ui/core';

import {SearchBar, VideoDetail, VideoList} from './components/index';

import youtube from './api/youtube';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  handleSubmit = async(SearchTerm) => {
    const response = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyDGT6TZsQL4NNGK-A6Pc1pZo--DIBoLl_Y',
          q: SearchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  } 

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render () {
    const {selectedVideo, videos} = this.state;
    return(
      <Grid justify="center" container spacing = {10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit}/>
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList videos ={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default App;
