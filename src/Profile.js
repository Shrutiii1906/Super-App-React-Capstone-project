import React from "react";
import "./Profile.css";
import ProfileInfo from "../Components/Browse/Info";
import Weather from "../Components/Browse/Weather";
import News from "../Components/Browse/News";
import Notes from "../Components/Browse/Notes";
import Timer from "../Components/Browse/Timer";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const moviePage = () => {
    navigate("/Movie");
  };

  return (
    <div className="profile__parent">
      <div className="pleft">
        <div className="pleft__top">
          <div className="pleft__left">
            <ProfileInfo />
            <Weather />
          </div>
          <div className="pleft__right">
            <Notes />
          </div>
        </div>
        <div className="pleft__bottom">
          <Timer />
        </div>
      </div>
      <div className="pright">
        <News />
      </div>
      <button onClick={moviePage} className="browse__button">
        Browse
      </button>
    </div>
  );
}

export default Profile;
