import React, { useState } from "react";
import styled from "styled-components";
//import './Style.css'
// import img from '../../components/Navbar/logo.png'
import Tilt from "react-parallax-tilt";
//import bg from './bg.jpg'
import theme from "styled-theming";
import { useDispatch } from "react-redux";
import { FaAngleDown } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from "../../firebase/firebase-config"

export const backgroundColor = theme("theme", {
  light: "#000000",
  dark: "#E5E5E5",
});



const Registration = styled.div`
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



;
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

const Register1 = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("hahzeb8285@gmail.com")
  const [password, setPassword] = useState("")
  const [isLoading,setLoading] = useState(false)


  const handleConfirm = async() => {
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    if (!isEmailValid) {
      alert("Please Enter A Valid Email")
      return
    }

    if (!isPasswordValid) {
      alert("Please Enter A Valid Password")
      return
    }

    setLoading(true);

    const authentication = getAuth();

    try {
      const authResp = await createUserWithEmailAndPassword(authentication, email, password)
      console.log("authResp",authResp)
    } catch (err) {
      console.error("authError",err)
    }
    setLoading(false);

  }



  return (
    <Width>
    <Registration>
    <div>
            <p style={{ fontSize: "1.2rem", margin: "0 0 0.5rem 0" }}>
              Email
            </p>
            <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              type="email"
              placeholder="Enter Email"
              className="input"
              style={{ height: "2rem",}}
            />
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
            

              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
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
          onClick={() => {
            // dispatch({ type: "PATHNAME1" });
            handleConfirm()
          }}
        >
          { isLoading?"Creating Account...":"REGISTER"}
        </Button>
      </Registration>
  </Width>
  );
};

export default Register1;
