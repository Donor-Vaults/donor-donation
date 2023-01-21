import React from 'react'
import CurrencyCard from './components/CurrencyCard'
import styled from 'styled-components';
import ExchangeCard from './components/ExchangeCard';
import ThankYouCard from './components/ThankYouCard';
import { useSelector } from 'react-redux'


const Sec = styled.section`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 0 3rem 0;
    background-color: rgba(249, 232, 202, 1);
    background-repeat: no-repeat;
    background-image: url();
    background-size: 50% 70%;
    background-position: right top !important;
  
    @media only screen and (max-width: 768px) {
        width: 100%;
        padding: 1rem 0 2rem 0;
        flex-direction: column;
        justify-content: space-around;
      }
`;

const Payment = () => {


  let PathName = useSelector( (state) => state.path)

  return (
    <Sec>
      {
        PathName === "pay1" ? <ExchangeCard /> :
        PathName === "pay2" ? <ThankYouCard />:
        <CurrencyCard />
      }
        
    </Sec>
  )
}

export default Payment