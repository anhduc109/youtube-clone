import React from "react";
import "./App.css";

import { Container, Row, Col, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { SearchBar, VideoDetail, VideoList } from "./components/index";

import youtube from "./api/youtube";
import TrendingVideos from "./components/TrendingVideos";

class App extends React.Component {
  state = {
    trendingVideos: [],
    videos: [],
    selectedVideo: null,
    noInputErr: false
  };

  componentDidMount() {
    this.trendingSubmit("Music Video");
  }

  trendingSubmit = async SearchTerm => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 8,
        key: "AIzaSyDGT6TZsQL4NNGK-A6Pc1pZo--DIBoLl_Y",
        q: SearchTerm
      }
    });
    this.setState({
      trendingVideos: response.data.items
    });
  };

  handleSubmit = async SearchTerm => {
    if (SearchTerm.trim() !== "") {
      const response = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 6,
          key: "AIzaSyDGT6TZsQL4NNGK-A6Pc1pZo--DIBoLl_Y",
          q: SearchTerm
        }
      });

      this.setState({
        videos: response.data.items.slice(1),
        selectedVideo: response.data.items[0],
        noInputErr: false
      });
    } else {
      this.setState({
        noInputErr: true
      });
    }
  };

  onVideoSelect = (video, fromHomePage) => {
    if (fromHomePage === true) {
      this.setState({
        selectedVideo: video,
        videos: this.state.trendingVideos.slice(1, 6),
        noInputErr: false
      });
    } else {
      this.setState({
        selectedVideo: video,
        noInputErr: false
      });
    }
  };

  render() {
    const { selectedVideo, videos, trendingVideos, noInputErr } = this.state;
    return (
      <div>
        <SearchBar onFormSubmit={this.handleSubmit} />
        {noInputErr && (
          <Alert variant="danger">
            Please insert a keyword to the Search bar!
          </Alert>
        )}
        <Container className="content-wrapper" fluid>
          {selectedVideo ? (
            <Row>
              <Col lg={8}>
                <VideoDetail video={selectedVideo} />
              </Col>
              <Col lg={4}>
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              </Col>
            </Row>
          ) : (
            <TrendingVideos
              videos={trendingVideos}
              onVideoSelect={this.onVideoSelect}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default App;
