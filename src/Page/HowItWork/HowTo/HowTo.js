import React from 'react'
import styled from 'styled-components'

const Sec = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100%;
    padding: 4rem 0;
    background-color: rgba(249, 232, 202, 1) ;
    width: 100%;
    
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: space-around;
      }
`;

export const T = styled.p`
    color: #FFF;
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 2rem;
    text-align: left;
      font-weight: bold;
      letter-spacing: 0.05rem;
      line-height: 1.8;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
       
      }
`;

export const H = styled.h1`
    color: #FFFFFF;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: left !important;
    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 1rem;
      }
`;


const Center = styled.div`
      width: 1400px;
      display: flex;
      flex-direction: column;
      background-color: #289B66;
      padding: 2rem 1.5rem 0 1.5rem;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    @media only screen and (max-width: 1400px) {
        width: 100%;
    }

`

const HowTo = () => {
  
    return (
        <Sec id="">

            <div>
                <H style={{color:'#3E4958'}}>How to fundraise</H>
                <Center>
                <T>
                    DONOR platform brings people together to find the support they need when they need. Whether you are fundraising for yourself or for someone else or for a cause close to your heart or for a non-profit, you can set up a fundraiser and start raising money in a few simple steps.
                </T>
                </Center>
            </div>

            

        </Sec>
    )
}

export default HowTo






