import React from "react";
import styled from "styled-components";
import theme from "styled-theming";
import Tilt from "react-parallax-tilt";
import { H, T } from "../../Page/Home/Page2/Page2";
import { Line, Circle } from "rc-progress";
import { Button } from "../Navbar/Navbar";
import wp from "./wp.svg";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import { SocialShare } from "../SocialShare";
import './Style.css'

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

export const bColor = theme("theme", {
  light: "linear-gradient(to right, #36d1dc, #5b86e5)",
  dark: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
});

const Box = styled(Tilt)`
  width: 25rem;
  min-height: 100%;
  height: 100%;
  overflow: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto auto auto;
  justify-self: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 0.75rem;

  @media only screen and (max-width: 500px) {
    width: 98%;
  }
`;
const Upper = styled.div`
  height: 18rem;
  width: 100%;
`;

const Lower = styled.div`
  padding: 0 1rem;
`;

const StyledLine = styled(Line)`
  width: 100%;
  margin: -1rem 0 1rem 0;

  @media only screen and (max-width: 510px) {
    width: 99%;
  }
`;
const Ts = styled(T)`
  font-size: 1rem;
  font-weight: bold;
`;
const Hs = styled(H)`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  justify-content: space-between;
  width: 22rem;
  margin: 0 0 2rem 0;
  @media only screen and (max-width: 768px) {
    width: 98%;
    flex-direction: column;
  }
`;
const ButtonR = styled(Button)`
  margin: 0 0 0 1rem;
  box-shadow: none;
  color: rgba(0, 29, 35, 1);
  background: transparent;
  //min-width: 15rem;
  border: 2px solid rgba(176, 163, 144, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    margin: 1rem 0 0 0;
  }
`;
const FundraiserCard = (props) => {
  const data = props.data;
  const {
    featuredImage,
    firstName,
    createdAt,
    fundraiserDescription,
    fundraiserName,
    fundraisers_status,
    goalAmount,
    id,
    lastName,
    supportingDocuments,
    updatedAt,
    userId,
  } = data;
  const dispatch = useDispatch();

  return (
    <Box >
      <Link to={`/fundraiser?id=${id}`} style={{ textDecoration: "none" }}>
        <Ts
          style={{
            textAlign: "left",
            margin: "2rem 1rem 1rem 1rem",
            color: "rgba(2, 169, 92, 1)",
          }}
        >
          {fundraiserName}
        </Ts>
        <Upper>
          <img
            src={featuredImage}
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </Upper>
        <Lower>
          <Ts
            style={{
              textAlign: "left",
              color: "rgba(0, 29, 35, 1)",
              marginTop: "1.5rem",
            }}
          >
            {fundraiserDescription}
          </Ts>

          <StyledLine
            style={{}}
            percent="50"
            strokeWidth="1.9"
            strokeColor="#02A95C"
            trailColor="#DBDBDB"
            // gapPosition="2rem 2rem 1rem 1rem"
          />
          <H style={{ color: "rgba(0, 0, 0, 1)", fontSize: "1.4rem" }}>
            Goal: ${goalAmount}
          </H>
          {/* <Hs style={{color:'rgba(133, 129, 129, 1)'}}>
                    {`${props.site ? props.site : "Donor.org.uk"}`}
                </Hs> */}
          <T style={{ color: "rgba(133, 129, 129" }}>
            Created At : {moment(createdAt).format("DD MMM YYYY hh:mm a")}
          </T>

          <div>
            <Button style={{ borderRadius: "1.5rem", minWidth: "9rem"}}>
              <Link
                to={`/fundraiser?id=${id}`}
                style={{ color: "#FFF", textDecoration: "none" }}
              >
                Donate
              </Link>
            </Button>
            {/* <SocialShare link={""} /> */}
          </div>
        </Lower>
      </Link>
    </Box>
  );
};

export default FundraiserCard;
