import React from "react";
import styled from "styled-components";
import { Line } from "rc-progress";
import FundraiserCard from "./FundraiserCard";
import { useSelector } from "react-redux";

const StyledRaiser = styled.div`
  width: 90%;
  margin-left:10px;
  margin-right:10px;

  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
  height: 100%;
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

const FundRaisers = () => {
  const user = useSelector((state) => state.user.user);

  const fundraisers = user.fundraisers ? user.fundraisers : [];
  console.log({ fundraisers });
  return (
    <StyledRaiser>
    
      <CardContainer>
        {fundraisers.map((item, index) => {
          return <FundraiserCard data={item} key={index} />;
        })}
      </CardContainer>
    </StyledRaiser>
  );
};

export default FundRaisers;
