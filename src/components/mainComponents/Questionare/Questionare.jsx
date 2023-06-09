import React, { useState } from "react";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setIsFilled } from "../../../utils/LocalStorage";
import firebase from "firebase/compat/app";
import MusicButton from "../../commonComnents/Button";
import "./Questionare.css";

const Questionare = () => {
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    gender: "",
    ethnicity: "",
    birth_date: "",
    email: "",
    phone: "",
    social_media_apps: "",
    city_of_birth: "",
    current_city: "",
    musicHour: "",
    current_college_year: "",
    favorite_music_app: "",
    attend_consert: "",
    concerts_attended_last_year: "",
    music_listening_frequency: "",
    frequency_per_week: "",
    favorite_sneakers_brand: "",
    favorite_clothing_brand: "",
    genre: "Pop",
    zipcode: "",
    attendingColle: "",
    collegeName: "",
    states: "",
    rank_genres: {},
  });
  const navigates = useNavigate();
  const [music, setmusic] = useState({
    RB: "Choose Rank",
    hip_hop: "Choose Rank",
    pop: "Choose Rank",
    rock: "Choose Rank",
    latin: "Choose Rank",
    country: "Choose Rank",
    EDM: "Choose Rank",
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
    console.log("=======questions answer", data);
    const res = await db
      .collection("survey_response")
      .add(data)
      .then((doc) => {
        setIsLoading(false);
        setIsFilled(true);
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
        <span className="lableStyle">First Name</span>
        <input
          className="questionInput"
          placeholder="Enter your first name"
          type="text"
          id="fName"
          name="fName"
          value={userData.fName}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Last Name</span>
        <input
          className="questionInput"
          placeholder="Enter your last name"
          type="text"
          id="lName"
          name="lName"
          value={userData.lName}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Gender</span>
        <div className="radioBoxGender">
          <input
            type="radio"
            id="gender"
            name="gender"
            value="male"
            onChange={handleOnChange}
          />
          <label className="genderLabel" for="male">
            Male
          </label>
        </div>
        <div className="radioBox">
          <input
            type="radio"
            id="gender"
            name="gender"
            value="female"
            onChange={handleOnChange}
          />
          <label className="genderLabel" for="female">
            Female
          </label>{" "}
          <br></br>
        </div>
      </div>
      <br />

      <div className="emailInput">
        <span className="lableStyle">Ethenicity</span>
        <select
          className="genreStyle"
          name="ethnicity"
          id="ethnicity"
          value={userData.ethnicity}
          style={{
            width: "220px",
            height: "32px",
            backgroundColor: "white",
            borderRadius: "30px",
          }}
          onChange={handleOnChange}
        >
          <option value="Asian">Asian</option>
          <option value="Black">Black</option>
          <option value="Hispanic">Hispanic</option>
          <option value="Native">Native</option>
          <option value="American">American</option>
          <option value="Native Hawaiian">Native Hawaiian</option>
          <option value="Other">Other</option>
          <option value="White">White</option>
        </select>
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Birthdate</span>
        <input
          className="datePickerStyle"
          placeholder="Enter your birth_date"
          type="date"
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
          placeholder="Enter your Cell Phonenumber"
          type="text"
          required
          id="phone"
          name="phone"
          value={userData.phone}
          onChange={handleOnChange}
        />
      </div>
      <br />

      <div className="emailInput">
        <span className="lableStyle">Choose state</span>
      </div>
      <div className="rangeItems">
        <div>
          <select
            className="genreStyle"
            name="current_city"
            id="current_city"
            value={userData.current_city}
            onChange={handleOnChange}
          >
            <option value="Alabama.">Alabama</option>
            <option value="Alaska.">Alaska</option>
            <option value="California.">California</option>
            <option value="Colorado">Colorado</option>
          </select>
        </div>
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Zipcode</span>
        <input
          className="questionInput"
          placeholder="Enter your zipcode"
          type="text"
          id="zipcode"
          name="zipcode"
          value={userData.zipcode}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyleCollege">Are you attending college?</span>
        <br />
        <div className="radioBox">
          <input
            type="radio"
            id="attendingCollege"
            name="attendingCollege"
            value="yes"
            onChange={handleOnChange}
          />
          <label className="collegeLabel" for="male">
            Yes
          </label>{" "}
        </div>
        <div className="radioBox">
          <input
            type="radio"
            id="ateendingCollege"
            name="attendingCollege"
            value="no"
            onChange={handleOnChange}
          />
          <label className="collegeLabel" for="female">
            No
          </label>{" "}
          <br></br>
        </div>
      </div>
      <br></br>
      <div className="emailInput">
        <span className="lableStyleCollege">
          What College are you attending?
        </span>
        <br></br>
        <input
          className="questionInput"
          placeholder="What college are you attending"
          type="text"
          id="collegeName"
          name="collegeName"
          value={userData.collegeName}
          onChange={handleOnChange}
        />
      </div>
      <br />

      <div className="emailInput">
        <span className="mediaStyle">
          What is your favorite style of music?
        </span>
        <FormControl>
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
            <option value={"R&B"}>R&B</option>
            <option value={"country"}>Country</option>
            <option value={"hip hop"}>Hip Hop</option>
            <option value={"latin"}>Latin</option>
            <option value={"pop"}>Pop</option>
            <option value={"rock"}>Rock</option>
            <option value={"EDM"}>EDM</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div className="range">
        <label className="inputRange" for="points">
          Rank these genres from one to eight (1= I don’t like it at all / 8 = I
          love it): :
        </label>
      </div>
      <br />

      <div className="rangeItems">
        <div className="textColor">R&B</div>
        <div>
          <select
            className="genreStyle"
            name="RB"
            id="points"
            value={music.RB}
            onChange={handleOnChangeMusic}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="Choose Rank">Choose Rank</option>
          </select>
        </div>
        <br />
        <div className="rangeItems">
          <div className="textColor">Hip Hop</div>
          <div>
            <select
              className="genreStyle"
              name="hip_hop"
              id="points"
              value={music.hip_hop}
              onChange={handleOnChangeMusic}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose Rank">Choose Rank</option>
            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">Pop</div>
          <div>
            <select
              className="genreStyle"
              name="pop"
              id="points"
              value={music.pop}
              onChange={handleOnChangeMusic}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose Rank">Choose Rank</option>
            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">Rock</div>
          <div>
            <select
              className="genreStyle"
              name="rock"
              id="points"
              value={music.rock}
              onChange={handleOnChangeMusic}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose Rank">Choose Rank</option>
            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">Latin</div>
          <div>
            <select
              className="genreStyle"
              name="latin"
              id="points"
              value={music.latin}
              onChange={handleOnChangeMusic}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose Rank">Choose Rank</option>
            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">Countrty</div>
          <div>
            <select
              className="genreStyle"
              name="country"
              id="points"
              value={music.country}
              onChange={handleOnChangeMusic}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose Rank">Choose Rank</option>
            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">EDM</div>
          <div>
            <select
              className="genreStyle"
              name="EDM"
              id="points"
              value={music.EDM}
              onChange={handleOnChangeMusic}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose Rank">Choose Rank</option>
            </select>
          </div>
        </div>
      </div>
      <br></br>
      <div className="emailInput">
        <span className="lableStyleCollege">
          How many hours per week do you listen to music?
        </span>
        <br></br>
        <div className="radioBox">
          <input type="radio" id="musicHour" name="musicHour" value="0-1" />
          <label className="collegeLabel" for="male">
            0-1
          </label>{" "}
        </div>
        <div className="radioBox">
          <input
            type="radio"
            id="musicHour"
            name="musicHour"
            value="1-2"
            onChange={handleOnChange}
          />
          <label className="collegeLabel" for="female">
            1-2
          </label>{" "}
          <br></br>
        </div>
        <div className="radioBox">
          <input
            type="radio"
            id="musicHour"
            name="musicHour"
            value="2-4"
            onChange={handleOnChange}
          />
          <label className="collegeLabel" for="female">
            2-4
          </label>{" "}
          <br></br>
        </div>{" "}
        <div className="radioBox">
          <input
            type="radio"
            id="musicHour"
            name="musicHour"
            value="4-6"
            onChange={handleOnChange}
          />
          <label className="collegeLabel" for="female">
            4-6
          </label>{" "}
          <br></br>
        </div>{" "}
        <div className="radioBox">
          <input
            type="radio"
            id="musicHour"
            name="musicHour"
            value="6-8"
            onChange={handleOnChange}
          />
          <label className="collegeLabel" for="female">
            6-8
          </label>{" "}
          <br></br>
        </div>
      </div>
      <br></br>
      <br />
      <div className="questionButton">
        <MusicButton title="Submit" isLoading={isLoading} onClick={Submit} />
      </div>
    </div>
  );
};
export default Questionare;
