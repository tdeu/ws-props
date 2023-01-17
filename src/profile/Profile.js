import React from "react";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, handleName, children }) => {
  return (
    <div style={{ border: "10px solid red", padding: "10px" }}>
      <img src={children} alt={fullName} />
      <h1>{fullName}</h1>
      <h2>{profession}</h2>
      <p>{bio}</p>
      <button onClick={() => handleName(fullName)}>Voir le nom</button>
    </div>
  );
};

Profile.defaultProps = {
  fullName: "Karim",
  bio: "Je suis Karim",
  profession: "Developer",
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
  children: PropTypes.string,
};

export default Profile;
