import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "styled-theming";
import { H, T } from "../Page2/Page2";
import { FactionData } from "../../config/config";
import FundraiserCard from "../../../components/card/FundraiserCard";
import bg from "./Live.svg";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
import { useSelector } from "react-redux";

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Width = styled.div`
  width: 1300px;

  display: flex;
  flex-direction: column;

  //align-items: center;
  //justify-content: center;

  @media only screen and (max-width: 1300px) {
    width: 98%;
  }
`;

const StyleCard = styled.div`
  width: 1300px;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));

  @media only screen and (max-width: 1600px) {
    width: 98%;
  }

  @media only screen and (max-width: 510px) {
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
`;

const Heading = styled.div`
  color: rgba(2, 169, 92, 1);
  font-size: 1.6rem;

  background-image: url(${bg});
  // background: red;
  width: 22rem;
  text-align: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.2rem;
    font-weight: bold;
    width: 12rem;
  }
`;

const Background = styled.div`
  background-color: rgba(0, 29, 35, 1);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 1rem 0 0 0;
  position: relative;
`;

const Dashboard = styled.div`
  background-color: rgba(2, 169, 92, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1300px;
  padding: 2rem 0;
  border-radius: 1.2rem;

  margin: 3rem 0 -6rem 0;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media only screen and (max-width: 1350px) {
    width: 98%;
    display: grid;
    grid-gap: 2rem;
    //place-items: center;
    grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  }

  @media only screen and (max-width: 1093px) {
    margin: 3rem 0 -12rem 0;
  }
`;

const Hs = styled(H)`
  font-size: 2rem;
  margin: 0.5rem 0 2rem 0;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const Mid = styled.div`
  margin: 0 1rem;
  @media only screen and (max-width: 1350px) {
    margin: 0;
  }
`;
const First = styled.div`
  width: 25rem;
  @media only screen and (max-width: 1350px) {
    width: 20rem;
  }
`;
const LeftArrow = styled(TiArrowLeftOutline)`
  font-size: 4rem;
  cursor: pointer;
  color: rgba(2, 169, 92, 1);
  //margin: 0 5rem 0 0;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const RightArrow = styled(TiArrowRightOutline)`
  font-size: 4rem;
  cursor: pointer;
  color: rgba(2, 169, 92, 1);
  // margin: 0 0 0 5rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const resposive = {
  0: {
    items: 1,
  },
  650: {
    items: 2,
  },
  1335: {
    items: 3,
  },
};

const Sec = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(249, 232, 202, 1);
  // background-image: url(${bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  flex-direction: column;
  padding: ${props=>props.big ? "6rem 0 10rem 0" : "2rem 0"};

  @media only screen and (max-width: 998px) {
    min-height: 100vh;
    width: 100%;
    padding: 2rem 0;
    flex-direction: column;
    background-size: auto 100%;
  }
`;
const Page4 = (props) => {
  const fundraisers = useSelector((state) => state.fundraisers.data);
 
  return (
    <Sec id="fund">
      <Width>
        <Heading>Donate To</Heading>
        <Hs style={{ color: "#000000" }}>Ongoing Fundraisers</Hs>
      </Width>

      <Background>
        <StyleCard>
          <AliceCarousel
            animationDuration={1168}
            // disableButtonsControls={true}
            disableDotsControls={true}
            // autoPlayStrategy={'none'}
            // autoHeight={true}
            responsive={resposive}
            mouseTracking={true}
            renderPrevButton={() => {
              return <LeftArrow />;
            }}
            renderNextButton={() => {
              return <RightArrow />;
            }}
          >
            {fundraisers.map((fundraiser,index) => (
              <FundraiserCard data={fundraiser} key={index} />
            ))}
          </AliceCarousel>
        </StyleCard>

        <Dashboard>
          <First
            style={{
              display: "grid",
              placeItems: "center",
              justifySelf: "center",
            }}
          >
            <H style={{ color: "#FFFFFF", textAlign: "center", margin: "0" }}>
              5,234
            </H>
            <Hs
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                margin: "1rem 0 0.8rem 0",
                fontSize: "1rem",
              }}
            >
              Projects
            </Hs>
            <T
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: "1rem",
                lineHeight: "1.5",
                margin: "0",
              }}
            >
              Total number of Campaigns of the platform
            </T>
          </First>

          <Mid
            style={{
              width: "20rem",
              display: "grid",
              placeItems: "center",
              justifySelf: "center",
            }}
          >
            <H style={{ color: "#FFFFFF", textAlign: "center", margin: "0" }}>
              122
            </H>
            <Hs
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                margin: "1rem 0 0.8rem 0",
                fontSize: "1rem",
              }}
            >
              Projects
            </Hs>
            <T
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: "1rem",
                lineHeight: "1.5",
                margin: "0",
              }}
            >
              Total Ongoing Campaigns
            </T>
          </Mid>

          <div
            style={{
              width: "20rem",
              display: "grid",
              placeItems: "center",
              justifySelf: "center",
            }}
          >
            <H style={{ color: "#FFFFFF", textAlign: "center", margin: "0" }}>
              5,234
            </H>
            <Hs
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                margin: "1rem 0 0.8rem 0",
                fontSize: "1rem",
              }}
            >
              Projects
            </Hs>
            <T
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                fontSize: "1rem",
                lineHeight: "1.5",
                margin: "0",
              }}
            >
              Total Settled Campaigns
            </T>
          </div>
        </Dashboard>
      </Background>
    </Sec>
  );
};

export default Page4;
