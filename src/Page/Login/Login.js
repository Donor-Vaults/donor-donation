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
const Margin = styled.div`
  @media only screen and (max-width: 1100px) {
    margin: 0 0 1rem 0;
  }
  @media only screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [login, { loading, error }] = useMutation(LoginQuery);

  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const validate = () => {
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


        window.location.reload()
        console.log({ data });
      } catch (err) {
        console.log("11weeeeee",error);
        if (error && error.message) {
          toast.error(error.message);

        }
      }
    }
    setLoading(false);
  };

  return (
    <Width>
      <Container>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <Line />
          <div>
            <p style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0" }}>Email</p>
            <input
              type="email"
              onChange={(e) => {
                setInfo({ ...info, email: e.target.value });
              }}
              placeholder="Enter Email"
              className="input"
              style={{ height: "2rem", width: "10rem" }}
            />
          </div>
        </div>

        <Margin style={{ display: "flex", alignItems: "flex-end" }}>
          <Line />
          <div>
            <p style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0" }}>
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
              {/* <div class="dropdown" style={{width:'2rem',margin:'0',padding:'0'}}>
                <FaAngleDown style={{fontSize:'1.8rem',color:'grey',margin:'0.5rem 0 0 0',padding:'0'}} /> 
                <div class="dropdown-content">
                  <a href="#">+91 | IND</a>
                  <a href="#">+22 | USA</a>
                  <a href="#">+88 | AUS</a>
                </div>
              </div> */}

              <input
                type="password"
                onChange={(e) => {
                  setInfo({ ...info, password: e.target.value });
                }}
                placeholder="Enter Password"
                className="input"
                style={{
                  height: "2rem",
                  width: "10rem",
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
      <Link fontSize={"20px"} href="/register">
        or Create Account
      </Link>
    </Width>
  );
};

export default Login;
