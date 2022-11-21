import React from "react";
import { CommentSection } from "react-comments-section";
import { postAPI } from "../../../utils/api";
import { getID } from "../../../utils/LocalStorage";
import "react-comments-section/dist/index.css";
import "./CommentBox.css";

const CommentComponent = (props) => {

  const postComment = async (comment) => {
    const response = await postAPI("userSongComment" , {
      user_id: getID(),
      song_id:props.songID,
      comment: comment
    });
    console.log("============response of comment" , response)
    if (response.status == 200) {
    }
  };

  
  return (
    <div style={{ width: "100%" }}>
      <a
        style={{ color: "black", cursor: "pointer" }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/RiyaNegi/react-comments-section/blob/main/example/src/components/DefaultComponent.tsx"
      ></a>
      <CommentSection
        onSubmitAction={(e) => {
          postComment(e.text)
          console.log("========submiyt", e.text);
        }}
        currentUser={{
          currentUserId: "01a",
          currentUserImg:
            "https://ui-avatars.com/api/name=Riya&background=random",
          currentUserProfile:
            "https://www.linkedin.com/in/riya-negi-8879631a9/",
          currentUserFullName: "Riya Negi",
        }}
        logIn={{
          loginLink: "http://localhost:3001/",
          signupLink: "http://localhost:3001/",
        }}
      />
    </div>
  );
};

export default CommentComponent;
