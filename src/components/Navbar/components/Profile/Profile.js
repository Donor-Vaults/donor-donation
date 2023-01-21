import React from "react";
import styled from "styled-components";
import pro from "./pro.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledProfile = styled(Link)`
  position: absolute;
  right: 1rem;
  cursor: pointer;
`;

const Profile = () => {
  const userData = useSelector((state) => state.user);
  const user = userData.user;
  console.log({ user });
  if (userData.loading) {
    return null;
  }

  const getImgSrc = () => {
    console.log("getImgSrc", { user });
    if (userData.isAuthenticated && user.selfie) {
      return user.selfie;
    }

    console.log({});
  };

  return (
    <StyledProfile to={userData.isAuthenticated ? "/profile" : "/login"}>
      <img
        src={getImgSrc()}
        alt=""
        style={{ height: "3rem", width: "3rem", borderRadius: "50%" }}
      />
    </StyledProfile>
  );
};

export default Profile;
