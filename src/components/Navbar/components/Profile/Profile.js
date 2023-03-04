import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown, Space } from 'antd';

const StyledProfile = styled(Link)`
 // position: absolute;
  margin: 0 3rem 0 0;
  top: 0;
  cursor: pointer;
`;

const items = [
  {
    key: '1',
    label: (
      <div onClick={async() => {
        await localStorage.clear()
        window.location.href = "/"
      }}>
        
        Logout
      </div>
    ),
  }
];


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

    //console.log({});
  };

  return (
    <>
    <Dropdown
    menu={{
      items,
    }}
    placement="bottomRight"
  >
    <a >
      <Space>
      <StyledProfile
        onClick={ () => {
          const path = userData.isAuthenticated ? "/profile" : "/login"
          window.location.href = path;
        } }

      >
        <img
          src={getImgSrc()}
          alt=""
          style={{ height: "3rem", width: "3rem", borderRadius: "50%" }}
        />
        </StyledProfile>
      </Space>
    </a>
  </Dropdown>
  
    
    </>
  );
};

export default Profile;
