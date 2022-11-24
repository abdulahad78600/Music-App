import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { getID, getIsFilled } from "../../../utils/LocalStorage";
import musicImage from "../../../assets/images/musicImage.png";
import Navbar from "../../commonComnents";
import ReactAudioPlayer from "react-audio-player";
import CommentComponent from "../../commonComnents/CommentBox";
import { getAPI, postAPI } from "../../../utils/api";
import { useSnackbar } from "notistack";
import Anime from 'react-anime';
import "./MusicPlayer.css";

const MusicPlay = () => {
  const navigates = useNavigate();
  const [isEnded, setIsEnded] = useState(false);
  const [ID, setID] = useState("");
  const [song, setSong] = useState({ id: "" });
  const [open, setOpen] = React.useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedEmoji, setselectedEmoji] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>
  {
   setOpen(false)
   setselectedEmoji(false);
  }
  const { enqueueSnackbar } = useSnackbar();

  const onPause = (e) => {
    console.log("===========on pause", e);
  };

  const onEnded = (e) => {
    setIsEnded(true);
  };

  useEffect(() => {
    const id = getID();
    const isFilled = getIsFilled();
    if (isFilled) {
      setID(id);
    } else {
      navigates("/questionare");
    }
  }, []);

  useEffect(() => {
    if (ID != "") {
      setTimeout(() => {
        getSong();
      }, 2000);
    }
  }, [ID]);

  const getSong = async () => {
    const response = await getAPI(`getNextUserSong?id=${ID}`);
    if (response.data.success) {
      setSong(response.data);
      setIsError(false);
    } else {
      setSong({ url: "" });
      setIsError(true);
      setIsEnded(false);
    }
  };

  const submitRating = async (emoji) => {
    const response = await postAPI("userSongRating", {
      user_id: ID,
      song_id: song.id,
      rating: emoji,
    });
    if (response.data.success) {
      handleOpen();
    } else {
      enqueueSnackbar("Error in submitting rating", {
        anchorOrigin: {
          horizontal: "right",
          vertical: "top"
        },
        variant: "error"
      });
    }
  };

  const getNextSong = () => {
    setIsEnded(false);
    getSong();
    setselectedEmoji("");
    handleClose();
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
    setselectedEmoji(emoji);
  };

  useEffect(() => {
    console.log("==========is ended is error", isEnded, isError);
  }, [isEnded, isError]);

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
          {!isEnded && !isError ? (
            <ReactAudioPlayer
              onEnded={onEnded}
              onPause={onPause}
              src={song.url}
              controls
              className="audioStyle"
            />
          ) : !isEnded && isError ? (
            <>
              <h3>There are no more songs in the list...</h3>
            </>
          ) : (
            <>
              <div className="mainEmoji">
                <div className="emojiContainer">
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("🔥")}
                  >
                    {selectedEmoji == ("🔥") ? (
                      <Anime
                        easing="easeOutElastic"
                        loop={true}
                        duration={2000}
                        delay={(el, index) => index * 240}
                        scale={[0.8, 1.5]}
                      >

                        <div className="blue" />
                        <div className="green" />
                        <div className="red" />

                        <div
                          className="emojiStyleSub"
                          onClick={() => rateSong("🔥")}
                        >
                          <Emoji className="emoji" symbol="🔥" />
                        </div>

                      </Anime>

                    ) : (
                      <Emoji className="emoji" symbol="🔥"></Emoji>
                    )}
                  </div>
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("😍")}
                  >
                    {selectedEmoji == ("😍") ? (
                      <Anime
                        easing="easeOutElastic"
                        loop={true}
                        duration={1000}
                        delay={(el, index) => index * 240}
                        scale={[0.8, 1.5]}
                      >

                        <div className="blue" />
                        <div className="green" />
                        <div className="red" />

                        <div
                          className="emojiStyleSub"
                          onClick={() => rateSong("😍")}
                        >
                          <Emoji className="emoji" symbol="😍" />
                        </div>

                      </Anime>

                    ) : (
                      <Emoji className="emoji" symbol="😍"></Emoji>
                    )}
                  </div>
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("👍")}
                  >
                    {selectedEmoji == ("👍") ? (
                      <Anime
                        easing="easeOutElastic"
                        loop={true}
                        duration={2000}
                        delay={(el, index) => index * 250}
                        scale={[0.8, 1.5]}
                      >

                        <div className="blue" />
                        <div className="green" />
                        <div className="red" />

                        <div
                          className="emojiStyleSub"
                          onClick={() => rateSong("👍")}
                        >
                          <Emoji className="emoji" symbol="👍" />
                        </div>

                      </Anime>

                    ) : (
                      <Emoji className="emoji" symbol="👍"></Emoji>
                    )}
                  </div>

                </div>
                <div className="emojiContainer">
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("👌")}
                  >
                    {selectedEmoji == ("👌") ? (
                      <Anime
                        easing="easeOutElastic"
                        loop={true}
                        duration={1000}
                        delay={(el, index) => index * 240}
                        scale={[0.8, 1.5]}
                      >

                        <div className="blue" />
                        <div className="green" />
                        <div className="red" />

                        <div
                          className="emojiStyleSub"
                          onClick={() => rateSong("👌")}
                        >
                          <Emoji className="emoji" symbol="👌" />
                        </div>

                      </Anime>

                    ) : (
                      <Emoji className="emoji" symbol="👌"></Emoji>
                    )}
                  </div>
             
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("😐")}
                  >
                    {selectedEmoji == ("😐") ? (
                      <Anime
                        easing="easeOutElastic"
                        loop={true}
                        duration={1000}
                        delay={(el, index) => index * 240}
                        scale={[0.8, 1.5]}
                      >

                        <div className="blue" />
                        <div className="green" />
                        <div className="red" />

                        <div
                          className="emojiStyleSub"
                          onClick={() => rateSong("😐")}
                        >
                          <Emoji className="emoji" symbol="😐" />
                        </div>

                      </Anime>

                    ) : (
                      <Emoji className="emoji" symbol="😐"></Emoji>
                    )}
                  </div>
                  <div
                    className="emojiStyle"
                    onClick={() => rateSong("💩")}
                  >
                    {selectedEmoji == ("💩") ? (
                      <Anime
                        easing="easeOutElastic"
                        loop={true}
                        duration={1000}
                        delay={(el, index) => index * 240}
                        scale={[0.8, 1.5]}
                      >

                        <div className="blue" />
                        <div className="green" />
                        <div className="red" />

                        <div
                          className="emojiStyleSub"
                          onClick={() => rateSong("💩")}
                        >
                          <Emoji className="emoji" symbol="💩" />
                        </div>

                      </Anime>

                    ) : (
                      <Emoji className="emoji" symbol="💩"></Emoji>
                    )}
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
        onClose={handleClose }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalStyle">
          <div>
            <p className="nextTextStyling">Your response has been submitted, do you want to play next song?</p>
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
