import React, { Component } from "react";
import musicImage from "../../../assets/images/musicImage.png";
import Music from "../../../assets/images/music.mp3";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PauseIcon from "@mui/icons-material/Pause";
import Navbar from "../../commonComnents";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import WaveSurfer from "wavesurfer.js";
import ReactAudioPlayer from "react-audio-player";
import "./MusicPlayer.css";

const MusicPlay = () => {
  
  const onPause = (e) => {
    console.log("===========on pause", e);
  };

  const onEnded = (e) => {
    console.log("===========on ended", e);
  };

  return (
    <div>
      <div className="musicPlay">
        <Navbar />
        <div>
          <img src={musicImage} alt="Music Album" className="musicImage" />
        </div>
        <div className="musicBottomContainer">
          <div className="music_info">
            <h4>First Class</h4>
            <div className="producerAndGenre">
              Jack Harlow <div className="dotSeparator"></div> Hip Hop
            </div>
          </div>
          <ReactAudioPlayer
            onEnded={onEnded}
            onPause={onPause}
            src={Music}
            controls
            className="audioStyle"
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlay;
