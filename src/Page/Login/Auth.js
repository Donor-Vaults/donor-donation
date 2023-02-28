import React from "react";
import Register1 from "./Registeration1";
import Register2 from "./Registration2/Registration2";
import Register3 from "./Registration3/Registration3";
import Register4 from "./Registration4";
import Register4a from "./Registration4a";
import Register5 from "./Registration5/Registration5";
import Register6 from "./Registration6/Registration6";
import Register9 from "./Registration9/Registration9";
import { useSelector } from "react-redux";
import Fourm from "../Fundraise/Fourm";
import FourmPage1 from "../Fundraise/FourmPage1";
import FourmPage2 from "../Fundraise/FourmPage2";
import FourmPage3 from "../Fundraise/FourmPage3";
import FourmPage4 from "../Fundraise/FourmPage4";
import FourmPage5 from "../Fundraise/FourmPage5";
import FourmPage6 from "../Fundraise/FourmPage6";
import Login from "./Login";
import styled from "styled-components";
import { Link } from "@mui/material";

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


const Gradient = styled.div`
  background: linear-gradient(
    180deg,
    rgba(2, 169, 92, 0.5) 0%,
    rgba(34, 170, 48, 0.5) 100%
  );
  border-radius: 2rem;
  padding: 3rem;

  @media only screen and (max-width: 768px) {
    margin: 2rem 0 3rem 0;
    padding: 3rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const RegisterationHome = () => {

  // console.log(PathName)

  return (
    <Sec>
      <Gradient>
      <div style={{marginTop:30}}>
        <Login />
        </div>
   
        
     
     </Gradient>
    </Sec>
  );
};

export default RegisterationHome;
