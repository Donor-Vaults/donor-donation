import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//import './Css.css'
import { Button } from "../../../components/Navbar/Navbar";
//import logo from './logo.png'
import lappy from "./lappy.png";
import { useDispatch } from "react-redux";

const Sec = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(249, 232, 202, 1);
  padding: 8rem 0 2rem 0;
  @media only screen and (max-width: 768px) {
    min-height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Width = styled.div`
  width: 1300px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1400px) {
    width: 95%;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Img = styled(motion.div)`
  width: 30rem;
  border-radius: 1rem;
  @media only screen and (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    padding: 0 1rem;
  }
`;

const T = styled.p`
  color: #000;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 20rem;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 1rem;
  }
`;

const Left = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;

  //   @media only screen and (max-width: 1100px) {
  //     width: 50%;
  // }

  @media only screen and (max-width: 998px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media only screen and (max-width: 998px) {
    width: 100%;
    margin: 0 0 4rem 0;
  }
`;

const Box = styled.div`
  display: flex;
  width: 95%;
  min-height: 30rem;
  background-color: #ffdea580;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  border-radius: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 998px) {
    min-height: 30rem;
    align-items: center;
    justify-content: space-between;
  }
`;


const Details = styled.div`
  background: linear-gradient(
      180deg,
      rgba(2, 169, 92, 0.5) 0%,
      rgba(34, 170, 48, 0.5) 100%
    ),
    linear-gradient(0deg, #ffffff, #ffffff);
  padding: 3rem 2rem 2rem 2rem;
  border: 0.25rem solid #ffffff;
  border-radius: 1.25rem;
  margin: 0 1rem 4rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60rem;

  @media only screen and (max-width: 1180px) {
    width: 90%;
    margin: 0 0 2rem 0;
    padding: 3rem 0.5rem 2rem 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Man = styled.div`
  width: 20rem;
  height: 16rem;
`;
const H = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin: 2rem 0 0 0;
  line-height: 1.5;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-weight: 510;
    font-size: 0.95rem;
    font-weight: bold;
  }
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25rem;
  height: 22rem;
  border-radius: 1rem;
  background: #fff;
`;

const Part3 = ({ hide }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: hide ? "none" : "block" }}>
        <Width>
          <Box onClick={() => dispatch({ type: "PATHNAME7" })}>
         

            <Details>
              <Man>
                <img
                  src={lappy}
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </Man>
              <H>
                Thank you. You have successfully completed the registration
                process. Please check your email. A verification email is sent
                to you. You can use DONOR platform for fundraising immediately
                after verification is complete.
              </H>
            </Details>
          </Box>
        </Width>
    </div>
  );
};

export default Part3;
