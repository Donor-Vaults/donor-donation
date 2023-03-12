import React, { useState } from "react";
import "./Wwe.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "../../components/Navbar/Navbar";
import logo from "../../components/Navbar/logo.svg";
//import { H } from '../Page2/Page2';
import { FaAngleDown } from "react-icons/fa";
import Tag from "./components/Tag";
import { useDispatch } from "react-redux";

const Sec = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
 // padding: 8rem 0 2rem 0;
  // flex-direction: column;
  align-items: center;
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
  // background: #ffdea580;
  border-radius: 1.75rem;
  position: relative;

  @media only screen and (max-width: 1400px) {
    width: 98%;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    // background: #ffdea580;
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
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  //margin: 5rem 0 0 0;
  background: #ffffff;
  border-radius: 1.75rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin: 6rem 0 0 0;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  // align-items: center;
  width: 60%;
  // padding: 5rem 0 3rem 0;
  border-radius: 2rem 0 0 0;
  // background-color: rgba(255,255,255,0.9);
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    margin: 3rem 0 0 0 !important;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.2);
  margin: 3rem 0 0 0;
`;
const Margin = styled.div`
  margin: 5rem 0 0 0;

  @media only screen and (max-width: 1100px) {
    margin: 3rem 0 0 0;
  }
`;
const MarginLeft = styled.div`
  margin: 0 1rem 0 4rem;

  @media only screen and (max-width: 1100px) {
    margin: 0 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  margin: 3rem 0 0 0;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  grid-gap: 2rem 0.5rem;
`;

const Back = styled.div`
  margin: 1rem 2rem 1rem 0;
  cursor: pointer;

  @media only screen and (max-width: 998px) {
    position: absolute;
    top: 1rem;
    right: 0.5rem;
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
  ${'' /* margin: 0 1rem 4rem 1rem; */}
`;

const NotVerified = ({ onNext, hide,isEmail, onBack }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ category: "" });

    const validate = () => {
        if (!data.category) {
            alert("Please Select Category")
            return false
        }
    return true;
  };

  const handleClickNext = (data) => {
    const isValid = validate();
    
    if (isValid) {
      onNext(data);
    }
  };

  return (
    <Sec style={{ display: hide ? "none" : "" }}>
        <div>
        
        <Details>
          <div style={{ margin: "3rem 0 0 0" }}>
            <T style={{ margin: "0 0 0.5rem 0", fontSize: "1.6rem" }}>
              Your account is pending for {isEmail?"email ":"identity "}verification. <br/><br/>
              {isEmail?"Please check your inbox to verify the email.":"Please wait, while we are verfiying your account "}
            </T>
      
          </div>

          <div style={{ display: "grid", placeItems: "center" }}>
            <Button
              style={{
                borderRadius: "2rem",
                // width: "9rem",
                margin: "2rem 0 0 0",
                border: "2px solid #FFFFFF",
                fontSize: "2rem",
              }}
              onClick={() => {
                window.location.href= "/"
              }}
            >
              Go To Home
            </Button>
          </div>
        </Details>
      </div>
    </Sec>
  );
};

export default NotVerified;
