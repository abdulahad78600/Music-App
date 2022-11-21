import React, { useState } from "react";
import {  FormControl,InputLabel, NativeSelect } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {  setIsFilled } from "../../../utils/LocalStorage";
import firebase from "firebase/compat/app";
import MusicButton from "../../commonComnents/Button";
import "./Questionare.css";

const Questionare = () => {
  const [userData, setUserData] = useState({
    name: "",
    gender: "",
    ethnicity: "",
    birth_date: "",
    email: "",
    phone: "",
    social_media_apps: "",
    city_of_birth: "",
    current_city: "",
    current_college_name: "",
    current_college_year: "",
    favorite_music_app: "",
    attend_consert: "",
    concerts_attended_last_year: "",
    music_listening_frequency: "",
    frequency_per_week: "",
    favorite_sneakers_brand: "",
    favorite_clothing_brand: "",
    genre: "Pop",
    rank_genres: {},
  });
  const navigates = useNavigate();
  const [music, setmusic] = useState({
    RB: "0",
    hip_hop: "0",
    pop: "0",
    rock: "0",
    latin: "0",
    country: "0",
    edm: "0",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleOnChangeMusic = (event) => {
    const { name, value } = event.target;
    setmusic({ ...music, [name]: value });
  };

  const Submit = async () => {
    setIsLoading(true);
    const db = firebase.firestore();
    const auth = getAuth();
    const user = auth.currentUser;
    const data = {
      ...userData,
      rank_genres: music,
      user_id: user.auth.currentUser.uid,
    };
    const res = await db
      .collection("survey_response")
      .add(data)
      .then((doc) => {
        setIsLoading(false);
        setIsFilled(true)
        navigates("/musicplay");
      })
      .catch((error) => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mainContainerQuestion">
      <div className="headingStyle">Fill Out This Questionare</div>
      <div className="emailInput">
        <span className="lableStyle">Name</span>
        <input
          className="questionInput"
          placeholder="Enter your name"
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Gender</span>
        <input
          className="questionInput"
          placeholder="Enter your gender"
          type="text"
          id="gender"
          name="gender"
          value={userData.gender}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Ethenicity</span>
        <input
          className="questionInput"
          placeholder="Enter your ethnicity"
          type="text"
          id="ethnicity"
          name="ethnicity"
          value={userData.ethnicity}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Birthdate</span>
        <input
          className="questionInput"
          placeholder="Enter your birth_date"
          type="text"
          id="birth_date"
          name="birth_date"
          value={userData.birth_date}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Email</span>
        <input
          className="questionInput"
          placeholder="Enter your email"
          type="text"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Cell Phone#</span>
        <input
          className="questionInput"
          placeholder="Enter your cellphonenumber"
          type="text"
          id="phone"
          name="phone"
          value={userData.phone}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">
          What is your favorite style of music?
        </span>
        {/* <input
          className="questionInput"
          placeholder="What is your favorite style of music?"
          type="text"
          id="genre"
          name="genre"
          value={userData.genre}
          onChange={handleOnChange}
        /> */}
        <FormControl>
          <InputLabel className="selectStyle" variant="standard" htmlFor="uncontrolled-native">
            Age
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            name="genre"
            value={userData.genre}
            onChange={handleOnChange}
            inputProps={{
              name: "genre",
              id: "genre",
            }}
          >
            <option value={"Pop"}>Pop</option>
            <option value={"Hip Hop"}>Hip Hop</option>
            <option value={"Rock"}>Rock</option>
            <option value={"Wagera"}>Wagera</option>
          </NativeSelect>
        </FormControl>
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">
          Which social social_media_apps apps do you regularly use?
        </span>
        <br />
        <input
          className="questionInput"
          placeholder="Which social social_media_apps apps do you regularly use?"
          type="text"
          id="social_media_apps"
          name="social_media_apps"
          value={userData.social_media_apps}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">What city/state were you born in?</span>
        <br />
        <input
          className="questionInput"
          placeholder="What city/state were you born in?"
          type="text"
          id="city_of_birth"
          name="city_of_birth"
          value={userData.city_of_birth}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">What city/state do you live in now?</span>
        <br />
        <input
          className="questionInput"
          placeholder="What city/state were you born in?"
          type="text"
          id="current_city"
          name="current_city"
          value={userData.current_city}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">
          What college are you currently attending?
        </span>
        <input
          className="questionInput"
          placeholder="What college are you currently attending?"
          type="text"
          id="current_college_name"
          name="current_college_name"
          value={userData.current_college_name}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">
          What year of college are you currently in?{" "}
        </span>
        <input
          className="questionInput"
          placeholder="What year of college are you currently in?  "
          type="text"
          id="current_college_year"
          name="current_college_year"
          value={userData.current_college_year}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">Do you go to concerts?</span>
        <input
          className="questionInput"
          placeholder="Do you go to concerts?"
          type="text"
          id=" attend_consert"
          name="attend_consert"
          value={userData.attend_consert}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">
          What concerts have you attended in the last 12 months?
        </span>
        <input
          className="questionInput"
          placeholder="What concerts have you attended in the last 12 months?"
          type="text"
          id="concerts_attended_last_year"
          name="concerts_attended_last_year"
          value={userData.concerts_attended_last_year}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">How often do you listen to music?</span>
        <input
          className="questionInput"
          placeholder="How often do you listen to music?"
          type="text"
          id="music_listening_frequency"
          name="music_listening_frequency"
          value={userData.music_listening_frequency}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">
          How many hours per week do you listen to music?
        </span>
        <input
          className="questionInput"
          placeholder="
           How many hours per week do you listen to music?
            "
          type="text"
          id="frequency_per_week"
          name="frequency_per_week"
          value={userData.frequency_per_week}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">What brand of sneakers do you like??</span>
        <input
          className="questionInput"
          placeholder="What brand of sneakers do you like??"
          type="text"
          id="favorite_sneakers_brand"
          name="favorite_sneakers_brand"
          value={userData.favorite_sneakers_brand}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="mediaStyle">What brand of clothing do you like??</span>
        <input
          className="questionInput"
          placeholder="What brand of clothing do you like??"
          type="text"
          id="favorite_clothing_brand"
          name="favorite_clothing_brand"
          value={userData.favorite_clothing_brand}
          onChange={handleOnChange}
        />
      </div>
      <div className="range">
        <label className="inputRange" for="points">
          Rank these genres from one to eight (1= I don’t like it at all / 8 = I
          love it): :
        </label>
        <br />
      </div>
      <br />

      <div className="rangeItems">
        <div className="textColor">R&B</div>
        <div>
          <input
            className="slider"
            type="range"
            id="points"
            name="RB"
            color="blue"
            value={music.RB}
            onChange={handleOnChangeMusic}
            min="1"
            max="10"
            
          />
        </div>
        <br />
        <div className="rangeItems">
          <div className="textColor">Hip Hop</div>
          <div>
            <input
              className="slider"
              type="range"
              id="points"
              name="hip_hop"
              value={music.hip_hop}
              onChange={handleOnChangeMusic}
              min="1"
              max="8"
            />
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">pop</div>
          <div>
            <input
              className="slider"
              type="range"
              id="points"
              name="pop"
              min="1"
              max="8"
              value={music.pop}
              onChange={handleOnChangeMusic}
            />
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">rock</div>
          <div>
            <input
              className="slider"
              type="range"
              id="points"
              name="rock"
              min="1"
              max="8"
              value={music.rock}
              onChange={handleOnChangeMusic}
            />
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">latin</div>
          <div>
            <input
              className="slider"
              type="range"
              id="points"
              name="latin"
              min="1"
              max="8"
              value={music.latin}
              onChange={handleOnChangeMusic}
            />
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">Countrty</div>
          <div>
            <input
              className="slider"
              type="range"
              id="points"
              name="country"
              min="1"
              max="8"
              value={music.country}
              onChange={handleOnChangeMusic}
            />
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">edm</div>
          <div>
            <input
              className="slider"
              type="range"
              id="points"
              name="edm"
              min="1"
              max="8"
              value={music.edm}
              onChange={handleOnChangeMusic}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="questionButton">
        <MusicButton title="Submit" isLoading={isLoading} onClick={Submit} />
      </div>
    </div>
  );
};
export default Questionare;
