import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { getID } from "../../../utils/LocalStorage";
import musicImage from "../../../assets/images/musicImage.png";
import Navbar from "../../commonComnents";
import ReactAudioPlayer from "react-audio-player";
import CommentComponent from "../../commonComnents/CommentBox";
import { getAPI, postAPI } from "../../../utils/api";
import "./MusicPlayer.css";

const MusicPlay = () => {
  const [isEnded, setIsEnded] = useState(false);  
  const [ID, setID] = useState("");
  const [song, setSong] = useState({ id: "" });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    if (response.data.success) {
      setSong(response.data);
      console.log("========-success", `getNextUserSong?id=${ID}`, response.data);
    }else{
      console.log("========error", )
      setSong({url:""})
      setIsEnded(false)
    }
  };

  const submitRating = async (emoji) => {
    const response = await postAPI("userSongRating", {
      user_id: ID,
      song_id: song.id,
      rating: emoji,
    });
    console.log("===========submit rating res" , response)
    if (response.status == 200) {
      handleOpen();
    }
  };

  const getNextSong = () => {
    setIsEnded(false);
    getSong();
    handleClose()
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

  const rateSong = (emoji) => {
    submitRating(emoji);
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
                <CommentComponent songID={song.id} />
              </div>
            </>
          )}
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalStyle">
          <div>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Do you want to play next song?
            </Typography>
            <div className="buttonsContainer">
              <div className="noStyle" onClick={handleClose}>
                No
              </div>
              <div className="yesStyle" onClick={getNextSong}>
                Yes
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default MusicPlay;
