import React, { useState } from "react";
import styled from "styled-components";
//import './Style.css'
// import img from '../../components/Navbar/logo.png'
import Tilt from "react-parallax-tilt";
//import bg from './bg.jpg'
import theme from "styled-theming";
import { useDispatch } from "react-redux";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "@mui/material";
import { ForgetPasswordQuery } from "../../apollo";
import { useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});

const Container = styled.div`
  width: 1200px;

  display: flex;
  border-radius: 1.75rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin: 0 0 3.5rem 0;

  @media only screen and (max-width: 1300px) {
    width: 98%;
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
const Line = styled.div`
  height: 3rem;
  width: 1px;
  background: rgba(0, 0, 0, 0.3);
  margin: 0 2rem 0 0;
  display: block;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const Button = styled.button`
  background-color: rgba(2, 169, 92, 1);
  border: none;
  border-radius: 0 1.75rem 1.75rem 0;
  padding: 0 1.5rem;
  color: #fff;
  font-size: 1.2rem;
  height: 8rem;
  width: 15rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  @media only screen and (max-width: 1100px) {
    height: 4rem;
  }

  @media only screen and (max-width: 768px) {
    height: 4rem;
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

const StyledLink = styled(motion.div)`

`


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
const Margin = styled.div`
  @media only screen and (max-width: 1100px) {
    margin: 0 0 1rem 0;
  }
  @media only screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;


const ParentContainer = ({children}) => {

  // console.log(PathName)

  return (
    <Sec>
      <Gradient>
      <div style={{marginTop:30}}>
          {children}
        </div>
   
        
     
     </Gradient>
    </Sec>
  );
};
const ForgotPassword = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [forgetPassword, { loading, error }] = useMutation(ForgetPasswordQuery);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const [info, setInfo] = useState({
    email: "",
  });
  const validate = () => {
    if (!validateEmail(info.email)) {
      toast.error("Please Enter A Valid Email")
        return
    }
    return true;
  };

  const handleResetPassword = async () => {
    const isValid = validate();
    setLoading(true);
    if (isValid) {
      try {
        const resp = await forgetPassword({
          variables: {
            email: info.email,
          },
        });
        toast.success("Please Check your email to reset password")
      } catch (err) {
        if (error && error.message) {
          toast.error(error.message);
        }
      }
    }
    setLoading(false);
  };

  return (
    <ParentContainer>
 <Width>
      <Container>
        <div style={{ display: "flex", }}>
          <Line />
          <div>
            <p style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0" ,width:"100%"}}>Enter Email to Receive Password Reset Link</p>
            <input
              type="email"
              onChange={(e) => {
                setInfo({ ...info, email: e.target.value });
              }}
              placeholder="Enter Email"
              className="input"
              style={{ height: "2rem",width:"100%" }}
            />
          </div>
        </div>

       

        <Button
          disabled={isLoading}
          onClick={() => {
            handleResetPassword();
          }}
        >
          {isLoading ? "Logging in ..." : "Send Reset Link"}
        </Button>
      </Container>
      <StyledLink
        initial={{ x: 0, y: 0 }}
        animate={{ x: 9, y: 0 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Link fontSize={"25px"} href="/register" style={{margin:'2rem 0 0 0',
          textDecoration:'none',color: '#FFF',fontWeight:'bold',
          backgroundColor:'rgba(0,0,0,0.25)',padding:'1.25rem',borderRadius:"0.5rem"
        }}>
           Create Account
        </Link>

        <Link fontSize={"25px"} href="/login" style={{margin:'2rem 0 0 0',
          textDecoration: 'none', color: '#FFF', fontWeight: 'bold',
          marginLeft:5,
          backgroundColor:'rgba(0,0,0,0.25)',padding:'1.25rem',borderRadius:"0.5rem"
        }}>
       Login
        </Link>
      </StyledLink>
    </Width>
    </ParentContainer>
   
  );
};

export default ForgotPassword;
