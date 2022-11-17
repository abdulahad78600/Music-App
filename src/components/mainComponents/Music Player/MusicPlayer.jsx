import React, { useState, useEffect } from "react";
import { getID } from "../../../utils/LocalStorage";
import musicImage from "../../../assets/images/musicImage.png";
import Navbar from "../../commonComnents";
import ReactAudioPlayer from "react-audio-player";
import CommentComponent from "../../commonComnents/CommentBox";
import { getAPI } from "../../../utils/api";
import "./MusicPlayer.css";

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
      console.log("========-=song", `getNextUserSong?id=${ID}`, response.data);
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

  const rateSong = (emoji) => {};

  return (
    <div>
      <div className="musicPlay">
        <Navbar />
        <div>
          <img src={musicImage} alt="Music Album" className="musicImage" />
        </div>
        <div className="musicBottomContainer">
          <div className="music_info">
            <h4 className="pointer">{song.name}</h4>
            {song.genre}
          </div>
          {!isEnded ? (
            <ReactAudioPlayer
              onEnded={onEnded}
              onPause={onPause}
              src={song.url}
              controls
              className="audioStyle"
            />
          ) : (
            <>
              <div className="mainEmoji">
                <div className="emojiContainer">
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("U+1F525")}
                  >
                    <Emoji symbol="🔥" className="emoji" />
                  </div>
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("U+1F60D")}
                  >
                    <Emoji className="emoji" symbol="😍" />
                  </div>
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("U+1F44D")}
                  >
                    <Emoji className="emoji" symbol="👍"></Emoji>
                  </div>
                </div>
                <div className="emojiContainer">
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("U+1F44C")}
                  >
                    <Emoji className="emoji" symbol="👌" />
                  </div>
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("U+1F610")}
                  >
                    <Emoji symbol="😐" className="emoji" />
                  </div>
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("U+1F4A9")}
                  >
                    <Emoji symbol="💩" className="emoji" />
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
