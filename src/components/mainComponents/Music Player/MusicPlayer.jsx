import React, { useState } from "react";
import musicImage from "../../../assets/images/musicImage.png";
import Music from "../../../assets/images/music.mp3";
import Navbar from "../../commonComnents";
import ReactAudioPlayer from "react-audio-player";
import "./MusicPlayer.css";

const MusicPlay = () => {

  const [isEnded, setIsEnded] = useState(false);

  const onPause = (e) => {
    console.log("===========on pause", e);
  };

  const onEnded = (e) => {
    console.log("===========on ended", e);
    setIsEnded(true);
  };
  const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )

  return (
    <div>
      <div className="musicPlay">
        <Navbar />
        <div>
          <img src={musicImage} alt="Music Album" className="musicImage" />
        </div>
        <div className="musicBottomContainer">
          <div className="music_info">
    

            <h4 className="pointer">First Class</h4>
            <div className="producerAndGenre">
              Jack Harlow <div className="dotSeparator"></div> Hip Hop
            </div>

          </div>
          {!isEnded ? (
            <ReactAudioPlayer
              onEnded={onEnded}
              onPause={onPause}
              src={Music}
              controls
              className="audioStyle"
            />
          ) : (
            <div className="mainEmoji">
              <div className="emojiContainer">
                <div className="emojiStyle"> <Emoji symbol="🔥" className="emoji" /> </div>
                <div className="emojiStyle"> <Emoji className="emoji" symbol="😍" /> </div>
                <div className="emojiStyle"> <Emoji className="emoji" symbol="👍" ></Emoji> </div>
              </div>
                <div className="emojiContainer">
                  <div className="emojiStyle" > <Emoji className="emoji" symbol="👌" /> </div>
                  <div className="emojiStyle "> <Emoji symbol="😐" className="emoji" /> </div>
                  <div className="emojiStyle" > <Emoji symbol="💩" className="emoji" /> </div>
                </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default MusicPlay;

