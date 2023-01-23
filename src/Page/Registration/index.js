import React, { useState } from "react";
import styled from "styled-components";
import Tilt from "react-parallax-tilt";
import theme from "styled-theming";
import { useDispatch } from "react-redux";
import { FaAngleDown } from "react-icons/fa";
import { useMutation } from "@apollo/client";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Part1 from "./Parts/Part1";
import Part2 from "./Parts/Part2";
import Part3 from "./Parts/Part3";
import { SIGNUPQUERY } from "../../apollo";
import { Link } from "@mui/material";
import moment from "moment";

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

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

const Container = styled.div`
  //   width: 1200px;

  display: flex;
  border-radius: 1.75rem;

  align-items: center;
  justify-content: space-between;
  //   background-color: #fff;

  @media only screen and (max-width: 1300px) {
    width: 100%;
  }
  @media only screen and (max-width: 1100px) {
    display: grid;

    grid-template-columns: repeat(2, minmax(50%, 1fr));
    place-items: center;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
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
const Width = styled.div`
  width: 1300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    width: 95%;
  }
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const Registration = () => {
  const [index, setIndex] = useState(0);
  const [info, setInfo] = useState({
    name: "",
    dob: "",
    country: "",
    mobile: "",
    email: "",
    password: "",
    selfie: "",
  });

  const [register, { loading, error }] = useMutation(SIGNUPQUERY);

  const handleRegistration = async (data) => {
    try {

      const variables = {
        country: data.country,
        date_of_birth: moment(data.dob).format("YYYY-MM-DD"),
        email: data.email,
        mobile_number: data.mobile,
        name: data.name,
        selfie: data.selfie,
        password: data.password,
      }
      console.log("handleRegistration1111",data,variables)


      const resp = await register({
        variables
      });

      const respData = resp.data.signup;
      for (let key of Object.keys(respData)) {
        localStorage.setItem(key, respData[key]);
      }
      setIndex(index + 1);
      console.log({ resp });
    } catch (err) {
      console.log({ err });
    }
  };

  const getFragment = () => {
    return (
      <>
        <Part1
          hide={index != 0}
          onInfoChanged={(i) => {
            setInfo({ ...info, ...i });
          }}
          onNext={() => {
            setIndex(index + 1);
          }}
        />

        <Part2
          hide={index != 1}
          onNext={(data) => {
            setInfo({ ...info, ...data });
            handleRegistration({ ...info, ...data });
          }}
          onPrev={() => {
            setIndex(index - 1);
          }}
        />

        <Part3 hide={index != 2} />
      </>
    );
  };
  return (
    <Sec id="">
      <Width>
        <Box>
          <Gradient>
            <Container>{getFragment()}</Container>
          </Gradient>
          <Link fontSize={"20px"} href="/login">
            Already have an account? Login
          </Link>
        </Box>
      </Width>
    </Sec>
  );
};

export default Registration;
