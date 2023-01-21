import React,{useState} from 'react'
import styled from 'styled-components'
import VaultCard from '../Campaing/components/VaultCard';

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



const Width = styled.div`
      width: 1300px;
      display: flex;
      flex-direction: column;
        align-items: center;
        justify-content: center;
    
    @media only screen and (max-width: 1400px) {
        width: 95%;
    }
    @media only screen and (max-width: 1100px) {
        flex-direction: column;
    }
`

const Vault = () => {
  
    return (
        <Sec>
          <Width>
            <VaultCard />
          </Width>
        </Sec>
    )
}

export default Vault
