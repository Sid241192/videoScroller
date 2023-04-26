import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import VideoPlayerComponent from "./component/VideoPlayerComponent.js";
import ReactPlayer from "react-player";

function App() {
  const [apiData, setApiData] = useState([]);
  // const [scrollTop, setScrollTop] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const apiCall = () => {
    let data = axios
      .get(
        "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
      )
      .then((data) => {
        console.log("data", data);
        setApiData(data.data);
      });
  };
  useEffect(() => {
    apiCall();
  }, []);

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     setScrollTop(window.scrollY);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleScroll = (e) => {
  //   console.log("event", e);
  //   setScrollTop(e.currentTarget.scrollTop);
  // };
  // console.log("scrollTop", scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const video = document.getElementById("video-player");
    const videoRect = video.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const isVideoVisible = videoRect.top < windowHeight && videoRect.bottom > 0;
    if (isVideoVisible) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  };

  return (
    <div className="App" id="video-player">
      {/* <ReactPlayer width='90vw' height='100vh' pip url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" playing controls style={{margin: "auto"}}/> */}
      {apiData &&
        apiData.map((item, index) => {
          return (
            <div
              key={index}
              // onScroll={handleScroll}
              className="videoContainer"
              
              style={{
                margin: "2rem",
                height: "100vh",
                border: "5px solid gray"
              }}
            >
              <VideoPlayerComponent data={item} isPlaying={isPlaying} />
            </div>
          );
        })}
    </div>
  );
}

export default App;
