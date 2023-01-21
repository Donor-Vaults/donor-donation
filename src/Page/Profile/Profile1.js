import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "../../components/Navbar/Navbar";
import logo from "../../components/Navbar/logo.svg";
//import { H } from '../Page2/Page2';
import pic from "./components/pro.png";
import FundRaisers from "./components/FundRaisers";
import Setting from "./components/Setting";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "react";
import ProfileForm from "./components/ProfileForm";

const Sec = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: 8rem 0 4rem 0;
  // flex-direction: column;
  //  align-items: center;
  justify-content: center;
  background-color: rgba(249, 232, 202, 1);
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Width = styled.div`
  width: 1300px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #ffdea580;
  border-radius: 1.75rem;

  @media only screen and (max-width: 1400px) {
    width: 98%;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    //justify-content: center;
  }
`;

const H = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: light;
  margin-bottom: 2rem;
  text-align: left !important;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const T = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  // text-align: center;
  //width: 20rem;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const Left = styled.div`
  width: 15rem;
  height: 100%;
  display: flex;
  //justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(2, 169, 92, 0.5) 0%,
      rgba(34, 170, 48, 0.5) 100%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  border-radius: 1.5rem 0 0 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  //justify-content: space-between;
  flex-direction: column;
  // align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 0 1.5rem 1.5rem 0;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin: 3rem 0 0 0;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 3px;
  background: #fff;
  margin: 1rem 0 0 0;
`;
const Margin = styled.div`
  margin: 5rem 0 0 0;

  @media only screen and (max-width: 1100px) {
    margin: 3rem 0 0 0;
  }
`;

const Back = styled.div`
  margin: 2rem 4rem 1rem 0;
`;

const Container = styled.div`
  margin: 4rem 2rem 2rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 2rem;
  }
