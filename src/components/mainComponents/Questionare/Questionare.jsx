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
    zipcode: "",
    ateendingCollege: "",
    musicHours:"",
    states:"",
    rank_genres: {},
  });
  const navigates = useNavigate();
  const [music, setmusic] = useState({
    RB: "Choose rank",
    hip_hop: "Choose rank",
    pop: "Choose rank",
    rock: "Choose rank",
    latin: "Choose rank",
    country: "Choose rank",
    EDM: "Choose rank",
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
        <div className="radioBox">
          <input type="radio" id="gender" name="gender" value={userData.gender} />
          <label className="genderLabel" for="male">Male</label> <br></br>
        </div>
        <br></br>
        <div className="radioBox">
          <input type="radio" id="gender" name="gender" value={userData.gender} />
          <label className="genderLabel" for="female">Female</label> <br></br>
        </div>
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Ethenicity</span>
        <label for="ethnicity">Enter ethnicity:</label>

        <select className="dropDown" name="ethnicity" id="ethnicity" value={userData.ethnicity} style={{ width: "220px", height: "32px", backgroundColor: "white", borderRadius: "30px" }} >
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
        <span className="lableStyle">Zipcode</span>
        <input
          className="questionInput"
          placeholder="Enter your zipcode"
          type="text"
          id="birth_date"
          name="birth_date"
          value={userData.zipcode}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyleCollege">Are you attending college?</span>
        <div className="radioBox">
          <input type="radio" id="attendingCollege" name="attendingCollege" value={userData.ateendingCollege} />
          <label className="collegeLabel" for="male">Yes</label> <br></br>
        </div>
        <br></br>
        <div className="radioBox">
          <input type="radio" id="attendingCollege" name="attendingCollege" value={userData.ateendingCollege} />
          <label className="collegeLabel" for="female">No</label> <br></br>
        </div>
      </div>
      <br></br>
      <div className="emailInput">
        <span className="lableStyleCollege">What College are you attending?</span>
        <br></br>
        <input
          className="questionInput"
          placeholder="what college are you attending"
          type="text"
          id="birth_date"
          name="birth_date"
          value={userData.ateendingCollege}
          onChange={handleOnChange}
        />
        
      </div>
      <br></br>
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
          placeholder="Enter your Cell Phonenumber"
          type="text" required
          id="phone"
          name="phone"
          value={userData.phone}
          onChange={handleOnChange}
        />
      </div>
      <br />
      <div className="emailInput">
        <span className="lableStyle">Choose one of States</span>
        <select className="dropDown" name="states" id="states" value={userData.states} style={{ width: "220px", height: "32px", backgroundColor: "white", borderRadius: "30px" }} >
          <option value="Alabama.">Alabama.</option>
          <option value="Alaska.">Alaska.</option>
          <option value="California.">California</option>
          <option value="Colorado">Colorado</option>
        </select>
        </div>
    <br></br>
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
      <br />
      <div className="emailInput">
        <span className="mediaStyle">
          Which social social_media_apps apps do you regularly use?
        </span>
        <br />
        <input
          className="questionInput"
          placeholder=" Enter Social Media Apps"
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
          placeholder="Born city?"
          type="date"
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
          placeholder=" Enter Current City"
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
          placeholder=" Enter Current College"
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
          placeholder=" Enter Current College Year  "
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
          placeholder="Consert?"
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
          placeholder=" Enter Last Consert Attended"
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
          placeholder="Music"
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
           Music/Week"
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
          placeholder="Favorite Sneaker Brand?"
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
          placeholder="Favorite Clothing Brand?"
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
          <select className="dropDown" name="RB" id="points" value={music.RB} onChange={handleOnChangeMusic} style={{ width: "220px", height: "32px", backgroundColor: "white", borderRadius: "30px" }} >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="Choose rank">Choose rank</option>
          </select>
        </div>
        <br />
        <div className="rangeItems">
          <div className="textColor">Hip Hop</div>
          <br></br>
          <div>
            <select className="hip_hop" name="RB" id="points" value={music.hip_hop} onChange={handleOnChangeMusic} style={{ width: "220px", height: "32px", backgroundColor: "white", borderRadius: "30px" }} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose rank">Choose rank</option>
            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">Pop</div>
          <div>
          <select className="pop" name="Pop" id="points" value={music.pop} onChange={handleOnChangeMusic} style={{ width: "220px", height: "32px", backgroundColor: "white", borderRadius: "30px" }} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose rank">Choose rank</option>

            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">Rock</div>
          <div>
          <select className="rock" name="rock" id="points" value={music.rock} onChange={handleOnChangeMusic} style={{ width: "220px", height: "32px", backgroundColor: "white", borderRadius: "30px" }} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose rank">Choose rank</option>
            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">Latin</div>
          <div>
          <select className="latin" name="latin" id="points" value={music.latin} onChange={handleOnChangeMusic} style={{ width: "220px", height: "32px", backgroundColor: "white", borderRadius: "30px" }} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose rank">Choose rank</option>
            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">Countrty</div>
          <div>
          <select className="country" name="country" id="points" value={music.country} onChange={handleOnChangeMusic} style={{ width: "220px", height: "32px", backgroundColor: "white", borderRadius: "30px" }} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose rank">Choose rank</option>
            </select>
          </div>
        </div>{" "}
        <br />
        <div className="rangeItems">
          <div className="textColor">EDM</div>
          <div>
          <select className="EDM" name="EDM" id="points" value={music.EDM} onChange={handleOnChangeMusic} style={{ width: "220px", height: "32px", backgroundColor: "white", borderRadius: "30px" }} >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Choose rank">Choose rank</option>
            </select>
          </div>
        </div>
      </div>
      <br></br>
      <div className="emailInput">
        <span className="lableStyleCollege">How many hours per week do you listen to music? </span>
        <div className="radioBox">
          <input type="radio" id="current_college_name" name="current_college_name" value={userData.musicHours} />
          <label className="collegeLabel" for="male">0-1</label> <br></br>
        </div>
        <br></br>
        <div className="radioBox">
          <input type="radio" id="current_college_name" name="current_college_name" value={userData.musicHours} />
          <label className="collegeLabel" for="female">1-2</label> <br></br>
        </div>
        <div className="radioBox">
          <input type="radio" id="current_college_name" name="current_college_name" value={userData.musicHours} />
          <label className="collegeLabel" for="female">2-4</label> <br></br>
        </div> <div className="radioBox">
          <input type="radio" id="current_college_name" name="current_college_name" value={userData.musicHours} />
          <label className="collegeLabel" for="female">4-6</label> <br></br>
        </div> <div className="radioBox">
          <input type="radio" id="current_college_name" name="current_college_name" value={userData.musicHours} />
          <label className="collegeLabel" for="female">6-8</label> <br></br>
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
