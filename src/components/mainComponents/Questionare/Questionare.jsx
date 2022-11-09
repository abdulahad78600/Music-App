import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Questionare.css";

const Questionare = () => {
    const [userData, setUserData] = useState({
        name: "",
        gender: "",
        ethenicity: "",
        birthdate: "",
        email: "",
        cellphone: "",
        media: "",
        bornCity: "",
        college: "",
        collegeYear: "",
        music: "",
        consert: "",
        consertMonth: "",
        musicType: "",
        lisiten: "",
        musicTime: ""
    });
    const [music, setmusic] = useState({
        RB:"",
        Hiphop :"",
        Pop:"", 
        Rock:"",                                
        Latin:"",            
        Country:"",           
        EDM :""          
        
    });
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        setmusic({ ...music, [name]: value });
    }
    const Submit = () => {
        console.log("respnse", userData)
    }
   
    return (
        <div className="mainContainerQuestion">
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
                    placeholder="Enter your ethenicity"
                    type="text"
                    id="ethenicity"
                    name="ethenicity"
                    value={userData.ethenicity}
                    onChange={handleOnChange}

                />
            </div>
            <br />
            <div className="emailInput">
                <span className="lableStyle">Birthdate</span>
                <input
                    className="questionInput"
                    placeholder="Enter your birthdate"
                    type="text"
                    id="birthdate"
                    name="birthdate"
                    value={userData.birthdate}
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
                    id="cellphone"
                    name="cellphone"
                    value={userData.cellphone}
                    onChange={handleOnChange}
                />
            </div>
            <br />
            <div className="emailInput">
                <span className="mediaStyle">Which social media apps do you regularly use?</span>
                <br />
                <input
                    className="questionInput"
                    placeholder="Which social media apps do you regularly use?"
                    type="text"
                    id="media"
                    name="media"
                    value={userData.media}
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
                    id="bornCity"
                    name="bornCity"
                    value={userData.bornCity}
                    onChange={handleOnChange}
                />
            </div>
            <br />
            <div className="emailInput">
                <span className="mediaStyle">What college are you currently attending?</span>
                <input
                    className="questionInput"
                    placeholder="What college are you currently attending?"
                    type="text"
                    id="college"
                    name="college"
                    value={userData.college}
                    onChange={handleOnChange}
                />
            </div>
            <br />
            <br />
            <div className="emailInput">
                <span className="mediaStyle">What year of college are you currently in?  </span>
                <input
                    className="questionInput"
                    placeholder="What year of college are you currently in?  "
                    type="text"
                    id="collegeYear"
                    name="collegeYear"
                    value={userData.collegeYear}
                    onChange={handleOnChange}
                />
            </div>
            <br />
            <br />
            <div className="emailInput">
                <span className="mediaStyle">What is your favorite style of music?</span>
                <input
                    className="questionInput"
                    placeholder="What is your favorite style of music?"
                    type="text"
                    id="music"
                    name="music"
                    value={userData.music}
                    onChange={handleOnChange}
                />
            </div>
            < br/>
            <div className="range">
                <label className="inputRange" for="points">Rank these genres from one to eight (1= I don’t like it at all / 8 = I love it):
:</label>
<br />
                </div>
                    <br />
                    <div className="rangeItems">
                    <div className="textColor" >
                        R&B
                    </div>
                    <div>
                    <input className="slider" type="range" id="points" name="RB"  value={music.RB}
                    onChange={handleOnChange} min="0" max="8" />
                    </div>
                    <br />
                    <div className="rangeItems">
                    <div className="textColor" >
                        Hip Hop
                    </div>
                    <div>
                    <input className="slider" type="range" id="points" name="Hiphop"  value={music.Hiphop}
                    onChange={handleOnChange} min="0" max="8" />
                    </div>

                    </div>   <br />
                    <div className="rangeItems">
                    <div className="textColor" >
                        Pop
                    </div>
                    <div>
                 <input className="slider" type="range" id="points" name="Pop" min="0" max="8" value={music.Pop}
                    onChange={handleOnChange} />
                    </div>

                    </div>   <br />
                    <div className="rangeItems">
                    <div className="textColor" >
                        Rock
                    </div>
                    <div>
                 <input className="slider" type="range" id="points" name="Rock" min="0" max="8" value={music.Rock}
                    onChange={handleOnChange} />
                    </div>

                    </div>   <br />
                    <div className="rangeItems">
                    <div className="textColor" >
                        Latin
                    </div>
                    <div>
                 <input className="slider" type="range" id="points" name="Latin" min="0" max="8" value={music.Latin}
                    onChange={handleOnChange} />
                    </div>

                    </div>   <br />
                    <div className="rangeItems">
                    <div className="textColor" >
                        Countrty
                    </div>
                    <div>
                 <input className="slider" type="range" id="points" name="Country" min="0" max="8" value={music.Country}
                    onChange={handleOnChange} />
                    </div>

                    </div>   <br />
                    <div className="rangeItems">
                    <div className="textColor" >
                        EDM
                    </div>
                    <div>
                 <input className="slider" type="range" id="points" name="EDM" min="0" max="8" value={music.EDM}
                    onChange={handleOnChange} />
                    </div>

                    </div>
                    </div>
                    <div className="emailInput">
                        <span className="mediaStyle">Do you go to concerts?</span>
                        <input
                            className="questionInput"
                            placeholder="Do you go to concerts?"
                            type="text"
                            id="consert"
                            name="consert"
                            value={userData.consert}
                            onChange={handleOnChange}
                        />
                    </div>
                    <br />
                    <div className="emailInput">
                        <span className="mediaStyle">What concerts have you attended in the last 12 months?
                        </span>
                        <input
                            className="questionInput"
                            placeholder="What concerts have you attended in the last 12 months?"
                            type="text"
                            id="consertMonth"
                            name="consertMonth"
                            value={userData.consertMonth}
                            onChange={handleOnChange}
                        />
                    </div>
                    <br /> <br />
                    <div className="emailInput">
                        <span className="mediaStyle">How do you typically listen to music (Spotify, Amazon Music, YouTube, SoundCloud,etc.)?
                        </span>
                        <input
                            className="questionInput"
                            placeholder="How do you typically listen to music (Spotify, Amazon Music, YouTube, SoundCloud,etc.)?
           "
                            type="text"
                            id="musicType"
                            name="musicType"
                            value={userData.musicType}
                            onChange={handleOnChange}
                        />
                    </div>
                    <br />
                    <br />
                    <div className="emailInput">
                        <span className="mediaStyle">How often do you listen to music?</span>
                        <input
                            className="questionInput"
                            placeholder="How often do you listen to music?"
                            type="text"
                            id="lisiten"
                            name="lisiten"
                            value={userData.lisiten}
                            onChange={handleOnChange}
                        />
                    </div>
                    <br />
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
                            id="musicTime"
                            name="musicTime"
                            value={userData.musicTime}
                            onChange={handleOnChange}
                        />
                    </div>
                    <br />
                    <div className="questionButton">
                        <Button
                            className="buttonStyle"
                            variant="contained"
                            onClick={onsubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </div>  
                )
}
                export default Questionare;