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
import { LoginQuery } from "../../apollo";
import { useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

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
  margin: 0 0 0 0;

  @media only screen and (max-width: 1300px) {
    width: 98%;
  }
  
  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

const Line = styled.div`
  height: 3rem;
  width: 1px;
  background: rgba(0, 0, 0, 0.3);
  margin: 0 2rem 0.75rem 0;
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
    width: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

const StyledLink = styled(motion.div)`
//  background: red;
  display: flex;
 
  align-items: center;
  justify-content: center;
 
  margin: 2rem 0 0 0;
`

const Width = styled.div`
  width: 100%;
`

const Margin = styled.div`
  @media only screen and (max-width: 1100px) {
    margin: 0 0 1rem 0;
  }
  @media only screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const InputEmail = styled.input`
  height: 2rem;
  width:30rem;


  @media only screen and (max-width: 1250px) {
    width: 20rem;
  }

  @media only screen and (max-width: 1150px) {
    width: 100%;
  }
`
const InputPass = styled.input`
  height: 2rem;
  width: 20rem;


  @media only screen and (max-width: 1250px) {
    width: 10rem;
  }

  @media only screen and (max-width: 1150px) {
    width: 100%;
  }
`

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [login, { loading, error }] = useMutation(LoginQuery);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const validate = () => {
    if (!validateEmail(info.email)) {
      toast.error("Please Enter Valid Email")
      return
    }

    if (!info.password) {
      toast.error("Please Enter Valid Password")
      return
    }
    return true;
  };

  const handleLogin = async () => {
    const isValid = validate();
    setLoading(true);
    if (isValid) {
      try {
        const resp = await login({
          variables: {
            email: info.email,
            password: info.password,
          },
        });

        const data = resp.data.login;
        for (let key of Object.keys(data)) {
          await localStorage.setItem(key, data[key]);
        }


        // window.location.reload()
        window.location.href="/profile"

        console.log({ data });
      } catch (err) {
        console.log("11weeeeee", error);
        if (error && error.message) {
          toast.error(error.message);

        }
      }
    }
    setLoading(false);
  };

  return (
    <Width>
      <p style={{
        fontSize: "1.2rem", margin: "0 0 0.5rem 0", color: "#fff",
        marginLeft: 25,
        textDecoration: "none",
      }}>
        Don't have an account? <a href="/register" style={{         color:"blue"
,textDecoration: "none" }}>Create.</a>
      </p>
      <Container>

        <Margin style={{ margin: '0 0 0 2rem' }}>
          <div>
            <p style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0",color:"#03a95d" }}>Email</p>
            <InputEmail
              type="email"
              onChange={(e) => {
                setInfo({ ...info, email: e.target.value });
              }}
              placeholder="Enter Email"
              className="input"
            />
          </div>
        </Margin>


        <Margin style={{ display: "flex", alignItems: "flex-end" }}>
          <Line />
          <div>
            <p style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0",color:"#03a95d" }}>
              Password
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "3rem",
                padding: "0 0 0 -2rem",
              }}
            >

              <InputPass
                type="password"
                onChange={(e) => {
                  setInfo({ ...info, password: e.target.value });
                }}
                placeholder="Enter Password"
                className="input"
                style={{
                  height: "2rem",
                  width: "20rem",
                  margin: "0",
                  padding: "0",
                }}
              />
            </div>
          </div>
        </Margin>

        <Button
          disabled={isLoading}
          onClick={() => {
            handleLogin();
          }}
        >
          {isLoading ? "Logging in ..." : "LOGIN"}
        </Button>
      </Container>

      <p style={{
        fontSize: "1.2rem", margin: "0 0 0.5rem 0", color: "#fff",
        marginRight: 25,
        marginTop: 15,
        
          textAlign: "right",

        textDecoration: "none"
      }}>
        <a href="/forgotPassword" style={{
          textDecoration: "none",
          textAlign: "right",
          width: "100%",
          color:"blue"

        }}>Forgot Password?</a>
      </p>
      <StyledLink
        initial={{ x: 0, y: 0 }}
        animate={{ x: 9, y: 0 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >


        {/* <Link fontSize={"25px"} href="/register" style={{
          textDecoration:'none',color: '#FFF',fontWeight:'bold',
          backgroundColor:'rgba(0,0,0,0.25)',padding:'1.25rem',borderRadius:"0.5rem",
          margin:'0 0.5rem 0 0'
        }}>
           Create Account
        </Link> */}

        {/* <Link fontSize={"25px"} href="/forgotPassword" style={{
          textDecoration: 'none', color: '#FFF', fontWeight: 'bold',
          marginLeft:5,
          backgroundColor:'rgba(0,0,0,0.25)',padding:'1.25rem',borderRadius:"0.5rem",
          margin:'0 0 0 0.5rem'
        }}>
        Forgot Password?
        </Link> */}
      </StyledLink>
    </Width>
  );
};

export default Login;
