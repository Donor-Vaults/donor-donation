import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "rc-progress";
import Card from "./FundraiserCard";
import { Button } from "../../../components/Navbar/Navbar";
import { toast } from "react-hot-toast";
import { ChangePassword } from "../../../apollo";
import { useMutation } from "@apollo/client";
import { useSelector } from "react-redux";

const StyledRaiser = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  //justify-content: center;
  flex-direction: column;
  height: 100%;
  padding: 2rem 0;
`;

const Head = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0 0 0;
`;
const T = styled.p``;

const CardContainer = styled.div``;

const Setting = () => {
  const [data, setData] = useState({
    password: "",
  });
    
  const [ isLoading, setIsLoading ] = useState(false);

  const [changePass, { loading, error }] = useMutation(ChangePassword);

  const user = useSelector(state => state.user.user)

  const handleChange = async() =>{
    if(data.password === ""){
      toast.error("Please enter password to change");
      return;
    } 
    setIsLoading(true);
    try{
      await changePass({variables: {
        newPassword: data.password
      } });
      toast.success("Password changes successfully");
    }
    catch(error){
      console.log(error,'Change Pass Error')
    }
    setIsLoading(false);
  }

  return (
    <StyledRaiser>
      <div>
        <T style={{ margin: "0 0 0 0", fontSize: "1.5rem", color: "#000" }}>
          Change Password
        </T>
        <input
          type="password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          placeholder="Password"
          className="input1"
          style={{
            height: "4rem",
            border: "1px solid rgba(0,0,0,0.2)",
            borderRadius: "0.5rem",
            width: "20rem",
            margin: "0.5rem 0 0 0",
          }}
        />
        <Button 
          onClick={ () => {
            handleChange();
          } }
          style={{margin:'1rem 0 0 0'}}
        >
          {
            isLoading ? 'Loading...' : "Change Password"
          } 
        </Button>
      </div>
    </StyledRaiser>
  );
};

export default Setting;
