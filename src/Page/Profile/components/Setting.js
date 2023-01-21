import React, { useState } from "react";
import styled from "styled-components";
import { Line } from "rc-progress";
import Card from "./FundraiserCard";

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
            width: "80%",
            margin: "0.5rem 0 0 0",
          }}
        />
      </div>
    </StyledRaiser>
  );
};

export default Setting;