`;

const Profile1 = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [profile, setProfile] = useState(false);
  const [fund, setFund] = useState(false);
  const [setting, setSetting] = useState(false);

  const renderHeader = () => {
    if (profile) {
      return "My Profile";
    }

    if (fund) {
      return "My Fundraisers";
    }

    if (setting) {
      return "Settings";
    }
  };
  if (!user) {
    return <></>;
  }
  return (
    <Sec>
      <Width>
        <Left>
          <div style={{ margin: "3rem 0 0 0" }}>
            <img
              src={user.selfie}
              alt=""
              style={{
                width: "5rem",
                borderRadius:"100%",
                height: "5rem", margin: " 0 0 0 1rem"
              }}
            />
            <T style={{ margin: "1rem 0 0 0" }}>{user.name}</T>
          </div>
          <Margin>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "1.5rem 0",
                cursor: "pointer",
              }}
              onClick={() => {
                setProfile(true);
                setFund(false);

                setSetting(false);
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 4.5C2.51625 4.5 1.5 5.51625 1.5 6.75V17.25C1.5 18.4837 2.51625 19.5 3.75 19.5H20.25C21.4837 19.5 22.5 18.4837 22.5 17.25V6.75C22.5 5.51625 21.4837 4.5 20.25 4.5H3.75ZM3.75 6H20.25C20.6745 6 21 6.3255 21 6.75V17.25C21 17.6745 20.6745 18 20.25 18H3.75C3.3255 18 3 17.6745 3 17.25V6.75C3 6.3255 3.3255 6 3.75 6ZM8.25 7.5C6.6 7.5 5.25 8.85 5.25 10.5C5.25 11.3348 5.60775 12.0877 6.16425 12.633C5.65374 12.9775 5.23522 13.4416 4.94515 13.9849C4.65508 14.5282 4.50226 15.1341 4.5 15.75H6C6 14.499 6.999 13.5 8.25 13.5C9.501 13.5 10.5 14.499 10.5 15.75H12C11.9977 15.1341 11.8449 14.5282 11.5549 13.9849C11.2648 13.4416 10.8463 12.9775 10.3358 12.633C10.8923 12.0877 11.25 11.3355 11.25 10.5C11.25 8.85 9.9 7.5 8.25 7.5ZM13.5 8.25V9.75H19.5V8.25H13.5ZM8.25 9C9.08775 9 9.75 9.66225 9.75 10.5C9.75 11.3377 9.08775 12 8.25 12C7.41225 12 6.75 11.3377 6.75 10.5C6.75 9.66225 7.41225 9 8.25 9ZM13.5 11.25V12.75H19.5V11.25H13.5ZM13.5 14.25V15.75H17.25V14.25H13.5Z"
                  fill="white"
                />
              </svg>
              <T style={{ margin: "0 0 0 0.5rem" }}>Profile</T>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "1.5rem 0",
                cursor: "pointer",
              }}
              onClick={() => {
                setFund(true);
                setProfile(false);
                setSetting(false);
              }}
            >
              <svg
                width="24"
                height="30"
                viewBox="0 0 24 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5003 1.70209V7.87742C21.5008 8.02981 21.4574 8.17894 21.3757 8.306C21.2939 8.43307 21.1774 8.53239 21.0409 8.59144C20.9484 8.62925 20.8499 8.64888 20.7503 8.64933C20.5512 8.64847 20.3599 8.56904 20.2159 8.42741L17.7503 5.88008L12.2847 11.5151C12.1425 11.66 11.9504 11.7413 11.7503 11.7413C11.5502 11.7413 11.3581 11.66 11.2159 11.5151L8.00031 8.19583L1.78469 14.6027C1.64072 14.7444 1.44947 14.8238 1.25031 14.8247C1.05153 14.8219 0.860929 14.7427 0.715938 14.6027C0.575101 14.4564 0.496094 14.2587 0.496094 14.0527C0.496094 13.8468 0.575101 13.6491 0.715938 13.5028L7.46594 6.55551C7.60813 6.41056 7.80018 6.32924 8.00031 6.32924C8.20045 6.32924 8.39249 6.41056 8.53469 6.55551L11.7503 9.87475L16.6909 4.78975L14.2159 2.25208C14.1142 2.14047 14.0452 2.0015 14.017 1.85123C13.9888 1.70097 14.0025 1.54556 14.0566 1.40297C14.1149 1.26323 14.2117 1.14406 14.3349 1.06008C14.4582 0.976094 14.6025 0.930949 14.7503 0.930176H20.7503C20.9492 0.930176 21.14 1.0115 21.2806 1.15626C21.4213 1.30103 21.5003 1.49737 21.5003 1.70209Z"
                  fill="white"
                />
              </svg>
              <T style={{ margin: "0 0 0 0.5rem" }}>My Fundraiser</T>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "1.5rem 0",
                cursor: "pointer",
              }}
              onClick={() => {
                setSetting(true);
                setProfile(false);
                setFund(false);
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5547 8.14832C18.5353 8.06095 18.4974 7.97877 18.4434 7.90733C18.3895 7.8359 18.3209 7.77687 18.2422 7.73425L16.3828 6.703C16.2839 6.49988 16.1745 6.30457 16.0547 6.11707L16.086 3.99207C16.0867 3.90294 16.069 3.81462 16.0341 3.73262C15.9991 3.65062 15.9476 3.57671 15.8828 3.5155C14.957 2.6761 13.8621 2.04475 12.6719 1.66394C12.5864 1.63729 12.4963 1.62908 12.4074 1.63985C12.3185 1.65063 12.2329 1.68014 12.1563 1.72644L10.336 2.82019C10.1094 2.81238 9.89064 2.81238 9.66408 2.82019L7.84377 1.72644C7.76714 1.68014 7.68155 1.65063 7.59266 1.63985C7.50378 1.62908 7.41362 1.63729 7.32814 1.66394C6.13632 2.04504 5.04098 2.67932 4.11721 3.52332C4.05185 3.58242 3.9999 3.65483 3.96487 3.73569C3.92983 3.81654 3.91251 3.90396 3.91408 3.99207L3.95314 6.11707C3.82814 6.30457 3.71877 6.49988 3.60939 6.703L1.75783 7.73425C1.67815 7.77558 1.60873 7.83422 1.55466 7.90587C1.50058 7.97752 1.46323 8.06036 1.44533 8.14832C1.17968 9.3684 1.17968 10.6314 1.44533 11.8514C1.46474 11.9388 1.50268 12.021 1.55659 12.0924C1.61051 12.1639 1.67913 12.2229 1.75783 12.2655L3.61721 13.2968C3.71688 13.4989 3.82908 13.6946 3.95314 13.8827L3.91408 16.0077C3.91337 16.0968 3.93104 16.1851 3.96599 16.2671C4.00093 16.3491 4.05241 16.423 4.11721 16.4843C5.04429 17.3219 6.13877 17.953 7.32814 18.3358C7.41362 18.3625 7.50378 18.3707 7.59266 18.3599C7.68155 18.3491 7.76714 18.3196 7.84377 18.2733L9.66408 17.1796H10.336L12.1641 18.2733C12.2591 18.3358 12.3707 18.3685 12.4844 18.3671C12.5479 18.3643 12.6109 18.3538 12.6719 18.3358C13.8637 17.9547 14.9591 17.3204 15.8828 16.4764C15.9482 16.4173 16.0001 16.3449 16.0352 16.2641C16.0702 16.1832 16.0875 16.0958 16.086 16.0077L16.0547 13.8827C16.1719 13.6952 16.2813 13.4999 16.3906 13.2968L18.25 12.2655C18.3276 12.2224 18.3949 12.1632 18.4475 12.0917C18.5001 12.0203 18.5367 11.9383 18.5547 11.8514C18.8204 10.6314 18.8204 9.3684 18.5547 8.14832ZM13.4375 9.99988C13.4375 10.6798 13.2359 11.3444 12.8582 11.9097C12.4805 12.4749 11.9436 12.9155 11.3155 13.1757C10.6874 13.4359 9.99621 13.504 9.3294 13.3713C8.66259 13.2387 8.05008 12.9113 7.56934 12.4306C7.0886 11.9498 6.76121 11.3373 6.62857 10.6705C6.49593 10.0037 6.56401 9.31253 6.82418 8.6844C7.08436 8.05628 7.52495 7.51942 8.09025 7.1417C8.65554 6.76399 9.32015 6.56238 10 6.56238C10.9117 6.56238 11.786 6.92454 12.4307 7.5692C13.0754 8.21386 13.4375 9.0882 13.4375 9.99988Z"
                  fill="white"
                />
              </svg>
              <T style={{ margin: "0 0 0 0.5rem" }}>Settings</T>
            </div>
          </Margin>
        </Left>

        <Right>
          <div>
            <Back
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <T style={{ color: "#000", margin: "0", fontSize: "1.75rem" }}>
                {renderHeader()}
              </T>
            </Back>
            <Line />
          </div>

          {/* 
                           

                        <div style={{display:'grid',placeItems:'center'}}>
                            <Button style={{borderRadius:'2rem', minWidth:'9rem',margin:'0 0 2rem 0',border:'2px solid #FFFFFF',fontSize:'2rem'}}>
                                Submit
                            </Button>
                        </div> */}

          {/* */}

          {/*  */}

          {fund && setting === false && profile === false ? (
            <FundRaisers />
          ) : setting && fund == false && profile == false ? (
            <Setting />
          ) : (
            <ProfileForm />
          )}
        </Right>
      </Width>
    </Sec>
  );
};

export default Profile1;
