import React, { useState, useEffect } from "react";
import { getID } from "../../../utils/LocalStorage";
import musicImage from "../../../assets/images/musicImage.png";
import Music from "../../../assets/images/music.mp3";
import Navbar from "../../commonComnents";
import ReactAudioPlayer from "react-audio-player";
import CommentComponent from "../../commonComnents/CommentBox";
import "./MusicPlayer.css";
import { getAPI } from "../../../utils/api";

const MusicPlay = () => {
  const [isEnded, setIsEnded] = useState(false);
  const [ID, setID] = useState("");
  const [song, setSong] = useState({});

  const onPause = (e) => {
    console.log("===========on pause", e);
  };

  const onEnded = (e) => {
    setIsEnded(true);
  };

  useEffect(() => {
    const id = getID();
    setID(id);
  }, []);

  useEffect(() => {
    if (ID != "") {
      getSong();
    }
  }, [ID]);

  const getSong = async () => {
    const response = await getAPI(`getNextUserSong?id=${ID}`);
    if (response.status == 200) {
      setSong(response.data);
    }
  };

  const Emoji = (props) => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  );

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
            <>
              <div className="mainEmoji">
                <div className="emojiContainer">
                  <div className="emojiStyle">
                    {" "}
                    <Emoji symbol="🔥" className="emoji" />{" "}
                  </div>
                  <div className="emojiStyle">
                    {" "}
                    <Emoji className="emoji" symbol="😍" />{" "}
                  </div>
                  <div className="emojiStyle">
                    {" "}
                    <Emoji className="emoji" symbol="👍"></Emoji>{" "}
                  </div>
                </div>
                <div className="emojiContainer">
                  <div className="emojiStyle">
                    {" "}
                    <Emoji className="emoji" symbol="👌" />{" "}
                  </div>
                  <div className="emojiStyle ">
                    {" "}
                    <Emoji symbol="😐" className="emoji" />{" "}
                  </div>
                  <div className="emojiStyle">
                    {" "}
                    <Emoji symbol="💩" className="emoji" />{" "}
                  </div>
                </div>
              </div>
              <div>
                <CommentComponent />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPlay;
